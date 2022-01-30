import React from 'react';
import image from'../react.jpeg';
import { Image,Layout} from 'antd';
const { Content } = Layout;


function Home() {
  return (
    <Content style={{ padding: '20px 20px' }}>
        <div className="site-layout-content" style={{textAlign: 'center' }}>
        <h1 className='title'>Welcome to my "Shpora"</h1>
        <Image src={image} alt={"reactImage"} height={500}/>  
        </div>
    </Content>
  );
}

export default Home;
