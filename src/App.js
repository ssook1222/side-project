import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main";
import FAQ from "./pages/faq/FAQ";
import QNA from "./pages/qna/QnAMain";
import BoardRegister from "./pages/qna/BoardRegister";
import BoardView from "./pages/qna/BoardView";
import Warning from "./pages/warning/WarningMain";
import InfoKey from "./pages/infoKey/InfoKey";
import InfoTuto from "./pages/infoTuto/InfoTuto";
import ReadyOne from "./pages/practice/practiceFirst/PracticeReadyOne";
import ReadyTwo from "./pages/practice/practiceFirst/PracticeReadyTwo";
import ReadyThree from "./pages/practice/practiceFirst/PracticeReadyThree";
import Classes from "./pages/practice/readAllClass/classes";
import Practice from "./pages/practice/Practice";
import Ranking from "./pages/practice/readApplication/Ranking";
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
                  <Route path="/board-view/:questionid" element={<BoardView/>}></Route>
                  <Route path="/infoKey" element={<InfoKey />}></Route>
                  <Route path="/infoTuto" element={<InfoTuto />}></Route>

                  <Route path="/ready/1" element={<ReadyOne/>}></Route>
                  <Route path="/ready/2" element={<ReadyTwo/>}></Route>
                  <Route path="/ready/3" element={<ReadyThree/>}></Route>

                  <Route path="/read/IT" element={<Classes/>}></Route>

                  <Route path="/practice" element={<Practice />}></Route>
                  <Route path="/practice/ranking" element={<Ranking />}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
