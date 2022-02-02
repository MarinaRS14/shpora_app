import React from 'react';
import { Layout} from 'antd';
import Counter from './examples/Counter';
const { Content } = Layout;

function State() {
  return (
    <Content style={{ padding: '20px 20px' }}>
    <div className="site-layout-content" style={{textAlign: 'center' }}>
    <h1 className='title'>Стейт</h1>
    <div className='content'>
        
    <div className='code'>
        <pre><code>{`class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
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
        <p>
        Классовые компоненты всегда должны вызывать базовый конструктор с аргументом props.
        </p>

        <p>
          В качестве премера state сделаем счетчик:
        </p>

        <div className='code'>
          <Counter />
        </div>
    
    </div>
    </div>
</Content>
  );
}

export default State;
