import React from 'react';
import Event from './Event.js';
import './HotEvent.css';
import {connect} from 'react-redux';
import EventDetail from './EventDetail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import hoteventReducer from '../reducers/hotevent-reducer.js';

class HotEvent extends React.Component{
    createHotEventList(){
        let listItems = this.props.hotevent_R.map(
            (value)=>{
                return (
                    <div key={value.id}>
                         <Link to={`/khuyenmai/${value.id}`} ><Event url={value.url} thoihan={value.thoihan}/></Link> 
                    </div>
                );
            }
        );
        return listItems;
    }

    render(){
        return(
            <div className="hot-event">
                <h1>Hot Event</h1>
                {this.createHotEventList()}
            </div>
            
        );
    }
}

function mapStateToProps(state){
    return {
        hotevent_R: state.hotevent_R
    };
}

//let eventContainer = connect(mapStateToProps)(HotEvent);

export default connect(mapStateToProps)(HotEvent);