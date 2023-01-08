import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "فروردین",
    uv: 1000,
    pv: 2800,
    amt: 39354,
  },
  {
    name: "اردیبهشت",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "خرداد",
    uv: 2000,
    pv: 9800,
    amt: 6290,
  },
  {
    name: "تیر",
    uv: 3380,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "مرداد",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "شهریور",
    uv: 2000,
    pv: 7500,
    amt: 6290,
  },
  {
    name: "مهر",
    uv: 3680,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "آبان",
    uv: 8000,
    pv: 8998,
    amt: 2210,
  },
  {
    name: "آذر",
    uv: 2000,
    pv: 1200,
    amt: 6290,
  },
  {
    name: "دی",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "بهمن",
    uv: 2000,
    pv: 9800,
    amt: 6290,
  },
  {
    name: "اسفند",
    uv: 2900,
    pv: 5908,
    amt: 2000,
  },
];

const AdminBarChart = () => {
  return (
    <div className=" ">
      <ResponsiveContainer width="100%" aspect={1}>
        <BarChart width={500} height={50} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#025f5f" />
          <Bar dataKey="uv" stackId="a" fill="#82bfca" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminBarChart;
