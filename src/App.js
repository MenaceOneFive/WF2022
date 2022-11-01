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
        
    )
        ;
}

export default App;
