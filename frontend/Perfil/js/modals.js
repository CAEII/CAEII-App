// get the qr
let qr = document.getElementById("qr");
// Get the modal
let modal = document.getElementById("myModal");
// Get the buttons that opens the modal
let taco_btn = document.getElementById("taco");
let coffee_1_btn = document.getElementById("coffee_1");
let coffee_2_btn = document.getElementById("coffee_2");
let coffee_3_btn = document.getElementById("coffee_3");
let coffee_4_btn = document.getElementById("coffee_4");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// funcion para abrir el modal
function open_modal(id, clase){
    if (clase == "icono"){                       // compruevo que el icono este habilitado
        modal.style.display = "block";              // cambio el display del modal, de none, pasa a block
        qr.src = `./img/perfil/qrs/qr_${id}.png`     // cambio la direccion del qr para que muestre el correcto
    }  
}
// When the user clicks the button, open the modal and change the qr route
taco_btn.onclick = function () {
    open_modal(taco_btn.id, taco_btn.className);
}
coffee_1_btn.onclick = function () {
    open_modal(coffee_1_btn.id, coffee_1_btn.className);  
}
coffee_2_btn.onclick = function () {
    open_modal(coffee_2_btn.id, coffee_2_btn.className);    
}
coffee_3_btn.onclick = function () {
    open_modal(coffee_3_btn.id, coffee_3_btn.className);
}
coffee_4_btn.onclick = function () {
    open_modal(coffee_4_btn.id, coffee_4_btn.className);
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}