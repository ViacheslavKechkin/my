const { appendFile } = require("fs")

const { NOTIMP } = require("dns")

- cd - команда для перехода в директорию
- cd.. - переход в директорию на уровень ниже
- mkdir < name > - создание директории
- touch < name > - создание файла
- rm - удаление файла
- ls - просмотр директорий и файлов в директории
- nano < name > - редактирование файла
- rmdir < name > - удаление директории

< span > </span > - тект не масштабируется.нельзя поменять ширину и тд

Заключение

- 3 способа добавления стилей на страницу: inline, тег style, подключение по ссылке
- основные селекторы:
1) + - стилизует соседний элемент
2) > или пробел - стилизует дочерний элемент
3) div - добавляет стили по тегу
4) # - добавляет стили по id
5) .- добавляет стили по class
6) : hover - добавляет стили по наведению на элемент
7) : first - child - добавляет стили первому дочернему элементу
8) input[] - добавляет стили по атрибуту

margin: 20px; - внешние отступы
padding: 20px; - внутренние отступы(меняют размер блока)

ПРИЖАТЬ ФУТЕР К НИЗУ  (ПРИЖАТЬ ФУТЕР К НИЗУ)  ПРИЖАТЬ ФУТЕР К НИЗУ
<body>
    <header>...</header>
    <section class="main-content">...</section>
    <footer>...</footer>
</body>
/////
html{
  height: 100%;
}
body{ // в React нгужно это задвать для #root 
  display: flex;
  flex-direction: column;
  height: 100%;
}
//
header{
  /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 0 0 auto;
}
.main-content{
  /* 1 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 1 0 auto;
}
footer{
  /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 0 0 auto;
}


.block1 div {
  такая запись стилей делает стили у div которые в block1
}

.p {
  font - weight: 100; - ширина текста
  line - height: 12px; - высота строк
}
.div {
  height: 100vh; - позволяет занимать все пространство экрана
  width: 100vw; - позволяет занимать все пространство экрана
}

- - - ЧТОБЫ КАРТИНКА БЫЛА НА ВЕСЬ БЛОК ! ! !
width: 100%;
height: 100%;
object-fit: cover;

- border - radius: 50 %; делает круг! или 100px
- box - shadow: 0 0 10px gray; добавить тень
- border: 1px solid black; добавить рамку(учитывается в размер блока) outline - не учитывается в размеры рамки
- flex - direction: colomn; расположить в колонку
- align - items: centr; по центру относительно горизонта
- justify - content: centr; по центру относительно вертикали
- flex - wrap: wrap; перенос элементов
(что бы 3 блока на строку, а остальные переносились,
в контейнере указываем flex - wrap: wrap,
а у самих блоков в контейнере ширину например 30 %)
другой способ также у блока в контейнере flex: 1 0 30 %; (одна линия и элемент занимает 30 %)
- добавить прокрутку к блоку overflow: scroll все элементы которые не влазиют будут скрыты
если нужно сделать скролл по вертикали но убрать по горизонтали указываем:
overflow - x: scroll; overflow - y: hidden;
-скрыть элемент:
opacity: 0; - скрывается но остается на странице
visibility: hidden; -скрывается но остается на странице
display: none; -скрывается и исчезает со страницы
- Фиксированная позиция
position: absolute; - распологается по верх элемента
position: fixed; - фиксируется и при скроле остается на месте
position: sticky; - фиксируется и при скроле остается на месте пока не пролистает первый экран
- Добавить градиент к блоку
background: linear - gradient(to right, blue, pink); указываем направление
overflow: hidden; - что бы элементы не выходили за блок в котором указано это свойство
- Длинный текст заменить на ...
text - overflow: ellipsis;
- Анимация
animation: ; много всего можно добавить

- медиа запросы
@media screen and (max-width: 900px) {
- озночает что до 900px будут стили указанные здесь
div { width: 980px; }
}

-Процентное соотношение блоков
нужно контейнеру задать width: 100 %;,одному блоку например width: 20 %;, второму width: 80 %;

ТИПЫ ДАННЫХ(8шт.):
string, number, bigInt, boolean, null, undefined, object, symbol
- определить тип данных переменной можно с помощью команды typeOf()

ПЕРЕМЕННЫЕ JS
- оператор var - является устаревшим
- по es6 используются только const и let
- операторы var и let - относятся к динамическим, переменные можно мутировать в ходе выполнения программы
- оператор  const - значение переменной, объявленной с помощью const, нельзя переназначить

Console.log

- console.warn - вывод сообщений в виде предупреждений
- console.error - вывод сообщений в виде ошибки
- console.group / console.groupEnd - объединение console.log - ов в одну группу
- в console.log можно через запятую передавать несколько параметров и подставить значения с использованием % s, % d

JS functions

- существует 3 способа написания функций: function expression, function declaration, arrow function
- чтобы вернуть результат с функции нужно указать return
- чтобы использовать одну функцию с разными данными нужно указать параметры / аргументы

- по es6 используется написание - arrow function

- все функции объявляются через const

ПРЕОБРАЗОВАНИЕ типов данных
- преобразовать число в строку можно 2 - мя способами: String() и прибавить пустую строку
- преобразовать строку в число можно 2 - мя способами: Number() и + str
- преобразовать в boolean можно 2 - мя способами: Boolean() и !! ( проверить, является ли значение ложным)


FALSE значения
- отрицательные числа
- пустая строка
- null
- undefined
- false


МАССИВ и операции над массивом
- добавить элемент можно с помощью методов push и unshift, или зная длину добавить по индексу
- push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
- unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.
- удалить элемент можно с помощью splice(3, 1) - указываем номер элемента и количество за ним сколько нужно удалить
- редактировать элемент можно по индексу
- удалить последний элемент можно с помощью метода pop


ОБЪЕКТ и операции над объектом
- получить значения ключа можно 2 - мя способами: obj.name или obj["name"]
- добавить новое свойство можно 2 - мя способами: obj.name или obj["name"]
- редактировать свойство можно 2 - мя способами: obj.name или obj["name"]
- удалить свойство можно 2 - мя способами: delete obj.name или delete obj["name"]


SPREAD
- spread для параметров функции(...params) - лишние параметры которые были переданы будут закидываться в переменную ...params
sum = (a, b, ...params) => {
  return a + b;
}
const temp = sum(3, 8, w)

ДЕСТРУКТРУКТУРИЗАЦИЯ
- для деструктуризации объекта используются названия свойств самого объекта:
const { name, age } = { name: 'Bob', age: 35 };
- для деструктуризации массива задаются новые имена:
const [name, age] = ['Bob', 35];


ЦИКЛЫ
- виды циклов для массивов:
forEach - возвращает undefined(является мутатором) изменить значения массива можем через явное переприссваивание
arr.forEach(value, index) => {  // index явно указывать не обязательно
  console.log(value);
}
map - возвращает новый измененный массив, к map можно променять другие методы
arr.map(value, index) => {  // index явно указывать не обязательно
  console.log(value);
}
for - 
while - бесконечный цикл(выполняется пока не выполнется условие)
let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert(i);
  i++;
}

ЦИКЛ for
for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    alert(i);
  }
- виды циклов для объектов:
forin - проходится по объекту
for (let key in obj) {
  console.log(key);
  console.log(obj[key]); //без [] скобок нельзя доступ делать к объекту
}
- различие map и forEach


УСЛОВИЯ
  - как if/else 
    - если действий больше 2 - х или разветвление только в одну сторону, то нужно использовать if/else
if (a[2] > 7) {
    console.log('yes')
  } else {
    console.log('no')
  }
- тернарное выражение
  - если в условиях есть разветвление на истину и ложь, при этом только одно действие в 2 - х этих случаях, то можно использовать тернарное выражение
a[2] > 7 ? console.log('yes') : console.log('no');


ОПЕРАЦИИ НА СТРОКАМИ
- длина строки length
- взятие отдельного символа(2 способа[] но лучше charAt)
- изменение регистра 
toLowerCase и toUpperCase(не меняют саму переменную)
- поиск символа или подстроки в строке 2 способа includes - показывает первое вхождение(если дальше есть то он не покажет, показывает true / false)
indexOf - поиск подстроки, показывает индекс
- начинается / оканчивается строка(startsWith, endsWith) узнать есть ли там элемент
- получение подстроки
str.slice(1, 5) - начала и конец парсинга на 1 больше указываем последний
str.substring(1, 5) - начала и конец парсинга, символ последний не игнорируется
str.substr(1, 6) - указываем начало индекc и количество строк сколько берем
- сравнение строк
- замена подстроки str.replace('morning', 'night'); замена идет везде где есть слово morning
- разбитие строки str.split(' ') - тем самым разобьем текст на слова, можно указать любой символ(если ничего не указывать вернется таже строка но уже в виде объекта)
- удаление пробельных символов с начала и конца строки
str.trim() - удаляет с начала и конце пробелы
str.trimRight() - удаляет в конце пробелы
str.trimLeft() - удаляет в начале пробелы

БИБЛИОТЕКИ
Подключение библиотек например(lodash и underscore) происходит через
  <script src="underscore-min.js"></script>
    _.max(arr) - получаем максимальный элемент из массива

let el = document.querySelector('#nameId') - поиск по айди
let el = document.querySelectorAll('.nameClass') - поиск по классу всех элементов
Если через NPM - npm i lodash и после нужно подключить - import _, { flow } from 'lodash'

LOCAL STORAGE
localStorage - постоянные изменения при изменении страницы, при переходе на страницы и тд
// сохраняю данные в locakStorage (stringify для того что бы можно было прочитать данные)
localStorage.setItem('tasks', JSON.stringify(allTasks));
//получаю данный из locakStorage (JSON.parse для получения корректных данных)
const tasks = JSON.parse(localStorage.getItem('tasks'));
sessionStorage - если данные должны быть доступны на время работы нашего приложения(открываю новую вкладку, перезапуская комп - данные удаляются)
// sessionStorage также
Что бы правильно сохранить и получить данный нужно преобразовывать в стринг формат - JSON.stringify
Storage.clear() - очистить полностью все данные в storage


GIT FLOW
Сначала нужно установить brew
brew install git-flow - Установка git-flow
После создаю ветку develop локально и отправляю ее на сервер:
git branch develop
git push -u origin develop
git flow init - после установки использовать его в своем проекте (спросит про ветки нажимать везде ОК)
- Находясь на main ветке выполняю для переключения на новую ветку разработки
git flow feature start feature_branch
- Когда вы закончите работу над функцией, следующим шагом будет слияние feature_branchфайла develop
git flow feature finish feature_branch
- Новую releaseветвь можно создать, используя следующие методы.
$ git flow release start 0.1.0
Switched to a new branch 'release/0.1.0'
- Как только релиз будет готов к отправке, он будет объединен с main и develop, а затем releaseветка будет удалена
- Чтобы закончить releaseветку, используйте следующие методы:
git flow release finish '0.1.0'

GIT 
git clone(ссылка https) название_папки - клонируем удаленный репозиторий на компьютер
git add . - добавляет измененные данные для того что бы запушить
git commit - m "create application. init app." - после добавления пишу коммит(что изменил и тд) - m позволяет добавить комментарий к комиту
git push origin main - пушим изменения в удаленный репозиторий ветку(main) - если создали и работали в другой то указываем ее название
git pull origin main - спуливаем данные с удаленного репозитория с главной ветки(слияние происходит)(перед началом работы если работает несколько разрабов)
git fetch - связывается с удаленным репозиторием и получает данные, которые отсутствуют в локальном(слияние не происходит)
git checkout name_branch - переключиться на ветку
git checkout - b feature/task - 1 - находясь на ветке от которой нужно создать ветку, создаем ветку(-b) с названием(feature / task - 1)
git commit--amend - объединить проиндексированные изменения с предыдущим коммитом без создания нового коммита
git commit--amend - m "an updated commit message" - передать новый комментарий из командной строки, не открывая текстовый редактор.
git branch - посмотреть список веток
git push origin --delete <branchName> - удалить удалённую ветку, используя
git branch -D  local_branch_name -  удаление локальной ветки
  (Флаг -D с большой D, принудительно удаляет локальную ветку, вне зависимости от ее статуса мержа)
git diff - Чтобы увидеть, что я изменил, но пока не проиндексировали
git diff--staged - посмотреть, что проиндексировал и что войдёт в следующий коммит
git stash - скрывает текущие изменения(что бы допустим убедиться что ошибка возникла из - за моего кода)
git stash pop - возвращает изменения которые ранее скрыл
git status - показывает состояние(какие файлы не проиндексированы)
git remote - список настроенных удалённых репозиториев
git config--global / --local - настройка пользователя(ввод имени и почты пользователя)
git config--global color.ui false - настройка вывода информации цветом(отмена этого действия)
GIT


PROMISES - используется для отложенных и асинхронных вычислений
состояния:
pending - ожидание
fulfilled - решено в нашу сторону(resolve)
rejected - ошибка при решении задачи

const momHappy = false;
const promise = new Promise((resolve, reject) => {
  if (momHappy) {
    const phone = {
      brand: 'Sumsung',
      color: 'red'
    }
    resolve(phone);
  } else {
    const err = new Error('not phone');
    reject(err);
  }
});
const askMom = () => {
  // then - когда положительный ответ, catch - работает когда ошибка !
  promise.then((result) => console.log(result) ).catch((err) =>  alert(err.message) );
};
askMom();

АСИНХРОННЫЕ ФУНКЦИИ 
// async - указываем что данная функция ассинхронная
const onClickButton = async () => {
  if (input.value != '') {
    // fetch - метод для работы с запросами на сервер 
    // await - ожидаем данные для отправки
    const response = await fetch('http://localhost:8000/createTask', {
      method: 'POST',
      //указываем настройки для отправки
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      },
      //в теле указываю что буду передавать (JSON.stringify - преобразует значение JavaScript в строку JSON -что бы данные распознались)
      body: JSON.stringify({
        text: valueInput,
        isCheck: false
      })
    });
    // await - ожидаем данные что бы присвоить переменной значение
    let result = await response.json();
    // обновляем данные имеющегося массива
    // data потому что данные хронятся в свойстве data у объекта
    allTasks = result.data;
  }
}
АСИНХРОННЫЕ ФУНКЦИИ


NPM
- npm – это менеджер пакетов, который входит в состав Node.js
- когда разрабатывается проект и было установлено несколько npm пакетов. 
Они находятся в проекте в папке node_modules
- package.json - хранит список пакетов, необходимых для проекта 
с нужными версиями, и на другой машине можно легко установить все пакеты,
которые указаны там с помощью команды npm install
- npm init - эта команда, которая запустит процесс создания файла package.json
- npm install express - устанавливает фреймворк express
- npm install mongoose - устанавливает библиотеку mongoose
- node app.js - запуск приложения
- express - это минималистичный и гибкий веб - фреймворк для приложений Node.js,
предоставляющий обширный набор функций для мобильных и веб - приложений.

BCCRIPT
- npm i bcryptjs - для установки bcryptjs (НУЖНО для хэширования ПАРОЛЯ)
- const bcrypt = require('bcryptjs'); - для импорта 

MOMENT.JS - библтотека для работы с датами
- npm install moment --save 

JOI 
Валидация для бэка https://joi.dev/api/?v=17.6.0
- npm install joi

YUP 
Валидация для фронта (для formik)
.matches(/^[a-zA-Zа-яА-Я]/, "There should be only letters")

React-TOASTIFY
Библиотека для снекбаров
- npm install --save react-toastify
- yarn add react-toastify

UUID
Для генерации рамдомных id
- npm install uuid
- импорт import { v4 } from 'uuid'; 
- вызов где нужно сделать id - v4()

INPUTMASK — это библиотека javascript, которая создает маску ввода
- npm install inputmask --save
import Inputmask from "inputmask.es6.js";
<input data-inputmask="'mask': '99-9999999'" />
Любая опция также может быть передана с использованием атрибута данных. 
Используйте data-inputmask-< имя параметра >="значение"
<input id="example2" data-inputmask-regex="[a-za-zA-Z0-9]" />

DOTENV - для конфигов (что бы например спрятать секретные файлы)
- npm i dotenv устанавливаем и создаем файл с конфигами (.env)
( в .env заносим данные которые нужно будет передавать как секретные MY_VAR='my information')
что бы получить доступ - require('dotenv').config(); 
лучше писать в самом верху это и не нет необходимости прописывать путь в каждом файле, 
он и так будет доступен во всем проекте
Что бы вытащить данные - process.env.MY_VAR
- Что бы запустить в РЕАКТ нужно просто написать имя переменной в .env  определенным образом 
в Реакт импортов делать не надо !
//REACT_APP_BACKEND_URI="http://localhost:9000" 
и дальше использовать как обычно const URI = process.env.REACT_APP_BACKEND_URI;


NODEMON
- npm i nodemon - нужен что бы каждый раз при изменении файлов сервер перезапускался
После проделанных ниже операций запускать сервер можно через команду - npm start
в файле package.json пишем это:
"scripts": {
  "start": "nodemon app.js"
},
в файле app.js
const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Example app lestening on port ${PORT}!`)
    });
  } catch (e) {
    console.log(e);
  }
}
start()

NPM ВАЛИДАТОР 
- npm express-validator
const {check} = require("express-validator")

ЧТО БЫ СОЗДАТЬ бэк:
- Создаю репозиторий и копирую его на комп
- Захожу в папку и делаю команду - npm init
- После нужно установить express - npm i express
- создаю файл index.js
- Что бы запустить проект - node index.js

NPM

MONGOOSE
- mongoose - это библиотека JavaScript, часто используемая в приложении Node.js с базой данных MongoDB
- MongoDB - это база данных, которая хранит ваши данные в виде документов
- Mongoose - это ODM(* Object Document Mapper - объектно - документный отобразитель). 
Это означает, что Mongoose позволяет вам определять объекты со строго - типизированной схемой,
соответствующей документу MongoDB.

CORS — это механизм, который дает контролировать доступ к тегам на веб странице по сети
- Можно в скобках или вместо звездочки указать тот http которому будет открыт доступ к серверному приложению
const express = require('express');
const cors = require('cors');
const app = express();
//дает доступ всем (не безопастно) в виде массива можно в скобки передать хосты
app.use(cors());
app.use(express.json());
app.post('/', (res, set) => {
//идентично верхнему - дает доступ всем (не безопастно)
  res.set('Access-Control-Allow-Origin', '*')
  res.send('Hello!!!')
}
app.listen(4000);


SCSS
npm install node-sass -Что бы установить 

ВАЛИДАЦИЯ RegExp
Номер телефона 
/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
Только буквы (и пробельные символы)
/^[a-zA-Zа-яА-Я\s]/ 
Две десятичные цифры
/^(([1-9]{1}\d*)|(0{1}))(\.\d{2})$/
\s - пробельные символы

МАСКА для телефона (с формиком)
import InputMask from "react-input-mask";

<Field
id="phone"
type="text"
name="phone"
render={({ field }) => (
  <InputMask
    {...field}
    className="form-field"
    mask="+7 (999) 999 9999"
    placeholder="Enter your phone number"
    type="text"
    onChange={(e) => {
      setFieldValue("phone", e.target.value);
    }}
  />
)}
/>


Hello,

Today:
- I studied TypeScript

On Monday:
- I start work )

Time today: 05:52
Total time: 37:18

Have a good evening !
Viacheslav.


Hello)
How are you ?
I  fixed all comments
Can you check it when you will free, please ?
Link :
have a good day

в регистрации

// const pattern = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}/g;
в Order
.matches(/^[a-zA-Zа-яА-Я]/, "There should be only letters")
.matches(/^(([1-9]{1}\d*)|(0{1}))(\.\d{2})$/, "There must be a number with two decimal places")

Номер телефона 
/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

// if (!pattern.test(password)) {
    //   setMessageSnackBar("Пароль должн быть не меньше 6 символов, должен состоять из латинских символов и содержать хотя бы 1 число.!");
    //   return setMySnackBar({ open: true })
    // }

    // const addOnCart = (id, count) => {
    //   // setArrayForCart([...arrayForCart, { id, count: 2 }]);
    //   if (_.findIndex(arrayForCart, ["id", id]) > -1) {
    //     let countIncr = _.findIndex(arrayForCart, ["id", id]);
    //     setArrayForCart([id, ++count]);
    //     console.log("gogogo");
    //   } else {
    //     setArrayForCart([...arrayForCart, { id, count }]);
    //   }
    //   console.log("arrayForCart", arrayForCart);
    // };


        // {
    //   "src": "logo192.png",
    //   "type": "image/png",
    //   "sizes": "192x192"
    // },
    // {
    //   "src": "logo512.png",
    //   "type": "image/png",
    //   "sizes": "512x512"
    // }
БЛЮДА В КОРЗИНЕ 
      // const addToCart = (id, count, price) => {
  //   dispatch(setItemsOrder([...itemsOrder, { id, count, sum: price }]));

  //   console.log("itemsOrder", itemsOrder);

  //   toast.success("Dish added");

  //   itemsOrder.forEach((el) =>
  //     el.id === id
  //       ? dispatch(
  //           setItemsOrder([{ id, count: el.count + 1, sum: el.sum + price }])
  //         )
  //       : dispatch(
  //           setItemsOrder([...itemsOrder, { id, count: count, sum: price }])
  //         )
  //   );
  // };

  ORDER

    // const [opts, setOpts] = useState({ mask: Number });
  // const {
  //   ref,
  //   maskRef,
  //   value,
  //   setValue,
  //   unmaskedValue,
  //   setUnmaskedValue,
  //   typedValue,
  //   setTypedValue,
  // } = useIMask(opts);

  // const element = document.getElementById("phone");
  // const maskOptions = {
  //   mask: "+7(000)000-00-00",
  //   lazy: false,
  // };
  // const mask = new IMask(element, maskOptions);

  // mongoose.connect(uri).catch((err) => {
//   err.status(503).send("Server is not available! error status: 503");
// });

module.exports.deleteOne = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      Dishes.deleteOne({ _id: id })
        .then(() => {
          res.status(200).send("Dish has been removed");
        })
        .catch(() => {
          res.status(500).send("Something went wrong, please try again later!");
        });
    } else {
      res.status(404).send("Dish id wasn't provided!");
    }
  } catch (error) {
    res.status(500).send("Something went wrong, please try again later!");
  }
};

module.exports.update = async (req, res) => {
  const id = req.params.id;

  const { error } = getValidationDish(req.body);

  if (error) {
    return res.status(400).send("Not all required fields have been completed!");
  }

  const body = req.body;

  try {
    if (id) {
      Dishes.updateOne({ _id: id }, body)
        .then(() => {
          res.send({ data: body });
        })
        .catch(() => {
          res.status(500).send("Something went wrong, please try again later!");
        });
    }
  } catch (error) {
    res.status(500).send("Something went wrong, please try again later!");
  }
};