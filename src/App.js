import './App.css';
import SignIn from './Component/SignIn';
import Main from './Component/Main';
import NewsDetails from './Component/NewsDetails';
import { Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<Main />} />
        <Route path='/details' element={<NewsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
