import React from 'react'
import {connect} from 'react-redux'
import {fetchCOMICS} from '../actions'

const Comics = (props) => {
  return (
  <div id='comics'>
    <h4>GARFIIIELD where are you?</h4>
    {console.log(props.comics)}
    <img id='garfields' src={props.comics}/>
  </div>
  )
}

function mapStateToProps(state){
  return {
    comics: state.comics
  }
} 

const mapDispatchToProps=(dispatch)=>{
  dispatch(fetchCOMICS())
  return {}
} 

export default connect(mapStateToProps, mapDispatchToProps)(Comics)