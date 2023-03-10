const parseCustomButtons = () => {
    const buttons = document.getElementsByClassName("btn-custom");
    for (const index in Object.keys(buttons)) {
        const button = buttons[index];
        button.addEventListener("click", (event) => {
            location.href = event.target.getAttribute("--data-url");
        });
        console.log(button);
    }
};
