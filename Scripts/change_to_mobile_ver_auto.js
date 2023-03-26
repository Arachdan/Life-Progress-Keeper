window.addEventListener('load', change_to_mobile_ver_auto);

function change_to_mobile_ver_auto() {
    if(screen.width <= 810 && screen.height <= 1080) {
        document.getElementById('add_new_progress_form').style.flexDirection = 'column';

        document.getElementById('sub_levels_container').style.flexFlow = 'row wrap';

        document.getElementById('main_level_field').style.height = '45px';

        document.getElementById('main_level_field_label').style.fontSize = '45px';

        document.getElementById('add_new_progress_form_container').style.width = '100%';
        document.getElementById('add_new_progress_form_container').style.fontSize = '40px';

        document.getElementsByClassName('add_new_progress_form_elements')[0].style.width = '25%';
        document.getElementsByClassName('add_new_progress_form_elements')[0].style.fontSize = '35px';

        document.getElementsByClassName('add_new_progress_form_elements')[1].style.width = '40%';
        document.getElementsByClassName('add_new_progress_form_elements')[1].style.fontSize = '35px';

        document.getElementsByClassName('add_new_progress_form_elements')[2].style.width = '15%';
        document.getElementsByClassName('add_new_progress_form_elements')[2].style.height = '50px';

        document.getElementById('add_new_progress_button').style.fontSize = '35px';

        const clear_local_storage_container = document.createElement('div');
        const clear_local_storage_break_line_1 = document.createElement('br');
        const clear_local_storage_break_line_2 = document.createElement('br');
        const clear_local_storage_button = document.createElement('button');
        const clear_local_storage_button_text = document.createTextNode('Wyczyść pamięć lokalną');
        clear_local_storage_button.appendChild(clear_local_storage_button_text);
        clear_local_storage_container.style.display = 'flex';
        clear_local_storage_container.style.justifyContent = 'flex-end';
        clear_local_storage_button.style.fontSize = '45px';
        clear_local_storage_button.addEventListener('click', function() {
            localStorage.clear();
            window.location.reload(true);
        });
        clear_local_storage_container.appendChild(clear_local_storage_button);
        document.body.appendChild(clear_local_storage_break_line_1);
        document.body.appendChild(clear_local_storage_break_line_2);
        document.body.appendChild(clear_local_storage_container);
    }
}