function add_new_log_activity(log_list, textarea, xp_points_number_field, progress_bar, progress_bar_value, current_array_number) {
    if(textarea.value != '') {
        let check = true;
        let check_count = 0;

        const date = new Date();
        const date_year = date.getFullYear();
        let date_month = date.getMonth() + 1;
        if(date_month < 10) date_month = '0' + date_month;
        let date_day = date.getDate();
        if(date_day < 10) date_day = '0' + date_day;

        const full_date = date_day + '.' + date_month + '.' + date_year;

        for(i = 0; i < textarea.value.length; i++) {
            if(textarea.value[i] === ' ') check_count++;
        }
        if(check_count === textarea.value.length) {
            check = false;
            alert('Pole jest puste!');
        }
        if(textarea.value.search('\n') != -1) {
            check = false;
            alert('Pole posiada przerwania linii (line breaks)!');
        }
        if(xp_points_number_field.value === '' || xp_points_number_field.value === ' ' || xp_points_number_field.value === '0') {
            check = false;
            alert('Podaj ilość pkt. xp!');
        }

        if(check === true) {
            let activity_log_counter = 0;
            if(sub_levels_activity_log_counters[current_array_number] != undefined) {
                activity_log_counter = sub_levels_activity_log_counters[current_array_number];
            }
            else {
                sub_levels_activity_log_counters.push(activity_log_counter);
            }
            activity_log_counter++;
            sub_levels_activity_log_counters[current_array_number] = activity_log_counter;
            localStorage.setItem('sub_levels_activity_log_counters', JSON.stringify(sub_levels_activity_log_counters));
            const passed_new_log_activity_text = full_date + ': ' + textarea.value + ' - ' + xp_points_number_field.value + 'xp (' + activity_log_counter + ')';

            const new_log_activity = document.createElement('li');
            const new_log_activity_text = document.createTextNode(passed_new_log_activity_text);

            new_log_activity.appendChild(new_log_activity_text);
            log_list.appendChild(new_log_activity);

            let logs_number = localStorage.getItem('logs_number');
            for(i = 0; i < logs_number; i++) {
                for(j = 0; j < document.getElementsByClassName('logs').length; j++) {
                    document.getElementsByClassName('logs')[i].style.display = 'none';
                }
                document.getElementById(sub_levels_logs_buttons[i]).innerText = 'Pokaż wpis/log';
            }
            
            change_sub_level_width(xp_points_number_field, progress_bar, progress_bar_value, current_array_number);

            textarea.value = '';
            xp_points_number_field.value = '';

            save_sub_levels();
        }
    }
    else {
        alert('Pole jest puste!');
    }
}