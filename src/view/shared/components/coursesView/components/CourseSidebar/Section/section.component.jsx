import React, { Component } from 'react';

export class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: false,
      completed: '',
    };
  }

  render() {
    const { openSection, completed } = this.state;
    var data = this.props.data;
    var { id } = this.props;
    console.log(data);
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
            <h5 className="section-number"> &nbsp;&nbsp; {data.name} </h5>
            <h4 className="section-type"></h4>
          </div>
          <i className="fa fa-caret-down"></i>
        </div>
        <div
          className={`section-content ${
            openSection ? 'ht-auto' : 'ht-0'
          }`}
        >
          {data.assignments.map((item, i) => {
            return (
              <div
                key={i}
                className="content d-flex align-items-center"
                onClick={() => this.props.setToPlay(item)}
              >
                <i className={`fa fa-title`}></i>
                <h5 className="content-title m-0">
                  <span className="s-no">{i + 1}</span>
                  {item.name}
                </h5>
                <div
                  className="completed ml-auto"
                  style={
                    completed == i + 1
                      ? {
                          background: 'gold',
                          color: '#fff',
                        }
                      : {}
                  }
                >
                  <input
                    type="radio"
                    name="video"
                    onClick={() =>
                      this.setState({
                        completed: `${i + 1}`,
                      })
                    }
                  />
                  <i className="fa fa-check"></i>
                </div>
              </div>
            );
          })}

          {/* <div className="content d-flex align-items-center">
                                        <i className={`fa fa-${this.props.QuizzSection?'file':'play-circle'}`}></i>
                                        <h5 className="content-title m-0">
                                            <span className='s-no'>2</span>
                                            Nvidea New Technol...
                                        </h5>
                                        <h5 className="duration m-0 ml-auto">15 minutes</h5>
                                        <div className="completed ml-1" style={completed =="2"?{background:'gold',color:'#fff'}:{}}>
                                            <input type="radio" name='video' onClick={() => this.setState({completed: "2"})}/>
                                            <i className="fa fa-check"></i>
                                        </div>
                                    </div> */}
        </div>
      </div>
    );
  }
}

export default Section;
