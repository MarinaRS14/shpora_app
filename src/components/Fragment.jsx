import React from 'react';
import { Layout} from 'antd';
const { Content } = Layout;

function Fragment() {
  return (
    <Content style={{ padding: '20px 20px' }}>
    <div className="site-layout-content" style={{textAlign: 'center' }}>
    <h1 className='title'>Фрагменты</h1>
    <div className='content'>
        <p>
        Компонента не может возвращать несколько элементов, а может только один. И для этого нам нужно обернуть весь код в родительский элемент, например div.
        </p>

        <div className='code'>
        <pre><code>{`class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Привет</td>
        <td>Мир</td>
      </div>
    );
  }
}

<table>
  <tr>
    <div>
      <td>Привет</td>
      <td>Мир</td>
    </div>
  </tr>
</table>`}</code></pre>
    </div>
        
        <p>
        В примере выше мы обернули элементы в div и при рендере он добавится в DOM.
        </p>

        <p>
        Если мы хотим этого избежать, мы можем использовать <code>{`<Fragment />`}</code>
        </p>

        <div className='code'>
        <pre><code>{`class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Привет</td>
        <td>Мир</td>
      </React.Fragment>
    );
  }
}

<table>
  <tr>
    <td>Привет</td>
    <td>Мир</td>
  </tr>
</table>`}</code></pre>
    </div>

    <p>
    Так же можно использовать сокращенную запись:
    </p>

    <div className='code'>
        <pre><code>{`class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Привет</td>
        <td>Мир</td>
      </>
    );
  }
}`}</code></pre>
    </div>

    </div>
    </div>
</Content>
  );
}

export default Fragment;
