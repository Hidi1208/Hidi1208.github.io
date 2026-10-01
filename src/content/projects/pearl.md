---
title: 'PEARL — Physical Environment Aware Reasoning Layer'
oneLiner: 'STM32 firmware feeding sensor data to a context engine and an LLM, so a machine can explain its own faults in plain language.'
year: '2026'
channel: CH1
order: 1
featured: true
repos:
  - pearl-embedded-diagnostics
hero:
  src: '/images/pearl/hero.webp'
  alt: 'STM32F401RE wired to an MPU9250 IMU and ACS712 current sensor, with a Raspberry Pi 5 behind it.'
  type: image
specs:
  - key: MCU
    value: STM32F401RE · bare-metal HAL
  - key: Sensors
    value: MPU9250 · AK8963 · ACS712
  - key: Interfaces
    value: I2C 400 kHz · UART 115200 · 12-bit ADC
  - key: Inference
    value: Gemini Flash (API) or Qwen 2.5 (llama.cpp)
  - key: Stack
    value: STM32 HAL (C) · FastAPI · RPi 5
---

## What it is

My 7th semester project, supervised by Dr. Jacob Raglend I. The idea was to see
whether an LLM could usefully diagnose what a piece of hardware is doing if you
give it properly structured sensor context instead of raw numbers. The firmware,
the hardware description layer and the whole acquisition to dashboard pipeline
below are mine.

![STM32F401RE wired to the MPU9250 IMU and ACS712 current sensor](/images/pearl/hardware-closeup.webp)

## What I built

- Bare-metal STM32F401RE firmware in HAL and PlatformIO, reading an MPU9250 IMU
  over I2C at 400 kHz with the AK8963 magnetometer bypass, an ACS712 current
  sensor on the 12-bit ADC, and bidirectional UART at 115200 baud.
- I2C bus recovery. If SDA gets stuck the firmware detects it and toggles the
  clock line to free the bus, so a wedged sensor no longer needs a power cycle.
  This came out of debugging, not planning.
- A YAML hardware description layer that keeps sensor topology separate from the
  inference logic, so swapping hardware does not mean touching code.
- The full path: STM32 to UART as JSON telemetry at 5 Hz, into a Raspberry Pi 5,
  through a three layer context engine, to either Gemini Flash over the API or
  Qwen 2.5 running locally through llama.cpp, out to a FastAPI and WebSocket
  dashboard.
- Four fault scenarios demonstrated live: an I2C disconnection with auto
  recovery, magnetic interference, physical disturbance, and an orientation
  change. The system tells them apart by which sensor channels drift.

![Live dashboard flagging a detected fault](/images/pearl/dashboard-fault.webp)