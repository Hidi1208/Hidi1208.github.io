---
title: 'Hardware Design Internship — Invendis Technologies'
oneLiner: 'Schematic design of a Wi-Fi 6 router/gateway board around the MediaTek MT7981A (Filogic 820), across 15 OrCAD pages.'
year: 'May–Jun 2026'
channel: CH2
hero:
  src: '/images/invendis-internship/hero.png'
  alt: 'Simplified block diagram of the router board: MT7981A SoC connected to DDR4, SPI NAND, Ethernet switch, Wi-Fi 6 RF, USB 3.0 hub and 5G modem, fed by a sequenced power tree.'
  type: image
order: 4
featured: true
specs:
  - key: SoC
    value: MediaTek MT7981A (Filogic 820)
  - key: Subsystems
    value: Power · GbE switch · Wi-Fi 6 RF · USB 3.0 · DDR4
  - key: Scope
    value: 15-page schematic · 4 buck + 3 LDO rails
  - key: Tools
    value: OrCAD Capture 17.4
  - key: Role
    value: Hardware design intern, Bangalore
---

## What it is

A five-week industrial internship in the hardware R&D team at Invendis
Technologies, working under a senior hardware design engineer. The project was
the full schematic design of a Wi-Fi 6 router/gateway board built around the
MediaTek MT7981A, aligned with Invendis's MediaTek-based Silbo product line.
The board has four Gigabit LAN ports, Wi-Fi 6, two USB 3.0 ports, a 5G modem
slot and 1 GB of DDR4. The schematics are proprietary, so this page shows a
simplified architecture only.

## What I built

- **Power architecture.** A 12 V input with fuse and TVS protection, four
  SY8205FCC synchronous buck converters (5 V, 3.3 V, 0.87 V core, 1.2 V DDR),
  three LDOs and a DDR4 termination regulator.
- **Ethernet.** MT7531AE switch connected to the SoC over HSGMII, with MagJack
  ports, ESD protection and strapping configuration.
- **Wi-Fi 6 front end.** MT7976CN companion chip with a shared 40 MHz clock
  and pi-network antenna matching.
- **USB and cellular.** RTS5411T-GR hub splitting the SoC's single USB 3.0 port
  into two external ports and an internal 5G modem link, with SIM interface.
- **Memory.** DDR4 SDRAM and SPI NAND flash for OpenWrt, plus boot strapping.
- **Organisation.** Structured the design into 15 subsystem pages with an
  interface-prefixed net naming convention.

## Design decisions

- **TVS selection by inequality.** Chose the SMCJ16A so that adapter max 
  standoff < breakdown < clamp < downstream absolute max, leaving a 4 V margin
  below the buck converters' 30 V rating.
- **Sequencing without power-good.** The SY8205FCC has no PGOOD pin, so I built
  the SoC's required start-up order from RC delays on each enable pin
  (t ≈ 0.454·RC), ending with reset released at least 35 ms after the rails settle.
- **HSGMII over RGMII** for the switch link: fewer traces, serial signalling,
  and no parallel-bus length-matching burden.
- **Weak pulls on strapping pins** instead of hard ties, so boot modes can be
  jumpered during debug and pins reused after latching.