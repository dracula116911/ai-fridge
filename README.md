# 🍳 AI Fridge: Smart Recipe Generator

A sleek, minimal web application that uses **Google Gemini AI** to turn your leftover ingredients into delicious recipes. Designed with a Scandinavian aesthetic and built for speed.

[Live Demo on Vercel](https://ai-fridge-five.vercel.app/)

## ✨ Features

- **AI-Powered Recipes:** Leverages Gemini 1.5/2.5 Flash to generate creative recipes based on user-provided ingredients.
- **Persistent Favorites:** Save your favorite recipes locally using `localStorage` and custom React hooks.
- **Scandinavian UI:** A clean, dark-mode-first interface built with Tailwind CSS.
- **Juicy UX:** - 🎊 Confetti celebrations when saving recipes.
    - 📋 One-click share to clipboard for easy texting.
    - ⏳ Skeleton loaders and empty-state illustrations for a polished feel.
- **Mobile First:** Fully responsive design for use in the kitchen.

## 🛠️ Tech Stack

- **Framework:** [React.js](https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **AI Engine:** [Google Gemini API](https://ai.google.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- A Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

### Installation

1. **Clone the repo**
   ```bash
   git clone [https://github.com/your-username/ai-fridge.git](https://github.com/dracula116911/ai-fridge.git)
   cd ai-fridge
Install dependencies

Bash
npm install
Set up Environment Variables
Create a .env.local file in the root and add your key:

Code snippet
VITE_GEMINI_API_KEY=your_actual_api_key_here
Run the development server

Bash
npm run dev
🧠 What I Learned
Prompt Engineering: Structuring AI requests to ensure valid JSON responses.

Custom Hooks: Abstracting logic for localStorage and state management into reusable hooks (useFavourites).

Responsive Layouts: Centering dynamic content and preventing layout shifts when adding elements to a grid.

Built with ❤️ and probably some eggs and spinach.