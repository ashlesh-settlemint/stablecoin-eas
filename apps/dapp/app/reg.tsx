'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Details, Header, PermissionManagement, ProofOfReserve, Review } from '@stablecoin-app/ui-elements';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { LeftNav } from '@stablecoin-app/ui-elements';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currenttabkey,setCurrenttabkey] = useState('Manage Permissions');
  const [key, setKey] = useState(0); // State to manage active tab index
  const numberOfTabs = 4;
  const handleNext = () => {
    const prevKey = key;
    console.log(prevKey);

    setKey((prevKey + 1) % numberOfTabs);
  };

  const handlePrevious = () => {
    const prevKey = key;
    setKey((prevKey - 1 + numberOfTabs) % numberOfTabs);
  };


  return (
    <>
      <div className={styles.page}>
        <Header />
        <div className="wrapper">
          <div className="container-fluid">
            <LeftNav />
            <div className="content-area">
              <div className="">
                <div className="heading-area">
                  <h1>Create New Stablecoin</h1>
                </div>

                <Tabs
                  defaultActiveKey={key}
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey={0} title="Stablecoin details">
                    <Details />
                  </Tab>
                  <Tab eventKey={1} title="Manage Permissions">
                    <PermissionManagement />
                  </Tab>
                  <Tab eventKey={2} title="Proof Of Reserve">
                    <ProofOfReserve />
                  </Tab>
                  <Tab eventKey={3} title="Review">
                    <Review />
                  </Tab>
                </Tabs>
                <Button variant="primary" onClick={handlePrevious} disabled={key === 0}>
                  Previous
                </Button>{' '}
                <Button variant="primary" onClick={handleNext} disabled={key === numberOfTabs - 1}>
                  Next
                </Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
