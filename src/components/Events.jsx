import React from 'react';
import { Layout} from 'antd';
const { Content } = Layout;

function Events() {
  return (
    <Content style={{ padding: '20px 20px' }}>
    <div className="site-layout-content" style={{textAlign: 'center' }}>
    <h1 className='title'>Обработка событий</h1>
    <div className='content'>
        <p>
        События в React именуются в стиле camelCase вместо нижнего регистра. С JSX вы передаёте функцию как обработчик события вместо строки.
        </p>
        
    <div className='code'>
        <pre><code>{`<button onClick={activateLasers}>
  Активировать лазеры
</button>`}</code></pre>
    </div>
    
        <p>
        Ещё одно отличие — в React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно вызвать preventDefault. Например, в обычном HTML для отмены отправки формы (действие по умолчанию) можно написать:
        </p>
    
    <div className='code'>
        <pre><code>{`function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Отправлена форма.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Отправить</button>
    </form>
  );
}`}</code></pre>
    </div>

    <p>
    В приведённом выше коде e — это синтетическое событие. React определяет синтетические события в соответствии со спецификацией W3C, поэтому не волнуйтесь о кроссбраузерности. События React работают не совсем как нативные.
    </p>

    <p>
    Если вы пользуетесь экспериментальным синтаксисом общедоступных полей классов, вы можете использовать его, чтобы правильно привязать колбэки:
    </p>
    
    <div className='code'>
        <pre><code>{`class LoggingButton extends React.Component {
  // Такой синтаксис гарантирует, что this привязан к handleClick.
  // Предупреждение: это экспериментальный синтаксис
  handleClick = () => {
    console.log('значение this:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Нажми на меня
      </button>
    );
  }
}`}</code></pre>
    </div>

    <p>
    Такой синтаксис доступен в Create React App по умолчанию.
    </p>

    <p>
    Если вы не пользуетесь синтаксисом полей, можете попробовать стрелочные функции в колбэке:
    </p>

    <div className='code'>
        <pre><code>{`class LoggingButton extends React.Component {
  handleClick() {
    console.log('значение this:', this);
  }

  render() {
    // Такой синтаксис гарантирует, что this привязан к handleClick.
    return (
      <button onClick={() => this.handleClick()}>
        Нажми на меня
      </button>
    );
  }
}`}</code></pre>
    </div>
    
    <p>
    Проблема этого синтаксиса в том, что при каждом рендере LoggingButton создаётся новый колбэк. Чаще всего это не страшно. Однако, если этот колбэк попадает как проп в дочерние компоненты, эти компоненты могут быть отрендерены снова. Мы рекомендуем делать привязку в конструкторе или использовать синтаксис полей классов, чтобы избежать проблем с производительностью.
    </p>

    <h2 className='subtitle'>Передача аргументов в обработчики событий</h2>

    <p>
    Внутри цикла часто нужно передать дополнительный аргумент в обработчик события. Например, если id — это идентификатор строки, можно использовать следующие варианты:
    </p>

    <div className='code'>
        <pre><code>{`class LoggingButton extends React.Component {
  handleClick() {
    console.log('значение this:', this);
  }

  render() {
    // Такой синтаксис гарантирует, что this привязан к handleClick.
    return (
      <button onClick={() => this.handleClick()}>
        Нажми на меня
      </button>
    );
  }
}`}</code></pre>
    </div>

    <p>
    В обоих случаях аргумент e, представляющий событие React, будет передан как второй аргумент после идентификатора. Используя стрелочную функцию, необходимо передавать аргумент явно, но с bind любые последующие аргументы передаются автоматически.
    </p>

    </div>
    </div>
</Content> 
  );
}

export default Events;
