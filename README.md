# Nashit Budhwani - Personal Portfolio

This is the repository for my personal portfolio website, built to showcase my skills, experience, and projects. It's a modern, responsive, and animated single-page application created with React and Tailwind CSS.

### [View Live Demo](https://nashitbudhwani.github.io/portfolio/)

---

## ✨ Features

- **Modern UI Design**: Clean, modern aesthetic with a dark mode toggle.
- **Smooth Animations**: Subtle animations and transitions using `AOS` (Animate on Scroll) for an engaging user experience.
- **Responsive Layout**: Fully responsive design that looks great on desktops, tablets, and mobile devices.
- **Dynamic Content**: Sections for an introduction, about me, skills, services, experience, projects, and contact information.
- **Typed.js Effect**: An eye-catching typing animation in the hero section.
- **Project Filtering**: Filter projects by category (Web, AI/ML).

## 🚀 Technologies Used

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typing Animation**: [React Typed](https://www.npmjs.com/package/react-typed)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

You'll need to have [Node.js](https://nodejs.org/en/) (version 16 or later) and a package manager like [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) installed.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Development Server

To start the local development server, run the following command:

```sh
npm run dev
```

This will start the application, and you can view it in your browser at `http://localhost:5173` (or another port if 5173 is in use). The server will automatically reload when you make changes to the code.

## 🚢 Deployment

This project is set up for easy deployment to GitHub Pages.

1.  **Install `gh-pages`:**
    ```sh
    npm install gh-pages --save-dev
    ```

2.  **Add deploy scripts to `package.json`:**
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist",
      // ... other scripts
    }
    ```
    
3. **Add `homepage` to `package.json`:**
   ```json
    "homepage": "https://<your-github-username>.github.io/<your-repo-name>",
   ```

4.  **Deploy the application:**
    ```sh
    npm run deploy
    ```

This will create a `gh-pages` branch on your repository, and your site will be available at the URL specified in the `homepage` field.

---

Feel free to explore the code, and don't hesitate to reach out if you have any questions! 