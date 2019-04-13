import React, { Component } from 'react';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        let customerdata = this.props.customerdata;
        return (
            <div>
                <div>
                    <table>

                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>

                        <tbody>

                            {customerdata.map(function (data, index) {
                                
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{data.name}</td>
                                            <td>{data.ph_no}</td>
                                        </tr>
                                    )
                                
                            })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default View;
