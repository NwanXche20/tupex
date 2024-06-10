import React from "react";
import ProjectStatImage from "../../assets/projectStat-image.png";

const ProjectStats = () => {
  return (
    <div className="projectStat-container">
      <div className="projectStat-image">
        <img className="" src={ProjectStatImage} alt="screen design" />
      </div>

      <div className="projectStat-text">
        <div className="projectStat-text_main">
          <h2>Experiments and personal projects.</h2>
          <p>
            Your ceremony & reception venues, your vision, your dress, your
            colours and anything else you would like to share with us. I am a
            Gold Coast and Brisbane.
          </p>
        </div>

        <div className="statistics">
          <div className="stat-item">
            <h2>58+</h2>
            <p>customers</p>
          </div>
          <div className="stat-item">
            <h2>38+</h2>
            <p>rewards</p>
          </div>
          <div className="stat-item">
            <h2>98+</h2>
            <p>project completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;
