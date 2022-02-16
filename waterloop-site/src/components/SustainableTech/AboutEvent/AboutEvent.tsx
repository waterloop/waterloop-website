import React from 'react';

const AboutEvent: React.FC = () => (
  <div>
    {/* Header Container */}
    <div>
      <h2>About The Event</h2>
    </div>
    {/* Details Container - contains all details*/}
    <div>
      {/* you can do a map function to render the 
            following card component for each detail */}
      <div>
        <div>Image</div>
        <p>Details Text</p>
      </div>
    </div>
    {/* Teams header Container */}
    <div>
      <h2>Teams</h2>
    </div>

    {/* Teams Details Container - rectangular container for teams details */}
    <div>
      <div>Image</div>
      <p>Teams Text</p>
    </div>

    <div>
      {/* you can do a map function to render the 
            following card component */}
      <div>Rectangle container</div>
    </div>
  </div>
);

export default AboutEvent;
