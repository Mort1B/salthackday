import React, { useEffect, useState } from "react";
import ReactDom from 'react-dom';
import Graph from "./components/Graph";
import Header from "./components/Header";
import io from 'socket.io-client';
import { 
  BarChart,
  Bar,
  LineChart, 
  Line, 
  CartesianGrid,
  Tooltip,
  XAxis, 
  YAxis 
} from 'recharts';


const ENDPOINT = "http://127.0.0.1:5000";


const socket = io('http://localhost:5000', {
  transports: ['websocket', 'polling']
})

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on('btc', (price) => {
      setData((curr) => [...curr, price]);
    })
  }, [])

  return (
    <div
      style={{
        flex: 1,
        flexDirection: "column",
        background: "orange",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Header />
      {/* <Graph /> */}
    <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
  </LineChart>
    </div>
  );
}

export default App;