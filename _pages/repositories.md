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
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const images = document.querySelectorAll(".repo-img");

    function updateImageTheme(img) {
      const darkSrc = img.getAttribute("data-dark");
      const lightSrc = img.getAttribute("data-light");
      img.setAttribute("src", isDarkMode ? darkSrc : lightSrc);
    }

    images.forEach((img) => updateImageTheme(img));

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      images.forEach((img) => {
        isDarkMode = e.matches;
        updateImageTheme(img);
      });
    });
  });
</script>
