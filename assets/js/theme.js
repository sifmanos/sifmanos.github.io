// Has to be in the head tag, otherwise a flicker effect will occur.

// Toggle between light and dark themes only.
let toggleThemeSetting = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting === "light") {
    setThemeSetting("dark");
  } else {
    setThemeSetting("light");
  }
};

// Change the theme setting and apply the theme globally.
let setThemeSetting = (themeSetting) => {
  localStorage.setItem("theme", themeSetting);
  document.documentElement.setAttribute("data-theme-setting", themeSetting);
  applyTheme();
};

// Apply the dark or light theme to the website.
let applyTheme = () => {
  let theme = determineThemeSetting();

  transTheme();
  setHighlight(theme);
  setGiscusTheme(theme);
  setSearchTheme(theme);

  if (typeof mermaid !== "undefined") {
    setMermaidTheme(theme);
  }

  if (typeof Diff2HtmlUI !== "undefined") {
    setDiff2htmlTheme(theme);
  }

  if (typeof echarts !== "undefined") {
    setEchartsTheme(theme);
  }

  if (typeof vegaEmbed !== "undefined") {
    setVegaLiteTheme(theme);
  }

  document.documentElement.setAttribute("data-theme", theme);

  // Add class to tables.
  let tables = document.getElementsByTagName("table");
  for (let i = 0; i < tables.length; i++) {
    if (theme === "dark") {
      tables[i].classList.add("table-dark");
    } else {
      tables[i].classList.remove("table-dark");
    }
  }

  // Set Jupyter notebook themes.
  let jupyterNotebooks = document.getElementsByClassName("jupyter-notebook-iframe-container");
  for (let i = 0; i < jupyterNotebooks.length; i++) {
    let bodyElement = jupyterNotebooks[i].getElementsByTagName("iframe")[0].contentWindow.document.body;
    if (theme === "dark") {
      bodyElement.setAttribute("data-jp-theme-light", "false");
      bodyElement.setAttribute("data-jp-theme-name", "JupyterLab Dark");
    } else {
      bodyElement.setAttribute("data-jp-theme-light", "true");
      bodyElement.setAttribute("data-jp-theme-name", "JupyterLab Light");
    }
  }

  if (typeof medium_zoom !== "undefined") {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee",
    });
  }
};

// Get the current theme setting from localStorage or default to "dark".
let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  return themeSetting === "light" || themeSetting === "dark" ? themeSetting : "dark"; // Default to dark
};

// Initialize the theme on page load and set up event listeners.
let initTheme = () => {
  let themeSetting = determineThemeSetting();
  setThemeSetting(themeSetting);

  // Ensure theme toggle works on all tabs.
  document.addEventListener("DOMContentLoaded", function () {
    const mode_toggle = document.getElementById("light-toggle");
    if (mode_toggle) {
      mode_toggle.addEventListener("click", function () {
        toggleThemeSetting();
      });
    }
  });

  // Ensure dynamic updates across all tabs.
  window.addEventListener("storage", function (e) {
    if (e.key === "theme") {
      applyTheme();
    }
  });
};
