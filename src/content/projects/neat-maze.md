---
title: 'Cross-Maze Generalisation in Autonomous Navigation Using NEAT'
oneLiner: 'Neuroevolution strategies for maze navigation that generalise across 100 procedurally generated mazes, with an aggregation method for evolved controllers.'
year: '2025–2026'
channel: CH3
order: 1
featured: false
repos:
  - neat-maze-navigation
status: 'Paper under review, IEEE RICE.'
hero:
  src: '/images/neat-maze/hero.png'
  alt: 'Side-by-side paths of the aggregated controller and the single-population baseline on the unseen test maze, both ending in a wall collision.'
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

![Four procedurally generated training mazes and the unseen test maze](/images/neat-maze/mazes.png)

## What I built

- Implemented and compared **two neuroevolution training strategies** across **100
  procedurally generated mazes**.
- Designed an **aggregation method** combining 100 evolved NEAT controllers.

## Results

Neither method reached the goal on the unseen maze. Aggregation did clearly
better on both metrics: it survived 338 of 600 frames and came within 331 px of
the goal, against 268 frames and 464 px for the single-population baseline. Both
runs ended in a wall collision.

![Only 11 of 196 unique connection genes survived the 30% majority threshold](/images/neat-maze/gene-retention.png)

The failure modes were the interesting part. The 30% majority threshold filtered
196 unique connection genes down to 11, discarding the maze-specific obstacle
avoidance each genome had evolved and leaving only a generic navigation
skeleton. Among the 11 survivors, a mean weight standard deviation of 1.28
meant opposing weights across mazes averaged toward zero, producing near
straight-line motion. The baseline failed differently: averaging fitness across
100 mazes diluted any single maze's selection signal to 1%, so no genome ever
developed focused wall avoidance.