let sub_levels_logs_buttons = [];
let sub_levels_logs_lists = [];
let sub_levels_logs_add_new_log_activity_buttons = [];
let sub_levels_logs_add_new_log_activity_textareas = [];
let sub_levels_logs_add_new_log_activity_xp_points_numbers_fields = [];
let sub_levels_bars = [];
let sub_levels_bars_values = [];
let sub_levels_current_bars_values = [];
let sub_levels_progress_values = [];
let sub_levels_activity_log_counters = [];

if(localStorage.getItem('sub_levels_logs_buttons') != null) {
    sub_levels_logs_buttons = JSON.parse(localStorage.getItem('sub_levels_logs_buttons'));
}
if(localStorage.getItem('sub_levels_logs_lists') != null) {
    sub_levels_logs_lists = JSON.parse(localStorage.getItem('sub_levels_logs_lists'));
}
if(localStorage.getItem('sub_levels_logs_add_new_log_activity_buttons') != null) {
    sub_levels_logs_add_new_log_activity_buttons = JSON.parse(localStorage.getItem('sub_levels_logs_add_new_log_activity_buttons'));
}
if(localStorage.getItem('sub_levels_logs_add_new_log_activity_textareas') != null) {
    sub_levels_logs_add_new_log_activity_textareas = JSON.parse(localStorage.getItem('sub_levels_logs_add_new_log_activity_textareas'));
}
if(localStorage.getItem('sub_levels_logs_add_new_log_activity_xp_points_numbers_fields') != null) {
    sub_levels_logs_add_new_log_activity_xp_points_numbers_fields = JSON.parse(localStorage.getItem('sub_levels_logs_add_new_log_activity_xp_points_numbers_fields'));
}
if(localStorage.getItem('sub_levels_bars') != null) {
    sub_levels_bars = JSON.parse(localStorage.getItem('sub_levels_bars'));
}
if(localStorage.getItem('sub_levels_bars_values') != null) {
    sub_levels_bars_values = JSON.parse(localStorage.getItem('sub_levels_bars_values'));
}
if(localStorage.getItem('sub_levels_current_bars_values') != null) {
    sub_levels_current_bars_values = JSON.parse(localStorage.getItem('sub_levels_current_bars_values'));
}
if(localStorage.getItem('sub_levels_progress_values') != null) {
    sub_levels_progress_values = JSON.parse(localStorage.getItem('sub_levels_progress_values'));
}
if(localStorage.getItem('sub_levels_activity_log_counters') != null) {
    sub_levels_activity_log_counters = JSON.parse(localStorage.getItem('sub_levels_activity_log_counters'));
}