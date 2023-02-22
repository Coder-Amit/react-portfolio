import './App.css';
import Menubar from './_header/Menubar';
import Home from './_pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
  Navigate,
} from "react-router-dom";
import { Skills } from './_pages/Skills';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<>
            <Menubar />
            <Home />
          </>}>

          </Route>
          <Route path='/skills' element={
            <>
              <Menubar />
              <Home />
            </>
          }>
          </Route>
          <Route path='/exp' element={
            <>
              <Menubar />
              <Home />
            </>
          }>

          </Route>
        </Routes>
      </Router>



    </div>
  );
}

export default App;
