import React, { Component } from 'react';
import './add-course-desc.styles.scss';
import TextEditor from '../../TextEditor/text-editor.component';
import CourseDetailsAdder from './CourseDetailsAdder/course-details-adder.component';
import uniqid from 'uniqid';

export class AddCourseDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedImg: '',
      courseFile: [],
      removeIndex: -1,
    };
  }

  loadFile = (e) => {
    this.setState({
      uploadedImg: URL.createObjectURL(e.target.files[0]),
    });
  };
  render() {
    const {
      uploadedImg,
      courseFile,
      removeIndex,
    } = this.state;
    var date = new Date();
    return (
      <div className="add-course-desc mb-5">
        {/* <div className="course-img-upload_container d-flex justify-content-center align-items-center">
          <input
            type="file"
            name=""
            id=""
            onChange={(e) => this.loadFile(e)}
          />
          <div className="img_container">
            <img src={uploadedImg} alt="" />
          </div>
          <div
            className={`upload-img_container text-center ${
              uploadedImg ? 'text-white' : ''
            }`}
          >
            <i className="fa fa-picture-o mb-3"></i>
            <h5 className="upload-img-text m-0">
              Upload course Image
            </h5>
          </div>
        </div> */}

        <div className="description-add_container mt-4">
          <TextEditor height="600px" {...this.props} />
        </div>

        {/* <div className="course-material_container mt-4">
          <h5 className="course-material_header">
            Course Materials
          </h5>
          {courseFile.map((val, i) => {
            return (
              <CourseDetailsAdder
                courseFile={courseFile}
                removeIndex={val.id}
                key={i}
                setRemoveIndex={(obj) => this.setState(obj)}
                title1="Course file title"
                title2="Upload Course file"
              />
            );
          })}

          <div
            className="course-material-adder py-2 px-3 mt-4 d-flex align-items-center"
            onClick={() => this.setState({ courseFile: [...courseFile, {id: uniqid()}] })}
          >
            <div className="course-material-add-icon d-flex justify-content-center align-items-center mr-2">
              <i className="fa fa-plus"></i>
            </div>
            <h5 className="course-material-add-text m-0">Course Materials</h5>
          </div>
        </div> */}
      </div>
    );
  }
}

export default AddCourseDesc;
