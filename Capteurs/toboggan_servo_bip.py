#!/usr/bin/env python3
from gpiozero import DistanceSensor, Button, AngularServo, PWMOutputDevice
from time import sleep, time
import requests

# --- Pins BCM ---
TRIG = 22
ECHO = 23
JOYSTICK_SW = 26  
BTN_PIN = 17       
SERVO_PIN = 24
BUZZER_PIN = 27

# --- API ---
API_RED = "http://APIURL/api/game/red"
API_BLUE = "http://APIURL/api/game/blue"

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

# --- Paramètres de détection ---
BASE_DISTANCE_CM = 7.0
THRESHOLD_DROP_CM = 3.0
IGNORE_TIME = 10.0

# --- Variables ---
score = 0
last_detection_time = 0
smooth_distances = [BASE_DISTANCE_CM] * 5

# --- Fonctions ---
def send_score(team):
    try:
        if team == "red":
            requests.post(API_RED)
        elif team == "blue":
            requests.post(API_BLUE)
        print(f"Score envoyé pour {team}")
    except Exception as e:
        print(f"Erreur en envoyant le score pour {team} :", e)

def play_melody():
    for note in MELODY:
        freq = NOTES[note]
        buzzer.frequency = freq
        buzzer.value = 0.5
        sleep(NOTE_DURATION)
    buzzer.value = 0

def on_goal_detected():
    global score, last_detection_time
    score += 1
    last_detection_time = time()
    print(f"⚽ BUT ! Nouveau score : {score}")
    play_melody()
    send_score("red")

def on_score_button():
    global score
    score += 1
    print(f"🕹️ Joystick appuyé ! Score : {score}")
    play_melody()
    send_score("red")

def set_angle(angle):
    servo.angle = angle
    sleep(2.0)
    servo.detach()

def beep(duration=0.2):
    buzzer.value = 0.5
    sleep(duration)
    buzzer.off()

# --- Configuration servo ---
CLOSED_ANGLE = 0
OPEN_ANGLE = 180
set_angle(CLOSED_ANGLE)

# --- Liaisons boutons ---
score_button.when_pressed = on_score_button

print("🚀 Babyfoot + servo lancé. Ctrl+C pour quitter.")

# --- Boucle principale ---
try:
    while True:
        # Détection balle
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
    print("\n🛑 Fin du programme.")
finally:
    servo.detach()
    buzzer.off()
