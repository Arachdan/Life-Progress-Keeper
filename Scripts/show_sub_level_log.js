function show_sub_level_log(sub_level_log, log_button) {
    if(log_button.innerText === 'Pokaż wpis/log') {
        document.getElementsByClassName('logs')[sub_level_log].style.display = 'block';
        log_button.innerText = 'Ukryj wpis/log';
    }
    else {
        document.getElementsByClassName('logs')[sub_level_log].style.display = 'none';
        log_button.innerText = 'Pokaż wpis/log';
    }
}