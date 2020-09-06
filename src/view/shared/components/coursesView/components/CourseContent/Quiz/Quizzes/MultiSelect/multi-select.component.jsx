import React, { Component } from 'react'

export class MultiSelect extends Component {
    render() {
        return (
            <div className='mb-4'>
                <h5 className="question mb-3">
                    Which of the indicated programming languages can create mobile sentences?
                </h5>
                <div className="options">
                    <div className="option mb-2">
                        <input type="checkbox"/>
                        <span className='text-white text-bold ml-2'>Javascript</span>
                    </div>

                    <div className="option mb-2">
                        <input type="checkbox"/>
                        <span className='text-white text-bold ml-2'>C#</span>
                    </div>

                    <div className="option mb-2">
                        <input type="checkbox"/>
                        <span className='text-white text-bold ml-2'>PHP</span>
                    </div>

                    <div className="option mb-2">
                        <input type="checkbox"/>
                        <span className='text-white text-bold ml-2'>Java</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default MultiSelect
