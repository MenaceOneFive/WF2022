import './App.css';
import {FBInit} from "./Modules/Firebase/FBInit";
import {AppRouter} from "./Modules/AppRouter";

function App() {
    FBInit()
    return (
        <AppRouter></AppRouter>
    )
        ;
}

export default App;
