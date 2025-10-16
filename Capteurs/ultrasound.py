import RPi.GPIO as GPIO
import time

# --- GPIO ---
TRIG = 15
ECHO = 16
JOYSTICK_SW = 11
BUZZER = 13

GPIO.setmode(GPIO.BCM)
GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)
GPIO.setup(JOYSTICK_SW, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(BUZZER, GPIO.OUT)

# --- PWM pour buzzer ---
pwm = GPIO.PWM(BUZZER, 440)  # fréquence initiale
pwm.start(0)  # duty cycle 0 = silence

notes = {"C4": 262, "D4": 294, "E4": 330}
melody = ["C4", "D4", "E4"]
duration = 0.3

# --- Jouer la mélodie ---
def play_melody():
    for note in melody:
        pwm.ChangeFrequency(notes[note])
        pwm.ChangeDutyCycle(50)
        time.sleep(duration)
    pwm.ChangeDutyCycle(0)

# --- Lecture distance HC-SR04 ---
def read_distance():
    GPIO.output(TRIG, False)
    time.sleep(0.05)  # pause avant déclenchement

    GPIO.output(TRIG, True)
    time.sleep(0.00001)
    GPIO.output(TRIG, False)

    # Attente du front montant avec timeout
    timeout = time.time() + 0.02
    while GPIO.input(ECHO) == 0 and time.time() < timeout:
        pass
    if time.time() >= timeout:
        return None

    pulse_start = time.time()

    # Attente du front descendant avec timeout
    timeout = time.time() + 0.02
    while GPIO.input(ECHO) == 1 and time.time() < timeout:
        pass
    if time.time() >= timeout:
        return None

    pulse_end = time.time()

    pulse_duration = pulse_end - pulse_start
    distance = pulse_duration * 17150  # cm
    return distance

try:
    print("Test capteurs lancé. Ctrl+C pour arrêter.")
    while True:
        dist = read_distance()
        joystick = GPIO.input(JOYSTICK_SW)

        if dist is not None and dist < 10:
            print("🎯 Balle détectée !")
            play_melody()
            time.sleep(0.5)

        if joystick == 0:  # bouton pressé
            print("🕹️ Joystick appuyé !")
            play_melody()
            time.sleep(0.5)

        time.sleep(0.1)

except KeyboardInterrupt:
    print("\nArrêt du programme.")
finally:
    pwm.stop()
    GPIO.cleanup()
