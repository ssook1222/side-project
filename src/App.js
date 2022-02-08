import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main";
import FAQ from "./pages/faq/FAQ";
import QNA from "./pages/qna/QnAMain";
import BoardRegister from "./pages/qna/BoardRegister";
import Warning from "./pages/warning/WarningMain";
import InfoKey from "./pages/infoKey/InfoKey";
import InfoTuto from "./pages/infoTuto/InfoTuto";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route>
                  <Route exact path="/" element={<Main />}></Route>
                  <Route path="/FAQ" element={<FAQ />}></Route>
                  <Route path="/Warning" element={<Warning/>}></Route>
                  <Route path="/QnA" element={<QNA/>}></Route>
                  <Route path="/board-register" element={<BoardRegister/>}></Route>
                  <Route path="/infoKey" element={<InfoKey />}></Route>
                  <Route path="/infoTuto" element={<InfoTuto />}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
