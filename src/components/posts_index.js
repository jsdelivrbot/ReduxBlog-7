import React, { Component } from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    console.log('This is a good time');
  }
  
  render() {
    return (
      <div>List of posts</div>
    );
  }
}

export default PostsIndex;
