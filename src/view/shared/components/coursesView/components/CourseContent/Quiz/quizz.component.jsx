import React, { Component } from "react";
import "./quizz.styles.scss";
import QuizzDescription from "./QuizzDescription/quizz-description.component";
import Quizzes from "./Quizzes/quizzes.component";
import Rating from "./Rating/rating.component";
import CourseFooter from "../../CourseFooter/course-footer.component";
import QuizzFooter from "./QuizzFooter/quizz-footer.component";

export class Quizz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startQuizz: false,
    };
  }
  render() {
    const {startQuizz} = this.state
    return (
      <div className="quizz">
        <h5 className={`quizz-header mb-0 mt-5 ${this.props.center?"mx-auto":"ml-auto"}`} style={this.props.width?{width:this.props.width}:{}}>
          {this.props.sectionType}, Quiz {this.props.lectureNo}{" "}
        </h5>
        {
          startQuizz?
          <Rating countDown={true} />:null
        }
        <QuizzDescription
          width={this.props.width}
          center={this.props.center}
          sectionHead={this.props.sectionHead}
          setStartQuizz={(obj) => this.setState(obj)}
          startQuizz={startQuizz}
        />

        {startQuizz ? <Quizzes center={this.props.center} width={this.props.width} /> : null}
        
        <div className='quizz-footer_container ml-auto'>
          <QuizzFooter/>
        </div>
      </div>
    );
  }
}

export default Quizz;
