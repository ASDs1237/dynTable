// src/components/DynamicTable.jsx

import React from 'react';

const DynamicTable = () => {
  const rows = 3;
  const columns = 5;

  const tableData = Array.from({ length: rows }, () => Array(columns).fill(''));

  return (
    <table border="1" style={{ width: '100%', textAlign: 'center' }}>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((_, colIndex) => (
              <td key={colIndex}>Row {rowIndex + 1} Col {colIndex + 1}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
