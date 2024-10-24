import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });
  const [modeName, setModeName] = useState('Enable Dark Mode');

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
      });
      setModeName('Enable White Mode');
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setModeName('Enable Dark Mode');
    }
  };

  return (
    <div className='container' style={myStyle}>
      <h3 className='my-2'>About Us</h3>
      <div className='accordion' id='accordionExample' style={myStyle}>
        <div className='accordion-item' style={myStyle}>
          <h2 className='accordion-header'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
              style={myStyle}>
              Our Mission
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            data-bs-parent='#accordionExample'
            style={myStyle}>
            <div className='accordion-body'>
              <strong>Our mission is to simplify text processing for everyone.</strong> TextUtils
              aims to provide an easy-to-use platform where users can perform various text
              operations, such as counting words, changing case, and removing extra spaces. We are
              committed to making text manipulation fast and hassle-free.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
              style={myStyle}>
              Our Vision
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
            style={myStyle}>
            <div className='accordion-body'>
              <strong>
                Our vision is to be the go-to tool for quick and efficient text analysis.
              </strong>{' '}
              We want to enable everyone, from students to professionals, to handle text-related
              tasks effortlessly. Whether it's formatting text, analyzing data, or enhancing
              readability, TextUtils aims to become a reliable resource for all text operations.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
              style={myStyle}>
              Our Values
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
            style={myStyle}>
            <div className='accordion-body'>
              <strong>We value simplicity, efficiency, and user satisfaction.</strong> At TextUtils,
              we prioritize delivering a seamless user experience with tools that are simple yet
              powerful. Our core values include transparency, accuracy, and a focus on user needs,
              ensuring that our features are intuitive and effective for everyday use.
            </div>
          </div>
        </div>
      </div>
      <div className='container my-3'>
        <button type='button' onClick={toggleStyle} className='btn btn-primary'>
          {modeName}
        </button>
      </div>
    </div>
  );
}
