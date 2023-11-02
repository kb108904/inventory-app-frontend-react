import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Inventory(props:any) {
  const [inventory, setInventory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Define a function to fetch inventory data
  const fetchInventory = async () => {
    try {
      const response = await axios.get('/api/inventory'); // Adjust the API endpoint accordingly
      setInventory(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching inventory data', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div>
      <h2>Inventory Items</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {inventory.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Inventory;
