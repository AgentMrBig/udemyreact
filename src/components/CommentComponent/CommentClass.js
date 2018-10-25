import React, { Component } from 'react';

class Comment extends Component {
    render(){
        return(
            <div className="Comment">
                <userInfo user={this.props.user} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(this.props.date)}
                </div>
            </div>
        );
    }
}