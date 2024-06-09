// masala 1


function kvadratPerimetri(a) {
    let perimetri = 4 * a;
    return perimetri;
}

let a = prompt("Kvadratning tomonini kiriting:"); // Kvadratning tomoni
let perimetri = kvadratPerimetri(a);
console.log("Kvadratning perimetri:", perimetri);




// masala 2

/*
function kvadratYuzasi(a) {
    let yuza = a * a;
    return yuza;
}

let a = +prompt("Kvadratning tomonini kiriting:"); // Kvadratning tomoni
let yuza = kvadratYuzasi(a);
console.log("Kvadratning yuzasi:", yuza);
*/

// masala 3 

/*

function togriTortburchak(a, b) {
    let yuza = a * b;
    let perimetri = 2 * (a + b);
    return { yuza: yuza, perimetri: perimetri };
}

let a = +prompt("To'g'ri to'rtburchakning birinchi tomonini kiriting:"); // Birinchi tomon
let b = +prompt("To'g'ri to'rtburchakning ikkinchi tomonini kiriting:"); // Ikkinchi tomon
let yuza_va_perimetri = togriTortburchak(a, b);
console.log("To'g'ri to'rtburchakning yuzasi:", yuza_va_perimetri.yuza);
console.log("To'g'ri to'rtburchakning perimetri:", yuza_va_perimetri.perimetri);

*/

// masala 4
/*
function aylanaYuzasi(d){
    let yuza = d * 3.14;
    return yuza;
}
let d = +prompt("Aylananing diadetrini kiriting"); //Aylana diametri
let yuza = aylanaYuzasi(d);
console.log("Aylananing yuzasi ",yuza);
*/

//masala 5
/*
function kub(a){
    let yuza = a * a * a;
    let perimetr = 6 * a * a;
    return { yuza: yuza, perimetr: perimetr };
}

let a = +prompt("a ning qiymatini kiriting");
let yuza_va_perimetr = kub(a);
console.log("Kubning hajmi" ,yuza_va_perimetr.yuza);
console.log("Kubning perimetri" ,yuza_va_perimetr.perimetr);

*/


//masala 6
/*
function pprpt(a , b , c){
    let hajm = a * b * c;
    let yuza = 2*( a*b + b*c + a*c);
    return{hajm: hajm ,yuza:yuza};
}

let a = +prompt(" a ning qiymatini kiriting");
let b = +prompt(" b ning qiymatini kiriting");
let c = +prompt(" c ning qiymatini kiriting");
let yuzaVaHajm = pprpt(a , b , c);
console.log("Paralipipetning hajmi" , yuzaVaHajm.hajm);
console.log("Paralipipetning yuzasi" , yuzaVaHajm.yuza);

*/


//masala 7


/*
function doira(r){
    let uzunlik = 2 * 3.14 * r;
    let yuza = 3.14 * r *r;
    return{uzunlik:uzunlik , yuza:yuza};
}

let r = +prompt("Radiusni kiriritng");
let uzunlikVaYuza = doira(r);
console.log("doiraning uzunligi" ,uzunlikVaYuza.uzunlik);
console.log("Doiraning yuzasi" , uzunlikVaYuza.yuza);

*/



// masala 8

/*
function son(a , b){
    let ortaArifmetik = (a+b)/2;
    return{ortaArifmetik};
}
let a  = +prompt("a ning qiymatini kiriting");
let b  = +prompt("b ning qiymatini kiriting");
let ortaArifmetik = son(a , b);
console.log("Ikki sonning o'rta arifmetigi" , ortaArifmetik );

*/


// masala 9

/*

function ortaGeometrik(a, b) {
    let orta = Math.sqrt(a * b);
    return orta;
}

let a = +prompt("Birinchi sonni kiriting:"); 
let b = +prompt("Ikkinchi sonni kiriting:"); 
if (a >= 0 && b >= 0) {
    let geometrik = ortaGeometrik(a, b);
    console.log("O'rta geometrik:", geometrik);
} else {
    console.log("Xatolik: Kiritilgan sonlardan biri yoki ularning ikkisi ham manfiy.");
}

*/


// masala 10
/*
function sonlar(a ,b){
let yigindi = a + b;
let kopaytma = a * b;
let kvadratiA = a * a;
let kvadratiB = b * b;
return{yigindi:yigindi , kopaytma:kopaytma  ,kvadratiA:kvadratiA , kvadratiB:kvadratiB};
}

let a = +prompt("a ning qiymatini kiriting");
let b = +prompt("b ning qiymatini kiriting");
let yigindi_kopaytma_kvadratiA_kvadratiB = sonlar(a , b);
console.log(" a va b ning yig'indisi" ,yigindi_kopaytma_kvadratiA_kvadratiB.yigindi);
console.log("a va b ning kopaytmasi " , yigindi_kopaytma_kvadratiA_kvadratiB.kopaytma);
console.log(" a ning kvadrati" , yigindi_kopaytma_kvadratiA_kvadratiB.kvadratiA);
console.log("b ning kvadrati" , yigindi_kopaytma_kvadratiA_kvadratiB.kvadratiB);

*/