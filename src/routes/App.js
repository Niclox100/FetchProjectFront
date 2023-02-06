import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {LoginScreen} from "../screens/LoginScreen"
import {SignInScreen} from "../screens/SignInScreen"
import {HomeScreen} from "../screens/HomeScreen"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path="/signin" element={<SignInScreen/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
