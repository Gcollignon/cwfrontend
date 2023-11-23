import React from 'react'
import config from '../config.json'
import DisplayCollection from './DisplayCollections'
import {Container, Col} from 'react-bootstrap'
import Find from './Find'
class Player extends React.Component{
  constructor(props){
    super(props);
    this.state = {player_data : {}, loading : true, found : false, updating :false}


  }
  async componentDidUpdate(prevprops, prevstate){
    if (this.state.found === false || this.state.loading === true){
      return
    }
    if (this.props.username === prevprops.username){
      return
    }

    let player_data = await fetch(`${config.url}/api/coleweight/find?username=${this.props.username}`)
    player_data = await player_data.json();
    if (!player_data.error){
      this.setState({player_data : player_data, loading : false, found: true, updating: false})

    }
    else {
      this.setState({loading : false, found : false})
    }

  }
  async componentDidMount(){
    let player_data = await fetch(`${config.url}/api/coleweight/find?username=${this.props.username}`)
    player_data = await player_data.json();
    if (!player_data.error){
      this.setState({player_data : player_data, loading : false, found: true, updating: false})

    }
    else {
      this.setState({loading : false, found : false})
    }

  }

  render(){
    if (this.state.loading === true){
      return(
        <p>Currently loading</p>
      )
    }

    if (this.state.found === true){
      let player = this.state.player_data
      return(
        <Container>  

          <div>
            <Col xs={2}></Col>
            <Col xs={6}>
              <p>Username : {this.state.player_data.username}</p>
              <p>Rank : {this.state.player_data.rank}</p>
              <p>UUID : {player.uuid}</p>
              <p>Coleweight : {player.coleweight}</p>
              <p>Gemstone Powder : {player.gemstone_powder.amount}</p>
              <p>Mithril Powder : {player.mithril_powder.amount}</p>
              <p>Nucleus runs : {player.nucleus_runs.amount}</p>
              <p>Mining XP : {player.mining_xp.amount}</p>
              <h4>Collections : </h4>
              <DisplayCollection collections={player.collections}/>
              <h4>Kills : </h4>
              <DisplayCollection collections={player.kills}/>
            </Col>
            <Col xs={2}></Col>
          </div>
        </Container>
      )
    } 

    return (<p>not found</p>)



  }
}

export default Player;
