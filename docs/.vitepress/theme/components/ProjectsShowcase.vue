<template>
  <div class="project-page">
    <div class="p-heading">
      <h1>My Practice Projects</h1>
    </div>

    <div class="site-description">
      <p class="entry">Welcome to my project showcase!</p>
      <p>
        This is a collection of projects I've implemented as part of my learning journey.
        Each project reflects a growing skill set in HTML, CSS, JavaScript, and modern frameworks like React, Vue and Backend Technologies Express, MongoDB.
      </p>
    </div>

    <div class="projects-block">
      <div class="individual-project" v-for="project in projects" :key="project.title">
        <a :href="project.link" target="_blank" rel="noopener noreferrer">
          <h3>{{ project.title }}</h3>
          <p class="project-description" v-html="project.description"></p>
        </a>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
  const projects = [
    {
      title: "State managed Task App",
      link: "https://task.sujith-eag.in/",
      description: 
      "MERN Stack application that handles Authentication and User State using Redux loolkit. Data Storage in MongoDB server, Hosted on Netlify with Backend Operations in Render"
    },
    {
      title: "Library and Portfolio Site",
      link: "https://www.sujith-eag.in/",
      description:
      "A Full Scale Library Site built using Vue.js Node.js with over 600 Properly Organised pages. Hosted on Netlify with Backend Operations and Authentication"
    },
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
  

  <style scoped>
.project-page {
  --bg-light: #eef1f6;
  --bg-dark: #1b1e23;
 
  --card-light: #ffffff;
  --card-dark: #262a31;
 
  --text-light: #2c3e50;
  --text-dark: #e5e7eb;
 
  --subtext-light: #5f6b7a;
  --subtext-dark: #9faab5;
 
  --accent-light: #287cfa;
  --accent-dark: #4aa8ff;
 
  --hover-light: #eef5ff;
  --hover-dark: #2d323b;
}
  
  .p-heading {
    max-width: 800px;
    margin: 0 auto 2rem;
    text-align: center;
    margin-bottom: 2rem;
    padding: 1rem 1.5rem;
    border-radius: 12px;
        
    background-color: var(--accent-light);
    color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  html.dark .p-heading {
    background-color: var(--accent-dark);
  }
  
  
  .project-page {
    all: initial;
    padding: 2rem;
    background-color: var(--bg-light);
    color: var(--text-light);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: background 0.3s ease, color 0.3s ease;
  }
  html.dark .project-page {
    background-color: var(--bg-dark);
    color: var(--text-dark);
  }
  
  .site-description {
    max-width: 800px;
    margin: 0 auto 2rem;
    padding: 1.5rem;
    background: var(--card-light);
    border-radius: 12px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
    text-align: center;
    font-weight:500;
    color: var(--subtext-light);
  }
  
  html.dark .site-description {
    background: var(--card-dark);
    color: var(--subtext-dark);
  }
  
  .entry {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-light);
  }
  html.dark .entry {
    color: var(--text-dark);
  }
  
  
  .projects-block {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    gap: 1.5rem;
  }


  .individual-project {
    background-color: var(--card-light);
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: transform 0.2s ease, background-color 0.3s ease;
  }  
  html.dark .individual-project {
    background-color: var(--card-dark);
    box-shadow: 0 2px 8px rgba(255, 255, 255, 0.04);
  }
  .individual-project:hover {
    transform: translateY(-4px);
    background-color: var(--hover-light);
  }
  html.dark .individual-project:hover {
    background-color: var(--hover-dark);
  }
  .individual-project h3 {
    font-size: 1.2rem;
    margin: 0 0 0.5rem;
    color: var(--accent-light);
  }
  html.dark .individual-project h3 {
    color: var(--accent-dark);
  }
  .individual-project a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
  
  
  .project-description {
    font-size: 0.95rem;
    color: var(--subtext-light);
  }
  html.dark .project-description {
    color: var(--subtext-dark);
  }
  
  
  
  @media (max-width: 600px) {
    .project-page {
      padding: 1rem;
    }
  
    .site-description {
      padding: 1rem;
    }
  
    .individual-project h3 {
      font-size: 1.05rem;
    }
  
    .project-description {
      font-size: 0.9rem;
    }
  }
  </style>
    
