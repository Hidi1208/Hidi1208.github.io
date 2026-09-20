---
title: 'Real-Time Acoustic Localisation Turret'
oneLiner: 'A pan-tilt turret that tracks sound in real time using a 4-microphone MEMS array and TDOA cross-correlation across two ESP32 nodes.'
year: '2026'
channel: CH1
order: 3
featured: false
repos:
  - acoustic-localisation-turret
hero:
  alt: 'Pan-tilt turret with four INMP441 MEMS microphones driven by two ESP32 nodes.'
  type: image
specs:
  - key: Array
    value: 4× INMP441 MEMS · I2S
  - key: Compute
    value: 2× ESP32 · ESP-NOW link
  - key: Method
    value: TDOA cross-correlation
  - key: Sample rate
    value: 44.1 kHz
---

## What it is

A sound-tracking pan-tilt turret. Four MEMS microphones feed two ESP32 nodes that
estimate a sound source's direction from time differences of arrival and steer
the turret toward it in real time.

## What I built

- Built a **sound-tracking pan-tilt turret** with **4× INMP441 MEMS microphones**
  and **two ESP32 nodes** communicating over **ESP-NOW**.
- Implemented **TDOA cross-correlation at 44.1 kHz** (I2S capture) to localise the
  source and drive the pan-tilt mechanism.
