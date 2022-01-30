import React from 'react';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Memo from './components/Memo';
import Components from './components/Components';
import Props from './components/Props';
import State from './components/State';
import Home from './components/Home';
import LifeCycle from './components/LifeCycle';
import Events from './components/Events';
import Keys from './components/Keys';
import Refs from './components/Refs';
import Async from './components/Async';
import VirtualDom from './components/VirtualDom';
import Fragment from './components/Fragment';
import Effect from './components/Effect';
import Router from './components/Router';
import Context from './components/Context';
import Form from './components/Form';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

function App({state}) {
  return (
    <div className='App'>
      <BrowserRouter>
      <Layout className="layout">
      <HeaderComponent state={state}/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='components' element={<Components />} />
          <Route path='props' element={<Props />} />
          <Route path='state' element={<State />} />
          <Route path='lifecycle' element={<LifeCycle />} />
          <Route path='events' element={<Events />} />
          <Route path='keys' element={<Keys />} />
          <Route path='refs' element={<Refs />} />
          <Route path='async' element={<Async />} />
          <Route path='virtualdom' element={<VirtualDom />} />
          <Route path='fragment' element={<Fragment />} />
          <Route path='memo' element={<Memo />} />
          <Route path='useeffect' element={<Effect />} />
          <Route path='router' element={<Router />} />
          <Route path='context' element={<Context />} />
          <Route path='form' element={<Form />} />
        </Routes>
      
        <FooterComponent />
  </Layout>
  </BrowserRouter>
    </div>
  )
}

export default App;
