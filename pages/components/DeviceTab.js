import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';



const DeviceTab = () => {
    const [activeTab, setActiveTab] = useState('1');
  
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
               For Barbers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              For Clients
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
          <img
                src="/QR.png" // Replace with your image path
                alt="Image"
                className="img-fluid"
              />
          </TabPane>
          <TabPane tabId="2">
          <img
                src="/QR2.png" // Replace with your image path
                alt="Image"
                className="img-fluid"
              />
          </TabPane>
        </TabContent>
      </div>
    );
  };
  
  export default DeviceTab;
  