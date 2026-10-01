---
title: 'Robust RL Control Under Sensor Noise: Domain Randomisation vs PID'
oneLiner: 'Benchmarking PPO against a PID baseline across 8 noise conditions, and checking whether domain randomisation actually fixes the hard cases.'
year: '2025–2026'
channel: CH3
order: 6
repos:
  - rl-noise-robustness
hero:
  src: '/images/sim-to-real/hero.webp'
  alt: 'Ackermann-steering robot mid-run in the PyBullet simulation environment.'
  type: image
specs:
  - key: Methods
    value: PPO (stable-baselines3) · PID baseline
  - key: Environment
    value: Custom PyBullet · Gymnasium
  - key: Result
    value: PPO 88% → 72% under harsh noise
  - key: Finding
    value: Randomisation flattened spread, not worst case
  - key: Tools
    value: Python · stable-baselines3 · PyBullet
---

## What it is

An Ackermann-steering robot in a custom PyBullet environment, controlled two
ways, benchmarked with fixed seeds across 8 noise conditions. Everything here is
simulation. I have not put any of it on a real robot.

## What I built

- PID and PPO controllers for the same task, so the comparison is like for like.
- A Gymnasium environment with configurable sensor noise and fixed-seed runs.
- A domain randomisation training setup for the PPO agent.

## Results

PPO starts ahead and degrades. Success drops from 88% to 72% as noise gets
harsh, while PID sits at 68 to 74% throughout and barely notices. Domain
randomisation narrowed PPO's spread from 20 points (72 to 92%) down to 6 points
(72 to 78%), so it became about as consistent as PID, but worst-case success did
not move at all. That last part is the useful result. If randomisation were
simply a coverage problem, the floor should have come up, and it did not.