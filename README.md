# Markdown Editor

A responsive Markdown editor built with Vue 3 and marked.js.

## How to Run Locally

1. Download or clone the repository  
2. Open the folder in VS Code  
3. Open `index.html` in your browser  

## Features

- Markdown input (textarea)
- Live preview (HTML output)
- Character counter (excluding HTML tags)
- Light/Dark mode toggle
- Text persistence using localStorage
- Theme persistence using localStorage
- Responsive layout (mobile + desktop)

## AI Prompts I Used

- Why is Git asking for my identity when committing?
- How do I fix initializing Git in the wrong folder?
- Why is my layout not switching correctly in fullscreen?
- How do I position an element at the bottom-left using CSS?
- Why is my character counter off by one?
- Why is Vue not rendering {{ charCount }}?
- How do I persist text using localStorage in Vue?
- How do I toggle Bootstrap themes dynamically?

## Reflection

### 1. How did you utilise AI to help you code the app?

I used AI as a support tool when I got stuck rather than asking it to build the whole project for me. I mainly asked for step-by-step guidance and explanations so I could understand what I was changing and why. AI helped me fix Git setup mistakes, debug layout issues, understand Vue concepts like computed properties and watchers, and correct problems with the character counter. I still implemented and tested each change myself.

---

### 2. What part of the build was most challenging?

The most challenging parts were debugging small mistakes. Initialising Git in the wrong folder caused confusion early on, and later I ran into issues like having duplicate `<body>` tags and incorrect character counts due to newline characters. Getting the responsive layout to behave correctly on both mobile and desktop also required careful adjustments.

---

### 3. What is the benefit of using a framework such as Vue for frontend development?

Vue makes it much easier to manage state and keep the UI updated automatically. Instead of manually manipulating the DOM, Vue reacts to changes in data and updates the interface for you. This made features like the live preview, character counter, theme toggle, and localStorage persistence cleaner and easier to manage.