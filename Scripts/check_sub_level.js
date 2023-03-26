function check_sub_level(current_array_number, progress_bar) {
    let current_progress_bar_value = sub_levels_current_bars_values[current_array_number];
    let sub_level_max_bar_value = sub_levels_bars_values[current_array_number];
    let main_level_current_bar_value = parseInt(localStorage.getItem('main_level_current_bar_value'));
    let main_level_max_bar_value = localStorage.getItem('main_level_max_bar_value');
    let main_level = localStorage.getItem('main_level');
    let main_level_current_bar_value_percentage = parseInt(localStorage.getItem('main_level_current_bar_value_percentage'));

    if(current_progress_bar_value >= 100) {
        sub_level_max_bar_value *= 1.2;
        sub_level_max_bar_value = Math.round(sub_level_max_bar_value);
        sub_levels_bars_values[current_array_number] = sub_level_max_bar_value;
        localStorage.setItem('sub_levels_bars_values', (JSON.stringify(sub_levels_bars_values)));

        sub_levels_current_bars_values[current_array_number] = 0;
        localStorage.setItem('sub_levels_current_bars_values', (JSON.stringify(sub_levels_current_bars_values)));
        progress_bar.style.width = sub_levels_current_bars_values[current_array_number] + '%';

        sub_levels_progress_values[current_array_number]++;
        localStorage.setItem('sub_levels_progress_values', JSON.stringify(sub_levels_progress_values));
        document.getElementsByClassName('sub_levels_progress_labels')[current_array_number].innerText = 'Poziom ' + sub_levels_progress_values[current_array_number];
    
        main_level_current_bar_value += 20;
        if(main_level_current_bar_value >= main_level_max_bar_value) {
            main_level_max_bar_value *= 1.2;
            main_level_max_bar_value = Math.round(main_level_max_bar_value);
            localStorage.setItem('main_level_max_bar_value', main_level_max_bar_value);

            main_level_current_bar_value = 0;
            localStorage.setItem('main_level_current_bar_value', main_level_current_bar_value);
            document.getElementById('main_level').style.width = '0%';
            localStorage.setItem('main_level_width', '0%');
            main_level_current_bar_value_percentage = 0;
            localStorage.setItem('main_level_current_bar_value_percentage', 0);

            main_level++;
            localStorage.setItem('main_level', main_level);
            document.getElementById('main_level_field_label').innerText = 'Poziom: ' + main_level;
        }
        else {
            localStorage.setItem('main_level_current_bar_value', main_level_current_bar_value);
            main_level_current_bar_value_percentage += 20 / main_level_max_bar_value * 100;
            main_level_current_bar_value_percentage = Math.round(main_level_current_bar_value_percentage);
            localStorage.setItem('main_level_current_bar_value_percentage', main_level_current_bar_value_percentage);
            document.getElementById('main_level').style.width = main_level_current_bar_value_percentage + '%';
            localStorage.setItem('main_level_width', document.getElementById('main_level').style.width);
        }
    }
}