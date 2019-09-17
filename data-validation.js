//var send_btn = document.getElementById('btn');
//send_btn.addEventListener('click', validate);
window.onload = validate;

setInterval(validate, 500);
setInterval(passwordStrength, 100);

function validate(){
    var name = document.getElementById('name').value;
    var name_l = name.length;
    var lastname = document.getElementById('lastname').value;
    var lastname_l = lastname.length;
    var email = document.getElementById('email').value;
    var email_l = email.length;
    var password = document.getElementById('password').value;
    var password_l = password.length;
    var conf_password = document.getElementById('conf-password').value;
    var conf_password_l = conf_password.length;
    var checkbox = document.getElementById('check').checked;

    if(name_l == 0){
        var name_brd_fill = document.getElementById('name');
        name_brd_fill.style.border = '2px solid #bdb003';  
    }
    else if(name_l <= 1 || name_l > 30){
        var name_brd_error = document.getElementById('name');
        name_brd_error.style.border = '2px solid #fc0909';   
    }
    else{
        var name_brd_ok = document.getElementById('name');
        name_brd_ok.style.border = '2px solid #00ac00';   
    }

    if(lastname_l == 0){
        var lastname_brd_fill = document.getElementById('lastname');
        lastname_brd_fill.style.border = '2px solid #bdb003';   
    }
    else if(lastname_l <= 2 || lastname_l > 30){
        var lastname_brd_error = document.getElementById('lastname');
        lastname_brd_error.style.border = '2px solid #fc0909';
    }
    else{
        var name_brd_ok = document.getElementById('lastname');
        name_brd_ok.style.border = '2px solid #00ac00'; 
    }

    if(email_l == 0){
        var email_brd_fill = document.getElementById('email');
        email_brd_fill.style.border = '2px solid #bdb003'; 
    }
    else if(email_l <= 6 || email_l > 255){
        var email_brd_error = document.getElementById('email');
        email_brd_error.style.border = '2px solid #fc0909';  
    }
    else{
        var email_val = new RegExp(/^\S+@\S+\.[A-Za-z]+$/);

        if(!(email.match(email_val))){
            var email_brd_error = document.getElementById('email');
            email_brd_error.style.border = '2px solid #fc0909'; 
        }
        else
        {
            var email_brd_ok = document.getElementById('email');
            email_brd_ok.style.border = '2px solid #00ac00';
        }
    }

    if(password_l == 0){
        var password_brd_fill = document.getElementById('password');
        password_brd_fill.style.border = '2px solid #bdb003';
    }
    else if(password_l <= 8 || password_l > 30){
        var password_brd_error = document.getElementById('password');
        password_brd_error.style.border = '2px solid #fc0909';
    }
    else{
        var password_val = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/);
        if(!(password.match(password_val)))
        {
            var password_brd_error = document.getElementById('password');
            password_brd_error.style.border = '2px solid #fc0909';
        }
        else if(password.match(password_val))
        {
            var password_brd_ok = document.getElementById('password');
            password_brd_ok.style.border = '2px solid #00ac00';
            
            passwordStrength();
        }
    }

    if(conf_password_l == 0){
        var conf_password_brd_fill = document.getElementById('conf-password');
        conf_password_brd_fill.style.border = '2px solid #bdb003';
        
    }
    else if(conf_password_l <= 8 || conf_password_l > 30){
        var conf_password_brd_error = document.getElementById('conf-password');
        conf_password_brd_error.style.border = '2px solid #fc0909';
        
    }
    else{
        if(password != conf_password){
            var conf_password_brd_error = document.getElementById('conf-password');
            conf_password_brd_error.style.border = '2px solid #fc0909';
            
        }
        else
        {
            var conf_password_brd_ok = document.getElementById('conf-password');
            conf_password_brd_ok.style.border = '2px solid #00ac00';
        }
    }

    if(checkbox == false){
        
    }
    else{
        var btn = document.getElementById('btn');
        btn.addEventListener('click', send);
    }
}

function send(){
    document.getElementById('btn').value = 'Sending...';
    setTimeout(done, 3000);
}

function done(){
    document.getElementById('btn').value = 'DONE!';
    send_btn = document.getElementById('btn');
    send_btn.style.backgroundColor = '#BF046B';
}

function passwordStrength(){
    var password = document.getElementById('password').value;
    var password_l = password.length;
    var password_val = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/);

    if(password_l == 0 || password_l > 0 && password_l < 8 && password.match(password_val)){
        document.getElementById('password_strength').innerHTML = 'Password Strength: ';
    }
    else if(password_l > 8 && password_l < 12 && password.match(password_val)){
        document.getElementById('password_strength').innerHTML = 'Password Strength: Weak';
    }
    else if(password_l > 12 && password_l < 16 && password.match(password_val)){
        document.getElementById('password_strength').innerHTML = 'Password Strength: Medium';
    }
    else if(password_l > 16 && password_l < 30 && password.match(password_val)){
        document.getElementById('password_strength').innerHTML = 'Password Strength: Strong';
    }
}
