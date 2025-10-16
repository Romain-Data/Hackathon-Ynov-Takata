import RPi.GPIO as GPIO
import time

# --- GPIO ---
TRIG = 15
ECHO = 16
JOYSTICK_SW =  11
BUZZER =  13

GPIO.setmode(GPIO.BCM)
GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)
GPIO.setup(JOYSTICK_SW, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(BUZZER, GPIO.OUT)

# --- PWM pour buzzer ---
pwm = GPIO.PWM(BUZZER, 440)  # fréquence initiale
pwm.start(0)  # démarrer avec duty cycle 0 (silence)

notes = {"C4": 262, "D4": 294, "E4": 330}
melody = ["C4", "D4", "E4"]
duration = 0.3  

# --- Fonction pour jouer la mélodie ---
def play_melody():
    for note in melody:
        pwm.ChangeFrequency(notes[note])
        pwm.ChangeDutyCycle(50)  # active le buzzer
        time.sleep(duration)
    pwm.ChangeDutyCycle(0)  # couper le son après la mélodie

# --- Fonction lecture distance HC-SR04 ---
def read_distance():
    GPIO.output(TRIG, True)
    time.sleep(0.00001)
    GPIO.output(TRIG, False)

    # mesurer temps de réponse
    while GPIO.input(ECHO) == 0:
        pulse_start = time.time()
    while GPIO.input(ECHO) == 1:
        pulse_end = time.time()
    
    pulse_duration = pulse_end - pulse_start
    distance = pulse_duration * 17150 
    return distance

try:
    while True:
        dist = read_distance()
        joystick = GPIO.input(JOYSTICK_SW)  

        if dist < 10:   
            print("Balle détectée !")
            play_melody()
            time.sleep(0.5)  

        if joystick == 0:
            print("Joystick appuyé !")
            play_melody()
            time.sleep(0.5)   

        time.sleep(0.1)

except KeyboardInterrupt:
    pwm.stop()
    GPIO.cleanup()
