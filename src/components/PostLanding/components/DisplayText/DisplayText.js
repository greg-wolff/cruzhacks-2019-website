import React, { Component } from 'react';

class DisplayText extends Component {
  render() {
    return (
      <div className="displaytext">
        <div className="displaytext__header" style={{textAlign: this.props.left ? 'left' : 'center'}}>{this.props.header}</div>
        <div className="displaytext__paragraph" style={{textAlign: this.props.left ? 'left' : 'center'}}>{this.props.paragraph}</div>
      </div>
    )
  }
  static defaultProps = {
    header: ``,
    paragraph: ``
  }
}

export default DisplayText;
