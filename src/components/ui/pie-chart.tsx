'use client';

import React from 'react';

interface PieChartProps {
  data: {
    label: string;
    value: number;
    color: string;
  }[];
  width?: number;
  height?: number;
}

export const PieChartComponent: React.FC<PieChartProps> = ({ 
  data, 
  width = 300, 
  height = 300 
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  const createArc = (startAngle: number, endAngle: number, radius: number) => {
    const x1 = radius * Math.cos(startAngle);
    const y1 = radius * Math.sin(startAngle);
    const x2 = radius * Math.cos(endAngle);
    const y2 = radius * Math.sin(endAngle);
    
    const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;
    
    return [
      `M ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'L 0 0'
    ].join(' ');
  };

  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2 - 20;

  return (
    <div className="flex flex-col items-center">
      <svg width={width} height={height} className="mb-4">
        <g transform={`translate(${centerX}, ${centerY})`}>
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const angle = (item.value / total) * 2 * Math.PI;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            
            const arcPath = createArc(startAngle, endAngle, radius);
            const labelAngle = startAngle + angle / 2;
            const labelRadius = radius + 30;
            const labelX = labelRadius * Math.cos(labelAngle);
            const labelY = labelRadius * Math.sin(labelAngle);
            
            currentAngle += angle;
            
            return (
              <g key={index}>
                <path
                  d={arcPath}
                  fill={item.color}
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs font-medium fill-current"
                  style={{ fontSize: '12px' }}
                >
                  {item.label}
                </text>
                <text
                  x={labelX}
                  y={labelY + 15}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs font-bold fill-current"
                  style={{ fontSize: '11px' }}
                >
                  {percentage.toFixed(1)}%
                </text>
              </g>
            );
          })}
        </g>
      </svg>
      
      {/* Legend */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <span className="font-medium">{item.label}</span>
            <span className="text-muted-foreground">
              Rp {item.value.toLocaleString()} M
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
