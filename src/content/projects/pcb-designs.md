---
title: 'PCB Design Portfolio'
oneLiner: 'Three complete, open-sourced KiCad PCBs — a mechanical keyboard, a macropad and a USB-C Power Delivery hub — with full schematics, layout and fab files.'
year: '2025–2026'
channel: CH2
order: 1
featured: false
repos:
  - pcb-designs
hero:
  src: '/images/pcb-designs/hero.png'
  alt: 'KiCad 3D renders of three boards: a mechanical keyboard, a macropad, and a USB-C Power Delivery hub.'
  type: image
specs:
  - key: Tool
    value: KiCad
  - key: Boards
    value: Keyboard · Macropad · USB-C PD hub
  - key: Released
    value: Schematics · layout · fab files
  - key: Licence
    value: Open source
---

## What it is

Three PCB designs in KiCad, open-sourced with full schematics, layout and
fabrication-ready Gerbers. These are designs, not fabricated boards.

## 65% wireless mechanical keyboard

A fully custom BLE keyboard: 67 keys plus a rotary encoder, nRF52840 wireless,
OLED, per-key backlight and USB-C charging. The 6×12 matrix needed more I/O than
the SoC exposes, so an MCP23017 expander handles the extra columns. Two-layer
routing, mixed SMD and through-hole assembly, with a parametric case in OpenSCAD.

![PCB layout of the 65% mechanical keyboard](/images/pcb-designs/keyboard-layout.png)

## 9-key macropad

A compact USB macropad with a 3×3 switch grid, rotary encoder and OLED, running
QMK. Kept under 100×100 mm to stay inside the cheap fabrication tier, which made
layout on the constrained board area the main design problem.

![PCB layout of the 9-key macropad](/images/pcb-designs/macropad-layout.png)

## USB-C Power Delivery hub

DESCRIBE THIS ONE — PD CONTROLLER, VOLTAGES AND CURRENT SUPPORTED, HOW YOU HANDLED
POWER ROUTING AND PROTECTION.

![PCB layout of the USB-C Power Delivery hub](/images/pcb-designs/pd-hub-layout.png)