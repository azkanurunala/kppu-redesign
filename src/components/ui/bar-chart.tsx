
"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  {
    name: "2020",
    terpenuhi: 11,
    tidakTerpenuhi: 2,
  },
  {
    name: "2021",
    terpenuhi: 35,
    tidakTerpenuhi: 0,
  },
  {
    name: "2022",
    terpenuhi: 17,
    tidakTerpenuhi: 5,
  },
  {
    name: "2023",
    terpenuhi: 11,
    tidakTerpenuhi: 4,
  },
]

export function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip 
            contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)'
            }}
            cursor={{fill: 'hsl(var(--accent))', opacity: 0.1}}
        />
        <Legend 
            iconType="circle"
        />
        <Bar dataKey="terpenuhi" fill="hsl(var(--primary))" name="Terpenuhi" radius={[4, 4, 0, 0]} />
        <Bar dataKey="tidakTerpenuhi" fill="#ef4444" name="Tidak Terpenuhi" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
