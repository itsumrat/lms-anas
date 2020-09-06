import React from "react";
import "./quizz-results.styles.scss";

function QuizzResults(props) {
  return (
    <>
      <div
        className="quizz-results-back"
        onClick={() => props.closePopup({ openResultPopup: false })}
        style={
          props.openResultPopup
            ? { pointerEvents: "visible", opacity: "1" }
            : { pointerEvents: "none", opacity: "0" }
        }
      ></div>
      <div
        className="quizz-results d-flex flex-column justify-content-center text-center"
        style={
          props.openResultPopup
            ? { pointerEvents: "visible", opacity: "1" }
            : { pointerEvents: "none", opacity: "0" }
        }
      >
        <h2 className="result_header text-center">Result</h2>
        <div className={`percentage_container ${props.quizzResult>60?'percentage-container_success':''} d-flex justify-content-center`}>
          <h2 className={`percentage`}>{props.quizzResult}%</h2>
          <div className={`result-icon ${props.quizzResult>60?'result-icon-success':''}`}>
            <i className={`fa ${props.quizzResult<=60?'fa-close':'fa-check'}`}></i>
          </div>
        </div>
        <button
          onClick={() => props.closePopup({ openResultPopup: false })}
          className="quizz-result-btn text-uppercase mx-auto"
        >
          Re-take quizz
        </button>
        <h5 className="percentage-grade">Passing grade. 70%</h5>
      </div>
    </>
  );
}

export default QuizzResults;
