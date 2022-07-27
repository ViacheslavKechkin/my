ЗАДАЧИ;

1;
//Найти СУММУ элементов массива
const array1 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
//способ лучше !!!
let sum1 = array.reduce((acc, next) => acc + next, 0);

2;
// Найти MAX и MIN элемент массива
const array2 = [1, 2, 3, 4, 5];
let max = array[0];
for (let i = 0; i < array.length; i++) {
  max = array[i] > max ? array[i] : max;
  //max = Math.max(array[i], max); можно и так
}
//способ лучше !!!
let max1 = array.reduce((acc, next) => Math.max(acc, next));
//ЧИТЕРСКИЙ !
let max2 = Math.max(...array); //мы при помощи ... высыпаем сюда [1, 2, 3, 4, 5]
//или если и мин и макс надо найти сразу
const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

3;
// СОРТИРОВКА массива
const array3 = [1, 2, 5, 10, 2, 3, 4, 5];
array3.sort((x1, x2) => x1 - x2);
4;
// СОРТИРОВКА массива ОБЪЕКТОВ по их полям
const users = [
  {
    name: "Jone",
    age: 20,
  },
  {
    name: "Alex",
    age: 30,
  },
];
users.sort((u1, u2) => u1.age - u2.age);
// если нужно стравнить СТРОКОВОЕ поле !
users.sort((u1, u2) => {
  return u1.name.localeCompare(u2.name);
});

4;
//Развернуть массив элементов (Поменять порядок)
const array4 = [1, 2, 3, 4, 5];
console.log(array4.reverse());
//без метода reverse !!!
const reversed = [];
for (let i = array4.length - 1; i >= 0; i--) {
  reversed.push(array[i]);
}
5;
// Отфильтровать FALSE значения
const array5 = [7, "str", 0, false, 9, NaN, ""];
const notFalsy = [];
for (let i = 0; i < array5.length; i++) {
  if (!!array5[i]) {
    notFalsy.push(array5[i]);
  }
}
//Способ лучше
const notFalsy2 = array5.filter((n) => !!n);
6;
//Проверить является ли слово полиндромом (читается одинаково - шалаш)
const isPalindrome = (string) => string === string.split("").reverse().join("");
7;
// Функция возвращает самое короткое слово из предложения
const findShort = (string) =>
  string.split(" ").sort((a, b) => a.length - b.length)[0];
8;
//Функция создания инициалов
const toInitials = (name) =>
  name
    .slpit(" ")
    .map((el) => `${el.slice(0, 1).toUpperCase()}.`)
    .join("");
9;
//Функция суммирования всех цирф числа
const getSum = (number) =>
  // abs - берет число по модулю оно всегда будет положительным
  Math.abs(number)
    .toString()
    .split("")
    .reduce((sum, cur) => +sum + +cur, 0);
getSum(99); //18
10;
//Функция возврата уникальних значений из переданных массивов в порядке возрастания
function uniteUnique() {
  //arguments - потому что не измество сколько придет всего массивов
  return [...new Set([...arguments].flat())];
}
