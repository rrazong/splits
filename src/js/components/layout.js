import React from "react";
import Entries from "./Entries";
import Entry from "./Entry";
import Footer from "./Footer";
import Header from "./Header";
import Payments from "./Payments";

export default class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            "entries" : []
        };
    }

    addEntry(entry) {
        this.state.entries.push(entry);
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Header/>
                <Entry addEntry={this.addEntry.bind(this)}/>
                <Entries entries={this.state.entries}/>
                <Payments entries={this.state.entries}/>
                <Footer/>
            </div>
        )
    }
}
