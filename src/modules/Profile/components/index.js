import React, { useState, useEffect } from 'react';
import { getWheaterData } from '../../../api/profile';
import { formatWheaterData } from '../../../utils/wheater';

const Profile = (props) => {
  const [wheaterData, setWheaterData] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const getWData = async () => {
      try {
        const res = await getWheaterData();
        console.log(res);
        console.log(formatWheaterData(res.data.list));
        setWheaterData(formatWheaterData(res.data.list));
      } catch (error) {
        console.log(error);
        setErrors([...errors, error]);
      }
    };
    getWData();
  }, [errors]);

  return (
    <div>
      <h1>Wheater DATA</h1>
      <ul>
        {wheaterData.map((item, index) => {
          return <li key={index}>{item.hour}</li>;
        })}
      </ul>
    </div>
  );
};

export default Profile;
