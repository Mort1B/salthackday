import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import io from 'socket.io-client';
import { 
  LineChart, 
  Line, 
  CartesianGrid,
  Tooltip,
  XAxis, 
  YAxis 
} from 'recharts';
import CurrList from "./components/CurrList";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';


// const ENDPOINT = "http://127.0.0.1:5000";


const socket = io('http://localhost:5000', {
  transports: ['websocket', 'polling']
})

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on('btc', (price) => {
      setData((curr) => [...curr, price]);
    })
  }, []);

  return (
    <div>
      <Header />
      <Row>
        <LineChart width={1000} height={550} data={data}>
            <XAxis dataKey="name"/>
            <YAxis domain={[15400, 15400]}/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <Tooltip />
        </LineChart>
      </Row>
      <Row>
        <CurrList />
      </Row>
    </div>
  );
}

export default App;