import React, { Component } from 'react';
import './Home.css';
import {Header} from "semantic-ui-react";

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="container">
                    <div className="graf-bg-container">
                        <div className="graf-layout">
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                        </div>
                    </div>

                    <Header as='h1'>
                        Start working on the extra mile.
                        <br/>
                        Earn coins and exchange in our marketplace or spent for charity.
                    </Header>
                </div>
            </div>
        )
    }
}

export default Home;