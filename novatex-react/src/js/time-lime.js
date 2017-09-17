import React, {Component} from 'react';

class TimeLime extends Component{
  constructor() {
    super();
    this.state = {
      timeLineRate: 0,
    };
    this.timeLine();
  }

  timeLine = () => {
    let {timeLineRate} = this.state;
    window.addEventListener('scroll', () => {
      timeLineRate = document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * 100 + '%';
      this.setState({
        timeLineRate,
      });
    });
  };

  render() {
    const {timeLineRate} = this.state;
    return (
      <div
        id="timeLine"
        style={
          {
            background: `linear-gradient(90deg, rgba(33,163,213,.6) ${timeLineRate}, transparent ${timeLineRate})`,
            display: document.documentElement.scrollHeight > window.innerHeight * 1.4 ? 'block' : 'none',
          }
        }
      >
      {''}
      </div>
    )
  }
}

export {TimeLime};