import Header from './Components/Header'
import Nav from './Components/Nav'
import Reviews from './Components/Reviews';
import Categories from './Components/Categories';
import './App.css';
import { Routes,Route, Link, useParams } from 'react-router-dom';

const App=()=> {
  return (
    <section className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/reviews" element={<Reviews/>} />
            <Route path='/reviews/:category' element={<Reviews/>}/>
            <Route path="/categories" element={<Categories />} />
            {/* <Route path="/basket" element={<Basket />} />
            <Route path="/:category" element={<Items />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/listItem" element={<ListItem />} /> */}
          </Routes>
        </section>
  );
}

export default App;
