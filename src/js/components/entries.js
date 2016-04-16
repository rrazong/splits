import React from "react";

export default class Entries extends React.Component {
    constructor() {
        super();

        this.state = {
            "entries" : [
                {
                    "name": "Nok",
                    "paidAmount": 43,
                    "paidItem" : "Wine",
                    "splitWith" : "Everyone"
                },
                {
                    "name": "Richie",
                    "paidAmount": 20,
                    "paidItem" : "Movie Tickets",
                    "splitWith" : "Everyone"
                }
            ]
        };
    }

    render() {
        return(
            <div>
                <h4>Entries</h4>
                <ol>
                    {
                        this.state.entries.map(function(entry, i) {
                            return <li key={i}>{`${entry.name}  paid ${entry.paidAmount} for ${entry.paidItem}.`}</li>;
                        })
                    }
                </ol>
            </div>
        );
    }
}
