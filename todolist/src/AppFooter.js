import React from 'react';

class AppFooter extends React.Component{
    constructor(props){
        super(props);
        this.handleCheckedClick = this.handleCheckedClick.bind(this);
    }

    handleCheckedClick(e){
        let filter = e.target.value;
        this.props.Filter(filter*1);
    }

    render(){
        const{filter} = this.props;

        let all = false;
        let completed = false;
        let notcompleted = false;

        if (0 === filter){
            notcompleted = true;
        }
        else if (1 === filter){
            completed = true;
        }
        else{
            all = true;
        }

        return (
            <React.Fragment>
                <div className="row footer">
                    <div className="col-12"><span>Select a filter condition:</span></div>
                </div>
                <div className="row footer">
                    <div className="col-3">&nbsp;</div>
                    <div className="col-3"><input className="form-control" type='radio' checked={all} value='-1' onChange={this.handleCheckedClick} /><span>All</span></div>
                    <div className="col-3"><input className="form-control" type='radio' checked={completed} value='1' onChange={this.handleCheckedClick} /><span>Completed</span></div>
                    <div className="col-3"><input className="form-control" type='radio' checked={notcompleted} value='0' onChange={this.handleCheckedClick} /><span>Not Completed</span></div>
                </div>
            </React.Fragment>
        );
    };
}

export default AppFooter;