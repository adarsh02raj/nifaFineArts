import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Carousels from "./component/Carousels";
import Updates from "./component/Updates";
import Welcome from "./component/Welcome";
import OnlineClass from "./component/OnlineClass";
import Cources from "./component/Cources";
import StudentWork from "./component/StudentWork";
import Footer from "./component/Footer";

const AppLayput = () => {
    return (
        <div className="appLayout">
            <Header />
            <Carousels />
            <Updates />
            <Welcome />
            <OnlineClass />
            <Cources />
            <StudentWork />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayput/>)