import React,{Component} from 'react';
class Counter extends Component {
    state ={
        count:1,
        // tag:[]
    };

// renderTag(){
//     if (this.state.tag.length===0) return<p>there are no tags</p>

//     else return <ul>{this.state.tag.map(tags=><li key={tags}>{tags}</li>)}</ul>
// }
handleIncrement=()=>{
    // console.log('increment clicked',this)
    this.setState({count:this.state.count+1})
}

    render() { 
        
        return (

        <div>
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm">
                Increments
            </button>
           


            {/* {this.state.tag.length===0&&"please create a new tags"}
           {this.renderTag()} */}
        </div>);
    }

    getBadgeClass(){
        let classes="badge m-2 badhe-";
        classes += this.state.count===0? 'warning':"primary";
        return classes;

    } 
    formatCount(){
        const { count }=this.state.count;
        if (count===0) return 'zero'
        return count;


    }

  

}
 
export default Counter;