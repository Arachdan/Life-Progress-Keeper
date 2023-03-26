function change_to_mobile_ver_manual() {
    const element = arguments[0];
    const property = arguments[1];
    const value = arguments[2];
    const unit = arguments[3];

    if(property === 'width') element.style.width = value + unit;
    else if(property === 'height') element.style.height = value + unit;
    else if(property === 'font_size') element.style.fontSize = value + unit;
}