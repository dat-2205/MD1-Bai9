
function allclear() {
    document.getElementById("display").innerHTML = "0";
    document.getElementById("output").innerHTML = "";
}
function removezero(){
    let display = document.getElementById("display").innerHTML;
    if(display=="0"){
        display = "";
        document.getElementById("display").innerHTML = display;
    }
}
function getchar(value){
    removezero()
    document.getElementById("display").innerHTML += value;
}
function math() {
    removezero()
    let math = document.getElementById("display").innerHTML;
    let resutl = eval(math);
    document.getElementById("output").innerHTML = resutl;
}
function del() {
    let s = document.getElementById("display").innerHTML
    let sokytu = s.length;

    document.getElementById("display").innerHTML =  document.getElementById("display").innerHTML.slice(0,sokytu-1);
    sokytu -= sokytu;
}
