<template>
    <div class="profile-container">
      <div class="profile-card">
  
        <!-- Avatar + Name -->
        <div class="image-name-card">
          <img src="/sujith_1.webp" alt="Sujith's Avatar" class="avatar" />
          <div>
            <h1>Sujith Kumar</h1>
            <p class="tagline">Full-stack Developer | Cyber Security Enthusiast</p>
          </div>
        </div>
  
        <p class="bio">
          I’m passionate about building scalable web apps, exploring cybersecurity concepts, and
          continuously evolving as a developer. I love working with JavaScript, React, Vue, and backend APIs.
        </p>
  
        <!-- Section Cards -->
        <div class="section-card">
          <h2>💼 Links</h2>
          <div class="info-list">
            <a href="https://github.com/sujith-eag" target="_blank"><img src="/logo/github-w.svg" alt="GitHub" /> GitHub</a>
            <a href="mailto:sujith.eag@gmail.com"><img src="/logo/gmail.svg" alt="Email" /> Email</a>
            <a href="https://www.linkedin.com/in/sujith-eag/"><img src="/logo/linkedin_c.svg" alt="LinkedIn" /> LinkedIn</a>
            <a href="/sujith_resume.pdf" target="_blank"><img src="/logo/resume.svg" alt="Resume" /> Resume</a>
          </div>
        </div>
    
        <div class="section-card">
          <h2>🧩 Technical Skills</h2>
          <ul class="skills-list">
            <li><b>Languages:</b> C, Bash, Java, Python, SQL, MongoDB</li>
            <li><b>Web Development:</b> React.js, Vue.js, Flask, TypeScript, JavaScript, HTML/CSS</li>
            <li><b>Tools & Libraries:</b> NumPy, Matplotlib, GitHub, VS Code, IntelliJ, Node.js, Obsidian, LaTeX</li>
          </ul>
        </div>
  
        <div class="section-card">
          <h2>📂 Projects</h2>
          <ul class="project-list">
            <li>
              <b>Sujith’s Library</b> – Vue.js, TypeScript, Vite, VitePress, GitHub Actions<br />
              Maintains a 600+ page programming site with code, notes, and visuals. Open-source & auto-deployed.
            </li>
            <li>
              <b>Note’s Library</b> – Hugo, GitHub Pages<br />
              Personal note-based site on programming concepts with searchable topic catalog.
            </li>
          </ul>
        </div>
  
        <div class="section-card">
          <h2>🎓 Education</h2>
          <ul class="edu-list">
            <li><b>MCA</b>, MSRIT – CGPA: 9.66 (2024–2026)</li>
            <li><b>B.Ed</b>, SKC (BNU) – CGPA: 8.86 (2018–2020)</li>
            <li><b>B.Sc (PCM)</b>, SKC (BU) – 56.3% (2011–2014)</li>
            <li><b>PUC (PCMB)</b>, SKC – 51.0% (2009–2011)</li>
            <li><b>SSLC</b>, MABL – 78.1% (2009)</li>
          </ul>
        </div>
  
        <div class="section-card">
          <h2>📚 Publications</h2>
          <ul class="pubs">
            <li><b>Adaptive Chaos-Based Encryption</b>, SRC-2025, Dayananda Sagar</li>
            <li><b>Cryptography via Graph Structures</b>, Case Study, MSRIT</li>
          </ul>
        </div>
  
        <div class="section-card">
          <h2>🛠 Workshops & Trainings</h2>
          <p>
            <b>IoT 4.0:</b> Industry-focused IoT workshop on NodeMCU, Arduino, and sensor automation using Python.
          </p>
        </div>
  
        <div class="section-card">
          <h2>🎯 Goals</h2>
          <p>
            Continue building real-world apps, contribute to open-source projects, and dive deeper into system design and backend engineering.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .profile-container {
    display: flex;
    justify-content: center;
    padding: 3rem;
    background: #3c4148;
  }
  
  .profile-card {
    max-width: 960px;
    width: 100%;
    padding: 2rem;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .image-name-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    margin: 0;
  }
  
  .tagline {
    font-style: italic;
    color: #666;
    margin-top: 0.3rem;
  }
  
  .bio {
    font-size: 1rem;
    margin-bottom: 2rem;
    color: #333;
    text-align: center;
  }
  
  .section-card {
    margin-bottom: 1rem;
    padding: 1.5rem;
    background: #b5b5b5;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(118, 111, 111, 0.749);
  }
  
  .section-card h2 {
    all: unset;
    margin-bottom: 1rem;
    color: #2c3e50;
    font-size: 1.2rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
  }
  
  .info-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.3rem;
}

.info-list a {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  text-decoration: none;
  color: #007acc;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  background: #f0f4f8;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.info-list a:hover {
  background: #e1effc;
}

.info-list img {
  width: 24px;
  height: 24px;
  margin: 0;
}

    
.skills-list, .project-list, .edu-list, .pubs {
    list-style: none;
    padding-left: 0;
}

.skills-list li, .project-list li, .edu-list li, .pubs li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
}
</style>
