import React from 'react'

function Rating(props) {
    return (
        <div className="answered-correctly_container">
          <div>
            <i className={`fa fa-${props.countDown?'clock-o':'thumbs-o-up'}`}></i>
            {
              !props.countDown?
              (
              <>
              <h3 className="correct-percentage mt-2">80%</h3>
              <h5 className="answered-correctly-text">Answered correctly</h5>
              </>
              )
              :
              (
              <>
              <h3 className="time-remaining mt-2">60:51</h3>
              <h5 className="answered-correctly-text">Answered 0/5</h5>
              </>
              )
            }
            
          </div>
        </div>
    )
}

export default Rating
