import "./App.css";
import Cards from './components/cards';

function App() {
    return (
        <div className="App">
            <div className="className">outer element</div>
            <h1 className="text-danger"> Hello World!1 </h1>
            <div className="text-success"> <Cards /></div>

        </div>
    );
}

export default App;