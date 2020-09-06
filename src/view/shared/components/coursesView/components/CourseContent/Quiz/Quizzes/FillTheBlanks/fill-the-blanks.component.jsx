import React, { Component } from "react";
import FillTheBlanksInput from './FillTheBlanksInput/fill-the-blanks-input.component.jsx'

export class FillTheBlanks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fillCorrect: true,
    };
  }

  

  drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };

  render() {
    const { fillCorrect } = this.state;
    return (
      <div className="mb-4">
        <h5 className="question mb-3">
          Which of the indicated programming languages can create mobile
          sentences?
        </h5>
        <div className="fill-the-blanks_container">
          <p className="fill-the-blanks">
            Lorem <FillTheBlanksInput fillCorrect={fillCorrect}/> dolor sit amet consectetur adipisicing elit. Hic, nobis beatae
            facilis architecto sapiente libero tempora dolor accusamus totam,
            nihil praesentium quod quibusdam iusto aperiam maxime <FillTheBlanksInput fillCorrect={fillCorrect}/> reiciendis
            saepe. Dicta, dolore. Tempore saepe mollitia reiciendis amet
            consectetur ratione dolore, cum exercitationem!<FillTheBlanksInput fillCorrect={fillCorrect}/>
          </p>
          <div className="fill-blanks-answers_container mt-2 d-flex align-items-center">
            <p id="drag-blank1" className="fill-blanks-answer m-0 mr-2" draggable={true} onDragStart={(e)=>this.drag(e)}>ipsum</p>
            <p id="drag-blank2" className="fill-blanks-answer m-0 mr-2" draggable={true} onDragStart={(e)=>this.drag(e)}>ipsum2</p>
            <p id="drag-blank3" className="fill-blanks-answer m-0 mr-2" draggable={true} onDragStart={(e)=>this.drag(e)}>ipsum3</p>
            <p id="drag-blank4" className="fill-blanks-answer m-0 mr-2" draggable={true} onDragStart={(e)=>this.drag(e)}>ipsum4</p>
            <p id="drag-blank5" className="fill-blanks-answer m-0 mr-2" draggable={true} onDragStart={(e)=>this.drag(e)}>ipsum5</p>
            <p id="drag-blank6" className="fill-blanks-answer m-0 mr-2" draggable={true} onDragStart={(e)=>this.drag(e)}>ipsum6</p>
            <p id="drag-blank7" className="fill-blanks-answer m-0 mr-2" draggable={true} onDragStart={(e)=>this.drag(e)}>ipsum7</p>
            <p id="drag-blank8" className="fill-blanks-answer m-0 mr-2" draggable={true} onDragStart={(e)=>this.drag(e)}>ipsum8</p>
            <p id="drag-blank9" className="fill-blanks-answer m-0 mr-2" draggable={true} onDragStart={(e)=>this.drag(e)}>ipsum9</p>
            <p id="drag-blank10" className="fill-blanks-answer m-0 mr-2" draggable={true} onDragStart={(e)=>this.drag(e)}>ipsum10</p>
            <p id="drag-blank11" className="fill-blanks-answer m-0 mr-2" draggable={true} onDragStart={(e)=>this.drag(e)}>ipsum11</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FillTheBlanks;
