# Portfolio site build brief

Build a static personal portfolio site with **Astro**, deployed to **GitHub Pages**.

I make the design and structure decisions. The visual direction below is already
decided — implement it as specified. If you think something here is wrong, say so
before building it, don't silently substitute your own choice.

---

## 1. Who this is for

Author: **Aniruddha Deshmukh (Ani)** — final-year Electrical & Electronics
Engineering student, VIT Vellore, CGPA 9.01/10, graduating July 2027.

Audience: **admissions reviewers for embedded systems master's programmes**,
spending 30–60 seconds on the site before returning to my application. The first
impression must be hardware and code. Everything else is secondary.

Contact: anidesh1208@gmail.com · GitHub https://github.com/Hidi1208
No LinkedIn — do not add a placeholder or a LinkedIn icon anywhere.

---

## 2. Visual direction: oscilloscope

Dark UI with an **amber phosphor** accent. Three motifs, used consistently:

1. **Scope graticule.** The landing hero sits on a faint square grid (~22–24 px),
   with a small monospace readout line above the name, e.g. `CH1 · 5V/div · 1ms/div`.
2. **The trace.** A single amber waveform line under the name. It draws itself
   once on page load (SVG stroke-dashoffset animation, ~2 s, `fill="freeze"`), then
   stays static. A shorter, dimmer version of the same trace is the section divider.
   Respect `prefers-reduced-motion` — no animation when it's set.
3. **Channels as categories.** Project categories are channels, shown as small
   amber pill tags on each card:
   - `CH1` — Embedded Systems
   - `CH2` — PCB & Hardware Design
   - `CH3` — Control & Applied ML

### Palette (starting point, adjust for contrast)

| Role | Value |
|---|---|
| Page background | `#120F0C` |
| Card / panel surface | `#1A1612` |
| Grid lines | `#2A2118` |
| Borders | `#3A2D20` |
| Amber trace / accent | `#FAC775` |
| Amber dim (readouts, labels) | `#B97A20` |
| Tag background | `#633806` |
| Primary text | `#F1EFE8` |
| Secondary text | `#B4B2A9` |

### Typography rule — important

A clean sans-serif (Inter, or similar) for all names, headings, body copy and
navigation. **Monospace only** for the small scope readouts, channel tags and
spec labels. Do not set body text in monospace. This is the line between
"instrument" and "hacker terminal", and the site must land on the instrument side.

### Restraint

Conventional navigation. No scroll hijacking, no CRT scanline overlays, no
flicker, no typewriter effects, no cursor trails. The theme lives in the grid,
the trace and the channel tags — nowhere else.

---

## 3. Structure

- `/` — landing
- `/projects/<slug>` — one page per project (8 total)
- `/about` — personal page

### Landing page

1. Hero: name, one-liner, scope readout, animated trace.
2. **Featured row** — four cards, in this order:
   PEARL → SDHM TinyML → PV-BES Control → Invendis Internship.
   (PEARL and SDHM first deliberately: they're the two with real hardware photos.)
3. **Secondary projects**, grouped by channel: CH1 Embedded, CH2 PCB & Hardware,
   CH3 Control & Applied ML.
4. Footer: email, GitHub, CV link.

Header carries: Projects · About · CV (PDF). The CV PDF lives in this repo at
`/public/cv.pdf` — do not link to Drive.

### Project page template

- Hero media at top (photo, render, or diagram)
- **Spec strip** — 3–5 compact key/value pairs in monospace
  (e.g. MCU · Interfaces · Key result · Tools)
- **What it is** — 2–3 sentences
- **What I built** — the specific technical contributions
- **Repo link** where one exists
- Channel tag

Each project is one Markdown/MDX file in a content collection with frontmatter
(title, slug, channel, order, featured, repo, hero, specs). I want to edit a
project by editing one file, not by touching layout code.

---

## 4. Projects

### Featured

**1. PEARL — Physical Environment Aware Reasoning Layer** (2026, 7th-semester capstone)
Channel: CH1 · Repo: `pearl-embedded-diagnostics`
- Bare-metal STM32F401RE firmware (HAL, PlatformIO) for multi-sensor acquisition:
  MPU9250 9-axis IMU over I2C at 400 kHz with AK8963 magnetometer bypass,
  ACS712 current sensor via 12-bit ADC, bidirectional UART.
- I2C bus recovery: automatic stuck-SDA detection and clock-line toggling.
- Project-agnostic hardware description layer (YAML) decoupling sensor topology
  from inference logic.
- End-to-end pipeline: STM32 → UART → Raspberry Pi 5 → three-layer context engine
  → LLM (Gemini Flash / Qwen 2.5 via llama.cpp) → live web dashboard.
- Tech: STM32 HAL (C), Python, FastAPI, WebSocket, PySerial, Gemini API,
  llama.cpp, YAML, PlatformIO, RPi 5.

**2. Self-Describing Hot-Swappable Sensor Modules with Universal TinyML Engine** (2025–2026)
Channel: CH1 · Repos: `sdhm-tinyml` (universal engine + EEPROM descriptor) and
`tinyml-gesture-esp32` (model training + custom inference engine)
- 1D CNN gesture classifier (ESP32 + MPU-6050), 99.2% accuracy across 4 classes.
- Custom C++ inference engine written from scratch (Conv1D, MaxPool, Dense, ReLU,
  Softmax), removing the TFLite Micro dependency entirely.
- 512-byte binary descriptor in EEPROM encoding NN architecture, sensor config and
  class labels; universal ESP32 runtime parses it at boot and loads float32 weights
  from a 24LC512 EEPROM.
- Python toolchain packs models into 64 KB EEPROM images with CRC-32; working
  prototype reads a 7-layer, 57 KB model and classifies live sensor data.
- Two repos because the gesture classifier came first and was then extended into
  the hot-swappable module system.
- Tech: ESP32, 24LC512 EEPROM, MPU6050, C/C++ (PlatformIO), Python, I2C, TinyML.
- **Do not mention a patent anywhere on this page.**

**3. Neural Network DC Bus Voltage Control for Grid-Tied PV-BES System** (2025–2026)
Channel: CH3 · No repo — MATLAB/Simulink files aren't shareable
- Compared NARX, RNN and LSTM controllers against a PI baseline for 360 V DC bus
  regulation; vanilla RNN with trim integrator gave the lowest RMSE (5.515 V) and
  ripple (20.94 Vpp).
- Hardware validation on dSPACE DS1202; IEEE 519-compliant THD.
- Tech: MATLAB/Simulink, dSPACE DS1202.
- Page is description + diagrams only. No repo button, and no empty/disabled
  "code unavailable" button either — just omit it.

**4. Hardware Design Internship — Invendis Technologies, Bangalore** (May–Jun 2026)
Channel: CH2 · No repo — proprietary schematics
- Independently designed a Wi-Fi 6 router/gateway PCB (MT7981A Filogic 820) for the
  Silbo product line.
- Full schematic capture in OrCAD Capture 17.2 across 15 pages: multi-rail power
  distribution, 7-port GbE switch, DDR4, Wi-Fi 6 RF frontend, 5G modem.
- Frame this as professional internship work, not a personal project. Simplified
  block diagram only — never the real schematic.

### Secondary

**5. Cross-Maze Generalisation in Autonomous Navigation Using NEAT** (2025–2026)
Channel: CH3 · Repo: `neat-maze-generalisation`
- Two neuroevolution training strategies across 100 procedurally generated mazes;
  designed an aggregation method for 100 evolved NEAT controllers.
- Status line: *Paper under review, IEEE RICE.* Keep this as a single standalone
  line in frontmatter so it's a one-line edit when the verdict lands.
- Tech: Python, neat-python, Pygame.

**6. Sim-to-Real Robot Controller — Domain Randomisation for RL Transfer** (2025–2026)
Channel: CH3 · Repo: `sim-to-real-robot-controller`
- PID and PPO controllers for an Ackermann-steering robot in PyBullet; domain
  randomisation to recover noise resilience.
- Tech: Python, stable-baselines3, PyBullet, Gymnasium.

**7. Real-Time Acoustic Localisation Turret** (2026)
Channel: CH1 · Repo: `acoustic-localisation-turret`
- Sound-tracking pan-tilt turret: 4× INMP441 MEMS microphones, two ESP32 nodes over
  ESP-NOW, TDOA cross-correlation at 44.1 kHz.
- Tech: ESP32, ESP-NOW, I2S, C++.

**8. PCB Design Portfolio** (2025–2026)
Channel: CH2 · Repo: `pcb-designs`
- Three complete KiCad PCBs: mechanical keyboard, macropad, USB-C Power Delivery hub.
- Open-sourced with full schematics, layout and fabrication files.
- State plainly that these are designs, not fabricated boards.

---

## 5. About page

Secondary to the project work — reachable, not promoted. From Pune, India.

- **Toastmasters:** VP Education & Secretary at Fogo VIT; 3rd place, Division
  Humorous Speech Contest, Coruscate Division Conference (District 120); completed
  Dynamic Leadership Pathway (all 5 levels); Secretary Trainer for the Officer's
  Training Program.
- 1–2 photos of me speaking on stage.
- Small gallery of my digital art.
- Long-term ambition: start a hardware/electronics startup after my master's.
- **Do not include:** Toastmasters certificates, any Art Club mention.

---

## 6. Media

I'm shooting the photos separately. For now:

- Reference every asset at its final path under `/public/images/<slug>/hero.*` and
  generate a neutral placeholder (dark panel, amber border, filename label) for each.
- List every expected asset path in the README so I can drop files in later.
- Short motion clips must be **muted looping MP4** via `<video autoplay muted loop
  playsinline>`, not GIF. Every page must look intentional with placeholders in place.

---

## 7. Build requirements

- Astro, content collections for projects, no heavyweight UI framework.
- Responsive; mobile is a real use case, so verify the featured row and spec strips
  at 380 px.
- Lighthouse performance ≥ 90 on a simulated slow connection. Lazy-load below-fold
  images, compress everything.
- Accessible: WCAG AA contrast on amber-on-dark text, alt text on every image,
  keyboard-navigable, `prefers-reduced-motion` respected.
- Per-page `<title>` and meta description; Open Graph tags so a shared link previews well.
- GitHub Pages deploy via GitHub Actions, targeting `Hidi1208.github.io` or a project repo.
- README documenting how to add a project and where images go.

## 8. Order of work

Scaffold and design system → landing page → project page template + one real
project (PEARL) → **stop and show me** before generating the remaining seven.
