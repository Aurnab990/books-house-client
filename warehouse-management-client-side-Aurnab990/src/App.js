
import { Routes , Route} from 'react-router-dom';
import './App.css';
import Additems from './Components/Additems';

import About from './Components/Home/About/About';
import Blog from './Components/Home/Blog/Blog';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home';
import Inventories from './Components/Home/Inventories/Inventories';
import Login from './Components/Home/Login';
import Myitems from './Components/Myitems';
import Update from './Components/Update';
import Footer from './Footer/Footer';
import Notfound from './Notfound/Notfound';


import Requireauth from './RequireAuth/Requireauth';
import Signup from './SignUp/Signup';

function App() {
  return (
    <div className="App ">
     
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/additems' element={<Additems></Additems>}></Route>
        <Route path='/myitems' element={<Myitems></Myitems>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
   
        

        <Route path='/inventories' element={
        <Requireauth>
          <Inventories></Inventories>
        </Requireauth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
