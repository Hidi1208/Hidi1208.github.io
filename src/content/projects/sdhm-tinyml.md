---
title: 'Self-Describing Hot-Swappable Sensor Modules with a Universal TinyML Engine'
oneLiner: 'Neural networks stored in a sensor module EEPROM, so one ESP32 runtime can load and run whatever model it finds.'
year: '2025–2026'
channel: CH1
order: 2
featured: true
repos:
  - self-describing-tinyml-modules
  - tinyml-gesture-esp32
hero:
  src: '/images/sdhm-tinyml/hero.webp'
  alt: 'ESP32 wired to a 24LC512 EEPROM module and an MPU-6050 sensor.'
  type: image
specs:
  - key: MCU
    value: ESP32 · PlatformIO
  - key: Model
    value: 1D CNN · 99.2% on 4 gesture classes
  - key: Storage
    value: 512-byte descriptor · 24LC512 EEPROM
  - key: Engine
    value: Custom C++ · no TFLite Micro
  - key: Toolchain
    value: Python · CRC-32 · 64 KB images
---

## What it is

If a sensor module carries its own neural network, any runtime that knows how to
read the descriptor can use it. That was the question I wanted to answer. The
gesture classifier came first, then I extended it into the hot-swappable module
system, which is why there are two repos.

![ESP32 with the EEPROM module and MPU-6050](/images/sdhm-tinyml/closeup.webp)

## What I built

- A 1D CNN gesture classifier on an ESP32 with an MPU-6050, reaching 99.2%
  across 4 classes.
- A C++ inference engine written from scratch with Conv1D, MaxPool, Dense, ReLU
  and Softmax layers. Writing it myself meant dropping TFLite Micro entirely,
  which was the point: I wanted to know exactly what was happening at inference
  time.
- A 512-byte binary descriptor that encodes the network architecture, sensor
  configuration and class labels, stored in EEPROM on the module itself. A
  universal ESP32 runtime parses it at boot and pulls float32 weights off a
  24LC512.
- A Python toolchain that packs architecture, weights and metadata into 64 KB
  EEPROM images with CRC-32 verification.
- The working prototype reads a 7 layer model of about 57 KB and classifies live
  sensor data.

![Serial monitor showing live classification](/images/sdhm-tinyml/terminal.webp)