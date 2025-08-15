"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const pieData = [
    { name: 'Laporan', value: 69, color: '#3b82f6' },
    { name: 'Penelitian', value: 94, color: '#10b981' },
    { name: 'Perkara', value: 72, color: '#f97316' },
];

export function KppuPieChart() {
    return (
        <div className="flex justify-around text-center">
            {pieData.map((entry, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-24 h-24">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={[{value: entry.value}, {value: 100-entry.value}]} dataKey="value" cx="50%" cy="50%" innerRadius={30} outerRadius={40} startAngle={90} endAngle={450} stroke="none">
                                        <Cell fill={entry.color} />
                                        <Cell fill="rgba(255, 255, 255, 0.2)" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="mt-2 text-lg font-bold">{entry.value}%</p>
                </div>
            ))}
        </div>
    );
}
