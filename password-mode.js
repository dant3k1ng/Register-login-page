var eye_button = document.getElementById('eye');
eye_button.addEventListener('click', passwordMode);

var is_open = false;

function passwordMode(){
    if(is_open == false){
        document.getElementById('eye').innerHTML = '<i class="far fa-eye"></i>';
        document.getElementById('password').type = 'text';
        is_open = true;
    }
    else{
        document.getElementById('eye').innerHTML = '<i class="far fa-eye-slash"></i>';
        document.getElementById('password').type = 'password';
        is_open = false;
    }
}

var eye_button2 = document.getElementById('eye2');
eye_button2.addEventListener('click', passwordMode2);

var is_open2 = false;

function passwordMode2(){
    if(is_open2 == false){
        document.getElementById('eye2').innerHTML = '<i class="far fa-eye"></i>';
        document.getElementById('password2').type = 'text';
        is_open2 = true;
    }
    else{
        document.getElementById('eye2').innerHTML = '<i class="far fa-eye-slash"></i>';
        document.getElementById('password2').type = 'password';
        is_open2 = false;
    }
}