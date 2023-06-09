import {BrowserRouter, Routers, Route, Routes,} from "react-router-dom"; 
import Juegos from "./paginas/juegos";
import Add from "./paginas/Add";
import Update from "./paginas/Update";
import "./Styles/App.css"
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Juegos/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
