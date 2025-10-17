#!/usr/bin/env python3
from gpiozero import DistanceSensor, Button, PWMOutputDevice
from time import sleep, time
import requests 

API_RED = "http://APIURL/api/game/red"
API_BLUE = "http://APIURL/api/game/blue"

# --- Broches GPIO ---
TRIG = 22
ECHO = 23
JOYSTICK_SW = 26
BUZZER = 27

# --- Initialisation des composants ---
sensor = DistanceSensor(echo=ECHO, trigger=TRIG, max_distance=1.0)  # max 1 m
button = Button(JOYSTICK_SW, pull_up=True, bounce_time=0.1)
buzzer = PWMOutputDevice(BUZZER, frequency=440, initial_value=0)

# --- Mélodie ---
NOTES = {"C4": 262, "D4": 294, "E4": 330}
MELODY = ["C4", "E4", "D4", "C4"]
NOTE_DURATION = 0.15

# --- Paramètres de détection ---
BASE_DISTANCE_CM = 7.0      # distance normale quand rien ne passe
THRESHOLD_DROP_CM = 3.0     # chute minimale pour considérer qu'une balle passe (5→4 cm)
IGNORE_TIME = 10.0           # temps à ignorer après détection (anti-double-but)

# --- Variables ---
score = 0
last_detection_time = 0
smooth_distances = [BASE_DISTANCE_CM] * 5  # buffer pour moyenne mobile

def send_score(team):
    """Envoie une requête POST au backend pour l'équipe donnée."""
    try:
        if team == "red":
            requests.post(API_RED)
        elif team == "blue":
            requests.post(API_BLUE)
        print(f"Score envoyé pour {team}")
    except Exception as e:
        print(f"Erreur en envoyant le score pour {team} :", e)

def play_melody():
    """Joue une courte mélodie."""
    for note in MELODY:
        freq = NOTES[note]
        buzzer.frequency = freq
        buzzer.value = 0.5
        sleep(NOTE_DURATION)
    buzzer.value = 0

def on_goal_detected():
    """Incrémenter le score et jouer la mélodie."""
    global score, last_detection_time
    score += 1
    last_detection_time = time()
    print(f"⚽ BUT ! Nouveau score : {score}")
    play_melody()
    send_score("red")  


def on_button_press():
    """Appui manuel sur joystick."""
    global score
    score += 1
    print(f"🕹️ Joystick appuyé ! Score : {score}")
    play_melody()
    send_score("red")  


button.when_pressed = on_button_press

print("🚀 Détection Babyfoot lancée (distance de base ≈ 5 cm). Ctrl+C pour quitter.")

try:
    while True:
        # Mesure actuelle
        dist_cm = sensor.distance * 100

        # Actualise la moyenne mobile
        smooth_distances.pop(0)
        smooth_distances.append(dist_cm)
        avg_distance = sum(smooth_distances) / len(smooth_distances)

        # Vérifie s'il y a eu un passage rapide
        now = time()
        if (avg_distance < (BASE_DISTANCE_CM - THRESHOLD_DROP_CM)
            and (now - last_detection_time) > IGNORE_TIME):
            on_goal_detected()

        # Affiche pour debug
        # print(f"Distance moyenne : {avg_distance:.2f} cm")

        sleep(0.05)  # 20 mesures / seconde

except KeyboardInterrupt:
    print("\n🛑 Fin du programme.")
    buzzer.off()
