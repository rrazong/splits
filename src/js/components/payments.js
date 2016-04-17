import React from "react";

export default class Payments extends React.Component {
    constructor() {
        super();

    }

    calculate(entries) {
        // Add all expenses
        let total = entries.reduce((sum, entry) => {
            return sum += parseInt(entry.paidAmount);
        }, 0);
        // Divide by number of people
        let share = total / entries.length;
        console.log('total', total, 'share', share);
        // Find who is owed the most
        let owed = entries.filter((entry) => { return entry.paidAmount > share }).sort((a, b) => { return b.paidAmount - a.paidAmount });
        // Find who owes the most
        let owes = entries.filter((entry) => { return entry.paidAmount <= share }).sort((a, b) => { return a.paidAmount - b.paidAmount });
        console.log('owed', owed);
        console.log('owes', owes);
        // Pay the most owed with who owes the most until paid
        // Repeat until all owed are paid or no more people who owe
        // Find those who are overpaid
        // Find those who are still owed
        // Pay the most owed with who overpaid until paid
        // Repeat until all owed are paid

        return ([
            {
                payor: "Richie",
                payee: "Kelly",
                payAmount: 10
            },
            {
                payor: "Kelly",
                payee: "Nok",
                payAmount: 29
            },
            {
                payor: "Nok"
            }
        ])
    }

    render() {
        console.log('In Payments, entries', this.props.entries);
        let payments = this.calculate(this.props.entries);

        return (
            <div>
                <h4>Payments</h4>
                {
                    (payments.length < 1) ?
                        <span>None</span>
                    :
                        <ol>
                            {
                                payments.map(function(payment, i) {
                                    if (payment.hasOwnProperty('payee')) {
                                      return <li key={i}>{`${payment.payor} pays ${payment.payAmount} to ${payment.payee}.`}</li>;
                                    } else {
                                      return <li key={i}>{`${payment.payor} pays nobody.`}</li>;
                                    }
                                })
                            }
                        </ol>

                }
            </div>
        )
    }
}
