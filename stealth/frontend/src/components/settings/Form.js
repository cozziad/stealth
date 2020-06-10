import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContactInfo, updateContactInfo } from "../../actions/settings"

export class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        restoreEmail: '',
        mobilePhone: ''
    };

    static propTypes = {
        getContactInfo: PropTypes.func.isRequired,
        updateContactInfo: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { id, firstName, lastName, restoreEmail, mobilePhone } = this.state;
        const contactInfo = { firstName, lastName, restoreEmail, mobilePhone };
        const uid = id;
        this.props.updateContactInfo(contactInfo, uid);
    }

    componentDidMount() {
        this.props.getContactInfo()
    }

    render() {
        //const { firstName, lastName, restoreEmail } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h3>Contact Info</h3>
                {this.props.contactInfo.map(contactInfo => (
                    <form onSubmit={this.onSubmit} key={contactInfo.id}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                className="form-control"
                                type="hidden"
                                name="id"
                                onChange={this.onChange}
                                value={contactInfo.id}
                            />
                            <input
                                className="form-control"
                                type="name"
                                name="firstName"
                                onChange={this.onChange}
                                value={contactInfo.firstName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                className="form-control"
                                type="name"
                                name="lastName"
                                onChange={this.onChange}
                                value={contactInfo.lastName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Backup Email</label>
                            <input
                                className="form-control"
                                type="text"
                                name="restoreEmail"
                                onChange={this.onChange}
                                value={contactInfo.restoreEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Mobile Phone</label>
                            <input
                                className="form-control"
                                type="text"
                                name="restoreEmail"
                                onChange={this.onChange}
                                value={contactInfo.mobilePhone}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Update
                    </button>
                        </div>
                    </form>))}
            </div>

        )
    }
}

const mapStateToProps = state => ({
    contactInfo: state.contactInfo.contactInfo
})

export default connect(mapStateToProps, { getContactInfo, updateContactInfo })(Form);
