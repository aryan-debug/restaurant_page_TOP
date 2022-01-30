const main_course_menu = {
    "Pizza": "$120",
    "Chicken": "$23",
}
import { clear_content, content, make_header } from "..";
import main_course_image from "../images/burger.png";
import steak_image from "../images/steak.png";
import macrons_image from "../images/macrons.png";

function make_grid() {
    const grid = document.createElement("div");
    const main_course = document.createElement("div");
    const starters = document.createElement("div");
    const desserts = document.createElement("div");
    const main_course_content = document.createElement("p");
    const starters_content = document.createElement("p");
    const desserts_content = document.createElement("p");

    grid.classList.add("menu-grid");
    main_course.classList.add("main-course", "dish");
    starters.classList.add("starters", "dish");
    desserts.classList.add("desserts", "dish");

    main_course.addEventListener("click", () => render_menu("Main Course", main_course_menu, main_course_image));
    starters.addEventListener("click", () => render_menu("Starters", main_course_menu, steak_image));
    desserts.addEventListener("click",()=> render_menu("Desserts", main_course_menu, macrons_image));

    main_course_content.textContent = "Main Course";
    starters_content.textContent = "Starters";
    desserts_content.textContent = "Desserts";

    main_course.append(main_course_content);
    starters.append(starters_content);
    desserts.append(desserts_content);
    grid.append(main_course, starters, desserts);

    return grid;
}

function render_menu(heading, menu_items, bg_image) {
    clear_content();
    const menu_container = document.createElement("div");
    const menu_heading = document.createElement("h1");
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const head_row = document.createElement('tr');
    const dish_name = document.createElement('th');
    const price = document.createElement('th');

    menu_container.id = "menu-container";
    menu_heading.id = "menu-heading"
    menu_container.style.cssText += `background: url(${bg_image}); background-repeat: no-repeat; background-size:cover`
    menu_heading.textContent = heading;

    dish_name.textContent = "Dish Name";
    price.textContent = "Price";

    price.classList.add("right")

    for (let dish in menu_items) {
        const trow = document.createElement("tr");
        const td = document.createElement("td");
        const td_2 = document.createElement("td");

        td.textContent = dish;
        td_2.textContent = menu_items[dish]
        td_2.classList.add("right")
        trow.append(td, td_2)
        tbody.append(trow);
    }

    head_row.append(dish_name, price);
    thead.appendChild(head_row)
    table.appendChild(thead);
    table.appendChild(tbody);
    menu_container.append(menu_heading)
    menu_container.append(table);
    content.append(menu_container);
}

export { make_grid, render_menu };