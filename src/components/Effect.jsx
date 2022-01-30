import React from 'react';
import { Layout} from 'antd';
const { Content } = Layout;

function Effect() {
  return (
    <Content style={{ padding: '20px 20px' }}>
    <div className="site-layout-content" style={{textAlign: 'center' }}>
    <h1 className='title'>Хук useEffect</h1>
    <div className='content'>
        
        <p>
        Хук эффекта даёт вам возможность выполнять побочные эффекты в функциональном компоненте:
        </p>

        <div className='code'>
        <pre><code>{`import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = 'Вы нажали count раз';
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}`}</code></pre>
    </div>

    <h2 className='subtitle'>componentDidMount и componentWillUnmount</h2>

    <p>
    componentDidMountсрабатывает только при первом рендоре компонента и аналогично ему хук выглядит так:
    </p>

    <div className='code'>
        <pre><code>{`useEffect(() => {
  // стработает 1 раз при первом рендре компонента
  // здесь код работает как componentDidMount
  return () => {
    // return здесь работает как componentWillUnmount
  };
}, []);`}</code></pre>
    </div>

    <p>
    Если оставить второй параметр как пустой масив, то хук сработает как классовый метод componentDidMount
    </p>
    
    <h2 className='subtitle'>componentDidMount</h2>

    <div className='code'>
        <pre><code>{`useEffect(() => {
  // будет срабатывать только тогда, когда изменится параметр smt
}, [smt]);`}</code></pre>
    </div>

    <p>Этот хук принимает два парраметра: <br />
              1. Анонимную функцию <br />
              2. Масив значений который нужно отслеживать
    </p>

    <p>
    Если не указать второй параметр, то при каждом изменении компонента этот тух будет срабатывать
    </p>

    <div className='code'>
        <pre><code>{`useEffect(() => {
  // код будет выполнятся каждый раз, как компонент изменится
});`}</code></pre>
    </div>

    </div>
    </div>
</Content>
  );
}

export default Effect;
