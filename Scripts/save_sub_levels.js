function save_sub_levels() {
    const sub_levels_container = document.getElementById('sub_levels_container');
    localStorage.setItem('sub_levels_container', sub_levels_container.innerHTML);
}