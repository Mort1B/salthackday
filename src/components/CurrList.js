import React, { useState, useEffect } from "react";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";

function CurrList() {
  const [list, setList] = useState([]);
  const [url, setUrl] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await axios(
        `http://api.coinlayer.com/api/live?access_key=0d912d59dfdc1fdefd06238fca66843b`
      );
      if (res) {
        let arr = [];
        for (const rate in res.data.rates) {
          arr.push(`${rate}: ${res.data.rates[rate]}`);
        }
        setList([...list, arr]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const clickHander = (e) => {
  //   e.preventDefault()
  //   console.log(e.currentTarget.textContent)
  //   let q = e.currentTarget.textContent;
  //   let d = q.slice(0,5);
  //   console.log(d);
  //   let url = `https://www.google.com/search?q=${d}&btnI`;
  //   setUrl(url);
  // }

  return (
    <>
        <Col>
          <ListGroup style={{ border: '1px solid black', padding: '1em', height: '25vh', overflowY: 'auto'}}>
            {list.length > 0 && list[0].map((rate) => {
              return (
              <ListGroupItem key={Math.random()} action style={{ textAlign: 'center', fontSize: '15px'}}>
                  <a href="https://www.google.com/search?q=miota&btnI" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit'}}>{rate.slice(0,5)} ${rate.slice(5)}</a>
              </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
    </>
  );
}

export default CurrList;
