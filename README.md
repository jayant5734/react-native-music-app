<<<<<<< HEAD
# 🎵 JioSaavn Music Player (React Native + Expo)

# 🎶 Music Player Application

A feature-rich mobile music player built using **React Native (Expo)** and **TypeScript**.

This application fetches real music data from the **JioSaavn public API** and is designed to deliver a smooth and immersive listening experience. It focuses on a modern UI, persistent background playback, and efficient global state management for seamless music control across the app.

---

## 📦 App Overview

This application allows users to explore music, manage playlists, and control audio playback with ease. It supports uninterrupted background audio playback, ensuring a seamless listening experience even when the app is minimized or running in the background.

The app is built with scalability and maintainability in mind, following real-world development practices and clean architecture principles.

---

## 🚀 Key Capabilities

### 🏠 Home Experience
- Displays recently interacted tracks for quick access  
- Highlights popular artists using visually rich cards  
- Shows frequently played songs based on user activity  
- Category-based tabs for **Songs**, **Artists**, and **Albums**  
- Infinite scrolling with auto-loading content  
- Expandable sections with quick actions  

---

### 🔍 Search System
- Unified search for songs, artists, and albums  
- Instant result updates while typing  
- Tab-based filtering  
- Pagination support for large result sets  
- Stores recent search history locally  
- Friendly empty-state messages  

---

### 🎧 Music Playback
- Full-screen player with high-quality artwork  
- Interactive progress slider for precise control  
- Playback controls:
  - Play / Pause  
  - Next / Previous  
  - Skip forward / backward  
- Displays current time and total duration  
- **Shuffle** and **Repeat** modes  
- Queue access with real-time management  
- Add tracks to playlists or favorites  

---

### 🎵 Mini Player
- Fixed mini player visible across the app  
- Reflects real-time playback state  
- Tap to expand into full-screen player  
- Playback progress indicator  
- Quick play/pause access  
- Displays current track details  

---

### 📃 Playback Queue
- Displays upcoming tracks  
- Add songs from anywhere in the app  
- Remove tracks with confirmation  
- Reorder tracks using controls  
- Persistent queue across app restarts  
- Auto-starts playback when queue is ready  

---

### 🌙 Background Audio
- Music continues in background mode  
- Lock-screen playback controls supported  
- Android foreground service enabled  
- Background audio mode configured for iOS  

---

### 🌟 Additional Functionality

#### 💾 Data Persistence
The app stores important data locally:
- Playback queue  
- Favorite tracks  
- User playlists  
- Theme preferences  
- Search history  

---

### 🎨 Theme Support
- Light & Dark modes  
- User preference saved automatically  
- UI updates dynamically on theme change  
- Toggle available in Settings  

---

### 👩‍🎤 Artist & Album Views
- Artist profiles with songs and albums  
- Album-wise track listings  
- Load-more support for large lists  
- One-tap **Play All** and **Shuffle**  

---

### 🧭 Navigation
- Bottom Tab Navigation:
  - Home  
  - Favorites  
  - Playlists  
  - Settings  
- Stack navigation for detail screens  
- Smooth native-like transitions  
- Proper back navigation handling  

---

## 🧰 Technology Stack

- **Framework:** React Native (Expo)  
- **Language:** TypeScript  
- **Navigation:** React Navigation (Stack & Bottom Tabs)  
- **State Management:** Zustand  
- **Local Storage:** AsyncStorage  
- **Audio Engine:** expo-av  
- **Networking:** Axios  
- **Icons:** Expo Vector Icons  
- **Safe Area Handling:** react-native-safe-area-context  

---

## 📂 Folder Structure

```text
JioSaavn/
├── .expo/
├── assets/
├── src/
│   ├── api/
│   │   └── saavn.ts
│   ├── components/
│   ├── navigation/
│   ├── screens/
│   ├── store/
│   └── utils/
├── App.tsx
├── app.json
├── index.ts
├── package.json
├── tsconfig.json
└── README.md


## ✨ Features
- 🔍 Search songs (JioSaavn API)
- 📜 Pagination / Infinite Scroll
- ▶️ Play / Pause audio
- ⏩ Next / Previous (Queue based)
- 🎚 Seek bar with current time + duration
- 📌 Mini Player (persistent bottom player synced with playback)
- 🎶 Queue Management
  - Highlight currently playing song
  - Remove songs from queue
  - Reorder queue (Up/Down)
  - Persist queue locally using AsyncStorage
- 🔁 Auto-play next song when current ends

---

## 🧑‍💻 Tech Stack
- **React Native** (Expo + TypeScript)
- **React Navigation**
- **Zustand** (State management)
- **expo-av** (Audio playback)
- **AsyncStorage** (Local persistence)

---


## ✅ Requirements

node -v
npm -v

2) Expo CLI

Install globally:
npm install -g expo
3) Expo Go (Mobile App)

Install Expo Go on your phone:

Android: Play Store

iOS: App Store

🚀 Getting Started (Run Locally)
1) Clone the repository
git clone https://github.com/YashBansod123/JioSaavn.git
cd JioSaavn

2) Install dependencies
npm install

3) Start the development server
npx expo start

If the app is not updating properly / gives cache issues:
npx expo start -c

📱 Run on Mobile (Expo Go)

Open Expo Go on your mobile

Scan the QR code shown in terminal / browser (Expo Dev Tools)

The app will open on your phone

✅ Tip: Ensure your laptop and mobile are on the same WiFi network.
If campus WiFi blocks Expo, use a mobile hotspot.
=======
# react-native-music-app
>>>>>>> 5bcfe9a75b3bb46f3c8911db0f52e63f44919ed0
