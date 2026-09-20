---
title: 'Neural Network DC Bus Voltage Control for a Grid-Tied PV-BES System'
oneLiner: 'Compared NARX, RNN and LSTM controllers against a PI baseline for 360 V DC bus regulation, with hardware-in-the-loop validation on dSPACE.'
year: '2025–2026'
channel: CH3
hero:
  alt: 'Block diagram of a grid-tied photovoltaic and battery energy-storage system with a neural-network DC bus voltage controller.'
  type: image
order: 3
featured: true
specs:
  - key: Target
    value: 360 V DC bus regulation
  - key: Best model
    value: Vanilla RNN + trim integrator
  - key: RMSE
    value: 5.515 V · ripple 20.94 Vpp
  - key: Validation
    value: dSPACE DS1202 · IEEE 519 THD
  - key: Tools
    value: MATLAB/Simulink
---

## What it is

A study of neural-network controllers for regulating the DC bus of a grid-tied
photovoltaic + battery-energy-storage (PV-BES) system. NARX, RNN and LSTM
controllers were compared against a conventional PI baseline, then validated on
real hardware-in-the-loop.

## What I built

- Compared **NARX, RNN and LSTM** controllers against a **PI baseline** for 360 V
  DC bus regulation. A **vanilla RNN with a trim integrator** gave the lowest RMSE
  (**5.515 V**) and ripple (**20.94 Vpp**).
- **Hardware validation on a dSPACE DS1202**, with **IEEE 519-compliant THD**.
