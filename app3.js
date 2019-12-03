// const input = document.querySelector('.inputI');
// const button = document.querySelector('button');
// let div = document.querySelector('.out-1');

// button.onclick = () => {
//     let val = input.value;
//     if (val==4) { 
//         div.innerHTML = true;
//         console.log('true');
//     } else {
//         div.innerHTML = false;
//         console.log('false');
//     }
// }
// let a21=4;
// let a22=6;
// const button = document.querySelector('.b2');
// let div = document.querySelector('.out-1');
// button.onclick = function f2(){
//     if(a21>a22){
//         div.innerHTML = a21;
//     }else{
//         div.innerHTML = a22;
//     }
// }
// document.querySelector('.b2').onclick = function(){} //если мы используем функцию всего 1 раз и назыв это ананимная функция
// document.querySelector('.b1').onclick = () =>{
//     console.log(document.querySelector('#one').value);
// }
// document.querySelector('.b3').oninput = () =>{
//     console.log(document.querySelector('#three').value);
// }
// document.querySelector('.b2').onclick = () =>{
//     console.log(document.querySelector('#two').value);
//     document.querySelector('.b2').style.backgroundColor = document.querySelector('#two').value;
//     //в JS можно присваивать стили как в CSS написав сам объект через точку написав style и через точку само CSS свойство в кэмэлкейсе, а дальше строкой присваиваем нужное нам значение
// }

// стрелочная функция
//получаем, данные из пассворд с пом событийного метода онклик(click -событие, on я так понимаю метод)

// document.querySelector('.b2').onclick = myFunc;
// function myFunk(){} // если используем функцию более одного раза


//-----------------------------Циклы в JS

// let div = document.querySelectorAll('.one');//получаем все объекты с классом one со страницы
// console.log(div);
// div.stile.backgrond= 'red';

// for (let i = 0; i < div.length; i++){ 
//      console.log(div[i]);
//      div[i].style.background = 'orange';// каждому элементу коллекции применились стили css
//      div[i].onclick = two;
//     }
// // для того, чтобы работать с массивом, элементов его нужно перебрать,а
// // для перебора используется цикл
// //можно ли применять к элементам какие либо события?
// function two() {
//     console.log('work!')
// }
// let b = document.getElementsByClassName('one'); //можно ображаться к элементам по class name
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);
// for (let i = 0; i < b.length; i++){
//     b[i].style.border = '3px solid black'
// }
//с помощью цикла я могу получить элементы инпут, перебрать их найти тот который выбран и вывести вэлью или текст после него или что мы захотим
// document.querySelector('button').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');
//     console.log(r);
//     for (let i = 0; i < r.length; i++) {
//         if (r[i].checked) {
//             console.log(r[i].value);
//         }
//     }
// }

// let out = ' ';
// for (let i = 0; i < 12; i++) {
//     if (i==6) continue;// прерывает текущий круг цикла, переходя на след круг цикла
//     out += i + ' ';
//     // if (i==6) break;
  
// }
// document.querySelector('#out').innerHTML = out;

// document.querySelector('button').onclick = () => {
//     let out = ' ';
//     for (let i = 25; i > 6; i--){
//         out += '******';
//     }
//     document.querySelector('#out').innerHTML = out;
// }

// document.querySelector('button').onclick = () => {
//     let out = ' ';
//     for (let i = 0; i < 3; i++){
//         out += '******' + '<br>';
//     }
//     document.querySelector('#out').innerHTML = out;
// }

// document.querySelector('button').onclick = () => {
//     let inp = document.querySelector('input').value;
//     let r = ' ';
//     for (let i = inp; i >= 0; i--){
//         r += + i + ' ';
//     }
//     document.querySelector('#out').innerHTML = r;
// }
// let out = document.querySelector('.out');


// for (let i = 0; i < 3; i++){
  
//     for (let k = 0; k < 3; k++){
//     out.innerHTML += '*';
// } 
//     out.innerHTML += '_';
// }

// for (let i = 1; i < 10; i++) {
//     //out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>';
//     for (let k =1; k < 10; k++){
//         out.innerHTML += `${i}*${k}=${k*i}<br>`;
//     }
//     out.innerHTML += '<hr>';
// }
// Task 2.
// С помощью вложенных циклов, нарисуйте строку:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.
// let out = document.querySelector('.out');

// for (let i=0; i < 3; i++){
//     for (let k=0; k < 3; k++){
//         out.innerHTML += '*_' ;
//     }
//     
// }
//----------------------------------------------------------
// Task 4.
// С помощью вложенных циклов, нарисуйте строку:
// 0_10_1_9_2_8_3_7_4_6_5_5_6_4_7_3_8_2_9_1_10_0_ 
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит числа на четных позициях (от 0 до 10) внутренний цикл - числа на нечетных позициях (от 10 до 0).

// let out = document.querySelector('.out');

// for (let i=0; i <= 10; i++){
    
//     for (let k=0; k <= 1; k++){
//         if (k == 0) {out.innerHTML+=`${i}_`}else{out.innerHTML+=`${10-i}_`}
//     }
// }
//------------------------------------------------------------
// Task 5.
// С помощью вложенных циклов, нарисуйте строку:
// 101010
// 101010
// 101010
// Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.
// let out = document.querySelector('.out');

// for (let i=0; i < 3; i++) {
//     for(let k=0; k < 6; k++){
//         if (k%2 == 0) {out.innerHTML+=1}else{out.innerHTML+=0}
//     }
//     out.innerHTML +='<br>';
// }
// -----------------------------------------------------------------№7 Функции
// let p = document.querySelector('.push');
// let out = document.querySelector('.out');
// let a1=2;
// p.onclick = function t1() {
//     out.innerHTML = a1;
//     return a1;
// }
// Task 1.
// Напишите функцию t1, которая при нажатии кнопки выводит в out-1 переменную a1.
// let out = document.querySelector('.out');
// let a1 = 8;
// function t1() {
//     out.innerHTML = a1;
//     return a1;
// }
// document.querySelector('.push').onclick = t1;

// let a1 = 8;
// function f2() {
   
//     return a1;
// }

// document.querySelector('.push').onclick = () => {
//     document.querySelector('.out').textContent = f2();
// }
// function t3(a,b) {
//     return a*b;
// }
// document.querySelector('.push').onclick =function() {
//     document.querySelector('.out').textContent = t3(3,9);
// }
// function age(b,y) {
//     return y-b;
// }
// document.querySelector('.age').onclick = function() {
//     document.querySelector('.out').textContent = age(1990,2019)
// }
// -----------------------------------------------------------------№8 Циклы while, do while
// Вывести 0+....+10
// let s = 0;
// let r = 0;
// while (s <= 10) {
//     r = r +s;
//     s++;
// }
// console.log(r);
// Вывести 
// ****
// ****
// ****
// let out = document.querySelector('.out');
// let p = 0;
// let outStr = '';
// while (p < 4) {
//     let p1 = 0;
//     while (p1 < 4){
//         outStr = outStr +'*';//outStr += '*';
//         p1++;     
//     }
//     p++;
//     outStr += '<br>'
// }
// out.innerHTML = outStr;
// Task 3.
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
// 25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла while.
// let out = document.querySelector('.out');
// let p = 25;
// let ourStr = '';
// document.querySelector('.b4').onclick = () => {
//     while (p > 6) {
//         out.innerHTML += `${p} `;
//         p--;
//     }
// }
// Task 4.
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
// 77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла while.
// let out = document.querySelector('.out');
// let p = 77;
// let Str = '';
// document.querySelector('.b4').onclick = () => {
//     while (p>34){
//         out.innerHTML +=`${p}_`;
//         p--;
//     }
// }

// Task 5.
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
// 1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла while.

// let out = document.querySelector('.out');
// let p = 1;
// let outStr = '';
// function t5() {
//     while (p < 18) {
//         (p%2 == 0)?outStr +=`${p}_**`:outStr += `${p}_*`
//         out.innerHTML = outStr;
//         p++;
//     }
// }
// document.querySelector('.b6').onclick = t5;

// -----------------------------------------------------------------№9 DOM
const one = document.querySelector('.one');

one.style.width = '250px';
one.style.paddingBottom = '40px';

// console.log(one.style);

one.classList.add('two', 'three')//добавляем класс two с помощью метода add
//в имени класса нету точки, '...','...' добавление несколько классов одновременно
one.classList.remove('three');//для удаления класса

const toggle = document.querySelector('.toggle');

toggle.onclick = function() {
    this.classList.toggle('three'); // this. - элемент на котором происходит событие
}
/*с помощью toggle мы можем переключать состояние классов при клике
но эта кнопка не хранит никакой информации на странице, знаем  что это кнопка
и нажата она или отжата, 
для того чтобы хранить данные в HTML объектах, либо их состоянии, либо свойство
был разработан инструмен атрибуты */

/* в HTML5 для создание коректных атрибутов требуют приставку data
 зададим блоку one атрибут data = "privet"
 как нам его получить? обращаемся к one.
 есть 2 возможности 
 1) создавать атрибуты(или перезаписать) one.setAttribute('data-num',6)- первым в скобках пишем имя атрибута,
  которое следует начинать с data, вторым значение, строка или число
 2) читать атрибуты one.getAttribute('data'); в скобках указывается имя атрибута
 */
console.log(one.getAttribute('data'));
// попробуем привязаться к элементу линк 
console.log(document.querySelector('link').getAttribute('href'));// получаем ссылку на шрифты гугл
console.log(document.querySelectorAll('link')[1].getAttribute('href'));//для получении ссылки на CCS файл ставим ALL и номер элемента массива

one.setAttribute('data-num',6)
let out = document.querySelector('.out');
let auto = document.querySelectorAll('.auto');//получаем кнопки. Это массив, а значит мы должны его перебрать 
// вешаем событие 
for (let i = 0; i < auto.length;i++) {
    auto[i].onclick = function () {
        let auto = document.querySelector('.model').value;// получаю номер модели
        let amount = this.getAttribute('data')//атрибут по которому нажали
        console.log(auto * amount);
        return out.innerHTML=auto * amount;
    }
}
// мы должжны получить какую кнопку мы кликнули у нас есть атррибут класс, и в баттонах допишем атриб дата
let a = document.createElement('div');// создаем элемент div с пом JS
a.innerHTML = 'Hello!';
a.classList.add('classno');// с пом add добавляем класс classno
a.onclick = function () {
    alert('hello');
}
console.log(a);
//но наш элемент еще не существует на странице, как добавить эл-т?создаем div class=test в HTML
document.querySelector('.test').appendChild(a); //получаем его и с помощью метода appendChild добавляем элемент a
// В чем здесь логика?Мы можем создать элемент и манипулировать им как хотим и только потом вывести или создать вывести , без получения мы уже его создали.