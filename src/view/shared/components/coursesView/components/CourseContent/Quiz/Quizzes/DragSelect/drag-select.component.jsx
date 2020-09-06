import React, { Component } from 'react'

export class DragSelect extends Component {

    allowDrop = (e) =>  {
        e.preventDefault();
      }

    drag = (e) => {
        e.dataTransfer.setData("text", e.target.id);
      }

    drop = (e) => {
            if(e.target.getElementsByTagName("*").length == 0){
                e.preventDefault();
                var data = e.dataTransfer.getData("text");
                e.target.appendChild(document.getElementById(data));
            }
      }
      undoDrop = (e) => {
            e.preventDefault();
            var data = e.dataTransfer.getData("text");
            e.target.appendChild(document.getElementById(data));
  }
      drop2 = (e) => {
        e.preventDefault();
        // var data = e.dataTransfer.getData("text");
        // // e.target.appendTo(document.getElementById(data));
        // document.getElementById("drag-btn_container").appendChild(document.getElementById(data))
        e.stopPropagation()
      }
    render() {
        return (
            <div className='mb-4'>
                <h5 className="question mb-3">
                    Which of the indicated programming languages can create mobile sentences?
                </h5>
                <div className="options">

                    <div className="pair pair-1">
                        <div className="given">
                            Bill
                        </div>
                        <div className="to-enter" onDrop={(e)=>this.drop(e)} onDragOver={(e)=>this.allowDrop(e)}>

                        </div>
                    </div>
                    <div className="pair pair-2">
                        <div className="given">
                            Steve
                        </div>
                        <div className="to-enter" onDrop={(e)=>this.drop(e)} onDragOver={(e)=>this.allowDrop(e)}>

                        </div>
                    </div>
                    <div className="pair pair-3">
                        <div className="given">
                            Mark
                        </div>
                        <div className="to-enter" onDrop={(e)=>this.drop(e)} onDragOver={(e)=>this.allowDrop(e)}>

                        </div>
                    </div>
                    <div className="pair pair-4">
                        <div className="given">
                            Larry
                        </div>
                        <div className="to-enter" onDrop={(e)=>this.drop(e)} onDragOver={(e)=>this.allowDrop(e)}>

                        </div>
                    </div>
                    
                </div>
                <div id="drag-btn_container" className="drag-btn_container mt-3" onDrop={(e)=>this.undoDrop(e)} onDragOver={(e)=>this.allowDrop(e)}>
                    <button id="draggable-btn1" onDrop={(e)=>this.drop2(e)} className='drag-btn' droppable={false} draggable={true} onDragStart={(e)=>this.drag(e)}>Gates</button>
                    <button id="draggable-btn2" onDrop={(e)=>this.drop2(e)} className='drag-btn' droppable={false} draggable={true} onDragStart={(e)=>this.drag(e)}>Zuckerberg</button>
                    <button id="draggable-btn3" onDrop={(e)=>this.drop2(e)} className='drag-btn' droppable={false} draggable={true} onDragStart={(e)=>this.drag(e)}>Jobs</button>
                    <button id="draggable-btn4" onDrop={(e)=>this.drop2(e)} className='drag-btn' droppable={false} draggable={true} onDragStart={(e)=>this.drag(e)}>Page</button>
                </div>
            </div>
        )
    }
}

export default DragSelect
