// Variabel
var pertama;
var kedua;
kedua=50;
pertama="Hello saya eka";
console.log(pertama);
console.log(kedua);

// Percabangan
let model="avanza";
if(model=="inova"){
    console.log("Ini Mobil Inova")
}else{
    console.log("Ini avanza dong");
}

// Perulangan
var counter=0;
console.log(counter);
while(counter<9){
    console.log(counter);
    counter++;
}

// Function
function penjumlahanAngka(angka1,angka2){
    return angka1+angka2;
}
penjumlahanAngka(30,50);

var penjumlahan=function(angka3, angka4){
    return angka3+angka4;
}
penjumlahan(50,40)

var angkaPanah=(angka5, angka6)=>{
    return angka5+angka6;
}
angkaPanah(30,30);

// DOM

function klik(){
    let namaDepan=document.getElementById("nama-depan").value;
    let namaBelakang=document.getElementById("nama-belakang").value;
    console.log(namaDepan + " " + namaBelakang)
}