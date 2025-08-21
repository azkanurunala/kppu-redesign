
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

export function StatCard({ icon, value, label, description }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full text-center p-8 bg-background/50 dark:bg-card/50 shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="mx-auto mb-6 flex items-center justify-center h-20 w-20 rounded-full bg-gold/10">
            {icon}
          </div>
          <p className="text-5xl font-bold text-primary font-poppins">{value}</p>
          <h3 className="text-xl font-bold font-poppins text-primary-dark dark:text-white mt-4 mb-2">{label}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
