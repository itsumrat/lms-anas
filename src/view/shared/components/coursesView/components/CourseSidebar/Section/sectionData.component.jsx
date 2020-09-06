import React, { Component } from 'react';
import Section from './section.component';

export class SectionData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: false,
      completed: '',
    };
  }

  render() {
    const { openSection, completed } = this.state;
    console.log(this.props.data);
    var elements = this.props.data;
    var { name, id } = this.props;
    return (
      <div className="section">
        <div
          onClick={() =>
            this.setState({
              openSection: !this.state.openSection,
            })
          }
          className="section-title d-flex align-items-center justify-content-between"
        >
          <div>
            <h5 className="section-number"></h5>
        <h4 className="section-type">  {name} </h4>
          </div>
          <i className="fa fa-caret-down"></i>
        </div>
        <div
          className={`section-content ${
            openSection ? 'ht-auto' : 'ht-0'
          }`}
        >
          {elements.map((element, index) => {
            return (
              <Section
                key={index}
                id={index}
                data={element}
                // QuizzSection={
                //   section.sectionName ==
                //   'Quizzes & Assignments'
                //     ? true
                //     : false
                // }
                // LessonTypeSection={
                //   section.sectionName == 'Lesson Types'
                //     ? true
                //     : false
                // }
                // dataNumber={section.dataNumber}
                // dataType={section.dataType}
                // content={section.content}
                setToPlay={this.props.setToPlay}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SectionData;
