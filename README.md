# Hybrid recomendation system app 

## Overview
This project implements a Hybrid Recommendation System using various recommendation techniques, such as content-based, context-based, and AI-based filtering. The app displays job recommendations to users based on a combination of these techniques.

## Preview
![App Preview](src/assets/preview.png)

## Project files

```
recommender-app
├─ 📁src
│  ├─ 📁assets
│  ├─ 📁components
│  │  ├─ 📁floatingContainer
│  │  │  └─ 📄FloatingContainer.jsx
│  │  ├─ 📁footer
│  │  │  └─ 📄Footer.jsx
│  │  ├─ 📁recomendationsCarousel
│  │  │  └─ 📄RecomendationCarousel.jsx
│  │  ├─ 📁showJobs
│  │  │  └─ 📄ShowJobs.jsx
│  │  ├─ 📁showRecomendations
│  │  │  └─ 📄ShowRecomendations.jsx
│  │  ├─ 📁similarityBadge
│  │  │  └─ 📄SimilarityBage.jsx
│  │  └─ 📁welcomeMessage
│  │     └─ 📄WelcomeMessage.jsx
│  ├─ 📁pages
│  │  └─ 📁mainPage
│  │     └─ 📄MainPage.jsx
│  ├─ 📁services
│  │  ├─ 📄env.service.js
│  │  └─ 📄jobs.service.js
│  ├─ 📁utils
│  │  ├─ 📄floatToPerc.js
│  │  └─ 📄trimString.js
│  ├─ 📄App.jsx
│  ├─ 📄index.css
│  └─ 📄main.jsx
├─ 📄.env
├─ 📄.gitignore
├─ 📄eslint.config.js
├─ 📄index.html
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄postcss.config.js
├─ 📄README.md
├─ 📄tailwind.config.js
└─ 📄vite.config.js
```

## Install

To get started with the project, install the necessary dependencies:
~~~ bash
npm install
~~~
\* Alternatively, you can use:
~~~ bash
npm i
~~~

## Running the Project
To run the project locally in development mode, use the following command:
~~~ bash
npm run dev
~~~

### Demo Mode Information
This app currently runs in demo mode as a static frontend. It showcases the layout and UI/UX of the recommendation system.
* ✅ The data shown is mock data for illustration purposes.
* 🚫 The search functionality is non-operational and only opens an informational message.
* 📝 No real-time recommendations or backend API integration are included in this version.
