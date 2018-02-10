import React, { Component } from 'react';

class toDoEditor extends Component {
    constructor() {
        super();
        this.state = {
            toDo: null,
            originaltoDo: null,
            notModified: true
        };
        
        this.save = this.save.bind( this );
        // this.cancel = this.cancel.bind( this );
    }   
componentWillReceiveProps(props) {
    this.setState({ toDo: Object.assign({}, props.selected), originaltoDo: props.selected, notModified: true});
}
handleChange(prop, val) {
    if ( this.state.notModified ) {
        this.setState({ notModified: false });
    }
        var toDoCopy = Object.assign({}, this.state.toDo);
        toDoCopy[prop] = val;
        this.setState({ toDo: toDoCopy });
    }

save() {
    this.state.originaltoDo.updateName(this.state.toDo.name);
    this.setState({ notModified: true });
    this.props.refreshList();
    }
// cancel() { 
//     var assetCopy = Object.assign({}, this.state.originalAsset);
//     this.setState({ asset: assetCopy, notModified: true });
// }

render() {
    return (
        <div className="infoCard">
        {
            this.state.toDo
            ?
            <div>
                
                {/* <p id="toDoTitle">  { this.state.originaltoDo.name } </p> */}
                
                <span className="placeholderText"> Name </span>
                <input className="materialInput" value={ this.state.toDo.name } onChange={ (e) => { this.handleChange('name', e.target.value) } }></input>


<br />
                <button id="saveBtn" className="confirmationButton" disabled={this.state.notModified} onClick={ this.save }>Save </button>
                <button className="neutralButton" disabled={this.state.notModified} onClick={ this.cancel }> Cancel </button>
                <br /> 
                <span id="toDoID"> ID: { this.state.toDo.id } </span>
            </div>
                :
                <p id="noToDo"> No To Do Selected </p>   
        }
        </div>
        )
    }
}
export default toDoEditor;