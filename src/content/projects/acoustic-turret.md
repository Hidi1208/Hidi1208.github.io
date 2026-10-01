---
title: 'Real-Time Acoustic Localisation Turret'
oneLiner: 'A pan-tilt turret that turns toward a sound, using four MEMS microphones split across two ESP32 nodes.'
year: '2026'
channel: CH1
order: 7
repos:
  - acoustic-localisation-turret
hero:
  src: '/images/acoustic-turret/hero.webp'
  alt: 'Top-down view of the turret prototype with four MEMS microphones at the board corners and the pan servo at centre.'
  type: image
specs:
  - key: Microphones
    value: 4× INMP441 MEMS · 44.1 kHz I2S
  - key: Nodes
    value: 2× ESP32 · ESP-NOW + GPIO sync
  - key: Pan
    value: TDOA blended with 41-entry lookup
  - key: Latency
    value: Under 50 ms detection to servo
  - key: Context
    value: Team project · SELECT Makeathon 2026
---

## What it is

Built at SELECT Makeathon 2026 and demonstrated live there. The turret orients
toward sharp sounds like a clap. The work below is mine.

## What I built

- Four INMP441 MEMS microphones sampled at 44.1 kHz, split across two ESP32
  nodes linked by ESP-NOW with a GPIO pulse for sync. Splitting across nodes is
  what creates most of the difficulty here, since both sides have to agree on
  when a sound happened.
- Adaptive per-microphone noise baselines, plus empirical gain calibration
  between the two nodes, because the boards did not match out of the box.
- Pan estimation that blends TDOA cross-correlation with a 41-entry lookup table
  built from 2,661 labelled azimuth samples. Cross-correlation alone was not
  reliable enough at this microphone spacing, so the table covers for it.
- Tilt from the elevation energy ratio.
- Under 50 ms from detecting an event to issuing the servo command.

![Prototype wiring during bring-up](/images/acoustic-turret/wiring.webp)