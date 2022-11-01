import logo from './logo.svg';
import './App.css';
import {GetSnapshot, AddData, AddData2, GetRooms, AddRoom, ImportJsonButton} from './Modules/Firebase/UsefulButtons'
import {MainPage} from "./Modules/UI/MainPage/MainPage";

function App() {

    return (
        <>
            <MainPage/>
            <GetSnapshot/>
            <GetRooms/>
        </>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo"/>
        //         <p>
        //             Edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    )
        ;
}

export default App;
