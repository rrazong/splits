import React from "react";
import Entries from "./Entries";
import Entry from "./Entry";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Entry/>
                <Entries/>
                <Footer/>
            </div>
        );
    }
}


