import logo from './logo.svg';
import './App.css';
import {GetSnapshot, AddData, AddData2, GetRooms, AddRoom, ImportJsonButton} from './Modules/Firebase/UsefulButtons'
import {MainPage} from "./Modules/UI/MainPage/MainPage";
import {GoogleSignIn} from "./Modules/Firebase/FBAuth";

function App() {

    return (
        <>
            <MainPage/>
            <GoogleSignIn/>
            {/*<GetSnapshot/>*/}
            {/*<GetRooms/>*/}
        </>
        
    )
        ;
}

export default App;
