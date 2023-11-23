import React from 'react'
import Player from '../Coleweight/Player'
import Find from '../Coleweight/Find'
import {withRouter } from 'react-router-dom';
class playerPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {updating : true}
  }
  render(){
    let username = new URLSearchParams(this.props.location.search).get("username")
    return(
      <div>
        <Find  />
    <Player username={username}/>
    </div>
    )
  }
}


export default withRouter(playerPage)
