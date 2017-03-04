import * as React from 'react';

export class ScrollWrapper extends React.Component<any, void> {
    public checkScroll = true;
    public timeout = null;

    public handleScroll(event) {
        // blir så många events på scroll, försöker minimera det lite.
        if(this.checkScroll) {
            if (this.props.onWindowScroll && this.props.scrollTo) {
                var rect = this.props.scrollTo.getBoundingClientRect()
                if(window.scrollY + window.innerHeight > rect.top) {
                    this.props.onWindowScroll(event);
                }
            }
            this.checkScroll = false;
            this.timeout = null;
        }

        if(this.timeout === null) {
            this.timeout = setTimeout(function(){
                this.checkScroll = true;
            }.bind(this), 100)
        }        
    }

    public componentDidMount() {
        if (this.props.onWindowScroll) {
            window.addEventListener("scroll", (event) => this.handleScroll(event));
        }
    }

    public componentWillUnmount() {
        if (this.props.onWindowScroll) {
            window.removeEventListener("scroll", (event) => this.handleScroll(event));
        }
    }

    public render() {
        return <div>{this.props.children}</div>;
    }    
}