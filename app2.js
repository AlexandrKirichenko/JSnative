// Напишите программу, в которой с помощью console. log выводятся все числа от 1 до 100 с двумя исключениями. Для чисел, кратных 3, вместо числа выводится "Fizz", а для чисел, кратных 5 (но не 3), - "Buzz". 
// Когда это заработает, измените программу так, чтобы она печатала "FizzBuzz" для чисел, которые делятся и на 3, и на 5 (и по-прежнему печатайте "Fizz" или "Buzz" для чисел, кратных только одному из них). 

// for (i=1;i<=100;i++){
//     if(i%5 == 0 && i%3 == 0){
//         console.log("FizzBazz");}
//     else if(i%3 == 0){
//         console.log("Fizz");
//     }else if(i%5 == 0){
//         console.log("Bazz");}
        
//     else {console.log(i);}
    
// }

// for (i=1;i<=100;i++){
//     (i%5 == 0 && i%3 == 0)?console.log("FizzBazz"):(i%3 == 0)?console.log("Fizz"):(i%5 == 0)?console.log("Bazz"):console.log(i);
//    }

// let res ='';
// res = ' ' + '#' +' '+ '#' +' '+'#' + ' '+ '#'/n('#' + ' ' + '#' +' '+ '#' +' '+'#' + ' ')

// console.log(res);
// Шахматная доска(первый цикл for отвечает за строки, 2ой за их наполнение)
// for (let i = 0; i < 8; i++) {
//     let res = '';

//     if (i % 2) {
//       a = 'X';
//       b = 'Y';
//     } else {
//       a = 'Z';
//       b = '7';
//     }

//     for (let j = 0; j < 8; j++) {
//       if (j % 2) {
//         res += a;
//       } else {
//         res += b;
//       }
//     }

//     console.log(res);
//   }
  // let х = 10; 
  // if (true) { 
  // } 
  // let у = 20; 
  // var z = 30; console.log(x + у + z); 
  
  // function multiplier(factor) { return n => n * factor; 
  // }
  // let twice = multiplier(2); 
  // console.log(twice(7));

  // function power(base, exponent) { 
  //     if (exponent == 0) { 
  //       return 1; 
  //     } else { 
  //     return base * power(base, exponent - 1); 
  //     } 
  // } 
  // console.log(power(2, З)); 

  // const min = (a,b) =>
  //   (a<b)?a:b
  // console.log(min(9,3))

  // function countdown(i) {
  //   if (i>0){countdown(i - 1)
  //   }
  //   console.log(i)
    
  // }
  // countdown(5);

  // function countdown(i) {
  //   console.log(i)
  //   if (i <= 1) {  
  //     return;  
  //   } else {       
  //     countdown(i - 0.5)
  //   }
  // }
  // countdown(5); 
// const geosum = (s) => {
//   if (s === 1) {
//     return 1;
//   }
//     else {
//       return s+(s-1);
//     }
// }
// console.log(geosum(5));

// // В качестве первого примера напишем функцию pow(x, n), которая возводит x в натуральную степень n. Иначе говоря, умножает x на само себя n раз.

// const pow = (x,n) => {
//   if (n == 1) {
//     return x;
//   }
//   else {
//      return x * pow(x,n-1);
//       //Идет в стопку листов(стек) 
//       // 1) pow(2,4)=  2 * pow(2,3)
//       // 2) pow(2,3) = 2 * pow(2,2)  
//       // 3) pow(2,2) = 2 * pow(2,1)
//       // 4) pow(2,1) = 2
   
   
//   }
// }
// console.log(pow(2,4))

//Написать функцию , которая посимвольно выводит строку 'Hello' посимвольно
// const str = 'Hello';
// .toUpperCase() метод перевода вверхний регистр
// const pos =  (str) => {
//     for(let i=0;i<str.length;i++){
//         console.log(str[i]);
//     }
//     return str
// }
// pos(str);
// принять,сроку вернуть ввверх регистре
// const pos =  (str) => {
//   let res ='';
//   for(let i=0;i<str.length;i++){
//       res += str[i].toUpperCase()
      
//   }
//   return res
// }
// console.log(pos(str));
// принимает в себя строку и так называемый старт индекс и энд индекс и делает обрезку этой строки и возвращает обрезанную строку? И если нет послед параметра, вернем часть строки до конца, если нет првго 2го параметра врнем всю строку.Если последний параметр юольше длинны строки вернуть длинну строки
// const str = 'SoLongString'
// const cut = (str,t,h) => {
//     if (!h){
//         h = str.length;
//     }
//     let res='';
//     for(let i=t;i<h;i++){
//         res += str[i]
//     }
//     return res
// }
// console.log(cut(str,2,7));
// с тернарником
// const str = 'SoLongString'
// const cut = (str,start,end) => {
  
//     let res='';
//     for(let i=start?start:0; i < (end?(end>str.length?str.length:end):str.length);i++){ //если h есть, мы возвращаем h,если нет возвращаем длинну строкиважно не забыть скобки в тернарном выражении
//         res += str[i]
//     }
//     return res
// }
// console.log(cut(str,2,16));
// написать функц кот. сравнит 2 строки,на предмет, что они одинаковы  посимвольно

// const comprasion = (str1,str2) => {
//     if (str1.length != str2.length) return false;
//     for(let i=0;i<str1.length;i++){
//         if (str1[i] != str2[i]) return false;
//       } 
//       return true
//   }
// Есть строка и символ, Если мы находим символ внутри этой строки мы возвращаем позицию первого вхождения(индекс), если не находим возвращаем -1
// Дз. найти строку в строке(вместо символа) строка должна четко войти в эту строку ,состоять из этой строки

// const foo = (str,char) => {
    
//     for(let i=0;i<str.length;i++){
//       if (str[i] == char) return i;
//     } 
//     return i-1
// }

// const foo = (str,str2) => {
    
//   for(let i=0;i<str.length;i++){
//     if (str[i] == str2[i]) return str2[0];
//   } 
//   return -1
// }

// document.getElementById('out').innerHTML ='Another 1' ;//схватил элемент на странице, чтобы манипулировать им(первая часть) innerHTML специальный метод позволяющий заменить содержимое дива 'out'
// document.getElementById('out').innerHTML ='<b>Another 2<b>' ;
// document.querySelector('.header').innerHTML = 'OHOHO';
//  /*отличие от getElementbyId в том, что эта команда получает элемент со страницы один единственный, первый который встретит, по селектору CSS можно писать h1.header либо .header*/
// document.querySelector('#one').innerHTML = 777; /*есть # более гибкая конструкция */
// document.getElementById('one').innerHTML = 777; /*нет*/
// let a = document.querySelector('#one'); //*внутрь а получил параграф, переменная объявляется 1 раз или можно так*/
// let c; /* обявление*/
// a.innerHTML = 9999; /* присвоение*/
// // new! - ошибка,т.к. new зарезервил слово для работы с классами и объектами
// document.querySelector('.three').innerHTML = 'DDD';
// document.querySelector('.three').innerHTML += '<h4>Ahahah</h4>';
// let y1 = 6;
// let y2 =3;
// document.querySelector('.delenie').innerHTML = y1/y2;

// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('button');
// let divOne = document.querySelector('.out')
// button.onclick = function () {
//   console.log('work');
  //console.log( inputIn.value); //value -то что, введено в input
//   let b = +inputIn.value;// позволяет сразу преобразовать в число(также в html in input type ="nubmer" позволит вводить только цифры)
//   console.log(b + 20);
//   divOne.innerHTML = b;
//   inputIn.value = '';
// }
// const input = document.querySelector('.input-age');
// const button = document.querySelector('button');
// // если функция используется в коде 1 раз и не имеет имени использ, стрелочные функции
// button.onclick = () => {
//     let num = +input.value;
//     if (num >=16) {
//       console.log('welcome')
//     }
//     else {
//       console.log('bb bro')
//     }
// }