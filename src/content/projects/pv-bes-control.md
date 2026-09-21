---
title: 'Neural Network DC Bus Voltage Control for a Grid-Tied PV-BES System'
oneLiner: 'Designed and trained NARX, vanilla RNN and LSTM controllers to replace PI on the DC bus of a grid-tied PV-battery system.'
year: '2025–2026'
channel: CH3
hero:
  src: '/images/pv-bes-control/hero.png'
  alt: 'DC bus voltage of PI, NARX, vanilla RNN and LSTM controllers across steady-state, irradiation change, and DC and AC load variation.'
  type: image
order: 3
featured: true
specs:
  - key: My role
    value: Neural-network controller design
  - key: Controllers
    value: NARX · Vanilla RNN · LSTM vs PI
  - key: Best model
    value: LSTM · 3.02% SS error vs 6.98% PI
  - key: RMSE
    value: 5.05 V · ripple 20.14 Vpp
  - key: Tools
    value: MATLAB/Simulink · Deep Learning Toolbox
---

## What it is

A research project on a grid-tied photovoltaic + battery-energy-storage (PV-BES)
system, run by my faculty guide's lab. My part was the machine-learning side:
replacing the conventional PI controller that regulates the 150 V DC bus with
neural-network controllers, and finding out which architecture does it best.

![DC bus and battery current control scheme with the LSTM in the outer voltage loop](/images/pv-bes-control/control-scheme.png)

## What I built

- **Three neural controllers** (NARX, vanilla RNN and LSTM) for the outer voltage
  loop of the battery's bidirectional DC-DC converter, trained on 125,001 samples
  of PI behaviour across dynamic scenarios.
- **Integral action without a PI.** Added a small trim integrator to the RNN to
  eliminate steady-state error; gave the LSTM proportional, integral and
  derivative-like input features so it learns integral behaviour on its own.
- **Deployment into the control loop.** Extracted trained weights into MATLAB
  Function blocks with persistent hidden and cell state across timesteps.
- **Results.** LSTM held the bus closest to reference: 3.02% steady-state error
  vs 6.98% for PI, 4.82% vs 8.95% under AC load change, and the lowest RMSE
  (5.05 V) and ripple (20.14 Vpp) of all four controllers.