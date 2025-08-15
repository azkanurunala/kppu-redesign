
"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const pieData = [
    { name: 'PN 2018-2023', value: 69, color: '#0D3666' },
    { name: 'MA 2018-2023', value: 94, color: '#10b981' },
    { name: 'Denda 2018-2023', value: 72, color: '#f97316' },
];

export function KppuPieChart() {
    return (
        <div className="flex justify-around w-full">
            {pieData.map((entry, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div style={{ width: 100, height: 100 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie 
                                    data={[{value: entry.value}, {value: 100-entry.value}]} 
                                    dataKey="value" 
                                    cx="50%" 
                                    cy="50%" 
                                    innerRadius={35} 
                                    outerRadius={45} 
                                    startAngle={90} 
                                    endAngle={450} 
                                    stroke="none"
                                >
                                    <Cell fill={entry.color} />
                                    <Cell fill="rgba(255, 255, 255, 0.2)" />
                                </Pie>
                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="central"
                                    className="text-xl font-bold fill-white"
                                >
                                    {`${entry.value}%`}
                                </text>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-gray-300">{entry.name}</p>
                </div>
            ))}
        </div>
    );
}
