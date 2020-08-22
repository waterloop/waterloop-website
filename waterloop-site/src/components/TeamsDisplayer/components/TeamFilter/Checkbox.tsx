import React from 'react'
import IconCheck from './IconCheck'
import IconUnchecked from './IconUnchecked'
import CSS from 'csstype'

interface IProps{
  checked?: boolean;
  onClick?: any;
}

interface IState {
}

export default class Button extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.icon = this.icon.bind(this)
  }

  icon() {
    return this.props.checked ? <IconCheck /> : <IconUnchecked />
  }

  render() {
    return (
      <button 
        style={ StyleButton} 
        onClick={this.props.onClick}>
        <div style={ StyleCheck }>
          { this.icon() }
        </div>
        
        <div style={ StyleContent }>
          { this.props.children }
        </div>
      </button>
    )
  }
}

const StyleButton: CSS.Properties = {
  background: 'transparent',
  border: 'none',
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
  display: 'flex',
  outline: 'none',
  color: 'black',
  marginRight: '0.5rem',
  cursor: 'pointer',
  textAlign: 'left',
}
  
const StyleCheck: CSS.Properties = {
  marginRight: '1rem',
}
  
const StyleContent: CSS.Properties ={
  paddingTop: '0.2rem',
  fontSize: '1rem',
  fontWeight: 400,
  fontFamily: 'IBM Plex Sans',
}