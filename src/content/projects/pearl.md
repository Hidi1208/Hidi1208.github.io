---
title: 'PEARL — Physical Environment Aware Reasoning Layer'
oneLiner: 'Bare-metal STM32 multi-sensor acquisition feeding a three-layer context engine and LLM (cloud or local), streamed to a live web dashboard.'
year: '2026'
channel: CH1
order: 1
featured: true
repos:
  - pearl-embedded-diagnostics
hero:
  alt: 'PEARL hardware — STM32F401RE Nucleo board wired to an MPU9250 IMU and ACS712 current sensor, connected to a Raspberry Pi 5.'
  type: image
specs:
  - key: MCU
    value: STM32F401RE · bare-metal HAL
  - key: Sensors
    value: MPU9250 IMU · AK8963 · ACS712
  - key: Interfaces
    value: I2C 400 kHz · UART · 12-bit ADC
  - key: Inference
    value: Gemini Flash · Qwen 2.5 (llama.cpp)
  - key: Stack
    value: STM32 HAL (C) · FastAPI · RPi 5
---

## What it is

PEARL is my 7th-semester capstone: an embedded diagnostics layer that turns raw
sensor data into natural-language reasoning about a machine's physical state. A
bare-metal STM32 acquires multi-sensor data and streams it to a Raspberry Pi 5,
where a three-layer context engine feeds an LLM that explains what the hardware
is doing — the whole path, from I2C register reads to a live dashboard, is mine.

![STM32F401RE wired to the MPU9250 IMU and ACS712 current sensor](/images/pearl/hardware-closeup.jpg)

## What I built

- **Bare-metal STM32F401RE firmware** (HAL, PlatformIO) for multi-sensor
  acquisition: an MPU9250 9-axis IMU over I2C at 400 kHz with AK8963 magnetometer
  bypass, an ACS712 current sensor via the 12-bit ADC, and bidirectional UART.
- **I2C bus recovery** — automatic stuck-SDA detection with clock-line toggling to
  unwedge the bus without a power cycle.
- A **project-agnostic hardware description layer** in YAML that decouples sensor
  topology from the inference logic, so a new rig is a config change, not a rewrite.
- The **end-to-end pipeline**: STM32 → UART → Raspberry Pi 5 → three-layer context
  engine → LLM (Gemini Flash / Qwen 2.5 via `llama.cpp`) → live web dashboard
  (FastAPI + WebSocket, PySerial on the ingest side).

![Live dashboard flagging a detected fault with the LLM's diagnosis](/images/pearl/dashboard-fault.png)