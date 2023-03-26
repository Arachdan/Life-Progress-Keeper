window.addEventListener('load', load_sub_levels);

function load_sub_levels() {
    const sub_levels_container = document.getElementById('sub_levels_container');
    sub_levels_container.innerHTML = localStorage.getItem('sub_levels_container');

    let logs_number = localStorage.getItem('logs_number');
    for(i = 0; i < logs_number; i++) {
        sessionStorage.setItem('load_sub_levels_i_variable_value', i);

        document.getElementById(sub_levels_logs_buttons[i]).addEventListener('click', function() {
            show_sub_level_log(localStorage.getItem(this.id + '_number'), this);
        });
        if(screen.width <= 810 && screen.height <= 1080) document.getElementById(sub_levels_logs_buttons[i]).style.fontSize = '35px';
        else document.getElementById(sub_levels_logs_buttons[i]).style.fontSize = '15px';
        document.getElementById(sub_levels_logs_buttons[i]).style.width = '35%';
        document.getElementById(sub_levels_logs_buttons[i]).addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        });

        const j = sessionStorage.getItem('load_sub_levels_i_variable_value');
        document.getElementById(sub_levels_logs_add_new_log_activity_buttons[j]).addEventListener('click', function() {
            const passed_textarea = document.getElementById(sub_levels_logs_add_new_log_activity_textareas[localStorage.getItem(document.getElementById(sub_levels_logs_buttons[j]).id + '_number')]);
            const passed_log_list = document.getElementsByClassName('logs')[localStorage.getItem(document.getElementById(sub_levels_logs_buttons[j]).id + '_number')].childNodes[0];
            const passed_xp_points_number_field = document.getElementById(sub_levels_logs_add_new_log_activity_xp_points_numbers_fields[localStorage.getItem(document.getElementById(sub_levels_logs_buttons[j]).id + '_number')]);
            const passed_progress_bar = document.getElementById(sub_levels_bars[localStorage.getItem(document.getElementById(sub_levels_logs_buttons[j]).id + '_number')]);
            const passed_progress_bar_value = sub_levels_bars_values[localStorage.getItem(document.getElementById(sub_levels_logs_buttons[j]).id + '_number')];
            const passed_current_array_number = localStorage.getItem(document.getElementById(sub_levels_logs_buttons[j]).id + '_number');

            add_new_log_activity(passed_log_list, passed_textarea, passed_xp_points_number_field, passed_progress_bar, passed_progress_bar_value, passed_current_array_number);
        });
        document.getElementById(sub_levels_logs_add_new_log_activity_buttons[i]).addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        });
        if(screen.width <= 810 && screen.height <= 1080) document.getElementById(sub_levels_logs_add_new_log_activity_buttons[i]).style.fontSize = '35px';
        else document.getElementById(sub_levels_logs_add_new_log_activity_buttons[i]).style.fontSize = '15px';
        document.getElementById(sub_levels_logs_add_new_log_activity_buttons[i]).style.width = '35%';
    }
}