---
title: 'Cross-Maze Generalisation in Autonomous Navigation Using NEAT'
oneLiner: 'Averaging 100 separately evolved NEAT controllers to see whether the result navigates a maze it has never seen.'
year: '2025–2026'
channel: CH3
order: 5
repos:
  - neat-maze-navigation
hero:
  src: '/images/neat-maze/hero.webp'
  alt: 'Paths of the aggregated controller and the multi-environment baseline on the unseen test maze.'
  type: image
status: 'Paper under review, IEEE RICE 2026.'
specs:
  - key: Method
    value: Genome aggregation vs multi-env training
  - key: Scale
    value: 100 procedurally generated mazes
  - key: Aggregation
    value: Innovation-aligned averaging · 30% threshold
  - key: Tools
    value: Python · neat-python · Pygame
---

## What it is

Coursework that turned into a paper, with Siddharth Brahmankar, Ashwin Vinod and
Dr. M. Subashini. The question was whether you can get generalisation out of
NEAT by evolving a controller per maze and then averaging them, rather than
training one controller across every maze at once.

![Procedurally generated training mazes and the unseen test maze](/images/neat-maze/mazes.webp)

## What I built

- Two training strategies across 100 procedurally generated mazes.
- An aggregation method that aligns genomes by innovation number and averages
  weights, keeping only connections present in at least 30% of the population.

## Results

Neither approach reached the goal on the unseen maze. Aggregation did better on
both measures, surviving 26% longer (338 frames against 268) and finishing 29%
closer to the goal (331 px against 464 px). Both runs ended in a wall.

![Only 11 of 196 connection genes survived the majority threshold](/images/neat-maze/gene-retention.webp)

The failure modes turned out to be the interesting part. The 30% threshold cut
196 unique connection genes down to 11, which threw away the maze-specific
obstacle avoidance and left a generic navigation skeleton. Among the survivors,
weights that disagreed across mazes averaged toward zero, so the controller
mostly drove straight. The baseline failed for a different reason: averaging
fitness over 100 mazes dilutes any single maze's signal to 1%, so nothing ever
specialised. All three findings point toward NEAT-GRU extensions as the next
thing to try.