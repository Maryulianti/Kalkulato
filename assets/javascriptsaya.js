function penjumlahan() {
    var angka1 = parseInt(document.getElementById("a1").value);
    var angka2 = parseInt(document.getElementById("a2").value);
    
    document.getElementById("hasil").innerHTML = (angka1+angka2);
}
function pembagian() {
    var angka1 = parseInt(document.getElementById("a1").value);
    var angka2 = parseInt(document.getElementById("a2").value);

    document.getElementById("hasil").innerHTML = (angka1/angka2);
}
function pengurangan() {
    var angka1 = parseInt(document.getElementById("a1").value);
    var angka2 = parseInt(document.getElementById("a2").value);

    document.getElementById("hasil").innerHTML = (angka1-angka2);
}
function perkalian() {
    var angka1 = parseInt(document.getElementById("a1").value);
    var angka2 = parseInt(document.getElementById("a2").value);

    document.getElementById("hasil").innerHTML = (angka1*angka2);
}
