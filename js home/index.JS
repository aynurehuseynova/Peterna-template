// 1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.

// let a = 1;
// let b = -3;
// let c = 2;
// let discriminant = b**2 - 4*a*c;

// if (discriminant > 0) {
//   let x1 = (-b + Math.sqrt(discriminant)) / (2*a);
//   let x2 = (-b - Math.sqrt(discriminant)) / (2*a);
//   console.log(`Kvadrat tənliyinin iki fərqli kökü var: x1 = ${x1}, x2 = ${x2}`);
// } else if (discriminant === 0) {
//   let x = -b / (2*a);
//   console.log(`Kvadrat tənliyinin təkrarlanan kökü var: x = ${x}`);
// } else {
//   console.log("Kvadrat tənliyinin həlli yoxdur.");
// }

// 2.a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.
// const A = 5;
// for (let i = 1; i <= 1000; i++) {
//   if (i % A === 0) {
//     console.log(i);
//   }
// }

// const arr = [2, 4, 5, 9, 1];
// 3. Bu massivin minimum elementini tapın:

// const arr = [2, 4, 5, 9, 1];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);


// 4. Bu massivin maksimum elementini tapın:

// const arr = [2, 4, 5, 9, 1];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log( + max);

// 5. Bu massivin minimum elementinin indeksini tapın.

// const arr = [2, 4, 5, 9, 1];
// let min = arr[0];
// let minIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//     minIndex = i;
//   }
// }

// console.log("Minimum element: " + min);
// console.log(" minimum elementin indexsi: " + minIndex);


// 6.Bu massivin maksimum elementinin indeksini tapın.

// const arr = [2, 4, 5, 9, 1];
// let max = arr[0];
// let maxIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     maxIndex = i;
//   }
// }
// console.log(maxIndex);


// 7.Tək indeksli massiv elementlərinin cəmini hesablayın.

// const arr = [2, 4, 5, 9, 1];
// let sum = 0;

// for (let i = 0; i < arr.length; i += 2) {
//   sum += arr[i];
// }

// console.log( sum);


// 8.Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.

// let cumle = "Mən Code Academy Tələbəsiyəm.";
// let yeniCumle = cumle.toLowerCase();
// console.log(yeniCumle);

// 9.Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "


// let metn = "            Mən Code Academydə Programing tədrisi alıram            ";
// let yeniMetn = metn.trim();
// console.log(yeniMetn);


// 10.Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın

// let cumle = "Mən Code Academy Tələbəsiyəm.";
// let word = cumle.split(' ');
// console.log(word);


// 11."            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.


let cumle = "            Mən Code Academydə Programing tədrisi alıram            ";
let hərfSayı = cumle.trim().length;
console.log("Cümlədə " + hərfSayı + " hərf var.");






