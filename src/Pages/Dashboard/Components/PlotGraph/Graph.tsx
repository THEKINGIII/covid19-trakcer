import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { PlotGraphChartProps } from './types';

export default function PlotGraphChart(props: PlotGraphChartProps) {
  return (
    <LineChart
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="x" name="day" />
      <YAxis />
      <Legend />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Line type="monotone" dataKey="y" name={props.caseName} />
    </LineChart>
  );
}
