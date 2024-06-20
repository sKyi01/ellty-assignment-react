// src/CheckboxList.js
import React, { useState } from 'react';
import './CheckboxList.css';

const CheckboxList = () => {
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'all') {
      setSelected(checked ? ['page1', 'page2', 'page3', 'page4'] : []);
    } else {
      setSelected(prevSelected =>
        checked ? [...prevSelected, name] : prevSelected.filter(item => item !== name)
      );
    }
  };

  const isAllSelected = selected.length === 4;

  return (
    <div className="checkbox-list">
      <div className="checkbox-item">
        <label>All pages</label>
        <input
          type="checkbox"
          name="all"
          checked={isAllSelected}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="divider"></div>
      <div className="checkbox-item">
        <label>Page 1</label>
        <input
          type="checkbox"
          name="page1"
          checked={selected.includes('page1')}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="checkbox-item">
        <label>Page 2</label>
        <input
          type="checkbox"
          name="page2"
          checked={selected.includes('page2')}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="checkbox-item">
        <label>Page 3</label>
        <input
          type="checkbox"
          name="page3"
          checked={selected.includes('page3')}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="checkbox-item">
        <label>Page 4</label>
        <input
          type="checkbox"
          name="page4"
          checked={selected.includes('page4')}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="divider"></div>
      <button className="done-button">Done</button>
    </div>
  );
};

export default CheckboxList;
