---
title: 'Hardware Design Internship — Invendis Technologies'
oneLiner: 'Schematic design of a Wi-Fi 6 router board around the MediaTek MT7981A, across 15 pages in OrCAD.'
year: 'May–Jun 2026'
channel: CH2
order: 4
featured: true
hero:
  src: '/images/invendis-internship/hero.webp'
  alt: 'Simplified block diagram of the router board: MT7981A connected to DDR4, SPI NAND, Ethernet switch, Wi-Fi 6 RF, USB hub and 5G modem, fed by a sequenced power tree.'
  type: image
specs:
  - key: SoC
    value: MediaTek MT7981A (Filogic 820)
  - key: Subsystems
    value: Power · GbE switch · Wi-Fi 6 RF · USB · DDR4
  - key: Scope
    value: 15-page schematic · 4 bucks + 3 LDOs
  - key: Tools
    value: OrCAD Capture
  - key: Role
    value: Hardware design intern, R&D
---

## What it is

Five weeks in the hardware R&D team at Invendis in Bangalore, working under a
senior hardware design engineer. The project was the schematic for a Wi-Fi 6
router and gateway board for the Silbo product line. The schematics are
proprietary, so what is shown here is a simplified block diagram I drew myself.

## What I worked on

- Multi-rail power distribution: a 12 V input with fuse and TVS protection, four
  synchronous buck converters, three LDOs and DDR4 termination.
- Power sequencing without power-good pins. The bucks do not have PGOOD, so the
  start-up order the SoC needs is built from RC delays on the enable pins, with
  reset released at least 35 ms after the rails settle.
- Ethernet: a 7-port GbE switch linked to the SoC over HSGMII, with MagJack
  ports, ESD protection and strapping.
- Wi-Fi 6 front end with a shared 40 MHz clock and pi-network antenna matching.
- USB hub splitting the SoC's single USB 3.0 port into external ports and an
  internal 5G modem link, plus the SIM interface.
- Organising the whole thing into 15 subsystem pages with a consistent net
  naming convention, which matters more than it sounds like it does when you are
  cross-referencing signals across that many sheets.

## Things I had not thought about before

Choosing a TVS diode is an inequality, not a lookup. Adapter maximum below
standoff, below breakdown, below clamp, below the absolute maximum of whatever
sits downstream. Picking a part that satisfies all of it with margin left over
took longer than I expected.