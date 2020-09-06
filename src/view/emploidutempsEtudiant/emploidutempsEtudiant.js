import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Layout from 'view/layout/Layout';
import './EmploidutempsEtudiant.css';
import { getHistory } from 'modules/store';

class EmploidutempsEtudiant extends PureComponent {
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
                <div name="container">
                    <div name="row">

                        <div name="col-md">
                            <img
                                name="card-img-top"
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

export default connect(null)(Layout(EmploidutempsEtudiant));
