import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from "antd";
import { library } from '../helpers/albumList';

let thiskey = 0;
const { TabPane } = Tabs;

const Home = () => {

return(
  <>
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="FEATURED" key="1">
        <h1 className="featuredTitle">Today is the Day</h1>
        <div className="albums">
          {library && library.map((e) => {
            thiskey++
            return (
              <Link to="/album" state={e} className="albumSelection" key={thiskey}>
                <img
                  src={e.image}
                  alt="bull"
                  style={{ width: "150px", marginBottom: "10px" }}/>
                <p>{e.title}</p>
              </Link>
            )
          })}
        </div>
      </TabPane>
      <TabPane tab="GENRES & MOODS" key="2">
        <h1 className="featuredTitle">Pop Hits</h1>
        <div className="albums">
          {library && library.slice(7, 13).map((e) => {
            thiskey++
            return (
              <Link to="/album" state={e} className="albumSelection" key={thiskey}>
                <img
                  src={e.image}
                  alt="bull"
                  style={{ width: "150px", marginBottom: "10px" }}/>
                <p>{e.title}</p>
              </Link>
            )
          })}
        </div>
        <h1 className="featuredTitle">Country</h1>
        <div className="albums">
          {library && library.slice(5, 11).map((e) => {
            thiskey++
            return (
              <Link to="/album" state={e} className="albumSelection" key={thiskey}>
                <img
                  src={e.image}
                  alt="bull"
                  style={{ width: "150px", marginBottom: "10px" }}/>
                <p>{e.title}</p>
              </Link>
            )
          })}
        </div>
      </TabPane>
      <TabPane tab="NEW RELEASES" key="3">
        <h1 className="featuredTitle">Newest Releases</h1>
        <div className="albums">
          {library && library.map((e) => {
            thiskey++
            return (
              <Link to="/album" state={e} className="albumSelection" key={thiskey}>
                <img
                  src={e.image}
                  alt="bull"
                  style={{ width: "150px", marginBottom: "10px" }}/>
                <p>{e.title}</p>
              </Link>
            )
          })}
        </div>
      </TabPane>
    </Tabs>
  </>
)
}

export default Home;
