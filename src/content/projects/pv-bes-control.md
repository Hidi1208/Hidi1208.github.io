---
title: 'Neural Network DC Bus Voltage Control for a Grid-Tied PV-BES System'
oneLiner: 'Swapping the PI outer voltage loop of a bidirectional converter for NARX, RNN and LSTM controllers, and finding out none of them wins outright.'
year: '2025–2026'
channel: CH3
order: 3
featured: true
hero:
  src: '/images/pv-bes-control/hero.webp'
  alt: 'DC bus voltage of PI, NARX, vanilla RNN and LSTM controllers across steady state and dynamic conditions.'
  type: image
specs:
  - key: My role
    value: Neural controller design
  - key: Controllers
    value: NARX · Vanilla RNN · LSTM vs PI
  - key: Target
    value: 360 V DC bus
  - key: Result
    value: RNN 1.03% SS error vs 1.15% PI
  - key: Tools
    value: MATLAB/Simulink · Deep Learning Toolbox
---

## What it is

A research project under Dr. Mukul Chankaya on a grid-tied PV and battery
storage system. My part was the machine learning side: replacing the PI
controller in the outer voltage loop of the bidirectional DC-DC converter and
seeing whether a learned controller could do better. All of this is Simulink
simulation.

![DC bus and battery current control scheme with the network in the outer loop](/images/pv-bes-control/control-scheme.webp)

## What I built

- Three controllers (NARX, a vanilla RNN and an LSTM) trained on data collected
  from the PI controller across dynamic scenarios.
- A trim integrator for the RNN, since a plain RNN has no guaranteed integral
  action and the steady-state error does not go away on its own. The gain is
  small on purpose so it does not fight the fast dynamics.
- The LSTM gets proportional, integral and derivative-like input features
  instead, so it learns the integral behaviour itself.
- Trained weights extracted into MATLAB Function blocks with hidden state kept
  persistent across timesteps.

## Results

No learned controller beat PI on every metric, which was not what I expected
going in. The vanilla RNN gave the lowest steady-state error at 1.03% against
1.15% for PI, and the lowest ripple. The LSTM tracked the reference most closely
but had the highest ripple of the four.