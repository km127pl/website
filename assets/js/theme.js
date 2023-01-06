const themes = [
    {
        id: "dark",
        name: "Normal Dark",
        description: "The default dark theme for my page.",
        type: "dark",
        colors: {
            accent: "#4c4ace",
            dark: "#070707",
            lighter_dark: "#141414",
            text: "#ffffff"
        }
    },
    {
        id: "gruvbox-dark",
        name: "Gruvbox Dark",
        description: "The gruvbox-inspired theme.",
        type: "dark",
        colors: {
            accent: "#b16286",
            dark: "#282828",
            lighter_dark: "#3c3836",
            text: "#fbf1c7"
        }
    },
    {
        id: "material-dark",
        name: "Material Dark",
        description: "The Material Design dark theme.",
        type: "dark",
        colors: {
            accent: "#3949ab",
            dark: "#212121",
            lighter_dark: "#424242",
            text: "#ffffff"
        }
    },
    {
        id: "catppuccino",
        name: "Catppuccino",
        description: "A warm, cozy theme inspired by catppuccino.",
        type: "light",
        colors: {
            accent: "#f4a261",
            dark: "#f5f5f5",
            lighter_dark: "#fdfdfe",
            text: "#333333"
        }
    },
    {
        id: "solarized-dark",
        name: "Solarized Dark",
        description: "The classic Solarized dark theme.",
        type: "dark",
        colors: {
            accent: "#268bd2",
            dark: "#002b36",
            lighter_dark: "#073642",
            text: "#839496"
        }
    },
    {
        id: "dracula",
        name: "Dracula",
        description: "A dark theme with a gothic twist.",
        type: "dark",
        colors: {
            accent: "#ff79c6",
            dark: "#282a36",
            lighter_dark: "#44475a",
            text: "#f8f8f2"
        }
    },
    {
        id: "molokai",
        name: "Molokai",
        description: "A dark, retro theme inspired by the Molokai color scheme for Vim.",
        type: "dark",
        colors: {
            accent: "#f1fa8c",
            dark: "#1d1f21",
            lighter_dark: "#282a2e",
            text: "#f8f8f2"
        }
    },
    {
        id: "oceanic-next",
        name: "Oceanic Next",
        description: "A bright, ocean-inspired theme.",
        type: "light",
        colors: {
            accent: "#00bcd4",
            dark: "#ffffff",
            lighter_dark: "#f5f5f5",
            text: "#333333"
        }
    }
]

const getTheme = (id) => {
    return themes.filter((theme) => theme.id == id)[0];
}

const getThemeIdByName = (name) => {
    return themes.filter((theme) => theme.name == name)[0].id;
}

const getThemeNames = () => {
    return themes.map((theme) => theme.name);
}

const loadThemeFromPreferences = () => {
    setTheme(localStorage.getItem("k-theme") || "dark");
}

const setTheme = (id) => {
    const root = document.querySelector(':root');
    const logo = document.getElementById("navbar-logo");
    const { type, colors } = getTheme(id);
    localStorage.setItem("k-theme", id);

    root.style.setProperty('--dark', colors.dark);
    root.style.setProperty('--lighter-dark', colors.lighter_dark);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--text', colors.text);

    if (type == "dark") {
        logo.src = "/assets/img/favicon-white.png";
    } else {
        logo.src = "/assets/img/favicon-black.png";
    }
}

const getThemes = () => {
    return themes;
}