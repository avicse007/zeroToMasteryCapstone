// @ts-nocheck
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import Navbar from './routes/navigation/navigation.component.jsx';
import SignIn from './routes/sign-in/signIn.component.jsx';

const Shop = () => <div>Shop</div>;



const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>

  );
}

export default App;
