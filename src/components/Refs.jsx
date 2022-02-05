import React from 'react';
import { Layout} from 'antd';
import FocusInput from './examples/FocusInput';
const { Content } = Layout;

function Refs() {
  return (
    <Content style={{ padding: '20px 20px' }}>
    <div className="site-layout-content" style={{textAlign: 'center' }}>
    <h1 className='title'>Рефы</h1>
    <div className='content'>
        <p>
        Рефы дают возможность получить доступ к DOM-узлам или React-элементам, созданным в рендер-методе.
        </p>

        <p>
        В обычном потоке данных React родительские компоненты могут взаимодействовать с дочерними только через пропсы. Чтобы модифицировать потомка, вы должны заново отрендерить его с новыми пропсами.Тем не менее, могут возникать ситуации, когда вам требуется императивно изменить дочерний элемент, обойдя обычный поток данных.Подлежащий изменениям дочерний элемент может быть как React-компонентом, так и DOM-элементом.React предоставляет лазейку для обоих случаев.
        </p>

        <h2 className='subtitle'>Когда использовать рефы</h2>

        <p>
        Ситуации, в которых использование рефов является оправданным:
        </p>

        <ul>
            <li>Управление фокусом, выделение текста или воспроизведение медиа.</li>
            <li>Императивный вызов анимаций.</li>
            <li>Интеграция со сторонними DOM-библиотеками.</li>
        </ul>

        <h2 className='subtitle'>Не злоупотребляйте рефами</h2>

        <p>
        Возможно, с первого взгляда вам показалось, что рефы применяются, когда нужно решить какую-то задачу в вашем приложении «во что бы то ни стало». Если у вас сложилось такое впечатление, сделайте паузу и обдумайте, где должно храниться конкретное состояние в иерархии компонентов. Часто становится очевидно, что правильным местом для хранения состояния является верхний уровень в иерархии.
        </p>

        <h2 className='subtitle'>Создание рефов</h2>

        <p>
        Рефы создаются с помощью React.createRef() и прикрепляются к React-элементам через ref атрибут. Обычно рефы присваиваются свойству экземпляра класса в конструкторе, чтобы на них можно было ссылаться из любой части компонента.
        </p>

    <div className='code'>
        <pre><code>{`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}`}</code></pre>
    </div>
    
        <p>
        Обратите внимание, что мы передаём props базовому (родительскому) конструктору:
        </p>

    <div className='code'>
        <pre><code>{`constructor(props) {
  super(props);
  this.state = {date: new Date()};
}`}</code></pre>
    </div>

    <h2 className='subtitle'>Доступ к рефам</h2>

    <p>
    Когда реф передаётся элементу в методе render, ссылка на данный узел доступна через свойство рефа current.
    </p>

    <div className='code'>
        <pre><code>{`const node = this.myRef.current;`}</code></pre>
    </div>

    <p>
    Значение рефа отличается в зависимости от типа узла:
    </p>

    <ul>
        <li>Когда атрибут ref используется с HTML-элементом, свойство current созданного рефа в конструкторе с помощью React.createRef() получает соответствующий DOM-элемент.</li>
        <li>Когда атрибут ref используется с классовым компонентом, свойство current объекта-рефа получает экземпляр смонтированного компонента.</li>
    </ul>

    <p>
    Рассмотрим пример использования ref внутри функциональной компоненты.
    </p>

    <div className='code'>
        <pre><code>{`function FocusInput() {
  //textInput должна быть объявлена сверху, чтобы реф мог иметь к ней доступ.
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }
  return (
    <div>
        <input type="text" ref={textInput} />
        <button onClick={handleClick}>Фокус на поле для ввода текста</button>   
    </div>
  );
}
  //при нажатии на кнопку инпут будет в фокусе`}</code></pre>
        <FocusInput />
    </div>

    </div>
    </div>
</Content>
  );
}

export default Refs;
