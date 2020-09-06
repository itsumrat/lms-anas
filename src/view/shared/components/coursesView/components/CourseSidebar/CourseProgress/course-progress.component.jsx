import React from 'react'
import './course-progress.styles.scss'

function CourseProgress(props) {
    return (
        <div className='course-progress' onClick={()=> props.showProgressPopup({courseProgress: true})}>
            <h2 className="progress-header text-uppercase">Your Progress</h2>
            <div className="progress-percent_container d-flex align-items-center">
                <div className="progress-indicate">
                    <div></div>
                </div>
                <h5 className="progress-percent">100%</h5>
            </div>
        </div>
    )
}

export default CourseProgress
