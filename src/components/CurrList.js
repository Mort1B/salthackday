import React, { useState, useEffect } from "react";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";

function CurrList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await axios(
        "http://api.coinlayer.com/api/live?access_key=0d912d59dfdc1fdefd06238fca66843b"
      );
      if (res) {
        let arr = [];
        for (const rate in res.data.rates) {
          arr.push(`${rate}: ${res.data.rates[rate]}`);
        }
        console.log(arr);
        setList([...list, arr]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <Col>
          <ListGroup style={{border: '1px solid black', padding: '1em', height: '50vh', overflowY: 'auto'}}>
            {list.length > 0 && list[0].map((rate) => {
              return (
              <ListGroupItem key={Math.random()} action >
                  <span>{rate}</span>
              </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
    </>
  );
}

export default CurrList;
