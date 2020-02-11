import React from 'react';

const FilterItem = ({label, filterFunc, selectList}) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleSelect1">{label}</label>
      <select
        onChange={(e) =>{
          filterFunc(e.target.value)
        }}
        className="form-control"
        id="exampleSelect1"
      >
        {selectList}
      </select>
    </div>
  );
}

export default FilterItem;
