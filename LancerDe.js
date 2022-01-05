import React from 'react';
import De from './De';

class LancerDe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            De1: 1,
            De2: 2,
            wins:1,
            tour:0,
        }
    }
    Lancer = () => {
        if(this.state.tour < 10){
            let De1Random = Math.floor(Math.random() * 6) + 1
            let De2Random = Math.floor(Math.random() * 6) + 1
            
            this.setState({De1: De1Random})
            this.setState({De2: De2Random})
    
            if(De1Random === De2Random){
                console.log("wins " + this.state.tour)
                this.setState({wins:this.state.wins + 1})
            }else{
                console.log("try again " + this.state.tour)
                this.setState({wins:this.state.wins - 1})
            }
            this.setState({tour: this.state.tour + 1})
        }else{
            this.setState({wins: 0,tour:0})
        }
        
        
    }
    render(){
        return (
            <div>
                <De number={this.state.De1}/>
                <De number={this.state.De2}/>
                {(this.state.tour >= 10)?<h1>{(this.state.wins >= 0)?"You win":"You lose"}</h1>:<h1>{"Tour " + (this.state.tour + 1)}</h1>}
                <h1>Point: {this.state.wins}</h1>
                <button onClick={this.Lancer}>{(this.state.tour < 10)?"Lancer Les Des":"Reset"}</button>
            </div>
        );
    }
}
export default LancerDe;