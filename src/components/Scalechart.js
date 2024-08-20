import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// Define colors for each segment
const COLORS = ['#FF8042', '#FFBB28', '#00C49F', '#0088FE'];

const Scalechart = ({ data }) => {
  // Convert the data object to an array suitable for recharts
  const formattedData = Object.keys(data).map((key) => ({
    name: key,
    value: data[key],
  }));

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ResponsiveContainer width={150} height={40}>
        <BarChart layout="vertical" data={formattedData}>
          <XAxis type="number" hide />
          <Tooltip />
          <Bar dataKey="value" isAnimationActive={false}>
            {formattedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div style={{ marginLeft: '10px' }}>
        {formattedData.map((entry, index) => (
          <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: COLORS[index % COLORS.length], marginRight: '5px' }}></div>
            <span>{entry.name}: {entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scalechart;
