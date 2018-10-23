import React, { Component } from 'react';

// third party imports
import PropTypes from 'prop-types';

// import styles
import './Profile.scss';

export class Profile extends Component {
  render() {
    return (
      <div className="profile-card">
        <div className="avatar"></div>
        <div className="user-info">
          {/* Name */}
          <div className="row">
            <h4 className="title">Full Name</h4>
            <p className="value">{`${this.props.name.first} ${this.props.name.last}`}</p>
          </div>

          {/* Role */}
          <div className="row">
            <h4 className="title">Role</h4>
            <p className="value">{this.props.role}</p>
          </div>

          {/* About */}
          <div className="row">
            <h4 className="title">Fun Facts</h4>
            <p className="value">{this.props.funFacts}</p>
          </div>
        </div>
      </div> 
    );
  }
}

Profile.propTypes = {
  role: PropTypes.string,
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    middle: PropTypes.string
  })
};