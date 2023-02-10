import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  let navigate = useNavigate();

  const redirectToUsers = () => navigate('/users'); // if we don't include the slash than the redirection will be done to a nested path, but in this case it will be a replacement path.
  return (
    <div>
      Profile Page
      <button onClick={redirectToUsers}>See other users</button>
    </div>
  );
};

export default Profile;
