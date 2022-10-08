import React, { Component } from 'react';
import './HotTasks.css';
import Alert from 'react-s-alert';

import {Container, Header, Card, Icon, Image, Statistic, Divider} from 'semantic-ui-react'
import {getStatistics} from "../util/APIUtils";


class HotTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issuesNumber: 0,
            totalAmount: 0,
            inProgress: 0,
            teamMembers: 0,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }

        // here an Ajax request should happen
        getStatistics()
            .then(
                (result) => {
                    this.setState({
                        issuesNumber: result.issuesNumber,
                        totalAmount: result.totalAmount,
                        inProgress: result.inProgress,
                        teamMembers: result.teamMembers,
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        /*if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }*/

        const { issuesNumber, totalAmount, inProgress, teamMembers, isLoaded } = this.state;

        const items = [
            {
                header: 'Readme.md',
                description:
                    'Write Readme.md file',
                meta: '$: 100',
            },
            {
                header: 'New logo',
                description:
                    'Create a new logo for the hackathon',
                meta: '$: 25',
            },
            {
                header: 'New logo',
                description:
                    'Create a new logo for the hackathon',
                meta: '$: 25',
            },
            {
                header: 'New logo',
                description:
                    'Create a new logo for the hackathon',
                meta: '$: 25',
            },
            {
                header: 'Test task for zebra',
                description:
                    '/zebra pau 100',
                meta: '$: 100',
            },
            {
                header: 'Test task for zebra',
                description:
                    '/zebra pau 100',
                meta: '$: 100',
            },
            {
                header: 'Test task for zebra',
                description:
                    '/zebra pau 100',
                meta: '$: 100',
            },
            {
                header: 'Readme.md',
                description:
                    'Write Readme.md file',
                meta: '$: 100',
            },
            {
                header: 'Readme.md',
                description:
                    'Write Readme.md file',
                meta: '$: 100',
            },
            {
                header: 'Readme.md',
                description:
                    'Write Readme.md file',
                meta: '$: 100',
            },
        ]

        return (
            <Container>
                <Header as="h2">Hot Tasks to Contribute</Header>
                <Stats issuesNumber = {issuesNumber} totalAmount = {totalAmount} inProgress = {inProgress} teamMembers = {teamMembers}/>
                <Divider horizontal>Check out</Divider>
                <Card.Group items={items} />
            </Container>

        );
    }
}

class Stats extends Component {
    render() {
        return (

            <Statistic.Group widths='four'>

                <Statistic>
                    <Statistic.Value>{this.props.issuesNumber}</Statistic.Value>
                    <Statistic.Label>Issues</Statistic.Label>
                </Statistic>

                <Statistic>
                    <Statistic.Value>
                        <Icon name='ruble' /> {this.props.totalAmount}
                    </Statistic.Value>
                    <Statistic.Label>Total</Statistic.Label>
                </Statistic>

                <Statistic>
                    <Statistic.Value>
                        <Icon name='play' /> {this.props.inProgress}
                    </Statistic.Value>
                    <Statistic.Label>In progress</Statistic.Label>
                </Statistic>

                <Statistic>
                    <Statistic.Value>
                        <Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' className='circular inline' />
                        {this.props.teamMembers}
                    </Statistic.Value>
                    <Statistic.Label>Team Members</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        );
    }
}

export default HotTasks
