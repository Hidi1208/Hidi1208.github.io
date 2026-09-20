---
title: 'Self-Describing Hot-Swappable Sensor Modules with a Universal TinyML Engine'
oneLiner: 'A custom-from-scratch C++ inference engine and a 512-byte EEPROM descriptor that let an ESP32 hot-swap neural-network sensor modules at boot.'
year: '2025–2026'
channel: CH1
order: 2
featured: true
repos:
  - sdhm-tinyml
  - tinyml-gesture-esp32
hero:
  alt: 'ESP32 board with an MPU-6050 IMU and a 24LC512 EEPROM on a breadboard, classifying live gestures.'
  type: image
specs:
  - key: MCU
    value: ESP32 · MPU-6050 · 24LC512
  - key: Engine
    value: Custom C++ (no TFLite Micro)
  - key: Accuracy
    value: 99.2% · 4-class 1D CNN
  - key: Descriptor
    value: 512-byte binary · CRC-32
  - key: Toolchain
    value: PlatformIO · Python
---

## What it is

A sensor-module system where the *module* carries its own neural network. A
512-byte binary descriptor in EEPROM encodes the network architecture, sensor
configuration and class labels; a universal ESP32 runtime parses it at boot,
loads the float32 weights, and starts classifying live sensor data — swap the
module, and the runtime reconfigures itself with no re-flash.

## What I built

- A **1D CNN gesture classifier** (ESP32 + MPU-6050) reaching **99.2% accuracy**
  across four classes.
- A **custom C++ inference engine written from scratch** — Conv1D, MaxPool, Dense,
  ReLU and Softmax — removing the TFLite Micro dependency entirely.
- A **512-byte binary descriptor** in EEPROM encoding the NN architecture, sensor
  config and class labels; the universal runtime parses it at boot and loads
  float32 weights from a 24LC512 EEPROM.
- A **Python toolchain** that packs models into 64 KB EEPROM images with CRC-32; a
  working prototype reads a 7-layer, 57 KB model and classifies live sensor data.

*Two repos:* the gesture classifier (`tinyml-gesture-esp32`, model training +
inference engine) came first and was then extended into the hot-swappable module
system (`sdhm-tinyml`, universal engine + EEPROM descriptor).
