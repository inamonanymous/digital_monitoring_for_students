// src/PendingItems.js
import React, { useState, useEffect } from 'react';
import './styles/pending-items.css';

function booleanToYesNo(value) {
  return value ? 'Yes' : 'No';
}

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function PendingItems() {
  const [items, setItems] = useState({
    pending_id: [],
    equip_type: [],
    equip_unique_key: [],
    is_verified: [],
  });

  useEffect(() => {
    fetch('/user/pending-items')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="pending-items-container">
      <div className="pending-items-content">
        <h2 className="pending-items-title">Pending Items</h2>
        <table className="pending-items-table">
          <thead>
            <tr>
              <th>Pending Id</th>
              <th>Type</th>
              <th>Unique Key</th>
              <th>Verified</th>
            </tr>
          </thead>
          <tbody>
            {items.equip_unique_key.map((unique_key, index) => (
              <tr key={index}>
                <td>{items.pending_id[index]}</td>
                <td>{capitalize(items.equip_type[index])}</td>
                <td>{unique_key}</td>
                <td>{booleanToYesNo(items.is_verified[index])}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default PendingItems;
