import React, { Component } from 'react'

export class ClickCounter extends Component {
  onChangeHandler = event => {
    const value = event.target.value
    if (value <= 0) event.target.value = 0
  }

  render () {
    return (
      <div>
        <input
          id='number'
          type='number'
          defaultValue='0'
          onChange={this.onChangeHandler}
        />
      </div>
    )
  }
}

export default ClickCounter
