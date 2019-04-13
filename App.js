import React, { Component } from 'react';
import Form from './Form';
import View from './View';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            name: "",
            ph_no: ""
        }
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    
    handleFormChange(data) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "http://localhost:8010/");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(data));

        let customer_array = [...this.state.customer];
        customer_array.push(data);
        this.setState({ customer: customer_array });



        console.log(data);
    }

    componentDidMount() {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "http://localhost:8010/");
        xmlhttp.send();
        xmlhttp.onload = function () {
            let serverData = xmlhttp.responseText;
            let data = JSON.parse(serverData);
            console.log(serverData);
            this.setState({ customer: data });
            console.log(this.state.customer);
        }.bind(this);
    }


    render() {
        return (
            <React.Fragment>

                <div>
                    <br />
                    <div>
                        <Form name={this.props.name}
                            ph_no={this.props.ph_no}
                            handleFormChange={this.handleFormChange} />
                    </div>

                    <br />

                    <div>
                        <View customerdata={this.state.customer} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
   
export default App;
