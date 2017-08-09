import React from 'react';

class DigitalClicker extends React.Component{
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClicker = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }

  render(){
    return (
      <div>
        <label htmlFor="button">Clicker</label>
        <button id="button" onClick={this.handleClicker}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;
