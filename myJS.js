function showButtonNum(input){
    document.getElementById("inputBar").value = document.getElementById("inputBar").value + input;
}

function clearNum(){
    document.getElementById("inputBar").value = '';
}

function calculation() {
    var currentVal = document.getElementById("inputBar").value;
    var result = eval(currentVal);
    document.getElementById("inputBar").value = result;
}
