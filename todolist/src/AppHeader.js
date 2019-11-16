import React from 'react';

// var style = {
//     inputClass:{
//         width:300
        
//     }
// };

class AppHeader extends React.Component{
    constructor(props){
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);        
    }

    handleAddClick(e){
        e.preventDefault();
        let todoname = this.refs.texto.value;
        this.refs.texto.value='';
        this.props.AddTodoItem(todoname);
    }

    render(){
        return (
        <div className="row">
            <div className="col-2">&nbsp;</div>
            <div className="col-6">
                <input className="form-control" type='text' placeholder='Please input a todo name' ref='texto' />
            </div>
            <div className="col-2 left">
                <input className="form-control" type='button' value='Add' onClick={this.handleAddClick}/>
            </div>
            <div className="col-2">&nbsp;</div>
        </div>
        );
    };
}

export default AppHeader;