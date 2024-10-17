'use strict'

let name = ('Джон');
let admin = (`${name}`);
alert(admin);

let cityname = prompt('Введите название города', 'Название города');
let year = +prompt('Введите год образования города', 'Год образования');
let population = prompt('Введите население города', 'Население города');
let age = 2024-year;
alert(`Городу ${cityname} исполнилось ${age} лет с момента его образования. Население - ${population} человек`);

let radius = +prompt('Введите радиус', 'Радиус круга');
let s = 3.14*radius**2;
alert(`Площадь круга = ${s}`);

let a = +prompt('Введите первое число', 'Число');
let b = +prompt('Введите второе число', 'Число');
alert(a+b);
alert(a-b);
alert(a*b);
alert(a/b);
