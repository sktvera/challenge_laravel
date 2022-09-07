
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import components
import ShowProducts from './components/ShowProducts';
import CreateProducts from '/components/CreateProducts';
import EditProduct from '/components/EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='' element={ <ShowProducts/> } />
            <Route path='/create' element={ <CreateProducts/> }/>
            <Route path='/edit/:id' element={ <EditProduct/> }/>
            <Route/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
