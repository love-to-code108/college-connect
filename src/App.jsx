
// IMPORTING REACT RELATED PACKAGES BELOW
import { BrowserRouter as Router , Route, Routes } from "react-router-dom"

// IMPORTING PAGES AND COMPONENTS BELOW
import { LoginPage } from "./pages/loginPage/loginPage";
import { CreatePost } from "./pages/main/homePage";
import { Register } from "./pages/registerPage/register";
import { Navbar } from "./components/navbar";



function App() {
  

  return (
    <div>
      <Router>

        <Navbar/>

        <Routes>
          <Route path="/" element={<CreatePost/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<Register/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App
