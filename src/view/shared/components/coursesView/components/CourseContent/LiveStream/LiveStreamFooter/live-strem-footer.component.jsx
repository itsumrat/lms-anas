import React from 'react'
import "./live-stream-footer.styles.scss"

function LiveStreamFooter(props) {
    return (
        <div className='live-stream-footer bg-dark d-flex justify-content-between align-items-center px-3 py-4'>
            <div className="prev-lesson_container d-flex align-items-center">
                <div className="prev-lesson-icon mx-2">
                    <i className="fa fa-angle-left"></i>
                </div>
                <div>
                    <h5 className="lesson-type-and-lecture">Lesson Types, Lecture 1</h5>
                    <h5 className="lesson-head m-0">Text Lesson Design and Visualization with Nvidea</h5>
                </div>
            </div>

            <div className="complete-btn_container text-uppercase">
                <button className="complete-btn">
                    <div className="btn-circle mr-2"></div>
                    Complete
                </button>
            </div>

            <div className="next-lesson_container d-flex align-items-center justify-content-end">
                <div>
                    <h5 className="lesson-type-and-lecture">Lesson Types, Lecture 1</h5>
                    <h5 className="lesson-head m-0">Text Lesson Design and Visualization with Nvidea</h5>
                </div>
                <div className="next-lesson-icon mx-2">
                    <i className="fa fa-angle-right"></i>
                </div>
            </div>

        </div>
    )
}

export default LiveStreamFooter
