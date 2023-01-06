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


document.addEventListener("DOMContentLoaded", async () => {
    const postId = document.location.href.split("?id=")[1] || "";
    if (postId == "") {
        console.log("No posts found, displaying posts list page")
        const posts = await fetch("/post/posts.json").then((data) => data.json());
        for (const index in Object.keys(posts)) {
            const post = posts[index];
            const postTemplate = getPostByTemplate(post.id, post.title, post.description.join(" "), post.url);

            console.log(postTemplate);
            document.getElementById("posts").innerHTML += `${postTemplate}`;
        }

        const _posts = document.getElementsByClassName("post");
        for (const index in Object.keys(_posts)) {
            const post = _posts[index];

            post.style.left = `${(parseInt(index) + 0.1) * 23}%`;
        }
        parseCustomButtons();
    }


    let post = await (await fetch(`/post/posts/${postId}.md`)).text();
    console.log(`${post}`);
    post = post.split('---')[2];
    document.getElementById('posts').innerHTML = marked.parse(post);
});