
REACT
Плагин который принуждает к выполнению правил хуков
который принуждает к соблюдению этих двух правил.
- npm install eslint-plugin-react-hooks --save-dev

Есть два види компонентов - функциональные и классовые
КЛАССОВЫЙ КОМПОНЕНТ
import { yellow } from 'colorette'
import Express from 'express'
import { Input } from 'postcss'
import React from 'react';
class Test extends React.Component {
  render() {
    return <p> Test Component</p>
  }
}
export default Test;

ФУНКЦИОНАЛЬНЫЙ КОМПОНЕНТ
import React from "react";
const Test2 = ({ name }) => {
  return (
    <h1>{name}</h1>
  );
}
export default Test2;

Хуки — это функции, с помощью которых вы можете «подцепиться» 
к состоянию и методам жизненного цикла React из функциональных компонентов

СТИЛИ в react
Есть 3 основных способа добавления стилей
inline - <p style={{ color: 'green', fontSize: '12px' }}></p>
через переменную - const style = { color: 'green', fontSize: '12px' }
  < p style = { style } ></p>
    через css файл - добавляем файл со стилями import './App.css'
(желательно что - бы файл со стоялми лежал в папке с компонентом)

SASS - npm i node-sass ЧТО БЫ УСТАНОВИТЬ

PROPS - внешние параметры которые передаются в компонент
  - деструктурировать пропсы можно в 2 - х местах: в параметрах компонента({})
или после объявления компонента перед return const { } = props 
или записывать бех деструктуризации props.name(name - имя передаваемых данных)


MATERIAL UI
Что бы ее подключить:
 - npm install @mui/material @emotion/react @emotion/styled
Что бы что то использовать (например Alert) нужно импортировать API:
- import { Alert } from '@mui/material';


УСЛОВНЫЙ РЕНДЕРИНГ
- условный рендеринг - компоненты можно показывать или прятать в зависимости от текущего состояния
- условный рендеринг в React работает так же, как условные выражения работают в JavaScript
(true ? если true отображаем это : если не true то это)
//что бы отобразить картинку при каких то условиях ( вместо if )
{!isCheck && (
  <img src={editImg} alt="edit" />
)}

Каждому элементу необходимо присваивать ключ!!!

Если в компонент нужно передать определенные данные из объекта
{
  companies.map((value, index) => <Company key={`company-${index}`} name={value.name} owner={value.owner} />)
}
Если в компонент нужно передать весь объекта
companies.map((value, index) => <Company key={`company-${index}`} company={value} />)

ДОЧЕРНИЕ ЭЛЕМЕНТЫ компонента
Также определенные данные можем передать через дочерние элементы
Что бы их передать:
<Test2 name='test2'>
  <div>Header</div> - является дочерним элементом компонента
  <div>Body</div> - является дочерним элементом компонента
  <div>Footer</div> - является дочерним элементом компонента
</Test2>
Что бы получить и отобразить их:
import React from "react";
const Test2 = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      {props.children} - получаю дочерние элементы компонента
    </div>
  );
}
export default Test2;

ПЕРЕИСПОЛЬЗУЕМЫЕ КОМПОНЕНТЫ
- используются для сокращения кода за счет передачи дополнительных параметров 
и изменения внешниго вида за счет них

STATE - внутренние значения компонента которые мы можем изменить
- это переменные отвечающие за хранение информации по компоненту
- при изменении state происходит перерендер компонента
- менять state напрямую нельзя!
  в КЛАССОВЫХ компонентах:
import React from 'react';
class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: true
    }
  }
  render() {
    console.log(this.state);
    return (
      {/* использую this.setState
        указываю что будем менять(flag:) и на какое значение (!this.state.flag) */}
      < div onClick = {() => this.setState({ flag: !this.state.flag })
  }> Click2</div >
      )
    }
  }
export default Test;

  в ФУНКЦИОНАЛЬНЫХ компонентах:
import React, { useState } from 'react';
import Test from './Test';

const App = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      {/* использую функцию изменения state - setFlag*/}
      <div onClick={() => setFlag(!flag)}>Click</div>
      {flag ? <Test name='test' /> : <Test name='test-component' />}
    </div>
  );
}

ЖИЗНЕННЫЕ ЦЫКЛЫ компонентов
в функциональных компонентах - при помощи useEffect
в классовых компонентах при помощи методов:
componentDidMount() { } - вызывается после рендеринга компонента
shouldComponentUpdate(nextProps, nextState) - вызывается каждый раз при обновлении объекта props или state.
componentDidUpdate(prevProps, prevState, snapshot) - вызывается сразу после обновления компонента(если shouldComponentUpdate возвращает true)
componentWillUnmount() { } - вызывается перед удалением компонента из DOM

HOOKS
useEffect() - эта функция выполняется каждый раз при изменении состояния(что бы были актуальные данные)
useEffect(() => testFunction(), [props]) - Теперь подписка будет создана повторно только при изменении props
useEffect(() => testFunction(), []) - Если нужно запустить эффект и сбросить его только один раз(при монтировании и размонтировании), нужно передать пустой массив
- Если хочу сделать shouldComponentUpdate только в функциональном компоненте
(запрещаю перерендриваться компоненту если какие то свойства поменялись)
export default React.memo(App, () => true);

СОБЫТИЯ
выполняем() => testButton() - если делать сразу вызов функции она будет вызываться при первом рендере, а не по нажатию
  < button onClick = {() => testButton()}> Button</button >
    <input onChange={changeValue}></input> (также и на onKeyUp, onKeyDown)
(в функцию changeValue передаю событие и использую e.target.value что - бы получить значение)
const changeValue = (e) => {
  console.log(e.target.value);
}

FORMS
const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //создаёт новые объект FormData
    const formData = new FormData(e.target);
    console.log(formData.get('email'));
    console.log(formData.get('password'));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type='email' id='email' name='email' />
      <label>Password:</label>
      <input type='text' id='password' name='password' />
      <button>Login</button>
    </form>
  );
}

AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS AXIOS
библиотека - для запросов на сервер
npm i axios - сначала ее нужно установить

import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    //получаю все таски
    axios.get('http://localhost:8000/allTasks').then(res => {
      setTasks(res.data.data);
    });
  })

  const addNewTask = async() => {
    await axios.post('http://localhost:8000/createTask', {
      text,
      isCheck: false
    }).then(res => {
      setText('');
      setTasks(res.data.data);
    });
  }
  return (
    <div>
      <header>
        <h1>To-Do List</h1>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addNewTask()}>Add new</button>
      </header>
      <div>
        {
          tasks.map((task, index) => 
          <div key={`task-${index}`}>
            <input type="checkbox" checked={task.isCheck} />
            <span>{task.text}</span>
          </div>)
        }
      </div>
    </div>
  );
}
export default App;

CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT 
- Context - интерфейс предоставляющий глобальную информацию о среде приложения 
Нужен для управления состоянием - заменил Redux
(что бы не прокидывать пропсами если нужно передать соседнему компоненту).

- Не используйте Context, если он заменяет пробрасывание всего на один-два уровня. 
Этот инструмент — отличный способ, если нужно распространить состояние 
на множество компонентов, находящихся в «дереве» далеко друг от друга. 
Но если вам нужно просто опуститься или подняться на пару уровней, 
то пробрасывание будет легче и быстрее.

- Постарайтесь не использовать Context для сохранения локального состояния. 
Например, если вам нужно сохранить введённые в форму данные, 
то лучше использовать локальное свойство.

- Всегда оборачивайте родителя в Provider’а на как можно более 
низком уровне — не стоит использовать самую верхушку «дерева».

- Наконец, если вы решили пересылать свойства таким способом, 
важно помнить про наблюдение за производительностью и рефакторингом. 
Но это скорее всего не понадобится, если просадки в производительности не будут сильно заметны.


//Для начала нужно в корне проекта создать файл context.js
import React from "react";
const ThemeContext = React.createContext();
export default ThemeContext;
//После необходимо импортировать в index.js контекст
import ThemeContext from './context';
// После необходимо обернуть в входном файле в ThemeCotext.Provider
// Provider всегда имеет свойство value в которое на нужно будет передать начально значение
// В главном файле создаем или копируем стейт который нам нужен
//и передаем его значение и функцию в value в виде объекта
Так как мы обернули в Provaider и передали начальные значения, 
все компоненты которые в App и ниже будут иметь доступ к ним
function Main() {
  const [theme, setTheme] = useState('light')
  return (
    <React.StrictMode>
      <ThemeCotext.Provider value={{ theme, setTheme }}>
        <App />
      </ThemeCotext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
)
//Перехожу в App.js и что бы получить данные с контекста использую хук useContext 
//Также нужно сделать ипорт данных из контекста 
import React, {useState, useContext} from 'react';
import ThemeContext from '../context';
//передаю данные хуку, что бы получить доступ к контексту (и сразу делаю диструктуризацию)
// ВАЖНО ! передавать полность весь контекст - ThemeContext
//ВАЖНО ! При использовании useContext создается подписка на контекст и при изменении своств 
// в контексте, будет перерендериваться весь компонент в котором используем useContext
const {theme, setTheme} = useContext(ThemeContext);


ROUTING ROUTING ROUTING ROUTING ROUTING ROUTING ROUTING 
Когда меняется роут(адрес) страницы и данные остаются которые нам нужны
npm i react-router-dom - перед использованием необходимо установить!
// после установки, в входном файле index.js необходимо заимпортить BrowserRouter
//as - даем название Router (можно оставить и просто BrowserRouter)
import { BrowserRouter } from 'react-router-dom';

REACT DOM 5 ВЕРСИЯ!!!(старый вариант реализации)
ФАЙЛ INDEX
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
ФАЙЛ APP
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Post from './Post';
import './App.scss';

const App = () => {
  return (
    <div>1
      <header>
        <h1>Main page</h1>
        <ul>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/post'><li>Post</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
        </ul>
      </header>
      <Switch>
        <Route path='/home'>
          {/* В 5 версии ! ! !
          если хочу передать параметры и т.д. в компонент*/}
          <Home name='test' />
        </Route>
        <Route path='/post' component={Post} />
        <Route path='/contact' component={Contact} />
        //для отображения первоначальной страницы (по умолчанию)
        <Redirect from='/' to='/home' />
      </Switch>
    </div>
  );
}

REACT DOM 6 ВЕРСИЯ!!!(современная реализация)
import { BrowserRouter } from 'react-router-dom';

файл INDEX ! ! ! 
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
//Routes - как Switch в 5 версии !
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Post from './Post';
import './App.scss';

const App = () => {
  //Чтение параметров !!! (например если есть диманический путь /:id)
  const params = useParams(); //тут буду храниться все динамические элементы
  return (
    <div>
      <header>
        <h1>Main page</h1>
        <ul>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/post'><li>Post</li></Link>
          <Link to='/contact/:id'><li>Contact</li></Link>
        </ul>
      </header>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/post' element={<Post />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
//если нужно будет делать переход через функцию !
const invoices = () => {
  const navigate = useNavigate();
  return (<div>
    <button onClick={() => {navigate('/home')}}>Home</button>
  </div>)
}
ROUTING ROUTING ROUTING ROUTING ROUTING ROUTING ROUTING 

ВЛОЖЕННЫЙ ROUTING
Нужен что-бы мы могли переходить по ссылке назад(отслеживать переходы)
import { Routes, Route, Link, useNavigate, useParams, Outlet } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import YearFromTime from 'es-abstract/5/YearFromTime'

const App = () => {
  //Чтение параметров !!! (например если есть диманический путь /:id)
  const params = useParams(); //тут буду храниться все динамические элементы
  return (
    <div>
      <header>
        <h1>Main page</h1>
        <ul>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/post'><li>Post</li></Link>
          {/* передаю например через динамический id 
          <Link to={`update/${_id}`} 
          переход будет выполнен если указать /:id как снизу
          */}
          <Link to='/contact/:id'><li>Contact</li></Link>
        </ul>
      </header>
      <Routes>
        <Route path='home' element={<Home />}/>
        <Route path=':homeId' element={<HomeId />}/>
        <Route path='contact' element={<Contact />}/>
        {/* Если путь не описан разработчиком (не найденный маршрут)*/}
        <Route path='*' element={<NotFound />}/>
      </Routes>
      {/* Родительский маршрут должен соответствовать дочернему и 
      он отображается с помощью Outlet (что бы в родительском компоненте 
      все дочерние компонеты были встроены*/}
      <Outlet></Outlet>
    </div>
  );
}
export default App;
//если нужно будет делать переход через функцию !
const invoices = () => {
  const navigate = useNavigate();
  return (<div>
    <button onClick={() => {navigate('/home')}}>Home</button>
  </div>)
}