import * as React from 'react';

// import interfaces
import { IProfileProps } from './interfaces';

// import styles
import './Profile.css';

export class Profile extends React.Component<IProfileProps> {
  public render() {
    return (
      <div className="profile-card">
        <div className="avatar" />
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
