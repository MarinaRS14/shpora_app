import React from 'react';
import { Layout} from 'antd';
const { Content } = Layout;

function Memo() {
  return (
    <Content style={{ padding: '20px 20px' }}>
    <div className="site-layout-content" style={{textAlign: 'center' }}>
    <h1 className='title'>React.Memo</h1>
    <div className='content'>
    
        <div className='code'>
        <pre><code>{`const MyComponent = React.memo(function MyComponent(props) {
  /* рендер с использованием пропсов */
});`}</code></pre>
    </div>
        
        <p>
        React.memo — это компонент высшего порядка.
        </p>

        <p>
        Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, вы можете обернуть его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.
        </p>

        <p>
        React.memo затрагивает только изменения пропсов. Если функциональный компонент обёрнут в React.memo и использует useState, useReducer или useContext, он будет повторно рендериться при изменении состояния или контекста.
        </p>

        <p>
        По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. Если вы хотите контролировать сравнение, вы можете передать свою функцию сравнения в качестве второго аргумента.
        </p>

        <div className='code'>
        <pre><code>{`function MyComponent(props) {
  /* рендер с использованием пропсов */
}
function areEqual(prevProps, nextProps) {
  /*
  возвращает true, если nextProps рендерит
  тот же результат что и prevProps,
  иначе возвращает false
  */
}
export default React.memo(MyComponent, areEqual);`}</code></pre>
    </div>

    <p>
    Этот метод предназначен только для <b>оптимизации производительности</b>. Не полагайтесь на него, чтобы «предотвратить» рендер, так как это может привести к ошибкам.
    </p>

    
    </div>
    </div>
</Content>
  );
}

export default Memo;
