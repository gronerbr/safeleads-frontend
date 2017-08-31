import React, { PureComponent } from 'react'
import {
  Button
} from 'react-bootstrap'

class KtdHeader extends PureComponent {

  render () {
    return (
      <header>
        <h2>Great header!</h2>
        <Button>Button</Button>
      </header>
    )
  }
}

export default KtdHeader
