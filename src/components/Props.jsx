import React from 'react';
import { Layout} from 'antd';
const { Content } = Layout;

function Props() {
  return (
    <Content style={{ padding: '20px 20px' }}>
    <div className="site-layout-content" style={{textAlign: 'center' }}>
    <h1 className='title'>Пропсы</h1>
    <div className='content'>
        
    <div className='code'>
        <pre><code>{`function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);`}</code></pre>
    </div>
    
        <p>
        Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один объект и передаёт их нашему компоненту. Этот объект называется «пропсы» (props).
        </p>

        <p>
        Например, этот компонент выведет «Привет, Алиса» на страницу:
        </p>

    <div className='code'>
        <pre><code>{`function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);`}</code></pre>
    </div>
    </div>
    </div>
</Content>
  );
}

export default Props;
