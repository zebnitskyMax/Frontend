function insert(num) {
    /* document.form.textview.value =  document.form.textview.value + num; */
    document.getElementById('input').value = document.getElementById('input').value + num;
    
}

function clean() {
    document.getElementById('input').value = "";
}

function back() {
    var exp = document.getElementById('input').value;
    document.getElementById('input').value = exp.substring(0, exp.length - 1);
}
function equal() {
    var exp = document.getElementById('input').value;
    if (exp) {
        document.getElementById('input').value = eval(exp);
       
    }
}