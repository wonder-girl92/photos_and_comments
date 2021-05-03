import {loadPhotos} from "../redux/actions";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPhotos())
    }, []);

    return (
        <div className="app">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
