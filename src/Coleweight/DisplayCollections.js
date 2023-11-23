import React from 'react'
class DisplayCollection extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div>
        {this.props.collections.map((collection, index) => {
          return <p>{collection.name} : {collection.amount}</p>
        })}
      </div>
    )
  }
}

export default DisplayCollection
