import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label style={{ fontSize: '14px' }}>Search for Videos</label>
          <input
            placeholder="Search"
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
