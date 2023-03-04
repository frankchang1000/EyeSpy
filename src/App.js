import logo from './logo.svg';
import './App.css';
import MainPage from './Mainpage.js';
import ImageDisplay from './ImageDisplay.js';
import Data from './Data.js';
import Header from './Header.js';

function App() {
  return (
    <header>
    <div className="App">
        <Header/>
        <MainPage/>
        <ImageDisplay/>
        <Data/>
    </div>
    </header>
  );
}

export default App;
