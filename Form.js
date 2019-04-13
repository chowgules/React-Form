import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
           ph_no: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div>
                        <h1 align="center">Customer</h1>
                    </div>

                    <br />

                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}  placeholder="Enter your name" />
                    </div>

                    <br />

                    <div>
                        <label>ph_no:</label>
                        <input type="number" name="ph_no" value={this.state.ph_no} onChange={this.handleChange}  placeholder="Enter your phone number" />
                    </div>

                    <br />

                

                    <br />

                    <div className="row">
                        <button type="submit" onClick={() => {
                            return (
                                this.props.handleFormChange(this.state)
                            )
                        }} >SUBMIT</button>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Form;
