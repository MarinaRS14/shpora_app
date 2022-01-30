import React from 'react';
import { Layout} from 'antd';
const { Content } = Layout;

function Context() {
  return (
    <Content style={{ padding: '20px 20px' }}>
    <div className="site-layout-content" style={{textAlign: 'center' }}>
    <h1 className='title'>Context</h1>
    <div className='content'>
        
        <p>
        Контекст разработан для передачи данных, которые можно назвать «глобальными» для всего дерева React-компонентов (например, текущий аутентифицированный пользователь, UI-тема или выбранный язык).
        </p>

    <h2 className='subtitle'>React.createContext</h2>

        <div className='code'>
        <pre><code>{`const MyContext = React.createContext(defaultValue);`}</code></pre>
    </div>

    <p>
    Создаёт объект Context.Когда React рендерит компонент, который подписан на этот объект, React получит текущее значение контекста из ближайшего подходящего Provider выше в дереве компонентов.
    </p>

    <p>
    Аргумент defaultValue используется только в том случае, если для компонента нет подходящего Provider выше в дереве. Значение по умолчанию может быть полезно для тестирования компонентов в изоляции без необходимости оборачивать их. Обратите внимание: если передать undefined как значение Provider, компоненты, использующие этот контекст, не будут использовать defaultValue.
    </p>

    <h2 className='subtitle'>Context.Provider</h2>

    <div className='code'>
        <pre><code>{`<MyContext.Provider value={/* некоторое значение */}>`}</code></pre>
    </div>

    <p>
    Каждый объект Context используется вместе с Provider компонентом, который позволяет дочерним компонентам, использующим этот контекст, подписаться на его изменения.
    </p>

    <p>
    Компонент Provider принимает проп value, который будет передан во все компоненты, использующие этот контекст и являющиеся потомками этого компонента Provider.Один Provider может быть связан с несколькими компонентами, потребляющими контекст.Так же компоненты Provider могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.
    </p>

    <h2 className='subtitle'>Context.Consumer</h2>

    <div className='code'>
        <pre><code>{`<MyContext.Consumer>
  {value => /* отрендерить что-то, используя значение контекста */}
</MyContext.Consumer>`}</code></pre>
    </div>

    <p>
    Consumer — это React-компонент, который подписывается на изменения контекста.В свою очередь, использование этого компонента позволяет вам подписаться на контекст в функциональном компоненте.
    </p>

    <p>
    Consumer принимает функцию в качестве дочернего компонента.Эта функция принимает текущее значение контекста и возвращает React-компонент. Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента Provider. Если такого компонента Provider не существует, аргумент value будет равен значению defaultValue, которое было передано в createContext().
    </p>
    

    </div>
    </div>
</Content>
  );
}

export default Context;
