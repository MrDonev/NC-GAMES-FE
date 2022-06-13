import Header from './Components/Header'
import Nav from './Components/Nav'
import Reviews from './Components/Reviews';
import './App.css';
import { Routes,Route, Link } from 'react-router-dom';

const App=()=> {
  return (
    <section className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Reviews />} />
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/:category" element={<Items />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/listItem" element={<ListItem />} /> */}
          </Routes>
        </section>
  );
}

export default App;
