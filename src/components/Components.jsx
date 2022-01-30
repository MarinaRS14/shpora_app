import React from 'react';
import { Layout} from 'antd';
const { Content } = Layout;

function Components() {
  return (
    <Content style={{ padding: '20px 20px' }}>
        <div className="site-layout-content" style={{textAlign: 'center' }}>
        <h1 className='title'>Компоненты</h1>
        <div className='content'>
            <h2 className='subtitle'>Компоненты бывают <a href='https://ru.reactjs.org/docs/components-and-props.html#function-and-class-components' target='_blank'>Функциональный и Классовый.</a></h2>

        <div className='code'>
            <pre><code>{`function Welcome(props) { 
  return <h1>Привет, {props.name}</h1>;
}`}</code></pre>
        </div>
        <div className='code'>
            <pre><code>{`class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}`}</code></pre>
        </div>
            <h2 className='subtitle'>React.PureComponent</h2>
            <p>
            React.PureComponent похож на React.Component. Отличие заключается в том, что React.Component не реализует shouldComponentUpdate(), а React.PureComponent реализует его поверхностным сравнением пропсов и состояния.
            </p>

            <p>
            Если метод render() вашего React-компонента всегда рендерит одинаковый результат при одних и тех же пропсах и состояниях, для повышения производительности в некоторых случаях вы можете использовать React.PureComponent.
            </p>


        </div>
        </div>
    </Content>
  );
}

export default Components;
