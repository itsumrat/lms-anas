import React, { Component } from 'react';
import Roles from 'security/roles';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './livePage.css';

export default class UserContainer extends Component {
  teacher = (key, event) => {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <div className="row">
          {' '}
          <h2> Nom Prof </h2>{' '}
        </div>
        {/* Image Testing */}
        {/* <img
            className="img-fluid"
            src="/images/Classroom.jpg"
          /> */}
        <div className="row">
          <ReactPlayer
            key={key}
            url={event.stream}
            playing
            controls
          />
        </div>
      </div>
    );
  };

  etudiant = (key, event) => {
    return (
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
        }}
      >
        <div className="riwww">
          <div className="border-primary columniii">
            <div
              style={{
                position: 'relative',
                textAlign: 'center',
              }}
            >
              {/* Image Testing */}
              {/* <img
                    className="img-fluid"
                    src="/images/Classroom.jpg"
                  /> */}
              <ReactPlayer
                key={key}
                url={event.stream}
                playing
                controls
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1px',
                  right: '1px',
                  background: 'rgba(255, 255, 255, 0.5)',
                }}
              >
                <button
                  // onClick={this.RoomSlash}
                  style={{
                    backgroundColor: 'Transparent',
                    backgroundRepeat: 'no-repeat',
                    border: 'none',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    outline: 'none',
                    fontSize: '12px',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    className="btn1"
                    style={{ fontSize: '20px' }}
                  />
                </button>
              </div>
            </div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              <b> test testtest </b>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    var { event, key } = this.props;

    var role = event.role;

    if (role === 'teacher') {
      return this.teacher(key, event);
    } else {
      if (role === 'student' || role === 'responsible') {
        return this.etudiant(key, event);
      }
    }

    return <div> Makayn waluuuu </div>;
  }
}
