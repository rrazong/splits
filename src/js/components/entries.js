import React from "react";

export default class Entries extends React.Component {
    constructor() {
        super();


    }

    render() {
        return(
            <div>
                <h4>Entries</h4>
                {
                    (this.props.entries.length < 1) ?
                        <span>None</span>
                    :
                        <ol>
                            {
                                this.props.entries.map(function(entry, i) {
                                    return <li key={i}>{`${entry.name}  paid ${entry.paidAmount} for ${entry.paidItem}.`}</li>;
                                })
                            }
                        </ol>

                }
            </div>
        );
    }
}
