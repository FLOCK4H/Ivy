import React, { Component } from 'react';
import './Processor.css';

class Processor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false,
      };
      this.timeoutId = null; // To keep track of the timeout and clear it if needed
    }

  componentDidMount() {
    // Call the show function after 8 seconds when the component mounts
    this.timeoutId = setTimeout(this.show, 10000);
  }

  componentWillUnmount() {
    // Clear the timeout if the component is unmounted to prevent memory leaks
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  show = () => {
    this.setState({ visible: true });
  }

  hide = () => {
    this.setState({ visible: false });
  }

  onHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.opacity = '1.0';
  }

  onLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.opacity = '0.8';
  }

  onClick = (e) => {
    e.target.style.transform = 'scale(1.15)';
    setTimeout(() => {
      e.target.style.transform = 'scale(1)';
    }, 300);
  }

  render() {
    if (!this.state.visible) return null;

    return (
      <div className='processor-container'>
        <div className='label return-label'
             onMouseEnter={this.onHover}
             onMouseLeave={this.onLeave}
             onMouseDown={this.onClick}
        >ABORT
        <img src="x-button.png" alt="Cancel Button" height="12px" width="12px" />
        </div>
        <div className='label proceed-label'
             onMouseEnter={this.onHover}
             onMouseLeave={this.onLeave}
             onMouseDown={this.onClick}
        >PROCEED
        <img src="accept.png" alt="Accept Button" height="12px" width="12px" />
        </div>
      </div>
    );
  }
}

export default Processor;