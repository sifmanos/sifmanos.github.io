---
layout: page
permalink: /repositories/
title: repositories
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

## GitHub Stats

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>



{% endfor %}
{% endif %}
{% endif %}



{% if site.data.repositories.github_repos %}


## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

---

## Waka Stats

<body>
  <div id="wakatime-stats" style="display: flex; flex-direction: row; align-items: center; justify-content: space-around; width: 100%; max-width: 800px; margin: 0 auto; overflow: hidden;">
    <!-- This container will be populated by the script -->
    ---
  </div>

  <script>
    // Function to determine the current theme
    function getCurrentTheme() {
      const theme = localStorage.getItem('theme') || 'system';
      if (theme === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return theme;
    }

    // Inject Wakatime stats based on the theme
    const currentTheme = getCurrentTheme();
    const wakatimeStatsContainer = document.getElementById('wakatime-stats');
    wakatimeStatsContainer.innerHTML = currentTheme === 'dark' ? `
      <figure style="flex: 1; margin: 5px;">
        <embed src="https://wakatime.com/share/@stperrakis/2758fa45-5826-485b-9fc8-2cbaab56408d.svg" style="width: 100%; height: auto; max-width: 100%;"></embed>
      </figure>
      <figure style="flex: 1; margin: 5px;">
        <embed src="https://wakatime.com/share/@stperrakis/1426fa0f-b937-4003-a817-4f1590a0d8b7.svg" style="width: 100%; height: auto; max-width: 100%;"></embed>
      </figure>
    ` : `
      <figure style="flex: 1; margin: 5px;">
        <embed src="https://wakatime.com/share/@stperrakis/15a8c207-63b0-41c1-be29-b21a1196ba4b.svg" style="width: 100%; height: auto; max-width: 100%;"></embed>
      </figure>
      <figure style="flex: 1; margin: 5px;">
        <embed src="https://wakatime.com/share/@stperrakis/4d26bfdd-0e56-4779-9ee6-fd23792112ec.svg" style="width: 100%; height: auto; max-width: 100%;"></embed>
      </figure>
    `;
  </script>
</body>
