import * as React from 'react';
import { inject } from 'mobx-react';

@inject('storylineStore')
export class Login extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {usernamevalue: '', passwordvalue: ''};

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);    
    }


    private handleClickOutside() {
        this.props.storylineStore.loginVisible = false;
    }

    handleUserNameChange(event) {
        this.setState({usernamevalue: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({passwordvalue: event.target.value});
    }

    handleSubmit() {
        this.props.storylineStore.login(this.state.usernamevalue, this.state.passwordvalue);
    }

    public render() {
        return <div className='login-wrapper'>
                <div className='login'>
                    <p>Login WIP (olaf/olaf2)</p>
                    <input type='text' onChange={this.handleUserNameChange}/>
                    <input type='password' onChange={this.handlePasswordChange}/>
                    <input type='button' value='ok' onClick={() => this.handleSubmit()}/>
                </div>
                <div className='backdrop' onClick={() => this.handleClickOutside()}>
                </div>
            </div>;
    }
}