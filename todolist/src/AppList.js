import React from 'react';
import AppTodoItem from './AppTodoItem';

class AppList extends React.Component{   
    // constructor(props){
    //     super(props);
    //     this.OnDeleteTodoItem = this.OnDeleteTodoItem.bind(this);
    // }

    // OnDeleteTodoItem(e){
    //     console.log('AppList->OnDeleteTodoItem');
    //     this.props.DeleteTodoItem(e);
    // }

    render(){
        const {data} = this.props;
        const {DeleteTodoItem} = this.props;
        const {SwitchTodoItem} = this.props;

        let newData = undefined;
        if (0 === this.props.filter){
            // not completed
            newData = data.filter(e=>!e.status);
        }
        else if (1 === this.props.filter){
            // completed
            newData = data.filter(e=>e.status);
        }
        else{
            // all
            newData = data;
        }

        return (
            <React.Fragment>
                {
                    newData.map(function (item) {                        
                        return <AppTodoItem key={item.id} id={item.id} name={item.name} status={item.status} DeleteTodoItem={DeleteTodoItem} SwitchTodoItem={SwitchTodoItem} />
                    })
                }
            </React.Fragment>
        );
    };
}

export default AppList;