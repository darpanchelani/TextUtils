import React, { useState } from 'react';

export default function TextForms(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(' Converted to uppercase', 'success');
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(' Converted to lowercase', 'success');
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert(' Text cleared', 'success');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(' Text copied', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert(' Extra spaces have been removed', 'success');
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  return (
    <>
      <div className={`container text-${props.textColor}`}>
        <h3>{props.heading}</h3>
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            id='textBox'
            rows='8'
            onChange={handleOnChange}
            style={{
              backgroundColor: props.textColor === 'white' ? 'rgb(15 19 33)' : 'white',
              color: props.textColor === 'white' ? 'white' : 'black',
            }}></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-3 my-1'
          onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-3 my-1'
          onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-3 my-1'
          onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-3 my-1'
          onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-3 my-1'
          onClick={handleClearClick}>
          Clear Text
        </button>

        <div className='container my-3'>
          <h4>Your text summary: </h4>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{' '}
            words and {text.length} characters
          </p>
          <p>{text === '' ? 0 : 0.008 * text.split(' ').length} Minutes Read</p>
          <h4>Preview:</h4>
          <p>{text.length > 0 ? text : 'Nothing to preview.'}</p>
        </div>
      </div>
    </>
  );
}
