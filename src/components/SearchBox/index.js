import React from 'react';
import { connect } from 'react-redux';
import './index.css';

const SearchBox = ({ dispatch, searchFun, txtValue }) => (
	<div className="chatlist-panel-search">
    <div className="subheader-search">
      <i className="icon icon-search"></i>
      <input type="text" className="input input-search"
      		placeholder="Search Planets"
		    onChange={searchFun}
		    value={txtValue}
  		/>
    </div>
  </div>
)

export default connect()(SearchBox);
