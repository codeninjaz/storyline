import * as React from 'react';
import { inject } from 'mobx-react';

@inject('storylineStore')
export class EnsureLoggedInContainer extends React.Component<any, any> {
  componentDidMount() {
    const { dispatch, currentURL } = this.props
    
    if (!this.props.storylineStore.loggedInUser) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      //dispatch(setRedirectUrl(currentURL))
      //browserHistory.replace("/login")
      this.props.storylineStore.loginVisible = true;
    }
  }

  render() {
    if (this.props.storylineStore.loggedInUser) {
      return this.props.children
    } else {
      return null
    }
  }
}

