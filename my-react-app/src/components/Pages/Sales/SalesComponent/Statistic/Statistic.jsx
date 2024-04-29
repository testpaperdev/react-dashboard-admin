import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
} from "recharts";
import { linechart_data } from "../../../../../data/data";

const Statistic = () => {
  return (
    <>
      <h1>Statistic sales</h1>
      <LineChart width={1100} height={300} data={linechart_data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="month"></XAxis>
        <YAxis></YAxis>
        <Tooltip> </Tooltip>
        <Legend></Legend>
        <Line type="monotone" dataKey="savings" stroke="green" />
        <Line type="monotone" dataKey="loss" stroke="red" />
      </LineChart>
    </>
  );
};

export default Statistic;
