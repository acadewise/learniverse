import React from 'react';

class BlogPost1 extends React.Component {
  render() {
    return (
      <div className="blog-post">
        <h2>Advantages of the System</h2>
        <p>
          Our web-based system offers several advantages over the current system in place. One of the key benefits is enhanced user accessibility and interactivity.
        </p>
        <p>
          Unlike the existing system, our solution integrates modern web technologies, making it more user-friendly and responsive. This means users can access the system from a variety of devices, including smartphones and tablets, with ease.
        </p>
        <p>
          Additionally, we have designed an intuitive user interface that streamlines navigation and improves the overall user experience. With our system, users can accomplish tasks more efficiently and with fewer clicks.
        </p>
        <p>
          As part of our commitment to transparency, we've also included an image of our portal system design below, providing a visual representation of the user interface and functionality.
        </p>
        <p>
        As part of our project, we have designed a dynamic web-based system. You can learn more about our system's development progress in <a href="https://your-phase2-link.com">Phase 2</a>.
        </p>

        <img
          src="portal-system-design.png" // Replace with the actual image URL
          alt="Portal System Design"
          className="system-design-image"
        />
      </div>
    );
  }
}

export default BlogPost1;
