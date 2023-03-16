import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
  Routes
} from "react-router-dom";
import FirstPage from "./component/pages/firstPage/page/FirstPage";
import CandidateLogin from "./component/pages/login/candidate/page/CandidateLogin";
import CandidateReg from "./component/pages/login/candidate/page/CandidateReg";
import SecondPage from "./component/pages/secondPage/page/SecondPage";

function App() {
  return (

    <BrowserRouter>
       <Switch>
        <Route path="/" exact>
          <FirstPage/>
        </Route>
        <Route path="/secondPage" exact>
          <SecondPage/>
        </Route>
        <Route path="/secondPage/candidatelogin" exact>
          <CandidateLogin/>
        </Route>
        <Route path="/secondPage/candidateReg" exact>
         <CandidateReg/>
        </Route>
        </Switch>
    </BrowserRouter>
   );
}

export default App;
