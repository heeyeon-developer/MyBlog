import React, { Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppNavbar from '../components/AppNavbar';
//{ => return과 {}이 필요함
//( => return,{}이 생략된 것
const MyRouter = () => (
  //body안에 어떠한 값이 들어오는지에 따라 switch를 이용해 주소에 맞는 상태 변화를 해줄것
  <Fragment>
    <AppNavbar />
    <Header />
      <h1>Hello body</h1>
      <Footer />
  </Fragment>
);
//Fragment는 여러개의 컴포넌트를 쓸 수 있는것 <>로 글 생략 가능
export default MyRouter