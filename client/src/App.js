import {BrowserRouter, Routers, Route, Routes,} from "react-router-dom"; 
import Juegos from "./paginas/juegos";
import Add from "./paginas/Add";
import Update from "./paginas/Update";


function App() {
  return (
    <div className="App">
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
