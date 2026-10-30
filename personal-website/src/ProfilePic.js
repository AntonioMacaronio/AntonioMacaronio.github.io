import React from 'react';

const ProfilePic = () => {
  return (
    <div className="profile-pic-container">
      <img
        src={process.env.PUBLIC_URL + '/profilepic.png'}
        alt="Anthony Zhang"
        className="profile-pic"
      />
    </div>
  );
};

export default ProfilePic;
