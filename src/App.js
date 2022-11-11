import './App.css';
import {FBInit} from "./FirebaseWrapper/FBInit";
import {AppRouter} from "./Modules/AppRouter";

function App() {
    FBInit()
    return (
        <AppRouter></AppRouter>
    )
        ;
}

export default App;
