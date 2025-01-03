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

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% endif %}


<script>
  document.addEventListener("DOMContentLoaded", function () {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const images = document.querySelectorAll(".repo-img");

    images.forEach((img) => {
      const darkSrc = img.getAttribute("data-dark");
      const lightSrc = img.getAttribute("src");

      img.setAttribute("src", isDarkMode ? darkSrc : lightSrc);

      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        img.setAttribute("src", e.matches ? darkSrc : lightSrc);
      });
    });
  });
</script>

