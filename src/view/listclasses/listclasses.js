import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Layout from 'view/layout/Layout';
import './listclasses.css';

class listclasses extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            nomclasse: ['Nom De La Classe'],
        }
    }

    handleLive = () => {
        this.props.history.push({
            pathname: '/live',
        });
    };

    render() {
        return (
            <React.Fragment>
                <div name="container">
                    <div name="row">
                        <div name="col-md-4 mt-4">
                            <div name="card profile-card-5">
                                <div name="card-img-block">
                                    <img
                                        name="card-img-top"
                                        src="/images/Classroom.jpg"
                                        alt="Card image cap"
                                    />
                                </div>
                                <div name="card-body pt-0 text-center">
                                    <div name="card-title"> <h6> {this.state.nomclasse[0]} </h6> </div>
                                    <button
                                        type="button"
                                        name="btn btn-success"
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

export default connect(null)(Layout(listclasses));
