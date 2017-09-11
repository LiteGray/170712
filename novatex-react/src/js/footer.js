import React, {Component} from 'react';

class Footer extends Component {
  render() {
    const {moreNavToggle} = this.props;
    return (
      <div id="footer-wrap" onClick={moreNavToggle}>
        <footer className="autoWidth">
          <p>© 诺华（杭州）纺织有限公司 - 2017 NOVATEX Inc.</p>
        </footer>
      </div>
    )
  }
}

export {Footer};