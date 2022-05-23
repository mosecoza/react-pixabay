import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import buildStore from '../../redux/reducers';
import Home from '../Home/Home';
import ImageDetail from '../ImageDetail/ImageDetail';
import './App.css';

const App = () => {
  return (
    <Provider store={buildStore()}>
      <BrowserRouter>
        <div className="App">
          <div className='app-body'>
            <Routes>
              <Route path='' element={<Home />} />
              <Route path='page/:number' element={<Home />} />
              <Route path='detail/:id' element={<ImageDetail />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App