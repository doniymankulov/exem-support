import './App.css';
import Header from "./components/header";
import Hero from "./components/hero";
import Main from "./components/main";
import Comp from "./components/comp";
import Prof from "./components/prof";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Main/>
            <Comp/>
            <Prof/>
        </div>
    );
}

export default App;
