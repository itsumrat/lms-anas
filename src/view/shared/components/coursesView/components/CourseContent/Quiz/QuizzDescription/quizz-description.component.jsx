import React, { Component } from "react";
import Rating from "../Rating/rating.component";

export class QuizzDescription extends Component {
  render() {
    return (
      <div className={`quizz-description d-flex align-items-center ${this.props.center?"mx-auto":"ml-auto"}`} style={this.props.width?{width:this.props.width,marginTop:this.props.startQuizz?"-200px":"0"}:{}}>

        <div className="quizz-details_container">
          <h2 className="quizz-details-header">{this.props.sectionHead}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            consequuntur repellendus voluptatibus cum totam pariatur dicta, odit
            ratione quas debitis?
          </p>

          <img
            className="w-100 mb-3"
            src="https://stylemixthemes.com/masterstudy/academy/wp-content/uploads/sites/9/2018/08/lms_for_wordpress.png"
            alt=""
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            inventore voluptatibus quod assumenda eius saepe provident!
          </p>
        <button className='start-quizz-btn' onClick={()=>this.props.setStartQuizz({startQuizz: true})}>Start Quizz</button>
        </div>
      </div>
    );
  }
}

export default QuizzDescription;
