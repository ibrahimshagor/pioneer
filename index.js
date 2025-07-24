var password = "303634"

function passcheck() {

    if(document.getElementById('pass').value != password) {
        alart('Wrong Password, Try Again.');
        return false;
    }

    if(document.getElementById('pass').value != password) {
        alart('Correct Password, Click OK.');
    }
}
