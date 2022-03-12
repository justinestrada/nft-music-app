import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from "antd";
import { library } from '../helpers/albumList';

const { TabPane } = Tabs;

const Home = () => {

return(
  <>
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="FEATURED" key="1">
        <h1 className="featuredTitle">Today is the Day</h1>
        <div className="albums">
          {library && library.map((e) => {
            return (
              <Link to="/album" state={e} className="albumSelection">
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
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="NEW RELEASES" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </>
)
}

export default Home;
