# 🎵 JioSaavn Music Player (React Native + Expo)

A music player app built as a company assignment using the **JioSaavn API**.

---

## ✅ Features
- 🔍 Search songs using JioSaavn API
- 📜 Pagination / Infinite Scroll
- ▶️ Play / Pause
- ⏩ Next / Previous (Queue based)
- 🎚 Seek bar with current time + duration
- 📌 Mini Player (persistent bottom player synced with playback)
- 🎶 Queue Screen
  - Highlight current song
  - Remove songs
  - Reorder songs (Up/Down)
  - Persist queue using AsyncStorage
- 🔁 Auto play next song when current ends

---

## 🧑‍💻 Tech Stack
- React Native (Expo + TypeScript)
- Zustand (State Management)
- React Navigation
- expo-av (Audio Playback)
- AsyncStorage (Queue persistence)

---

# 🚀 How to Run This Project Locally (Step-by-Step)

## ✅ 1) Install Requirements
### Node.js (LTS)
Download: https://nodejs.org  
Verify:
```bash
node -v
npm -v
npm install -g expo
✅ 2) Clone the Repository

Open terminal / PowerShell and run:

git clone https://github.com/YashBansod123/JioSaavn.git
cd JioSaavn
✅ 3) Install Dependencies
npm install
✅ 4) Start the Project
npx expo start


If anything doesn't update properly or shows weird errors, run:

npx expo start -c
✅ 5) Run on Mobile

Open Expo Go app

Scan the QR code shown in terminal/browser (Expo Dev Tools)

App will load on your mobile
