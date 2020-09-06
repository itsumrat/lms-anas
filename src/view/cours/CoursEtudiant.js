import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Layout from 'view/layout/Layout';
import './Cours.css';
import {
    List, Typography, Divider
} from 'antd';
import { getHistory } from 'modules/store';



class CoursEtudiant extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            Files: 'Files Here',
            classname: 'list-group-item list-group-item-action',
        }
    }


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

    data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    buttonclick = (e) => {
        this.setState({ Files: 'Matiere 1 Content' });
    }

    render() {
        return (
            <React.Fragment>

                <div className="row">
                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            <button className={this.state.classname} onClick={this.buttonclick}>
                                Matiere 1
                            </button>
                            <button className={this.state.classname}>
                                Matiere 2
                            </button>
                            <button className={this.state.classname}>
                                Matiere 3
                            </button>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action" href="#">
                                'Files Here'
                            </a>
                            <a className="list-group-item list-group-item-action" href="#">
                                {this.state.Files}
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null)(CoursEtudiant);
