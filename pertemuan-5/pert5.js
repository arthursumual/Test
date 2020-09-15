/*
    Array
*/

let angka = [1, 2, 3, 4, 5, 6, 7, 8];
let buah = ['Mangga', 'Apel', 'Jeruk'];

console.log(angka);

let myFunc = function() {
    return "Hello Array";
}

let arr = ["text1", 1, true, myFunc(), [1, 2, 3, 4, 5]];

console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4][2]);

console.log(typeof(arr));
console.log(arr.length);

// Deklarasi Array menggunakan kata kunci new

let buah2 = new Array("Salak", "Jeruk", "Melon");
console.log(buah2);

// Manipulasi Array
// 1. Menambah isi array

let mhs = [];
mhs[0] = 'John';
mhs[1] = 'Bob';
mhs[2] = 'Jane';

console.log(mhs);

// 2. Mengubah isi array

mhs[1] = "Donny";
console.log(mhs);

// 3. Menghapus isi array

mhs[2] = undefined;
console.log(mhs);

// 4. Menampilkan isi array
let mhs2 = ["John", "Bob", "Jane", "Peter"];

for(let i=0;i<4;i++) {
    console.log("Mahasiswa ke-"+ (i+1) +" adalah " + mhs2[i]);
}

// Method dalam array
//1. Length
//2. toString
console.log(mhs.toString());

//3. join
console.log(mhs.join(" - "));

//4. push, pop, unshift, shift
mhs2.push("Mayrra");
mhs2.push("Stenly");
console.log(mhs2.join(" - "));
mhs2.pop();
mhs2.pop();
console.log(mhs2.join(" - "));

mhs2.unshift("Stenly");
mhs2.unshift("Mayrra");
console.log(mhs2.join(" - "));

mhs2.shift();
mhs2.shift();
console.log(mhs2.join(" - "));

//5. Concat
let sayur = ["Kangkung", "Bayam", "Boncis"];

let makanan = buah.concat(sayur);
console.log(makanan);

//6. Splice dan Slice
//Splice

buah.splice(2,0, "Melon", "Semangka");
console.log(buah);

//Slice
let sbuah = buah.slice(1,3);
console.log(sbuah);

//7. forEach dan map
//forEach

angka.forEach(function(el) {
    console.log(el);
})

//atau

let tampilAngka = function(el) {
    console.log(el);
}

angka.forEach(tampilAngka);

//Map
let angka2 = angka.map(function(el){
    return el;
});

console.log(angka2);

//8. Sort
let angka3 = [1, 100, 2, 5, 20, 3, 7, 8];

angka3.sort(function (a, b){
    return a - b;
});
console.log(angka3);

//9. Filter
let angkafilter = angka3.filter(function(el){
    return el > 5;
})
console.log(angkafilter);