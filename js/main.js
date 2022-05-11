const valTicket = 200;

function calcTotal() {
    let cant=document.getElementById("cantidad").value

    let categoria=document.getElementById("categoria").value
    let descuento;
    if (categoria==1) {
        descuento=80;
    }else if (categoria==2) {
        descuento=50;
    }else if (categoria==3) {
        descuento=15;
    }else{
        descuento=0;
    }
    let total=cant*valTicket;
    total-=total*descuento/100;

    document.getElementById("total").innerHTML=total;
}

function resetear() {
    document.getElementById("total").innerHTML=0;
}