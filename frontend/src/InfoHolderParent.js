import React, { Component } from 'react';
import OrderSubmission from './OrderSubmission';
import Review from './Review';

class InfoHolderParent extends Component {
    render() {
        return (
            <div>
                <OrderSubmission />
                <Review state={this.state} />
            </div>
        );
    }
}
