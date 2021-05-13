import React from 'react';
import FloatingButton from './components/FloatingButton'
import Header from './components/Header'
import Deshboard from './components/Deshboard'
import Footer from './components/Footer'
import Table from './components/Table';
function App() {

  return (
    <>
      <div className="app">
        {/* <h1>let`s build the application ▼13,67,642₹▲ </h1> */}
        <Header />
        <Deshboard />
        <div className="banner">
          <img src="./banner1.png" alt="" />
        </div>
        <Table />
        <div className="banner">
          <img src="./banner2.png" alt="" />
        </div>

      </div>
      <FloatingButton />

      <Footer />

    </>
  );
}

export default App;
