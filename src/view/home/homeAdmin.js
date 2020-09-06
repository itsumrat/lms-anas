import React, { PureComponent } from 'react';
import { i18n } from 'i18n';
import { connect } from 'react-redux';
import './homeAdmin.css';
import { getHistory } from 'modules/store';

class HomeAdmin extends PureComponent {
  handleLive = () => {
    getHistory().push({
      pathname: '/listclasses',
    });
  };
  handleCours = () => {
    getHistory().push({
      pathname: '/Cours',
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src="/images/Cours.png"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body pt-0 text-center">
                  <h4 className="card-title">{i18n('Home.menu.Cours')}</h4>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleCours}
                  >
                    {i18n('Home.menu.Access')}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src="/images/Classroom.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body pt-0 text-center">
                  <h4 className="card-title">{i18n('Home.menu.Classes')}</h4>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleLive}
                  >
                    {i18n('Home.menu.Access')}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src="/images/enregistrement.png"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body pt-0 text-center">
                  <h4 className="card-title">
                    {i18n('Home.menu.records')}
                  </h4>
                  <button
                    type="button"
                    className="btn btn-success"
                  >
                    {i18n('Home.menu.Access')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null)(HomeAdmin);
