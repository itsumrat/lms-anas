import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { getHistory } from 'modules/store';

class HomePage extends PureComponent {
  handleLive = () => {
    getHistory().push({
      pathname: '/live',
    });
  };
  handleEmploi = () => {
    getHistory().push({
      pathname: '/EmploidutempsEtudiant',
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
                  <h4 className="card-title">Mes Cours</h4>
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
                  <h4 className="card-title">Ma Classe</h4>
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
                    Videos Enregistré
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

            <div className="col-md-4 mt-4"></div>

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

            <div className="col-md-4 mt-4"></div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null)(HomePage);
