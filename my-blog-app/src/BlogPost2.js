import React from 'react';

class BlogPost2 extends React.Component {
  render() {
    return (
      <div className="blog-post">
        <h2>Disadvantages of the System</h2>
        <p>
          While our web-based system offers many advantages, we also acknowledge its limitations and potential drawbacks.
        </p>
        <p>
          One of the main disadvantages is the learning curve for users who are accustomed to the current system. Transitioning to a new interface and workflow may require additional training and adjustment.
        </p>
        <p>
          Another challenge is data migration. Moving existing data and records from the old system to the new one can be a complex process and may require careful planning and execution to avoid data loss or inconsistencies.
        </p>
        <p>
          Furthermore, there may be compatibility issues with older browsers or devices that some users still rely on. Ensuring cross-browser compatibility and accessibility is an ongoing effort.
        </p>
      <p>
      For a detailed comparison of the advantages and disadvantages of our system, please refer to <a href="https://your-phase2-link.com">Phase 2</a> of our project.
    </p>
    <img
  src="image2.jpg" // Replace with the actual image URL
  alt="Advantages and Disadvantages"
  className="blog-image"
/>
      </div>
    );
  }
}

export default BlogPost2;
