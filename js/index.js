// objectga oid masalalar

// 1-masala
// const inson = {
//   ismi: "Ravshanbek",
//   yoshi: 18,
//   kasbi: "o'quvchi",
// };
// console.log(inson);

// 2-masala
// const inson = {
//   ismi: "Ravshanbek",
//   yoshi: 18,
//   kasbi: "o'quvchi",
// };
// inson.ismi = "vali";
// console.log(inson);
// 3-masala
// const inson = {
//   ismi: "Ravshanbek",
//   yoshi: 18,
//   kasbi: "o'quvchi",
// };
// inson.manzil = "oltiariq tumani";
// console.log(inson);
// 4-masala
// const inson = {
//   ismi: "Ravshanbek",
//   yoshi: 18,
//   kasbi: "o'quvchi",
// };
// delete inson.kasbi;
// console.log(inson);
// 5-masala
// const inson = {
//   ismi: "Ravshanbek",
//   yoshi: 18,
//   kasbi: "o'quvchi",
//   telefon: {
//     shaxsiy: 901652345,
//     uy: 940652345,
//   },
// };
// console.log(inson);
// 6-masala
// const inson = {
//   ismi: "Ravshanbek",
//   yoshi: 18,
//   kasbi: "o'quvchi",
//   telefon: {
//     shaxsiy: 901652345,
//     uy: 940652345,
//   },
// };
// for (let insonni in inson) {
//   console.log(insonni);
// }
// 7-masala
// const inson = {
//   ismi: "Ravshanbek",
//   yoshi: 18,
//   kasbi: "o'quvchi",
//   telefon: {
//     shaxsiy: 901652345,
//     uy: 940652345,
//   },
// };
// console.log(inson.yoshi);
8 - masala;
function odam(ism, yosh, kasb) {
  const inson = {
    ismi: ism,
    yoshi: yosh,
    kasbi: kasb,
  };
  return inson;
}
console.log(odam("Ravshanbek", 18, "o'quvchi"));

// Umumlashtiruvchi masalalar.
// 1-masala
// const str = "sal3323453232om";
// function sonnianiqlash(str) {
//   let result = str.split("");
//   let res = result.filter(function (value, nechta) {
//     return value == 3;
//   });
//   return res.length;
// }
// console.log(sonnianiqlash(str));
// 2-masala

// let n = +prompt("N sonni kiriting");
// function toqraqamlar(n) {
//   let toqsonlar = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 1) {
//       toqsonlar.push(i);
//     }
//   }
//   return toqsonlar;
// }
// console.log(toqraqamlar(10));

// 3-masala
// const str = "s*a*l*o*m";
// function yulduzchalarniolibtashlash(str) {
//   let result = str.split("").filter(function (value) {
//     return value !== "*";
//   });
//   return result;
// }
// console.log(yulduzchalarniolibtashlash(str));

// 4-masala
// const str = "salom";
// function elemenetochirish(str) {
//   let result = str.slice(0, 1) + str.slice(2);
//   return result;
// }
// console.log(elemenetochirish(str));

// 5-masala
// let son = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function engkattaelement(son) {
//   let res = 0;
//   let result;
//   for (let i = 0; i <= son.length; i++) {
//     if (res < son[i]) {
//       result = son[i];
//     }
//   }
//   let resul = [];
//   let sonstring = result.toString();
//   resul.push(sonstring.charCodeAt());
//   return resul;
// }
// console.log(engkattaelement(son));

// 6-masala
// const str = "assalom";
// function splitqilis(str) {
//   let result = str.split("");
//   return result;
// }
// console.log(joinqilis(str));

// 7-masala
// let son = [12, 13, 221, 4, 35, 2, 21112];
// function joinngga(son) {
//   let res = son.join("");
//   return res;
// }
// console.log(joinngga(son));

// 8-masala
// const str = "salom qalesan yxshimisan axvollaring yaxshimi";
// function elementqidirish(str, element) {
//   let result = str.includes(element);
//   return result;
// }
// console.log(elementqidirish(str, "qalesan"));

// 9-masala
// const str = "salom qalesan yxshimisan axvollaring yaxshimi";
// function tekshirish(str) {
//   let res = str.split("");
//   let harflar = [];
//   res.forEach(function (harf) {
//     if (harflar[harf]) {
//       harflar[harf]++;
//     } else {
//       harflar[harf] = 1;
//     }
//   });
//   return harflar;
// }
// console.log(tekshirish(str));
//qolgan joylariga kuchim yetmadi

// 10-masala
// const son = "1432342";
// let str = "salom";

// function birlashtirish(son, str) {
//   let result = son.concat(str);
//   return result;
// }
// console.log(birlashtirish(son, str));

// 11-masala
// let mashina = ["matiz", "tiko", "damas", "nexia", "malibu"];
// function enguzunelement(mashina) {
//   let res = "";
//   for (let i = 0; i < mashina.length; i++) {
//     if (res.length < mashina[i].length) {
//       res = mashina[i];
//     }
//   }
//   return res;
// }
// console.log(enguzunelement(mashina));

// 12-masala
// let mashina = ["matiz", "tiko", "damas", "nexia", "malibu"];
// function enguzunelement(mashina) {
//   let res = mashina.reverse();
//   let result = res.join("");
//   return result;
// }
// console.log(enguzunelement(mashina));

// 13-masala
// let str = "assalom";
// function massivgaaylan(str) {
//   let result = str.split("");
//   return result;
// }
// console.log(massivgaaylan(str));

// 14-masala
// let str = "assalom";
// function massivgaaylan(str) {
//   let yangistr = "";
//   let result = str.split("");
//   yangistr = result.reverse();
//   let strin = yangistr.join("");
//   return strin;
// }
// console.log(massivgaaylan(str));

// 15-masala
// let mashina = ["matiz", "tiko", "damas", "nexia", "malibu"];
// function enguzunelement(mashina) {
//   let res = mashina.reverse();
//   let result = res.join("");
//   return result;
// }
// console.log(enguzunelement(mashina));

// 16-masala
// let tuman = "*oltiariq*margilon*rishton";
// function belgilarniochirish(tuman) {
//   let result = tuman.split("").filter(function (belgi) {
//     return belgi !== "*";
//   });
//   return result.join("");
// }
// console.log(belgilarniochirish(tuman));

// 17 - masala
// let str = "yaxshimisizlar";
// function kesibolish(str) {
//   let result = str.substring(0, 11) + "...";
//   return result;
// }
// console.log(kesibolish(str));

// 18-masala
// let salom = ["assalomu", "alekum", "yaxshimisz"];
// function boshxarfbilan(salom) {
//   let result = salom.map(function (value) {
//     return value[0].toUpperCase() + value.slice(1);
//   });
//   return result;
// }
// console.log(boshxarfbilan(salom));

// 19-masala
// const ismlar = ["sardor", "bobur", "islom", "samandar", "sarvar", "sobir"];
// function boshlanishindex(ismlar, belgi) {
//   return ismlar.filter(function (value) {
//     return value.startsWith(belgi);
//   });
// }
// console.log(boshlanishindex(ismlar, "s"));

// 20-masala
// const ismlar = "sardor bobur islom samandar sarvar sobir";
// function boshlanishindex(ismlar) {
//   let res = ismlar.split(" ");
//   let result = res.map(function (value) {
//     return value.split("").reverse().join("");
//   });
//   return result.join(" ");
// }
// console.log(boshlanishindex(ismlar));
