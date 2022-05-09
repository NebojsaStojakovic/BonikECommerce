import Header from './common/header/Header'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
