import React, {Component} from 'react';

class CommentList extends Component {
  render() {
    const {name, content, date} = this.props;
    const name0 = name.replace(/^([\s\S])([\s\S]*)([\s\S])$/g,  ($0, $1, $2, $3) => {
      return `${$1}***${$3}`;
    });

    return(
      <li>
        <div>
          <p>{content}</p>
          <time style={{color: '#ccc'}}>{date}</time>
        </div>
        <div>{name0}</div>
      </li>
    );
  }
}

class Comment extends Component {
  render() {
    const {detailComment} = this.props;

    const list = detailComment.map( e => {
      return (
        <CommentList
          key={Math.random() * 1000}
          {...e}
        />
      )
    });

    return (
      <div id="comment">
        <ul className="comment-list">
          {list}
        </ul>
      </div>
    );
  }
}

export {Comment};