import React, { Component } from 'react';
import { wallet } from '../../util/APIUtils';
import './Profile.css';
import Alert from 'react-s-alert';
import {Divider, Button, Icon} from "semantic-ui-react";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            walletPublicKey: this.props.currentUser.walletPublicKey,
            walletPrivateKey: this.props.currentUser.walletPrivateKey
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(props);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();   

        const walletRequest = Object.assign({}, this.state);

        wallet(walletRequest)
        .then(response => {
            Alert.success("You're successfully registered. Please login to continue!");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');            
        });
    }

    render() {
        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        
                        <div className="signup-content">
                        <div className="profile-avatar">
                            { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                        </div>

                        <Divider/>

                        <Button animated='vertical'>
                            <Button.Content visible>Create Wallet</Button.Content>
                            <Button.Content hidden><Icon name='bitcoin' /></Button.Content>
                        </Button>

                        <Divider horizontal> OR use existing wallet </Divider>
                        
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-item">
                            <label>Wallet public key</label>
                            <input type="walletPublicKey" name="walletPublicKey" 
                                className="form-control" placeholder="Wallet Public Key"
                                value={this.state.walletPublicKey} onChange={this.handleInputChange}/>
                            </div>
                            <div className="form-item">
                            <label>Wallet private key</label>
                            <input type="walletPrivateKey" name="walletPrivateKey" 
                                className="form-control" placeholder="Wallet Private Key"
                                value={this.state.walletPrivateKey} onChange={this.handleInputChange}/>
                            </div>
                            <div className="form-item">
                            <button type="submit" className="btn btn-block btn-primary" >Update</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Profile