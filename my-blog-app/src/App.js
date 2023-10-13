import React from 'react';
import ReactDOM from 'react-dom';
import BlogPost from './BlogPost'; // Import the BlogPost component
import './App.css';

class App extends React.Component {
  render() {
    // Example data for a blog post
    const post = {
      title: 'Sample Blog Post',
      content: 'This is the content of the blog post.',
      author: 'John Doe',
      date: 'October 3, 2023',
    };

    return (
      <div class="blog">
      <h1>Learniverse</h1>
        <h2>My Blog</h2>
        <BlogPost {...post} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;
 