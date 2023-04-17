// console.log( 123);
//alert('Привет это моя домашнее задание')


// var a = 1; //устаревший вариант
// let b = 3; //современный вариант
// const c = 0; // нельзя менять 
// a = 5; // перезаписали, одно = означает присваевание
//var mybirthDay = '11.11';
//mybirthDay  = '17.07.75';
//console.log(mybirthDay);
//const mybirthDay = '11.11';     это ошибка
//let mybirthDay = '11.11';       это ошибка
//var mybirthDay = '11.11';       он не видит ошибку, но видит пустой

//let a =" 'Добро'+'пожаловать'+'на курс'+'Зухра'"
//a = 9
//console.log(a);

//today = '17.04.23';
//console.log(today);
//number
// infinity  математ бесконечность
//console.log(Infinity <1000000000000000000);                //false
//let a = Infinity              // 1 способ получить infinity, задать явно
//console.log(1/0);             // 2 способ  ? разделить число на 0

//NaN             математическу ошибку

//console.log(NaN);
//console.log(777);

//console.log('stroka' / 2);
//console.log(7**7);             //воведение в степень
//console.log(NaN**0)            // будет 1 

// begint                        // больше чем позволено
//console.log(77777777777777777777777n);  //в конце цифр добавить n

// sring  строка
//let str1 = 'JOJO'
//let str2 = "JOJO"
//let str3 =`ANIME ${str2}`          //дает больше возможгности
//let str3 =`ANIME ${2+3}`         // дает сумму цифр
//console.log(str1);
//console.log(str2);
//console.log(str3);

              //booLean   булевое значение
//let check = true
//let uncheck = false
//console.log(1>7);
//console.log(true==1);
//console.log(false==0);

           // Null  спец значение
// let nuller = null
// console.log(nuller);   

            // undefined 
// let a;
// console.log(a);      

            // type of распознает значения
// typeof x 
// typeof (x)
// console.log(typeof 'cat');
// console.log(typeof 2);
// console.log(typeof true);
// console.log(typeof 10n);
// console.log(typeof undefined);
// console.log(typeof null);

   //3 lesson

//document.getElementById(`first`).innerHTML=`Hello World`
//document.getElementById(`one`).innerHTML=`Hello world!!!!

//document.getElementById('one').innerHTML='Anime'
//document.getElementById('one').innerHTML='777'
//document.getElementById('one').innerHTML='KZ'

//document.querySelector('#one').innerHTML=777
//document.querySelectorAll('p').innerHTML='Хакуна Матата'

//document.querySelector('.qwer').innerHTML='Хакуна Матата'
let inp = document.querySelector('.text')
let btn = document.querySelector('.check')

btn.onclick = function() {
    console.log('что то вышло не так');
}