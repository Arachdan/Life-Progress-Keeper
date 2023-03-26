window.addEventListener('load', display_main_level);

function display_main_level() {
    const main_level_field_label = document.getElementById('main_level_field_label');
    const main_level = document.getElementById('main_level');

    main_level_field_label.innerText = 'Poziom: ' + localStorage.getItem('main_level');
    main_level.style.width = localStorage.getItem('main_level_width');
}