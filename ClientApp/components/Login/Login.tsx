import * as React from 'react';
import { inject } from 'mobx-react';
import { Link } from 'react-router';

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

    private handleClickExit() {
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
        return  <div className='login-wrapper'>
                    <div className='login'>
                        <header><span>Login</span><span className='close' onClick={() => this.handleClickExit()}>x</span></header>
                        <input type='text' placeholder='Username' onChange={this.handleUserNameChange}/>
                        <input type='password' placeholder='Password' onChange={this.handlePasswordChange}/>
                        <input type='button' value='Submit' onClick={() => this.handleSubmit()}/>
                        <input type='button' value='Facebook'/>
                        <Link to={'/account/register'}>Register</Link><br/>
                        <Link to={'/account/forgotpassword'}>Forgot password</Link>
                    </div>
                    <div className='backdrop' onClick={() => this.handleClickOutside()}>
                    </div>
                </div>;
    }
}