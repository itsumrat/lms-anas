import React, { Component } from "react";
import './ray-tracing.styles.scss'
import CourseFooter from "../../CourseFooter/course-footer.component";
import OnlyText from "../OnlyText/only-text.component";
import TextWithImage from "../TextWithImage/text-with-image.component";

export class RayTracing extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className={`ray-tracing ${this.props.toggleRightSidebar?'ml-auto mr-5':'mx-auto'}`}>
        <div className="section-title-and-lecture">
          <h5>{this.props.sectionType}, Lecture {this.props.lectureNo} </h5>
        </div>
        <h2 className="section-content-title">
          {this.props.sectionHead}
        </h2>
        <OnlyText/>
        <OnlyText/>
        <OnlyText/>
        <TextWithImage/>

        <div className="ray-tracing-advantages">
            <h5>
                Why Ray Tracing is a Natural Choice for Global Illumination?
            </h5>
            <ul className="points">
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat repudiandae eos molestiae autem saepe optio!</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat repudiandae eos molestiae autem saepe optio!</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat repudiandae eos molestiae autem saepe optio!</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat repudiandae eos molestiae autem saepe optio!</li>
            </ul>
        </div>

        <OnlyText/>
        <OnlyText/>
        <OnlyText/>
        <OnlyText/>

        {/* <CourseFooter color="#000"/> */}
      </div>
    );
  }
}

export default RayTracing;
