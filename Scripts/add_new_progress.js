document.getElementById('add_new_progress_button').addEventListener('click', add_new_progress);
window.addEventListener('load', function() {
    localStorage.setItem('logs_number', document.getElementsByClassName('logs').length);
});

function add_new_progress() {
    if(document.getElementsByClassName('logs').length === 0) {
        localStorage.setItem('logs_number', 0);
    }
    let logs_number = localStorage.getItem('logs_number');

    let new_progress_name = document.getElementById('new_progress_name');
    let new_progress_description = document.getElementById('new_progress_description');
    let new_progress_level_color = document.getElementById('new_progress_level_color');

    const sub_levels_container = document.getElementById('sub_levels_container');

    const date = new Date();
    const date_year = date.getFullYear();
    let date_month = date.getMonth() + 1;
    if(date_month < 10) date_month = '0' + date_month;
    let date_day = date.getDate();
    if(date_day < 10) date_day = '0' + date_day;

    const full_date = date_day + '.' + date_month + '.' + date_year;

    if(new_progress_name.value != '' && new_progress_name.value != ' ') {

        const new_div_container = document.createElement('div');
        new_div_container.setAttribute('id', new_progress_name.value + '_container');

        const new_div_field = document.createElement('div');
        new_div_field.setAttribute('id', new_progress_name.value + '_field');
    
        const new_div = document.createElement('div');
        new_div.setAttribute('id', new_progress_name.value);
        sub_levels_bars.push(new_div.id);
        localStorage.setItem('sub_levels_bars', (JSON.stringify(sub_levels_bars)));

        const sub_level_bar_value = 100;
        sub_levels_bars_values.push(sub_level_bar_value);
        localStorage.setItem('sub_levels_bars_values', (JSON.stringify(sub_levels_bars_values)));
        const sub_level_current_bar_value = 0;
        sub_levels_current_bars_values.push(sub_level_current_bar_value);
        localStorage.setItem('sub_levels_current_bars_values', (JSON.stringify(sub_levels_current_bars_values)));

        const new_progress_name_label = document.createElement('label');
        const new_progress_name_label_text = document.createTextNode(new_progress_name.value);
        new_progress_name_label.appendChild(new_progress_name_label_text);
        new_progress_name_label.setAttribute('for', document.getElementById(new_progress_name.value + '_field'));
        new_div_container.appendChild(new_progress_name_label);
        new_div_container.style.fontSize = '20px';
        new_div_container.style.textAlign = 'center';
        new_progress_name_label.style.fontWeight = 'bolder';
    
        new_div_field.appendChild(new_div);
        new_div_container.appendChild(new_div_field);
        sub_levels_container.appendChild(new_div_container);

        const new_progress_level_label = document.createElement('label');
        const new_progress_level_label_text = document.createTextNode('Poziom 1');
        new_progress_level_label.appendChild(new_progress_level_label_text);
        new_progress_level_label.setAttribute('for', document.getElementById(new_progress_name.value + '_field'));
        new_progress_level_label.setAttribute('class', 'sub_levels_progress_labels');
        const sub_level_progress_value = 1;
        sub_levels_progress_values.push(sub_level_progress_value);
        localStorage.setItem('sub_levels_progress_values', JSON.stringify(sub_levels_progress_values));
        new_div_container.appendChild(new_progress_level_label);
        new_div_container.style.fontSize = '20px';
        new_div_container.style.textAlign = 'center';

        const break_line = document.createElement('br');
        new_div_container.appendChild(break_line);
        const break_line_2 = document.createElement('br');
        new_div_container.appendChild(break_line_2);

        localStorage.setItem(new_progress_name.value + '_log_button_number', logs_number);
        const log_local_storage = localStorage.getItem(new_progress_name.value + '_log_button_number');

        const show_new_progress_log_button = document.createElement('button');
        const show_new_progress_log_button_text = document.createTextNode('Pokaż wpis/log');
        show_new_progress_log_button.appendChild(show_new_progress_log_button_text);
        new_div_container.appendChild(show_new_progress_log_button);
        show_new_progress_log_button.addEventListener('mouseover', function() {
            show_new_progress_log_button.style.cursor = 'pointer';
        });
        show_new_progress_log_button.style.fontSize = '15px';
        show_new_progress_log_button.style.width = '35%';
        show_new_progress_log_button.addEventListener('click', function() {
            show_sub_level_log(log_local_storage, this);
        });
        show_new_progress_log_button.setAttribute('id', new_progress_name.value + '_log_button');
        
        sub_levels_logs_buttons.push(show_new_progress_log_button.id);
        localStorage.setItem('sub_levels_logs_buttons', JSON.stringify(sub_levels_logs_buttons));

        const new_progress_log = document.createElement('div');
        new_progress_log.setAttribute('id', new_progress_name.value + '_log');
        new_progress_log.setAttribute('class', 'logs');

        const new_progress_log_list = document.createElement('ul');
        new_progress_log_list.setAttribute('id', new_progress_name.value + '_log_list');
        sub_levels_logs_lists.push(new_progress_log_list.id);
        localStorage.setItem('sub_levels_logs_lists', (JSON.stringify(sub_levels_logs_lists)));

        if(new_progress_description.value != '' && new_progress_description.value != ' ') {
            let activity_log_counter = 1;
            sub_levels_activity_log_counters.push(activity_log_counter);
            localStorage.setItem('sub_levels_activity_log_counters', JSON.stringify(sub_levels_activity_log_counters));

            new_progress_log_element_passed_text = full_date + ': ' + new_progress_description.value + ' (' + activity_log_counter + ')';

            const new_progress_log_element = document.createElement('li');
            const new_progress_log_element_text = document.createTextNode(new_progress_log_element_passed_text);

            new_progress_log_element.appendChild(new_progress_log_element_text);
            new_progress_log_list.appendChild(new_progress_log_element);
        }

        new_progress_log.appendChild(new_progress_log_list);
        new_div_container.appendChild(new_progress_log);

        const add_new_log_activity_field = document.createElement('div');
        add_new_log_activity_field.setAttribute('id', new_progress_name.value + '_add_new_log_activity_field');
        const add_new_log_activity_textarea = document.createElement('textarea');
        add_new_log_activity_textarea.setAttribute('id', new_progress_name.value + '_add_new_log_activity_textarea');
        add_new_log_activity_textarea.setAttribute('class', 'add_new_log_activity_elements');
        sub_levels_logs_add_new_log_activity_textareas.push(add_new_log_activity_textarea.id);
        localStorage.setItem('sub_levels_logs_add_new_log_activity_textareas', (JSON.stringify(sub_levels_logs_add_new_log_activity_textareas)));
        add_new_log_activity_textarea.placeholder = 'Wpis/log';
        const add_new_log_activity_xp_points_number_field = document.createElement('input');
        add_new_log_activity_xp_points_number_field.type = 'number';
        add_new_log_activity_xp_points_number_field.setAttribute('id', new_progress_name.value + '_add_new_log_activity_xp_points_number_field');
        add_new_log_activity_xp_points_number_field.setAttribute('class', 'add_new_log_activity_elements');
        sub_levels_logs_add_new_log_activity_xp_points_numbers_fields.push(add_new_log_activity_xp_points_number_field.id);
        localStorage.setItem('sub_levels_logs_add_new_log_activity_xp_points_numbers_fields', (JSON.stringify(sub_levels_logs_add_new_log_activity_xp_points_numbers_fields)));
        add_new_log_activity_xp_points_number_field.placeholder = 'Ilość pkt. xp';
        const add_new_log_activity_button = document.createElement('button');
        add_new_log_activity_button.setAttribute('id', new_progress_name.value + '_add_new_log_activity_button');
        add_new_log_activity_button.setAttribute('class', 'add_new_log_activity_elements');
        sub_levels_logs_add_new_log_activity_buttons.push(add_new_log_activity_button.id);
        localStorage.setItem('sub_levels_logs_add_new_log_activity_buttons', (JSON.stringify(sub_levels_logs_add_new_log_activity_buttons)));
        const add_new_log_activity_button_text = document.createTextNode('Dodaj nowy wpis/log');
        add_new_log_activity_button.appendChild(add_new_log_activity_button_text);
        add_new_log_activity_field.appendChild(add_new_log_activity_textarea);
        add_new_log_activity_field.appendChild(add_new_log_activity_xp_points_number_field);
        add_new_log_activity_field.appendChild(add_new_log_activity_button);
        const break_line_3 = document.createElement('br');
        new_div_container.appendChild(break_line_3);
        const break_line_4 = document.createElement('br');
        new_div_container.appendChild(break_line_4);
        new_div_container.appendChild(add_new_log_activity_field);

        add_new_log_activity_field.style.display = 'flex';
        add_new_log_activity_field.style.flexDirection = 'column';
        add_new_log_activity_field.style.justifyContent = 'space-evenly';
        add_new_log_activity_field.style.alignItems = 'center';

        add_new_log_activity_button.style.width = '35%';
        add_new_log_activity_button.style.fontSize = '15px';
        add_new_log_activity_button.addEventListener('mouseover', function() {
            add_new_log_activity_button.style.cursor = 'pointer';
        });
        add_new_log_activity_button.addEventListener('click', function() {
            add_new_log_activity(new_progress_log_list, add_new_log_activity_textarea, add_new_log_activity_xp_points_number_field, new_div, sub_level_bar_value, log_local_storage);
        });

        new_progress_log.style.display = 'none';

        new_div_container.style.width = '25%';
    
        new_div_field.style.width = '100%';
        new_div_field.style.height = '20px';
        new_div_field.style.borderRadius = '30px';
        new_div_field.style.border = '3px solid darkblue';
    
        new_div.style.height = '100%';
        new_div.style.borderRadius = '30px 0px 0px 30px';
        new_div.style.backgroundColor = new_progress_level_color.value;
        new_div.style.width = '0%';

        new_progress_name.value = '';
        new_progress_description.value = '';
        new_progress_level_color.value = 'black';

        logs_number++;
        localStorage.setItem('logs_number', logs_number);

        if(screen.width <= 810 && screen.height <= 1080) {
            change_to_mobile_ver_manual(new_div_container, 'width', 100, '%');
            change_to_mobile_ver_manual(new_div_container, 'font_size', 40, 'px');
            change_to_mobile_ver_manual(new_div_field, 'height', 40, 'px');
            change_to_mobile_ver_manual(show_new_progress_log_button, 'font_size', 35, 'px');
            change_to_mobile_ver_manual(add_new_log_activity_button, 'font_size', 35, 'px');
            add_new_log_activity_textarea.setAttribute('class', 'add_new_log_activity_elements');
            for(i = 0; i < document.getElementsByClassName('add_new_log_activity_elements').length; i++) {
                change_to_mobile_ver_manual(document.getElementsByClassName('add_new_log_activity_elements')[i], 'font_size', 35, 'px');
            }
            
            const mobile_line_break_between_sub_levels_1 = document.createElement('br');
            const mobile_line_break_between_sub_levels_2 = document.createElement('br');
            new_div_container.appendChild(mobile_line_break_between_sub_levels_1);
            new_div_container.appendChild(mobile_line_break_between_sub_levels_2);
        }

        for(i = 0; i < logs_number; i++) {
            for(j = 0; j < document.getElementsByClassName('logs').length; j++) {
                document.getElementsByClassName('logs')[i].style.display = 'none';
            }
            document.getElementById(sub_levels_logs_buttons[i]).innerText = 'Pokaż wpis/log';
        }
        save_sub_levels();
    }
    else {
        alert('Podaj nazwę nowego poziomu!');
    }
}