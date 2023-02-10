import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  let parameters = useParams(); // can also write it as let {userId} = useParams()
  console.log(parameters);
  return <div>User Details of {parameters.userId}</div>;
};

export default UserDetails;
