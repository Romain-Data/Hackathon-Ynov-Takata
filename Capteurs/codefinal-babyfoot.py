#!/usr/bin/env python3
from gpiozero import DistanceSensor, Button, AngularServo, PWMOutputDevice
from time import sleep, time
import requests
import os
import RPi.GPIO as GPIO

# --- Pins BCM ---
TRIG = 22
ECHO = 23
JOYSTICK_SW = 26  # bouton score manuel
BTN_PIN = 17      # bouton servo
SERVO_PIN = 24
BUZZER_PIN = 27

# --- Afficheur 7 segments 5641AS (1 chiffre) ---
# Pins BCM pour chaque segment (à adapter selon ton câblage)
segments = {'a':14,'b':15,'c':18,'d':25,'e':5,'f':6,'g':16,'dp':20}

digits = {
    0: ['a','b','c','d','e','f'],
    1: ['b','c'],
    2: ['a','b','g','e','d'],
    3: ['a','b','c','d','g'],
    4: ['f','g','b','c'],
    5: ['a','f','g','c','d'],
    6: ['a','f','g','c','d','e'],
    7: ['a','b','c'],
    8: ['a','b','c','d','e','f','g'],
    9: ['a','b','c','d','f','g']
}

GPIO.setmode(GPIO.BCM)
for seg in segments.values():
    GPIO.setup(seg, GPIO.OUT)
    GPIO.output(seg, 0)  # éteint au départ

def display_score(n):
    """Affiche un chiffre sur le 5641AS"""
    n = n if n <= 9 else 9  # limiter à 9
    for seg in segments.values():
        GPIO.output(seg, 0)
    for seg_name in digits.get(n, []):
        GPIO.output(segments[seg_name], 1)

# --- Backend ---
BASE_API_URL = os.getenv("API_URL", "http://localhost")
UPDATE_SCORE_URL = f"{BASE_API_URL}/api/game/updateScore"
TABLE_ID = 1

# --- Composants ---
sensor = DistanceSensor(echo=ECHO, trigger=TRIG, max_distance=1.0)
score_button = Button(JOYSTICK_SW, pull_up=True, bounce_time=0.1)
servo_button = Button(BTN_PIN, pull_up=True)
servo = AngularServo(SERVO_PIN, min_angle=0, max_angle=180)
buzzer = PWMOutputDevice(BUZZER_PIN)

# --- Mélodie ---
NOTES = {"C4": 262, "D4": 294, "E4": 330}
MELODY = ["C4", "E4", "D4", "C4"]
NOTE_DURATION = 0.15

# --- Détection ---
BASE_DISTANCE_CM = 7.0
THRESHOLD_DROP_CM = 3.0
IGNORE_TIME = 10.0

# --- Scores ---
score_red = 0
score_blue = 0
last_detection_time = 0
smooth_distances = [BASE_DISTANCE_CM] * 5

# --- Fonctions ---
def send_score():
    data = {
        "red_goal": score_red,
        "bleu_goal": score_blue,
        "babyfoot_tableId": TABLE_ID
    }
    try:
        response = requests.post(UPDATE_SCORE_URL, json=data)
        if response.status_code == 200:
            print(f"Score envoyé : {data}")
        else:
            print(f"Erreur {response.status_code} lors de l'envoi")
    except Exception as e:
        print("Impossible d'envoyer le score :", e)

def play_melody():
    for note in MELODY:
        buzzer.frequency = NOTES[note]
        buzzer.value = 0.5
        sleep(NOTE_DURATION)
    buzzer.value = 0

def on_goal_detected():
    """Capteur détecte un but rouge"""
    global score_red, last_detection_time
    score_red += 1
    last_detection_time = time()
    print(f"BUT Rouge ! Score : R={score_red} B={score_blue}")
    play_melody()
    send_score()
    display_score(score_red)  # <-- Affiche score rouge sur 1 chiffre

def on_score_button():
    """Joystick ajoute un point bleu"""
    global score_blue
    score_blue += 1
    print(f"Point Bleu ! Score : R={score_red} B={score_blue}")
    play_melody()
    send_score()
    display_score(score_blue)  # <-- Affiche score bleu sur 1 chiffre

def set_angle(angle):
    servo.angle = angle
    sleep(2.0)
    servo.detach()

def beep(duration=0.2):
    buzzer.value = 0.5
    sleep(duration)
    buzzer.off()

# --- Servo initial ---
CLOSED_ANGLE = 0
OPEN_ANGLE = 180
set_angle(CLOSED_ANGLE)

# --- Liaisons boutons ---
score_button.when_pressed = on_score_button

# --- Afficheur initial ---
display_score(score_red)

print("Babyfoot + servo + afficheur lancé. Ctrl+C pour quitter.")

# --- Boucle principale ---
try:
    while True:
        # Détection balle rouge
        dist_cm = sensor.distance * 100
        smooth_distances.pop(0)
        smooth_distances.append(dist_cm)
        avg_distance = sum(smooth_distances) / len(smooth_distances)
        now = time()
        if (avg_distance < (BASE_DISTANCE_CM - THRESHOLD_DROP_CM)
            and (now - last_detection_time) > IGNORE_TIME):
            on_goal_detected()

        # Bouton servo
        if servo_button.is_pressed:
            print("Bouton servo pressé ! BIP + ouverture trappe")
            beep(0.2)
            set_angle(OPEN_ANGLE)
            sleep(0.6)
            set_angle(CLOSED_ANGLE)
            while servo_button.is_pressed:
                sleep(0.05)

        sleep(0.02)

except KeyboardInterrupt:
    print("\nFin du programme.")
finally:
    servo.detach()
    buzzer.off()
    GPIO.cleanup()
