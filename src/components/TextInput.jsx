import React from 'react';

const TextInput = ({ text, setText }) => (
  <div className="form-group mt-3">
    <label htmlFor="textArea" className="form-label fw-bold text-title">Enter your text</label>
    <textarea
      id="textArea"
      rows="6"
      className="form-control"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  </div>
);

export default TextInput;
