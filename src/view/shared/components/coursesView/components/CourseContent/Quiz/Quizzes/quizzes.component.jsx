import React, { Component } from 'react';
import SingleSelect from './SingleSelect/single-select.component';
import MultiSelect from './MultiSelect/multi-select.component';
import DragSelect from './DragSelect/drag-select.component';
import QuizzResults from '../../../Popups/QuizzResults/quizz-results.component';
import FillTheBlanks from './FillTheBlanks/fill-the-blanks.component';

export class Quizzes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzResult: '',
      openResultPopup: false,
    };
  }
  render() {
    const { quizzResult, openResultPopup } = this.state;
    return (
      <div className="quizzes">
        <div
          className={`quizzes_container ${
            this.props.center ? 'mx-auto' : 'ml-auto'
          }`}
          style={
            this.props.width
              ? { width: this.props.width }
              : {}
          }
        >
          <FillTheBlanks />
          <MultiSelect />
          <SingleSelect />
          <DragSelect />
          <button
            className="submit-quizz-btn"
            onClick={() =>
              this.setState({
                quizzResult: 61,
                openResultPopup: true,
              })
            }
          >
            <div className="btn-circle"></div>
            Submit Quizz
          </button>
        </div>
        <QuizzResults
          quizzResult={quizzResult}
          openResultPopup={openResultPopup}
          closePopup={(obj) => this.setState(obj)}
        />
      </div>
    );
  }
}

export default Quizzes;
