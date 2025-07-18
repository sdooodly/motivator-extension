# Goal Glimmer Chrome Extension

A beautiful, motivational Chrome extension to track your weight milestones and rewards.

## ✨ Features
- Update and save your current weight
- Add, view, and delete upcoming rewards
- See how many kg are left for your next reward
- Get a random, sassy Gandalf-style affirmation
- Vintage UI with light/dark mode

## 🚀 Quick Start

1. **Clone the repo:**
   ```bash
   git clone https://github.com/sdooodly/motivator-extension.git
   cd motivator-extension
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Build the extension:**
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with everything Chrome needs.
4. **Load in Chrome:**
   - Go to `chrome://extensions/`
   - Enable **Developer mode** (top right)
   - Click **Load unpacked**
   - Select the `dist/` folder
5. **Pin and use:**
   - Pin the extension to your toolbar
   - Click the star icon to open the popup

## 🗂️ Project Structure
- `src/components/` – UI components
- `src/types/` – Shared TypeScript types
- `src/utils/` – Affirmations and validation helpers
- `src/hooks/` – Custom React hooks (chrome storage)
- `src/App.tsx` – Main app logic

## 🛠️ Add Features
- Add new components to `src/components/`
- Add new types to `src/types/`
- Add new helpers to `src/utils/`
- Use or extend the custom hooks in `src/hooks/`

## 📝 Notes
- All data is stored locally
- Works offline
- Modular and easy to extend

---
Enjoy your journey, estrella! 🌟