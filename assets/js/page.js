const getPostByTemplate = (id, title, description, url) => {
    return `<div class="post" --data-index="${id}">
            <h1>${title}</h1>
            <span class="description">
                ${description}
            </span>
            <br><button class="btn-custom post-read" --data-url="${url}">
                Read post
            </button>
        </div>`;
}

const posts = [{
    id: 0,
    title: "Welcome to my site!",
    description: "This post doesn't actually exist<br/>it will be made later.",
    url: "https://km127pl.us",
    visible: true
}];

document.addEventListener("DOMContentLoaded", () => {

    // set the default theme
    loadThemeFromPreferences();

    // add a redirect to all of the buttons
    const buttons = document.getElementsByClassName("btn-custom");
    for (const index in Object.keys(buttons)) {
        const button = buttons[index];
        button.addEventListener("click", (event) => {
            location.href = event.target.getAttribute("--data-url");
        })
    }

    // update the indexes of the blog posts
    // TODO: this will only work for 3, maybe 4 posts.
    // WONTFIX: need to learn css bruv
    const _templates = posts.map((post) => {
        if (post.visible) return getPostByTemplate(post.id, post.title, post.description, post.url)
        return null;
    });
    const blogSection = document.getElementById("blog");
    blogSection.innerHTML = `<h1>Latest blog posts</h1>${_templates.join("")}`
    const _posts = document.getElementsByClassName("post");
    for (const index in Object.keys(_posts)) {
        const post = _posts[index];

        post.style.left = `${index * 25}%`;
    }

    // update the themes list
    const themesList = document.getElementById("themes");
    const themes = getThemes();
    themes.sort((theme) => theme.type !== "dark");
    themesList.innerHTML = themes.map((theme) => `<option value="${theme.id}">${theme.name}</option>`);

    themesList.addEventListener("change", (event) => {
        setTheme(event.target.value);
        console.log(`Changing theme to ${event.target.value}`);
    })
});