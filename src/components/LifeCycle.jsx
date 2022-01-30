import React from 'react';
import { Layout} from 'antd';
const { Content } = Layout;

function LifeCycle() {
  return (
    <Content style={{ padding: '20px 20px' }}>
    <div className="site-layout-content" style={{textAlign: 'center' }}>
    <h1 className='title'>Жизненный цикл</h1>
    <div className='content'>
        <h2 className='subtitle'>Есть 3 основных метода жизненного цикла:</h2>
        
    <div className='code'>
        <pre><code>{`class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Популярный пример (не забудьте сравнить пропсы):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }

  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
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
        <b>componentDidMount()</b> вызывается сразу после монтирования (то есть, вставки компонента в DOM). В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.
        </p>
    
        <p>
        В <b>componentDidUpdate()</b> можно вызывать setState(), однако его необходимо обернуть в условие, как в примере выше, чтобы не возник бесконечный цикл. Вызов setState() влечет за собой дополнительный рендер, который незаметен для пользователя, но может повлиять на производительность компонента. Вместо «отражения» пропсов в состоянии рекомендуется использовать пропсы напрямую.
        </p>

        <p>
        <b>componentWillUnmount()</b> вызывается непосредственно перед размонтированием и удалением компонента. В этом методе выполняется необходимый сброс: отмена таймеров, сетевых запросов и подписок, созданных в componentDidMount().   
        </p>

        <p>
        Не используйте setState() в componentWillUnmount(), так как компонент никогда не рендерится повторно. После того, как экземпляр компонента будет размонтирован, он никогда не будет примонтирован снова.
        </p>

    
    </div>
    </div>
</Content> 
  );
}

export default LifeCycle;
