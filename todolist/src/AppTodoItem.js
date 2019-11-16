import React from 'react';

// var style = {
//     row:{
//         width:'100%'
//     },
//     cell:{
//         width:'23%',
//         padding:5,
//         float:'float',
//         display:'inline-block',
//         textAlign:'left'
//     }
// };

class AppTodoItem extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleCheckedClick = this.handleCheckedClick.bind(this);
    }

    handleDeleteClick(e){
        e.preventDefault();
        console.log('AppTodoItem->handleDeleteClick');
        var id = e.target.getAttribute('todoid')*1;
        this.props.DeleteTodoItem(id);
    }

    handleCheckedClick(e){
        //e.preventDefault();
        console.log('AppTodoItem -> handleCheckedClick');        
        let id = this.refs.todoid.getAttribute('todoid');
        let status = e.target.checked;
        this.props.SwitchTodoItem(id*1, status);
    }

    render(){    
        var d = {
            false:'Not Completed',
            true:'Completed'
        };
        
        return (
            <div className="row">
                <div className="col-1"><span>{this.props.id}</span></div>
                <div className="col-5"><span>{this.props.name}</span></div>         
                <div className="col-4">
                    <input className="form-control" type='checkbox' checked={this.props.status} onChange={this.handleCheckedClick} />
                    <span>{ d[this.props.status]}</span>
                </div>
                {/* <div className="col-2"><input className="form-control" type='button' value='Delete' onClick={this.handleDeleteClick} ref='todoid' todoid={this.props.id} /></div> */}
                <div className="col-2"><i className="fa fa-trash-o" aria-hidden="true" onClick={this.handleDeleteClick} ref='todoid' todoid={this.props.id}></i></div>
            </div>
        );    
    };
}

export default AppTodoItem;