import React from 'react';
import './resources/css/font-awesome.css'
import './App.css';
import AppTitle from './AppTitle';
import AppHeader from './AppHeader';
import AppList from './AppList';
import AppFooter from './AppFooter';

class App extends React.Component {  
  constructor(props){
    super(props);
    this.OnAddTodoItem = this.OnAddTodoItem.bind(this);
    this.OnDeleteTodoItem = this.OnDeleteTodoItem.bind(this);
    this.OnSwitchTodoItem = this.OnSwitchTodoItem.bind(this);
    this.OnFilter = this.OnFilter.bind(this);
    this.state={ data: this.props.data, filter: -1 };
  }

  OnAddTodoItem(item){
    console.log(item);
    let index = -1;
    this.state.data.forEach(element => {
      if (element.id > index){
        index = element.id;
      }
    });
    let newData = this.state.data.concat({ id: index+1, name: item, status: false });
    this.setState({ data: newData});
  }

  OnDeleteTodoItem(id){
    console.log(id);

    let newData = [];
    this.state.data.forEach(element => {
      if (id !== element.id){
        newData.push(element);
      }
    });

    this.setState({ data: newData });
  }

  OnSwitchTodoItem(id, status){
    let {data} = this.state;
    let item = data.find(e => e.id === id);
    item.status = status;
    
    let newData = Array.from(data);

    this.setState({ data: newData});
  }

  OnFilter(filtertype){
    let filter = -1;
    if (0 === filtertype || 1 === filtertype){
      filter = filtertype;
    }

    this.setState({filter: filter});
  }

  render() {
    const {data} = this.state;
    const {filter} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div id="content" className="container">
            <AppTitle />
            <div className="row">
              <div className="col-12">
                <hr/>
              </div>
            </div>
            <AppHeader AddTodoItem={this.OnAddTodoItem} />            
            <div className="row">
              <div className="col-12">
                <hr/>
              </div>
            </div>
            <div className="row">
              <div className="container col-12">
                <AppList data={data} DeleteTodoItem={this.OnDeleteTodoItem} SwitchTodoItem={this.OnSwitchTodoItem} filter={filter} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <hr/>
              </div>
            </div>
            <AppFooter filter={filter} Filter={this.OnFilter} />
          </div>
        </header>
      </div>
    );
  };
}

export default App;
