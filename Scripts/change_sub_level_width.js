function change_sub_level_width(xp_points_number_field, progress_bar, progress_bar_value, current_array_number) {
    let current_progress_bar_value = sub_levels_current_bars_values[current_array_number];
    current_progress_bar_value += parseInt(xp_points_number_field.value) / sub_levels_bars_values[current_array_number] * 100;
    sub_levels_current_bars_values[current_array_number] = Math.round(current_progress_bar_value);
    localStorage.setItem('sub_levels_current_bars_values', (JSON.stringify(sub_levels_current_bars_values)));
    progress_bar.style.width = current_progress_bar_value + '%';

    check_sub_level(current_array_number, progress_bar);
}