import React,{Component} from "react";


export default class Todolistitem extends Component{
    
    }
    render(){
        const {label,important=false}=this.props
        const style={
            color:important? 'tomato': 'grey'
        };
        return (
            <span className='todo-list-item'
            style={style} onClick={()=> console.log(`Done:${label}`)}>
                {label}
            </span>
        )  
        
    
    }
    









