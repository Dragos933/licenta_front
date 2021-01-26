import React from 'react';

const Modelling = () => {
  return (
    <div className='modelling-section section'>
      <h2 className='section-title'>1. 3D Modelling</h2>
      <div className='content'>
        <div className='container'>
          <p className="info">
            This is the first step in the integration process. All you have to
            do is to upload the blueprints of the project you want us to
            transform.
          </p>
        </div>
        <div className='container middle-container'>
          <p className='files'>Accepted files: </p>
          <ul className='files-list'>
            <li>ArchiCad Native File</li>
            <li>Revit Native File</li>
            <li>DWG DXF</li>
            <li>FBX OBJ</li>
          </ul>
        </div>
        <div className='container'>
          <p className='info'>
            If you do not have the 3d model of your building, no worries!
            Provide us the technical drawings and we will 3d model it for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modelling;
