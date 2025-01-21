const langButtons = document.querySelectorAll(("data-language"));
const textsToChange = document.querySelectorAll("[data-section]");

langButtons.forEach((button) => {
    button.addEventListener("click", () => {

        fetch('../i18n/${button.dataset.language}.json')
            .then(res => res.json())
            .then(i18n => {
            textsToChange.forEach((el) => {
                const section = el.dataset.section;
                const value = el.dataset.value;

            text.innerHTML = data[lang][text.dataset.section];
        });
    });
    });
});