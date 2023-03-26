if(localStorage.getItem('main_level') === null) {
    back_to_default_values();
}

function back_to_default_values() {
    localStorage.setItem('main_level', 1);
    localStorage.setItem('main_level_width', '0%');
    localStorage.setItem('main_level_current_bar_value', 0);
    localStorage.setItem('main_level_max_bar_value', 100);
    localStorage.setItem('main_level_current_bar_value_percentage', 0);
}