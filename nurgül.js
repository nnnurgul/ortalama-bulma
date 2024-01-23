let vize1=number(prompt("Vize 1 notunu giriniz"));
let vize2=number(prompt("vize 2 notunu giriniz"));
let final=number(prompt("final notunuzu giriniz"));
 ortalama=(vize1*0.3) + (vize2*0.3) + (final*0.4);

 if(ortalama>=60)
 {
    alert("geçtiniz");
    console.log("geçtiniz");

 }
 else{
    alert("kaldınız");
    console.log("kaldınız");
 }