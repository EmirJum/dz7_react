import { Routes, Route, BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/mainPage/MainPage'
import AboutPage from "./pages/aboutPage/AboutPage"
import PortfolioPage from "./pages/portfolioPage/PortfolioPage"
import Header from "./components/header/Header"
import Footer from './components/footer/Footer';
import TablePage from "./pages/tablePage/TablePage";
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<MainPage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/portfolio" element={<PortfolioPage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter> 
      <div className="app_inner">
        <TablePage/>
      </div>
    </div>
  );
}

export default App;
