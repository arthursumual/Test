/*
if else
*/

let uangAndi = 5000;

if(uangAndi > 5000){
    console.log("Andi bisa pulang");
}
else if(uangAndi < 5000){
    console.log("Andi tidak bisa pulang");
}else{
    console.log("Andy dijemput");
}
/*
switch case
*/

let menumakanan;
let hari = "senin";

switch(hari){
    case "senin":
        menusekolah = "ikan dan sayur";
        break;
    case "selasa":
        menusekolah = "tempe dan tahu";
        break;
    case "rabu":
        menusekolah = "kentang rebus";
        break;
    case "kamis":
        menusekolah = "ikan dan nasi kuning";
        break;
    case "jumat":
        menusekolah = "ayam penyet";
        break;
        default:
            menumakanan = "nasi busuk";
}
console.log(menumakanan);
/*
for loop
*/

for (let i = 1; i >= 10; i--){
    console.log(i);
}

/*
while loop
*/

let j = 1;
while (j >= 10){
    console.log(i);
    i--;
}

/*
do while loop
*/

let k = 1;

do {
    console.log(k);
}while( i >= 10);

/*
for/in loop
*/
const tipsHeroBuild ={
    hero : "Moskov",
    emblem : "assasins",
    talent : "killing spree"
};
for (x in tipsHeroBuild ){
    console.log(x,':',tipsHeroBuild[x]);
}

/*
for/of loop
*/

const tipsHeroBuild ={
    hero : "Moskov",
    emblem : "assasins",
    talent : "killing spree"
};

for (x of tipsHeroBuild){
    console.log(x);
}