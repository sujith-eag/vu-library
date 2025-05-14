<template>
    <div class="project-page">
      <div class="p-heading">
        <h1>My Practice Projects</h1>
      </div>
  
      <div class="site-description">
        <p class="entry">Welcome to my project showcase!</p>
        <p>
          This is a collection of projects I've implemented as part of my learning journey.
          Each project reflects a growing skillset in HTML, CSS, JavaScript, and modern frameworks.
        </p>
      </div>
  
      <div class="projects-block">
        <div class="individual-project" v-for="project in projects" :key="project.title">
          <a :href="project.link" target="_blank" rel="noopener noreferrer">
            <h2>{{ project.title }}</h2>
            <p class="project-description" v-html="project.description"></p>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const projects = [
    {
      title: "Responsive UI Catalog site",
      link: "https://sujith-eag.github.io/library/",
      description:
        "An interactive and responsive site acting as a catalog for various learning topics. Serves as a UI wrapper for the main content library."
    },
    {
      title: "Sujith's Library Website",
      link: "https://sujith-eag.github.io/personal-site/",
      description:
        "A personal knowledge library with notes and resources, built using Hugo and deployed via GitHub Pages."
    },
    {
      title: "Form Exercises",
      link: "https://sujith-eag.github.io/projects/forms/form_1.html",
      description: "Practice on HTML forms and tables. <b>Submit to move to next one!</b>"
    },
    {
      title: "Black Jack Card Game",
      link: "https://sujith-eag.github.io/projects/blackjack/index.html",
      description: "A simple Black-Jack game using JavaScript and DOM manipulation."
    },
    {
      title: "Rock Paper Scissor Game",
      link: "https://sujith-eag.github.io/projects/rps_game/index.html",
      description: "Classic game logic with a best-of-three challenge and reset button."
    },
    {
      title: "Basic Shopping List",
      link: "https://sujith-eag.github.io/projects/shopping_list/index.html",
      description: "Create and manage items using prompts and JavaScript."
    },
    {
      title: "A Counter App",
      link: "https://sujith-eag.github.io/projects/simple_counter/index.html",
      description: "Event-driven passenger counter app."
    },
    {
      title: "Google Page Clone",
      link: "https://sujith-eag.github.io/projects/google_page/index.html",
      description: "A minimal clone of Google's homepage using CSS Flexbox."
    },
    {
      title: "Personal Card",
      link: "https://sujith-eag.github.io/projects/personal_site/index.html",
      description: "Basic personal profile card built with HTML & CSS."
    }
  ];
  </script>
  
  <style>
/* VitePress Reset Box */
.project-page {
  all: initial;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
  background: #f4f6f8;
  padding: 2rem;
}

.p-heading {
  text-align: center;
  padding: 20px;
  background-color: #2c3e50;
  color: #fff;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.entry {
  font-size: 1.2rem;
  font-weight: 600;
}

.site-description {
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.projects-block {
  max-width: 800px;
  margin: 0 auto;
}

.individual-project {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 1rem 1.25rem;
  margin-bottom: 1.25rem;
  transition: transform 0.2s ease, background 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.individual-project:hover {
  transform: scale(1.02);
  background: linear-gradient(to right, #e0f7fa, #c5cae9);
}

.individual-project h2 {
  margin: 0;
  padding: 0;
  border: none;
  margin-bottom: 0.5rem;
  color: #007acc;
  font-size: 1.2rem;
}

.individual-project a {
  text-decoration: none;
  color: inherit;
}

.project-description {
  margin-top: 0.5rem;
  color: #555;
  font-size: 0.95rem;
}

/* Mobile Friendly */
@media (max-width: 600px) {
  .project-page {
    padding: 1rem;
  }

  .site-description {
    font-size: 0.95rem;
  }

  .individual-project h2 {
    font-size: 1rem;
  }
}
</style>
