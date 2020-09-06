import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'i18n';
import Layout from 'view/layout/Layout';
import './HomeProf.css';
import { getHistory } from 'modules/store';

class HomeProf extends PureComponent {
  handleLive = () => {
    getHistory().push({
      pathname: '/live',
    });
  };
  handleEmploi = () => {
    getHistory().push({
      pathname: '/EmploidutempsProf',
    });
  };
  handleCours = () => {
    getHistory().push({
      pathname: '/assignments',
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
                  <h4 className="card-title">
                    {i18n('Home.menu.Cours')}
                  </h4>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleCours}
                  >
                    Accéder
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
                  <h4 className="card-title">Classes</h4>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleLive}
                  >
                    Accéder
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
                    Videos Enregistrées
                  </h4>
                  <button
                    type="button"
                    className="btn btn-success"
                  >
                    Accéder
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src="/images/emploidutemps.png"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body pt-0 text-center">
                  <h4 className="card-title">
                    Notifications
                  </h4>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleEmploi}
                  >
                    Accéder
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src="/images/emploidutemps.png"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body pt-0 text-center">
                  <h4 className="card-title">
                    Emploi Du Temps
                  </h4>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleEmploi}
                  >
                    Accéder
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src="/images/emploidutemps.png"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body pt-0 text-center">
                  <h4 className="card-title">Evenements</h4>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleEmploi}
                  >
                    Accéder
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

export default connect(null)(HomeProf);
