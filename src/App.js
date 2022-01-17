import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route>
                  <Route path="/" element={<Main />}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
