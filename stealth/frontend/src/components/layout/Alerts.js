import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';

import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            alert.error(`Name: ${error.msg}`);
        }

        if (message !== prevProps.message) {
            if (message.contactInfoRetrieved) alert.success("Info Loaded")
        }
    }

    render() {
        return <Fragment />
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

//export default withAlert(Alerts);

export default connect(mapStateToProps)(withAlert()(Alerts));
