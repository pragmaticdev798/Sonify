# Sonify Virtual Keyboard

## Introduction
The Sonify Virtual Keyboard 🎶 is a fun web-based application that turns your computer keyboard into an instrument. When you press any key from A to Z, it plays a corresponding A4 note sound (similar to the sound of a guitar pluck). It's simple, interactive, and great for exploring music or just having fun!

## Features
- **Keyboard Mapping:** Each key from A to Z on your keyboard is mapped to a unique A4 guitar note sound.
- **Sound Files:** The project uses `.wav` sound files (A-Z.wav) located in the `sounds` folder to trigger the notes.
- **Web-based:** You can use the app directly in your browser without needing to install anything.
- **Lightweight and Fun:** No fancy setup—just press a key and hear the sound!

## How it Works
When you press a key from A to Z, the app plays a sound file (e.g., `A.wav`, `B.wav`, etc.) from the `sounds` folder. These `.wav` files are mapped to their respective keys and played using simple JavaScript logic.

## Installation

To get started, you can simply clone this repository and open `index.html` in your browser:

```bash
git clone https://github.com/pragmaticdev798/Sonify
cd Sonify
open index.html
