// BlogPage.js
import React from 'react';
import BlogPost1 from './BlogPost1';
import BlogPost2 from './BlogPost2';
import BlogPost3 from './BlogPost3';

class BlogPage extends React.Component {
  render() {
    return (
      <div className="blog-page">
        {/* <h1>Blog</h1> */}
        <BlogPost1 />
        <BlogPost2 />
        <BlogPost3 />
      </div>
    );
  }
}

export default BlogPage;
