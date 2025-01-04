---
layout: page
permalink: /repositories/
title: repositories
nav: true
nav_order: 4
---

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

---

{% if site.data.repositories.github_users %}

## GitHub Stats

<div class="repositories d-flex flex-wrap justify-content-between align-items-start">
  {% for user in site.data.repositories.github_users %}
    <div class="repo-stats-container d-flex flex-wrap w-100">
      {% include repository/repo_user.liquid username=user %}
    </div>
  {% endfor %}
</div>

{% endif %}

<script>
  document.addEventListener("DOMContentLoaded", function () {
    function getInitialTheme() {
      const userPref = localStorage.getItem("theme");
      const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      return userPref || systemPref || "dark"; // Default to dark
    }

    function updateTheme(theme) {
      const images = document.querySelectorAll(".repo-img");
      images.forEach((img) => {
        const darkSrc = img.getAttribute("data-dark");
        const lightSrc = img.getAttribute("data-light");
        img.setAttribute("src", theme === "dark" ? darkSrc : lightSrc);
      });

      document.body.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }

    const initialTheme = getInitialTheme();
    updateTheme(initialTheme);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      updateTheme(e.matches ? "dark" : "light");
    });
  });
</script>
