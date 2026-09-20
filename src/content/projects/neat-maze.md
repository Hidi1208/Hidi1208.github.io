---
title: 'Cross-Maze Generalisation in Autonomous Navigation Using NEAT'
oneLiner: 'Neuroevolution strategies for maze navigation that generalise across 100 procedurally generated mazes, with an aggregation method for evolved controllers.'
year: '2025–2026'
channel: CH3
order: 1
featured: false
repos:
  - neat-maze-generalisation
status: 'Paper under review, IEEE RICE.'
hero:
  alt: 'Procedurally generated maze with a NEAT-evolved agent navigating from start to goal.'
  type: image
specs:
  - key: Method
    value: NEAT neuroevolution
  - key: Scale
    value: 100 procedural mazes
  - key: Contribution
    value: Controller aggregation method
  - key: Tools
    value: Python · neat-python · Pygame
---

## What it is

A study of how well neuroevolved navigation controllers generalise beyond the
maze they were trained on. Two training strategies were evaluated across 100
procedurally generated mazes, alongside a method for aggregating many evolved
controllers into one.

## What I built

- Implemented and compared **two neuroevolution training strategies** across **100
  procedurally generated mazes**.
- Designed an **aggregation method** combining 100 evolved NEAT controllers.
