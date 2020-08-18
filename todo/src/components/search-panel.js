import React from 'react';


const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    color:'red'
  };
  return <input
  style={searchStyle}
  placeholder={searchText}
  autoComplete=""
  className="foo"
  htmlFor="" />;
};

export default SearchPanel;