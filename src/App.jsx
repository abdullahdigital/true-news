
import './index.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx';
import News from './components/News.jsx';
import CategorySection from './components/CategorySection.jsx';
import InstagramIcon from './components/InstagramIcon.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

import { BrowserRouter, Route, Routes,Router } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

/* module.exports = {
  // ...
  optimization: {
    minimize: false,
  },
  // ...
}; */


const  App =()=>{
const pageSize=15;


const [progress,setProgress]=useState(0)

    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <InstagramIcon/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        /* onLoaderFinished={() => setProgress(0)} */
      />

        <Hero/>
        <Routes>
          <Route path="/" element={<CategorySection setProgress={setProgress} pageSize={pageSize} country="us" />}></Route>
          <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" showHeading={true}/>}></Route>
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" showHeading={true}/>}></Route>
          <Route path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" showHeading={true}/>}></Route>
          <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" showHeading={true}/>}></Route>
          <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" showHeading={true}/>}></Route>
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" showHeading={true}/>}></Route>
          <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" showHeading={true}/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    )
  
}

export default App;
