import React from 'react'
import config from '../config.json'
class Rankings extends React.Component{
  constructor(props){
    super(props);
    this.state = {loading : true, rankings : []}
  }
  async componentDidMount(){
    let rankings = await fetch(`${config.url}/api/coleweight/rankings`)
    rankings = await rankings.json();
    this.setState({loading : false, rankings :rankings})

  }
  render(){
    if (this.state.loading === true){
    
    return(
    <div>
        <p>Loading</p>
      </div>
    )
    }
    return (
    <div>
          {this.state.rankings.map((player, index) => {
          return <p>{player.username} : {player.coleweight}</p>
          })}
        </div>
    )
    
  }
}


export default Rankings
