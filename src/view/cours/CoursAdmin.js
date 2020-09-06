import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Layout from 'view/layout/Layout';
import './Cours.css';
import { getHistory } from 'modules/store';

class CoursAdmin extends PureComponent {
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

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">

                        <div className="col-md">
                            <img
                                className="card-img-top"
                                src="/images/emploidutemps.png"
                                alt="Card image cap"
                            />
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null)(CoursAdmin);
