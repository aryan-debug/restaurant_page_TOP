import {clear_content, change_to_current_tab, home_page, menu_page, contact_page } from "..";

function make_header() {
    const header = document.createElement("div")
    const logo = document.createElement("p");
    const right_side = document.createElement("div");
    const home = document.createElement("p");
    const menu = document.createElement("p");
    const contact = document.createElement("p");

    logo.textContent = "Fodo";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    header.classList.add("header");
    right_side.classList.add("header-right");
    home.id = "menu-active";
    logo.id = "logo";

    right_side.append(home, menu, contact);
    header.append(logo, right_side);

    home.addEventListener("click", (e) => {
        clear_content(); home_page(); change_to_current_tab(e)
    });
    menu.addEventListener("click", (e) => {
        clear_content(); menu_page(); change_to_current_tab(e)
    })
    contact.addEventListener("click", (e) => {
        clear_content(); contact_page(); change_to_current_tab(e)
    })
    return header;
}

export { make_header };