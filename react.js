
REACT
- rsc (команда что бы быстро создать тело компонента)

Плагин который принуждает к выполнению правил хуков
который принуждает к соблюдению этих двух правил.
- npm install eslint-plugin-react-hooks --save-dev

Есть два види компонентов - функциональные и классовые

ПАТЕРНЫ REACT 
Писать функциональные компоненты, деструктурировать пропсы (и использовать ...restProps), 
условный рендоринг, создание классовых компонентов со стрелочными функцциями, для рендора 
повторяющихся фрагментов разметки использовать методы, использовать обертку React Fragment,
использовать для setState колбэк вторым аргументом(это гарантирует запрос с обновленным значением),
использовать для обработки событий Event Switch, 


КЛАССОВЫЙ КОМПОНЕНТ

Можно делать extends от - (PureComponent) вместо просто Component, вызывает рендер когда стейт или пропсы изменились ! ! !
Для функциональных компонентов можно использовать memo также как PureComponent
import React,{ Component, useTransition } from 'react';
//обязательным является метод render и расширение от React.Component
//можно сделать импорт React, { Component } и указывать просто Component без React.Component
class HelloClass extends Component {
  constructor(props) {
    super(props);
    //state - это состояние которое содержит динамические данные
    this.state = {
      on: true,
      count: 0,
      text: "",
    };
    //что бы привязать колбэки к нашим функциям
    this.pressBtn = this.pressBtn.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    //если пишу стрелочную функцию  = (e) => то привязка в конструкторе не нужна
    // this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleClick = (e) => {
    //что бы ИЗМЕНИТЬ в state ТОЛЬКО текст
    this.setState({ ...this.state, text: "hi" });
  };

  pressBtn() {
    this.setState({ on: !this.state.on });
  }

  handleClickButton = (e) => {
    //React не может возвращать false
    //что бы отменить действие по умолчанию
    e.preventDefault();
    console.log("Click");
  };

  //можно писать и так и так
  handleIncrement() {
    //использую предыдущее состояние state
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  //можно писать стрелочную функцию - (тогда привязка в конструкторе не нужна)
  handleDecrease = (e) => {
    //использую предыдущее состояние state
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
    console.log("e.target", e.target);
  };

  render() {
    //передаем пропсы из родительского, получаем и деструктуризируем
    //Сам this.props представляет неизменяемый объект, который предназначен только для чтения.
    const { name, age } = this.props;
    //деструктурирую данные из state
    const { count, text } = this.state;

    return (
      <div>
        info:
        <p>name: {name}</p>
        <span>age: {age}</span>
        <h1>Current: {count}</h1>
        <h3>Text: {text}</h3>
        <button onClick={this.handleIncrement}> Увеличить</button>
        <button onClick={(e) => this.handleDecrease(e)}> Уменьшить</button>
        <button onClick={(e) => this.handleClick(e)}> Text</button>
      </div>
    );
  }
}
//для установки значений по умолчанию применяется статическое свойство defaultProps
HelloClass.defaultProps = { name: "Tom1", age: 55 };

export default HelloClass;

(lifecycle) МЕТОДЫ жизненного цикла 

1 - constructor(props): конструктор, в котором происходит начальная инициализация компонента
2 - static getDerivedStateFromProps(props, state): вызывается непосредственно перед рендерингом компонента. 
Этот метод не имеет доступа к текущему объекту компонента (то есть обратиться к объкту компоненту через this) 
и должен возвращать объект для обновления объекта state или значение null, если нечего обновлять.
3 - render(): рендеринг компонента
4 - componentDidMount():void вызывается после рендеринга компонента. Здесь можно выполнять запросы к удаленным ресурсам
5 - componentWillUnmount(): вызывается перед удалением компонента из DOM

//также имеется еще ряд функций, которые вызываются при обновлении состояния после начального рендеринга компонента, 
//если в компоненте происходят обновления:
1- static getDerivedStateFromProps(props, state): stateProps | null
2 - shouldComponentUpdate(nextProps, nextState):boolean -  вызывается каждый раз при обновлении объекта props или state. 
В качестве параметра передаются новый объект props и state. Эта функция должна возвращать true (надо делать обновление) 
или false (игнорировать обновление). По умолчанию возвращается true. Но если функция будет возвращать false, 
то тем самым мы отключим обновление компонента, а последующие функции не будут срабатывать.
- можно расшириться от PureComponent и будет тоже самое что в примере
(пример: перерендорится если пропсы обновятся)
    shouldComponentUpdate(nextProps) {
      return this.props.data !== nextProps.data;
    }
3 - render(): рендеринг компонента (если shouldComponentUpdate возвращает true)
4 - getSnapshotBeforeUpdate(prevProps, prevState): вызывается непосредственно перед рендорингом компонента. 
Он позволяет компоненту получить информацию из DOM перед возможным обновлением. 
Возвращает в качестве значения какой-то отдельный аспект, который передается в качестве третьего параметра 
в метод componentDidUpdate() и может учитываться в componentDidUpdate при обновлении. Если нечего возвращать, 
то возвращается значение null
5 - componentDidUpdate(prevProps, prevState, snapshot): вызывается сразу после обновления компонента 
(если shouldComponentUpdate возвращает true). В качестве параметров передаются старые значения объектов props и state. 
Третий параметр - значение, которое возвращает метод getSnapshotBeforeUpdate
6 - componentDidCatch(errorString, errorInfo): Дополнение в React 16 – этот метод жизненного цикла является особым, 
т.к. он позволяет реагировать на события, происходящие в дочернем компоненте, а конкретно на любые неперехваченные ошибки 
в любом из дочерних компонентов.С помощью этого дополнения вы можете сделать ваш родительский элемент обработчиком ошибок.
Например – писать информацию об ошибке в состояние компонента, возвращать соответствующее сообщение в рендер, или делать логирование ошибки.


Работа с СОБЫТИЯМИ в классовом компоненте
- События React именованы с использованием верблюжьей нотации вместо нижнего регистра.
- С помощью JSX в качестве обработчика события вы передаете функцию, а не строку
- Привязка необходима, чтобы сделать this доступным в коллбэке: this.onIncrease = this.onIncrease.bind(this)
- Первый способ: использовать синтаксис инициализатора свойств, помогающий правильно привязывать коллбэки
- Второй способ: передавать стрелочную функцию-коллбэк как свойство элемента

Работа со state в классовом компоненте
- Состояние содержит данные, конкретные для этого компонента, которые могут измениться со временем. 
Состояние определёно пользователем, и оно должно быть простым объектом JavaScript.
- Никогда не изменяйте this.state напрямую, так как вызов setState() впоследствии может заменить изменение, 
которое вы сделали. Относитесь к this.state, как если бы он был неизменяемым объектом.
const result = [
  ...newProducts.slice(0, index),
  { ...newProducts[index], quantity, count },
  ...newProducts.slice(index + 1),
];

СОЗДАНИЕ РЕФОВ 
- В представленном ниже примере ref используется для хранения ссылки на DOM-элемент.
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // создадим реф в поле `textInput` для хранения DOM-элемента
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    // Установим фокус на текстовое поле с помощью чистого DOM API
    // Примечание: обращаемся к "current", чтобы получить DOM-узел
    this.textInput.current.focus();
  }
  render() {
    // описываем, что мы хотим связать реф <input>
    // с `textInput` созданным в конструкторе
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Фокус на текстовом поле"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}


ФУНКЦИОНАЛЬНЫЙ КОМПОНЕНТ()

ДЛЯ ОПТИМИЗАЦИИ 
useMemo() - будет повторно вычислять мемоизированное значение только тогда, 
когда значение какой-либо из зависимостей изменилось.
memo(), PureComponent - вызывает рендер когда стейт или пропсы изменились
нужно memo обернуть весь компонент так как memo компонент высшего порядка
import React from "react";
const Test2 = memo(({ name }) => {
  return (
    <h1>{name}</h1>
  );
})
export default Test2;

Также можно использовать:
Позволяет лениво подгружать когда есть роутинг что то, 
если я зашел на майн и не нажад на Deteils
то оно и не будет загружать до момента нажатия данного компонента

import { lazy, Suspense } from 'react'
//динамический импорт компонента
const Details = lazy(() => import('./pages/Details'))
//в fallback можно давать любые данные, хоть отдельный компонент
//нужен что бы пока подгружается код Deteils был какой то прилоадер
<Suspense fallback={<h2>loading...</h2>}>
  //мой какой то компонент
  <Details />
<Suspense />

</>
ТАКЖЕ используется для оптимизации хук useTransition
import React, { useTransition } from 'react'
useTransition={}
//isPending - это флаг который отвечает за то подготавливается ли перерендер
//при помощи isPending можем отображать какой нибудь спинер загрузки
{isPending && <h1>Loading...</h1>}
//startTransition - функция которая запускает отложенный рендер
const [isPending, startTransition] = useTransition()

const onChangeValue = (e) => {
  //первое состояние отвечает за то что находится внутри input
  setValue(e.target.value);
  startTransition(() => {
  //отвечает за фильтрацию и отложенное изменение  какого то значения
    setFilteredValue(e.target.value)
  })
}

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
- Если хочу отменить что то когда компонент отмантируется нужно:
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // Очистить подписку - пишу тут нужную функцию
    subscription.unsubscribe();
  };
});
useReducer() - позволяет вынести логику в отдельный файл (как в редаксе)
useMemo() - Передайте «создающую» функцию и массив зависимостей. 
useMemo будет повторно вычислять мемоизированное значение только тогда, 
когда значение какой-либо из зависимостей изменилось.
useCallback() - Возвращает мемоизированный колбэк. Передайте встроенный колбэк и массив зависимостей.
useCallback(fn, deps) — это эквивалент useMemo(() => fn, deps)
useLayoutEffect() - запускается в той же фазе, что и componentDidMount и componentDidUpdate. Запускается синхронно после всех изменений DOM.
useRef() - const refContainer = useRef(initialValue) - возвращает изменяемый ref-объект
ref объекты - это ссылки на реальные DOM элементы,
данные хронящиеся в переменной через useRef не обновляются при обновлении компонента !(это большой плюс !)
Можно менять фокус - .current.focus();
Можно менять цвет и т.д. - .current.style.color = 'red';
свойство .current которого инициализируется переданным аргументом (initialValue)
//Обычный случай использования — это доступ к потомку в императивном стиле:
function TextInputWithFocusButton() {
  const inputRef = useRef(null);
  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент `input`
    inputRef.current.focus();
    //если надо повесить слушатель на скролл с какой то функцией
    ulRef.current.addEventListener('scroll', handleScroll)
  };
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
    </>
  );
}
- Если хочу сделать shouldComponentUpdate только в функциональном компоненте
(запрещаю перерендриваться компоненту если какие то свойства поменялись)
export default React.memo(App, () => true);

//ЕСЛИ НУЖНО ЧТО БЫ ПРИ ПЕРЕХОДЕ НА СТРАНИЦУ ОНА ПРОКРУЧИВАЛАСЬ ВВЕРХ
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

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
В классовух компонентах контекст используется через:
- Передается через <ShopContext.Provider value={{ products }}>
- Получается через:
class Footer extends Component {
  //что бы можно было пользоваться многими контекстами
  static contextType = ShopContext;

  render() {
    let value = this.context;
    console.log(this.context.products);
    return (
      <footer>
        <div>Footer</div>
      </footer>
    );
  }
}

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
import { Interface } from 'readline'

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

REDUX  REDUX  REDUX  REDUX  REDUX  REDUX  REDUX  REDUX  REDUX  REDUX  
- npm i redux react-redux
- npm install @reduxjs/toolkit
Создаю стор (объект содержащий несколько методов(получить состояние, изменить, подписаться на изменение))
первым параметром принимает reduser 
const store = createStore(reduser)

- для примера создал дефолтное состояние
const dafaultState = {
  cash: 0,
}

- reduser это функция, первым параметром принимает state, а вторым action
- state это массив, объект или примитив в котором хранятся какие то данные
- логика reduser зависит от того какой action был проброшен
- для каждого action создается case
//РЕФАКТОРИНГ
const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";

const reduser = (state = dafaultState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return {...state, cash: state.cash + action.payload}
    case GET_CASH:
      return {...state, cash: state.cash - action.payload}
    default:
      return state
  }
}

//РЕФАКТОРИНГ после просто вызываем функцию и передаем в нее данные
export const addMeCash = (payload) => ({type: ADD_CASH, payload});
export const getMeCash = (payload) => ({type: GET_CASH, payload});

- action является JS объектом (с обязательным полем type, по этому полю мы будем определять как состояние будет изменяться)
(в action можно передать любое количество данных через payload)
action = {type: "", payload: ""}

После действий сверху оборачиваю главный компонент в Provider и параметр он принимает store
<Provider store={store}></Provider>

- Что бы изменить состояние внутри компонента:
const dispatch = useDispatch();

- Что бы получить состояние внутри компонента:
параметром принимает функцию, а функция уже параметром принимает состояние
const cash = useSelector(state => state.cash);

- Функции изменения сотояния:

const addCash = () => {
  //dispatch принимает параметром action с обязателым параметром type
  //payload - данные для изменения
  //dispatch({type: "ADD_CASH", payload: 5})
  //РЕФАКТОРИНГ
  dispatch(addMeCash(5))
}

//что бы сумму указывали сами
const addCash = (cash) => {
  //dispatch принимает параметром action с обязателым параметром type
  //payload - данные для изменения
  // dispatch({type: "ADD_CASH", payload: cash})
   //РЕФАКТОРИНГ
   dispatch(addMeCash(cash))
}

TOOLKITSLICE TOOLKITSLICE TOOLKITSLICE TOOLKITSLICE TOOLKITSLICE TOOLKITSLICE 
- npm i redux react-redux
- npm install @reduxjs/toolkit
// Также оборачиваем в провайдер
<Provider store={store}></Provider>
// Также использую useDispatch и useSelector в компоненте где нужно работать со стэйтом
const dispatch = useDispatch();
const count = useSelector(state => state.toolkit.count);
const todos = useSelector(state => state.toolkit.todos);
//что бы использовать функции изменения:
onClisk={() => dispatch(increment())}

//в файле index.js папки store 
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";

//создаю корневой редюсер (если несколько редюсеров нужно использовать combineReducers)
const rootReducer = combineReducers({
  toolkit: toolkitSlice,
  //тут можно помещать следующий редюсер
});
// создаю стор
export const store = configureStore({
  reducer: rootReducer,
});

//в файле toolkitSlice.js папки store 
import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    count: 0,
    todos: ["1 задача", "2 задача", "3 задача"],
    cardOnEditing: -1,
  },
  reducers: {
    //создаю action
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeLastTodo(state) {
      state.todos.pop();
    },
    setCardOnEditing(state, action) {
      state.cardOnEditing = action.payload;
    },
  },
});
//экспорт рэдюсера
export default toolkitSlice.reducer;
//экспорт экшэнов
export const { increment, decrement, addTodo, removeLastTodo, setCardOnEditing } =
  toolkitSlice.actions;
  
//для использования в компоненте:
import { setCardOnEditing} from "../../store/toolkitSlice.js"; //делаю импорт action
const dispatch = useDispatch(); // использую для того что бы пользоваться action
dispatch(setCardOnEditing(index));
//для использования state
const cardOnEditing = useSelector((state) => state.toolkit.cardOnEditing);

TOOLKITSLICE АССИНРОННЫЕ ЗАПРОСЫ 
- npm i redux-thunk

import { createSlise, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
}
//createAsyncThunk - принимает имя и функцию
export const getPosts =  createAsyncThunk(
  //имя формируется из имени слайса из которого буду братсья данные
  'post/getPosts',
  //первый аргумент это payload (если данных не будет ставим прочерк)
  //второй это набор option-ов
  async (_,{ rejectWhithValue, dispatch }) => {
    const res = await axios.get("http://localhost:9000/createDish")
    dispatch(setPosts(res.data))
  }
)

export const deletePostsById =  createAsyncThunk(
  'post/deletePostsById',
  async (id,{ rejectWhithValue, dispatch }) => {
    const res = await axios.delete(`http://localhost:9000/deleteDish?_id=${id}`)
    dispatch(deletePost(id))
  }
)

export const postSlice = createSlise({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) = > {
      state.posts = action.payload
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
    }
  },
  // нужно для отслеживания событий  асинка
  extraReducers: {
    //могу получить с помощью - rejectWhithValue 
    [getPosts.fulfilled]: () => console.log('fulfilled'),
    [getPosts.pending]: () => console.log('pending'),
    [getPosts.rejected]: () => console.log('rejected'),
  },
})

export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;
//После выполненого выше, можно имрортировать в нужном компоненте функцию getPosts
import { getPosts} from "../../store/toolkitSlice.js"; 
import { string } from 'prop-types'
import { nextFriday, yearsToMonths } from 'date-fns'
//и спомощью dispatch вызывать например по клику
onClick={() => dispatch(getPosts())}

REDUX SVGA




TYPESCRIPT TYPESCRIPT TYPESCRIPT TYPESCRIPT TYPESCRIPT TYPESCRIPT 
-npm install -g typescript (что бы установить глобально)
//при созданиии рект приложения можно сразу задать шаблон typescript
- npx create-react-app . --template typeacript 
TypeScript — это язык программирования, в котором исправлены многие недостатки JavaScript.
после создания файла например app.ts что бы посмотреть его .js и как он выглядит:
- tsc app.ts - чтобы скомпилировать файл app.ts (после создания .ts файла - создается js файл с такими же данными)
- node app.js - что бы запустить файл

НУЖНО добавить в корень проекта файл tsconfig.json. 
{
  "compilerOptions": {
    "module": "commonjs",
    "sourceMap": true,
    "jsx": "react",
    "noImplicitAny": true,
    "strictNullChecks": true,
    "esModuleInterop": true
  },
  "exclude": [
    "node_modules"
  ]
}
Теперь в секцию scripts файла package.json добавим команду для компиляции:
"tsc:w": "tsc -w"
Создаю в src файл index.d.ts:
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg'; и т.д.


- В JS при доступе к несуществующему свойству возвращается undefined. 
По этой причине, при чтении опционального (?) свойства необходимо выполнять проверку на undefined ! ! !

ТИПЫ данных в TypeScript (всегда использовать типы в нижнем регистре !)
- let myData: boolean = true;
- let myData: number = 25; (можно задавать не только целые значения - 4.2 или 3е10)
- let myData: string = `Hi ${name}`;

-МАССИВ (есть два вида написания)
let list: number[] = [1, 2, 3];
//Дженерик <number> - указывает из чего состоит данный массив и тд
let list1: Array<number> = [1, 2, 3];
const list2: ReadonlyArray<number> = [1, 2, 3]; (только для чтения)
const list: readonly number[] = [1, 2, 3]; (только для чтения)
// можно указать разные типы в массиве
let values: (string | number)[] = ['name', 45, 'name'];
// можно использовать не целочисленный индекс
в длину основного массива такие значения записывать не будут
list[-100] = 50;
list[10.5] = 122;

ОБЪЕДИНЕНИЯ unions
- мы не сможем использовать методы, которые доступны только например для string
- Решение данной проблемы заключается в СУЖЕНИИ (narrowing) объединения. 
Например, TS знает, что только для string оператор typeof возвращает 'string':
function printId(id: number | string) {
  if (typeof id === 'string') {
    // В этой ветке `id` имеет тип 'string'
    console.log(id.toUpperCase())
  } else {
    // А здесь `id` имеет тип 'number'
    console.log(id)
  }
}
Другой способ заключается в использовании функции, такой как Array.isArray:
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Здесь `x` - это 'string[]'
    console.log('Привет, ' + x.join(' и '))
  } else {
    // Здесь `x` - 'string'
    console.log('Добро пожаловать, одинокий странник ' + x)
  }
}


ОБЪЕКТЫ
//Можно вместо перечесления типов в {} после person: воспользоваться alias
type PersonSettings = {name: string, age: number, country: 'Russia' | 'USA', from?: string }
// сначала после : задаем типы данных а после уже присваиваем
const person: {
  name: string
  age: number
  country: 'Russia' | 'USA' // вводи данные которые могут быть у этого поля
  from?: string // необязательное поле
} = {
  name: 'Max',
  age: 23,
  country: 'Russia',
}

-КОРТЕЖИ (Tuples) (позволяет выразить массив с фиксированным числом элементов 
  и типы которых известны, но не обязательно должны быть одинаковыми)
  Чтобы указать, что элемент является необязательным, 
  после типа элемента ставится вопросительный знак ?
  необязательные ставятся в самом конце
let x: [string, number, boolean?] = ['Tom', 34];
Можно перебрать циклом for 
for (const prop of x) {
}
  Если незнаю сколько и чего придет можно использовать ...
let myLet: [number, string, ...number[]] = [4, 'Tom', 6,7,8]
  Если нужно сделать только для чтения ставим - readonly
let myLet: readonly [number, string, ...number[]] = [4, 'Tom', 6,7,8]
  Деструктуризация кортежа
const [age, name, numbers] = myLet;

- enum (для перечисления - список именованных констант)
//использовать enum не рекомендуется 
enum Color {
  Red, //Red = 1 или Red = '#d2324' можно задать порядок цифр либо что-то в строке
  Green,
  Blue
}
const myColor = Color.Red; //выдаст 1
const myColor2 = Color[2]; //выдаст Blue

- unknowm (может понадобиться для описания типа данных который мы не знаем)
 let myLet: unknowm = 5; //(тип данных можно менять по ходу myLet = 'hi')

- any (отказать в проверке типа данных - отличие от unknown, 
any позволяет получить свойства к произвольным свойствам даже не существующим)
let myLet: any = 9; //(тип данных можно менять по ходу myLet = 'hi')

- void (отсутствие вообще какого либо типа данных 
   если например функция не возвращает какие либо данные то указываем ей void)
const handlerClick ():void => {
  console.log('hi');
}

- never (тип значений которые никогда не встречаются, которые никогда не возвращаются)
- использовать в двух случаях (когда функция возращает ошибку и никогда не заканчивает свое выполнение
либо когда функция постоянно что либо делает )
const error = (message: string):never => {
  console.log('hi');
}

TYPE (похоже на интерфейсы, но у интерфейсов больше функций, например наследование)
- Ключевым отличием между ними является то, что type не может быть повторно открыт 
для добавления новых свойств, в то время как interface всегда может быть расширен.

//создал тип ГОРОД
type TypeCity = {
  title: string
  bornTear: number
  population: number
}
//от типа ГОРОД создал город Нью Йорк
const newYork: TypeCity = {
  title: 'NewYork'
  bornTear: 1500
  population: 10000000
}
//по аналогии с числом, строкой и тд можно делать массив из типа который создал сам
const cities: TypeCity[] = [newYork, Taganrog]
//так можно делать у типов, но нельзя делать у интерфейсов
type A = {
  age: number;
}
type B ={ 
  name: string;
}
type C = A | B;

const obj: C = {
  age: 22,
  name: "SLava"
}

ПСЕВДОНИМ (alias) - если мы хотим использовать один и тот же тип в нескольких местах 
(создать свои собственные типы)
type SomeName = string | number | boolean;
let myLet: SomeName = 123;
let myLet: SomeName = "123";


ИНТЕРФЕЙСЫ часто называют через I (IClock) это говорит о том что это интерфейс
- это основной способ в TypeScript объединять описания 
нескольких типов в одно именованное описание
Вместо создания нового interface вы можете описать все, 
что вы хотите встроенно, используя :{ /*Structure*/ }
string | number - что бы свойство было одним из нескольких типов
Псевдонимы создаются с использованием синтаксиса type SomeName = someValidTypeAnnotation.

interface User { 
  firstName: string,
  age: number,
  country?: string //необязательное поле
  readonly city: string // только для чтения
}
const Jane: User = {
  firstName: 'Jane',
  age: 33,
  city: 'city'
}
// интерфейс для функций
interface SumA {
  (a: number b: number): number;
}
const sum: SumA = (a, b) => a + b;

// УТВЕРЖДЕНИЕ указываем что myObject будет относится к User 
// Если мы знаем о типе больше чем TS
const myObject = {} as User;
//или таже запись по старому
//const myObject = <User>{};

//наследование интерфейсов
interface Employee extends User {
  job: srting,
  salary: number
  // после : указывается () => это означает что тип стрелочная функция, 
  // а возращает она строку
  getName: () => string 
}

let TomSmith: Employee = {
  firstName: 'TomSmith',
  age: 23,
  job: 'dfdfdf',
  salary: 455555
  getName(): string {
    return this.firstName
  }
}
// Если нужно сделать интерфейс для объекта у которого много динамических ключей
//или например неизвество сколько придет данных
interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  border: '1px',
  borderRadius: '5px'
}

//Еще один тип создания
// в <T> - записываем формат какой нужен(строка число и тд) и проверям
// если приходит null или undefined то не выполняется если указали строку или что то другое то выполняется
type NotNull<T> = T extends null | undefined ? never : T;
let value: NotNull<string>;
value = 'test'

//НАСЛЕДОВАНИЕ КЛАССОВ ОТ ИНТЕРФЕЙСОВ
interface IClock {
  time: Date
  setTime(date: Date): void
}
//что бы TypeScript понял что класс реализуется от интерфейса нужно:
class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

ДЖИНЕРИКИ 
//Дженерик <number> - указывает что массив состоит из чисел
let arrayOfNumbers: Array<number> = [1, 2, 3];
let  arrayOfStrings: Array<string> = ['1', '2', '3'];
//Параметр  Т  будет динамически подстраиваться под значения которые передаем (числа бувку и тд)
const reverseFoo = <T>(items: T[]): T[] => {                                    
  return [...items]
}
//</T>
//будет работать оба вызова функции так как указали - Т
reverseFoo(arrayOfNumbers)
reverseFoo(arrayOfStrings)
//Дженерик в функция как аргумент, внутри <> указываем что будем передавать
const newFunction1 = reverseFoo<number>([3, 4, 5])
const newFunction2 = reverseFoo<string>(['3', '4', '5'])
 
// ОБЪЕДИНЕНИЕ Дженериков
const extend<T, U> = (first: T, second: U): T&U => {
  return {...first, ...second};
}
//Написание своего Джинерика
interface MyArray<T> {
  [n: number]: T;
  //что бы воспользовать методом массива .map необходимо этот метод сначала описать
  //что бы метод принимал как числа так и буквы нужно писать дженерик <U>
  map<U>(fn: (el: T) => U): U[];
}
const tsArr: MyArray<number> = [1, 2, 3, 4]
tsArr.map((i) => i + 1);
tsArr.map((i) => `${i} + 1`);
//Если нужно передать в функцию ИМЕННО массив с любыми типами
const getLength = <T extends Array<any>>(arr: T[]): number => {                                    
  return arr.length;
}


СУЖЕНИЕ ТИПОВ 
(typeof strs === 'object') - условие называется защитником или предохранителем типа (type guard)
- Оператор typeof возвращает одну из следующих строк:
"string", "number", "bigint", "boolean", "symbol", "undefined", "object", "function"

function printAll(strs: string | string[] | null) {
  //if (strs пишем что бы проверить на null, что бы не было ошибок
  if (strs !== null) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        // (parameter) strs: string[]
        console.log(s)
      }
    } else if (typeof strs === 'string') {
      console.log(strs)
      // (parameter) strs: string
    }
  }
}
//Также можно использовать 
// выражение == null проверяет на равенство не только с null, но и с undefined. 
// Аналогично выражение == undefined проверяет на равенство не только с undefined, 
// но и с null.
interface Container {
  value: number | null | undefined
}
function multiplyValue(container: Container, factor: number) {
  // Удаляем 'null' и 'undefined' из типа
  if (container.value != null) {
    console.log(container.value)
    // (property) Container.value: number

    // Теперь мы можем безопасно умножать 'container.value'
    container.value *= factor
  }
}

--- Сужение типов с помощью оператора in
// в выражении 'value' in x, где 'value' - строка, а x - объединение, 
//истинная ветка сужает типы x к типам,которые имеют опциональное или обязательное свойство value, 
// а ложная ветка сужает типы к типам, которые имеют опциональное или не имеют названного свойства:
type Fish = { swim: () => void }
type Bird = { fly: () => void }
type Human = { swim?: () => void; fly?: () => void }

function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    animal
    // (parameter) animal: Fish | Human
  } else {
    animal
    // (parameter) animal: Bird | Human
  }
}
--- Сужение типов с помощью оператора instanceof
// Оператор instanceof используется для определения того, является ли одна сущность "экземпляром" другой.
// Например, выражение x instanceof Foo проверяет, содержится ли Foo.prototype в цепочке прототипов x. 
// Данный оператор применяется к значениям, сконструированным с помощью ключевого слова new. 
// Он также может использоваться для сужения типов:
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString())
    // (parameter) x: Date
  } else {
    console.log(x.toUpperCase())
    // (parameter) x: string
  }
}
--- Использование предикатов типа 
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}
const pet = getSmallPet()

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()]
const underWater1: Fish[] = zoo.filter(isFish)
// или
const underWater2: Fish[] = zoo.filter(isFish) as Fish[]
--- Исключающие объединения
interface Circle {
  kind: 'circle'
  radius: number
}
interface Square {
  kind: 'square'
  sideLength: number
}
type Shape = Circle | Square
function getArea(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2
    // (parameter) shape: Circle
  }
}

ОПЕРАТОРЫ вспомогательные
//что бы например можно было менять ключи в интерфейсе
interface Person {
  name: string
  age: number
}
type PersonKey = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'
//что бы получить тип без некоторых данных которые есть в основном
type User = {
  _id: number
  name: string
  email: string
  createAt: Date
}
//с помощью ключевого слова Exclude в <> после запятой указываем исключения которые нам не нужны
type UseNotAllKeys1 = Exclude<keyof User, '_id' | 'createAt'> //  
//с помощью ключевого слова Pick указываем поля которые наоборот нам нужны
type UseNotAllKeys2 = Pick<keyof User, 'name' | 'email'> // 

let user1: UseNotAllKeys1 = 'name' 
user1 = '_id' //выдаст ошибку так как мы исключили '_id' | 'createAt' из UseNotAllKeys1

ФУНКЦИИ
// если вместо : number указать : void 
// это будет указывать на то что функция ничего не возращает
//</T>Что бы задать значение параметра по умолчанию - (par2: number = 70)
function myFoo (par1: number, par2: number): number {
  return 6;
}
- функции в ES6
const myFoo = (par1: number, par2: number): number => {
  return 6;
}

const add = (a: number, b: number): number => {
  return a + b;
}

// ПЕРЕГРУЗКА ФУНКЦИЙ
interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWhithDefault extends MyPosition {
  dafault: string
}

function position(): MyPosition
function position(a: number): MyPositionWhithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return {x: undefined, y: undefined}
  }
  if (a && !b) {
    return {x: a, y: undefined, default: a.toString()}
  }

  return {x: a, y: b}
}

CLASS 
у классов есть 3 модификатора доступа (позволяют скрыть состояние объекта от внешнего доступа)
public - Если к свойствам и функциям классов не применяется модификатор, то такие свойства и функции расцениваются как будто они определены с модификатором public
private - нельзя обратиться из вне (можем изменять внутри нашего класса в конструкторе)
protected - из вне методы и поля видты только в классах наследниках

class User {
  name: string = 'name';//задаю сразу дефолтные значения
  //если указываю readonly то поле будет только для чтения + private для закрытия доступа
  private readonly age: number = 18;

  //класс имеет специальные функции которые создаются с помощью конструктора
  constructor(userName: string, userAge: number) {
    this.name = userName;
    this.age = userAge;
  }
  //метод класса
  print() { 
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}
//когда есть конструктор мы должны передать в класс значения (имя и возраст)
let tom: User = new User('Tom', 45);
//эти строки не нужны если нет конструктора
let tom: User = new User();
tom.name = 'Tom';
tom.age = 22;
tom.print();//что бы вывести данные из метода

class Person extends User {\
  //если в User указать protected методу или полю то при наследовании будут видты 
  //а из вне доступа не будет 
}

Абстрактные КЛАССЫ и методы 
- они ни во что не компелитуются, нужны на этапе разработки что бы от них наследоваться

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('render');
  }

  info(): string {
    console.log('info');
  }
}

GUARDS позволяет работать с типами

function strip(x: string | number) {
  if (typeOf x === 'number') {
    return x.toFixed(2)
  }
  return x.trim()
}

// Проверка на принадлежность к определенному классу !
class MyResponse {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'error header'
  message = 'error message'
}

funcstion handle(res: MyResponse | MyError ) {
  if (res instanceof MyResponse ) {
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.message
    }
  }
}


TSCONFIG 
- Команда для создания файла( tsc --init ) 
Либо создаем файл tsconfig.json в корне проекта 
Этот файл устанавливает корневой каталог проекта, выполняет настройку параметров и устаналивает фалы проекта
файл для настройки проекта TypeScript - tsconfig.json состоит из двух частей. 
Какие-то опции необходимо указывать в root, а какие-то в compilerOptions

.d.ts
Описывает синтаксис и структуру функций и свойств, 
которые могут использоваться в программе, не предоставляя при этом конкретной реализации
Этот файл автоматически включается в контекст компиляции проекта TypeScript.
Цель этого файла - упростить процесс написания кода JavaScript с контролем типов



TYPESCRIPT И REACT        TYPESCRIPT И REACT         TYPESCRIPT И REACT

- Для типизации пропсов которые передаю чилдреном 
(закидываю данные между тэгов компонента) использовать: children: React.ReactNode}
  ReactNode - что бы не писать проверку на кажждый отдельный тип, потому что в React чилдронами 
могут быть и числа и строки и div и тд
 //обычно пропсы описываются через интерфейс:
interface Props {
  children?: React.ReactNode,
  id: number,
  className: string
  onClick: () => void, // описать функцию которая ничего не возращает 
}
const MyComponent = ({children}: Props) => {
  return (
    <h1>
      {children}
    </h1>
  )
}
//ВМЕСТО того что описано выше МОЖНО ПЕРЕДАТЬ ТИП САМОМУ КОМПОНЕНТУ
//и тогда автоматом чилдрену добавит React.ReactNode
//Что бы расширить функционал своими типами то их нужно передать как дженерик в .FC
interface Props {
  id: number,
  className: string
}
const MyComponent: React.FC<Props> = ({children, id, className}) => {
  return (
    <h1>
      {children}
    </h1>
  )
}
// ТИПИЗАЦИЯ КОМПОНЕНТА Button в который чилдреном передается img а пропсом функция 
// Делаю extends что бы остаточные пропсы которые есть у обычной кнопки {...restProps} 
// можно было спокойно передавать(что бы был переиспользуемый компонент)
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode,
  onClick: () => void,
}
class Button extends Component<Props> {
  render() {
    const { onClick, ...restProps } = this.props;

    return (
      <button
        className="product__button"
        type="button"
        onClick={onClick}
        {...restProps}
      >
        {this.props.children}
      </button>
    );
  }
}

//ДЛЯ ТИПИЗАЦИИ INPUT и ДЛЯ ТИПИЗАЦИИ ХУКОВ
// Например если пропсами через компонент хочу передать инпуту disable={true} и тд
//после того как описал, пропсами могу передавать в этот компонент уже данные
//HTMLInputElement пишется в дженерик потому что у нас есть еще свои пропсы которые мы используем
const CustomInput = (props: React.HTMLProps<HTMLInputElement>) => {
  //если задать начально значение тип будет подобран автоматически, но лучше отображать в джинериках
  const [value, setValue] = useState<string>('');

//Что бы описать евент
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  //что бы не описывать сам ивент можно это сделать для функции
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  //что использовать эвент для клика ресайза и тд
  const onClick: React.ReactEventHandler = (e) => {
    console.log(e);
  }

  return (
    <input 
    value={value}
    onClick={onClick}
    onChange={onChange}
    className="my-input"
    {...props}
    />
  )
}
//Тут передаю пропсы в CustomInput
const App = () => {
  return (
    <div>
      <CustomInput
      disable={true}
      />
    </div>
  )
}

// ТИПИЗАЦИИ useContext

//ТИПИЗАЦИЯ - объявляю интерфейс и описываю цвет
interfase Theme {
  color: string;
  background: string;
}
//ТИПИЗАЦИЯ - перечесление доступных тем
type AvailableThemes = 'light' | 'dark'

//создал тему и дженериком передал настройки темы и какие они могут быть
const themes: Record<AvailableThemes, Theme> = {
  light: {
    color: "#00000",
    background: "#00000"
  },
  dark: {
    cilir: "#00000",
    background: "#00000"
  }
};
//ТИПИЗАЦИЯ - дженериком передаю что контекст принимает какую то тему
const ThemeContext = createContext<Theme>(themes.dark)

const Hooks = () => {
  //вызываю контекст можно указать тут что получает тему useContext<Theme>(ThemeContext)
  const them = useContext(ThemeContext);

  return (
    <button ctyle={{background: theme.background, color: theme.color}}>
      button
    </button>
  )
}
