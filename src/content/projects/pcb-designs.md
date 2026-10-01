---
title: 'PCB Design Portfolio'
oneLiner: 'Three KiCad boards taken from schematic to fabrication-ready files: a keyboard, a macropad, and a USB-C PD hub.'
year: '2025–2026'
channel: CH2
order: 8
repos:
  - pcb_designs
hero:
  src: '/images/pcb-designs/hero.webp'
  alt: 'KiCad 3D renders of three boards: a mechanical keyboard, a macropad, and a USB-C Power Delivery hub.'
  type: image
specs:
  - key: Tool
    value: KiCad
  - key: Boards
    value: 65% keyboard · 9-key macropad · PD hub
  - key: Output
    value: Schematics · layouts · Gerbers
  - key: Status
    value: Designed, not fabricated
---

## What it is

Three boards I designed to learn PCB work properly, all open sourced with
schematics, layout and fabrication files. None of them have been manufactured
yet.

## 65% wireless mechanical keyboard

67 keys plus a rotary encoder, an nRF52840 for BLE, an OLED, per-key backlight
and USB-C charging. The 6×12 matrix needs more I/O than the SoC exposes, so an
MCP23017 expander handles the extra columns. Two layer board, mixed SMD and
through-hole, with a parametric case in OpenSCAD.

![PCB layout of the keyboard](/images/pcb-designs/keyboard-layout.webp)

## 9-key macropad

A 3×3 switch grid with a rotary encoder and OLED, running QMK. Kept under
100×100 mm to stay in the cheap fabrication tier, which made fitting everything
onto the board the main constraint.

![PCB layout of the macropad](/images/pcb-designs/macropad-layout.webp)

## USB-C Power Delivery hub

One PD charger in, three regulated rails out. A CYPD3177 sink controller
negotiates 20 V at 3 A over the CC lines with no firmware involved, since the
voltage and current requests are set purely by resistor dividers on four
configuration pins. Three MP1584EN bucks step that down to 12 V on a barrel
jack, 5 V on USB-A and 3.3 V on a screw terminal. Two P-channel MOSFETs form
mutually exclusive power paths, so if the source cannot meet the request the
board falls back to 5 V at 900 mA instead of just not working. 80 × 60 mm, two
layers, DRC clean.

![PCB layout of the USB-C PD hub](/images/pcb-designs/pd-hub-layout.webp)