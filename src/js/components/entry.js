import React from "react";
import $ from "jquery";

export default class Entry extends React.Component {
    saveEntry(e) {
        var $inputs = $('#entry :input[type=text]');
        var values = {};
        $inputs.each(function() {
            console.log(this.name, $(this).val());
            values[this.name] = $(this).val();
        });

        // TODO: Get values of checked boxes

        // TODO: Save entry to database
        console.log(values);

        // TODO: Add entry to Entries table

        // TODO: Set Everyone checkbox to checked, all others to un-checked
        $('#everyone').prop('checked', true);

        $inputs.each(function() {
            $(this).val('');
        });
    }

    render() {
        return(
            <div id="entry">
                <label>Name</label>
                <input name="name" type="text" placeholder="e.g. Rich" />
                <label>Paid</label>
                <input name="paidAmount" type="text" placeholder="e.g. $20" />
                <label>For</label>
                <input name="paidItem" type="text" placeholder="e.g. Movie Tickets" />
                <label>Split this with</label>
                <input id="everyone" name="splitWith" type="checkbox" value="Everyone" defaultChecked />Everyone
                <button onClick={this.saveEntry.bind(this)}>Enter</button>
            </div>
        );
    }
}


