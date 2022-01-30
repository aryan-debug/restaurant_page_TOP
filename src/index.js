
import { make_header } from "./components/header";
import { main_course_menu, main_course_page, make_grid, render_menu } from "./components/make_grid";
import "./styles/home_page.css";
import "./styles/header.css";
import "./styles/menu_page.css";
import "./styles/contact.css";
function home_page() {
    const home_content = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = "EAT ENJOY REPEAT";
    heading.classList.add("home-heading");
    home_content.classList.add("home-content");
    home_content.append(heading);
    content.append(home_content);

}

function menu_page() {
    content.append(make_grid());
}

function clear_content() {
    while (content.childNodes.length > 2) {
        content.removeChild(content.lastChild);
    }

}
function change_to_current_tab(e) {
    document.querySelectorAll("#menu-active").forEach((tab) => tab.removeAttribute("id"));
    e.target.id = "menu-active";
}

function contact_page() {
    const contact_container = document.createElement("div");
    const phone = document.createElement("div");
    const phone_number = document.createElement("p")
    const phone_icon = document.createElement("i");
    const location_icon = document.createElement("i");
    const contact_heading = document.createElement("h1");
    contact_container.id = "contact-container"
    phone_icon.classList.add("fas", "fa-phone")
    phone_number.textContent = "123-456-7890";
    phone.append(phone_icon, phone_number)
    phone.id= "phone-container"
    contact_heading.textContent = "Contact Us!";
    location_icon.textContent = "    12345 67th Avenue"

    location_icon.classList.add("fas","fa-map-marker-alt");

    contact_container.append(contact_heading, phone, location_icon)

    content.appendChild(contact_container)

}
const content = document.getElementById("content");
content.append(make_header())
home_page()
export {clear_content, make_header, content, home_page, menu_page, change_to_current_tab, contact_page}