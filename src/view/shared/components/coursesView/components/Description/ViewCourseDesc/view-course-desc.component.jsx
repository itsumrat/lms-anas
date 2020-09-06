import React from 'react'
import './view-course-desc.styles.scss'
import slide3 from "../../../assets/slide3.jpg"
import OnlyText from '../../CourseContent/OnlyText/only-text.component'

function ViewCourseDesc(props) {
    return (
        <div className="view-course-desc mt-5">
            <div className="description-img_container pb-5">
                <img src={slide3} alt=""/>
            </div>
            <div className="download_container pdf-downloader d-flex justify-content-between py-2 pt-3">
                <h5 className="downloader_header m-0 d-flex align-items-center">
                    <i className="fa fa-file-pdf-o mr-2"></i>
                    Message for Students
                </h5>
                <div className="file-details_container d-flex align-items-center">
                    <h5 className="file-size m-0 mr-2">File size: <span>36 kb</span></h5>
                    <div className="download-icon d-flex justify-content-center align-items-center">
                        <i className="fa fa-download"></i>
                    </div>
                </div>
            </div>

            <div className="download_container jpg-downloader d-flex justify-content-between py-2 mb-2">
                <h5 className="downloader_header m-0 d-flex align-items-center">
                    <i className="fa fa-file-image-o mr-2"></i>
                    Thank you for purchasing the course)
                </h5>
                <div className="file-details_container d-flex align-items-center">
                    <h5 className="file-size m-0 mr-2">File size: <span>32 kb</span></h5>
                    <div className="download-icon d-flex justify-content-center align-items-center">
                        <i className="fa fa-download"></i>
                    </div>
                </div>
            </div>
            <div className="description_container mt-4">
                <OnlyText/>
                <OnlyText/>
            </div>

            <div className="main-features_container mt-4">
                <h5 className="main-features_header">Main Features</h5>
                <ul className="main-features d-flex flex-wrap">
                    <li className="feature">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                    <li className="feature">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                    <li className="feature">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                    <li className="feature">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                    <li className="feature">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                    <li className="feature">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                </ul>
            </div>

            <div className="target-audience-info_container">
                <h5 className="target-audience-question">What is the target audience?</h5>
                <ul className="target-audience-points">
                    <li className="point">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium similique magni.</li>
                    <li className="point">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, asperiores?</li>
                </ul>
            </div>

            <div className="mt-4">
                <OnlyText/>
                <OnlyText/>
            </div>
        </div>
    )
}

export default ViewCourseDesc
