#!/usr/bin/env python3
from gpiozero import DistanceSensor, Button, PWMOutputDevice
from time import sleep

# --- Broches GPIO ---
TRIG = 22
ECHO = 23
JOYSTICK_SW = 17
BUZZER = 27

# --- Initialisation des composants ---
sensor = DistanceSensor(echo=ECHO, trigger=TRIG, max_distance=2.0)
button = Button(JOYSTICK_SW, pull_up=True)
buzzer = PWMOutputDevice(BUZZER, frequency=440, initial_value=0)

# --- Mélodie du buzzer ---
NOTES = {"C4": 262, "D4": 294, "E4": 330}
MELODY = ["C4", "D4", "E4"]
NOTE_DURATION = 0.25

# --- Variable de score ---
score = 0


def play_melody():
    """Joue une courte mélodie sur le buzzer."""
    for note in MELODY:
        freq = NOTES[note]
        buzzer.frequency = freq
        buzzer.value = 0.5  # 50% de duty cycle
        sleep(NOTE_DURATION)
    buzzer.value = 0  # stop


def goal_detected():
    """Action quand la balle est détectée (distance < seuil)."""
    global score
    score += 1
    print(f"🎯 But détecté ! Nouveau score : {score}")
    play_melody()
    sleep(0.5)


def on_button_press():
    """Action quand le joystick est appuyé (bouton)."""
    global score
    score += 1
    print(f"🕹️ Joystick appuyé ! Score : {score}")
    play_melody()
    sleep(0.5)


# --- Attacher la fonction au bouton ---
button.when_pressed = on_button_press

print("🚀 Système lancé. Ctrl+C pour arrêter.")
print("Surveillance du capteur HC-SR04 et du joystick...")

try:
    while True:
        # Distance renvoyée par le capteur (entre 0 et 1, en proportion du max_distance)
        dist_cm = sensor.distance * 100
        if dist_cm < 10:  # seuil de détection (10 cm)
            goal_detected()

        sleep(0.1)

except KeyboardInterrupt:
    print("\n🛑 Programme interrompu par l'utilisateur.")
    buzzer.off()
