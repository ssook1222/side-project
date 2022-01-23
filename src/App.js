import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main";
import FAQ from "./pages/faq/FAQ";
import Warning from "./pages/warning/WarningMain";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/FAQ" element={<FAQ />}></Route>
                  <Route path="/Warning" element={<Warning/>}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
