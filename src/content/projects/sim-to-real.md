---
title: 'Sim-to-Real Robot Controller — Domain Randomisation for RL Transfer'
oneLiner: 'PID and PPO controllers for an Ackermann-steering robot in PyBullet, using domain randomisation to recover noise resilience for real-world transfer.'
year: '2025–2026'
channel: CH3
order: 2
featured: false
repos:
  - sim-to-real-robot-controller
hero:
  alt: 'Ackermann-steering robot simulated in PyBullet under domain-randomised conditions.'
  type: image
specs:
  - key: Platform
    value: Ackermann robot · PyBullet
  - key: Controllers
    value: PID · PPO
  - key: Technique
    value: Domain randomisation
  - key: Tools
    value: stable-baselines3 · Gymnasium
---

## What it is

A reinforcement-learning controller for an Ackermann-steering robot, built to
survive the sim-to-real gap. Controllers are trained in PyBullet and stress-tested
under randomised dynamics so the learned policy stays robust to real-world noise.

## What I built

- Implemented **PID and PPO** controllers for an **Ackermann-steering robot** in
  **PyBullet**.
- Applied **domain randomisation** to recover noise resilience for sim-to-real
  transfer.
