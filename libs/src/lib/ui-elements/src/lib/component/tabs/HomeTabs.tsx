// @ts-nocheck
'use client'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Details } from './Details';
import { PermissionManagement } from './PermissionManagement';
import { ProofOfReserve } from './ProofOfReserve';
import { Review } from './Review';
import { useState } from 'react';
export function HomeTabs() {
  const [TabKey, setTabKey] = useState(0);
  const [stablecoinDetiails, setStablecoinDetiails] = useState({});
  const [managementDetiails, setManagementDetiails] = useState({});
  const [proofofReserve, setProofofReserve] = useState({});  
  const nextBtn = (key : number) => {
    
    setTabKey(key);
  }
  const saveStableCointDetails = (data:any) => { 
    console.log(data,'stable');   
    setStablecoinDetiails(data);
    setTabKey(1);
  }
  const saveManagementDetails = (data : any) => {    
    setManagementDetiails(data);
    setTabKey(2);
  }
  const saveproofofReserve = (data : any) => {
    setProofofReserve(data);
    setTabKey(3);
  }
  return (
    <>    
    <Tabs
      defaultActiveKey={0}
      id="uncontrolled-tab-example"
      activeKey={TabKey}
      onSelect={(k) => setTabKey(Number(k))}
    >
      <Tab eventKey={0} title="Stablecoin details">
        
        <Details nextBtn={nextBtn} tabkey={TabKey} saveStableCointDetails = {saveStableCointDetails}/>
      </Tab>
      <Tab eventKey={1} title="Manage Permissions">
        <PermissionManagement nextBtn={nextBtn} tabkey={TabKey} saveManagementDetails = {saveManagementDetails}/>
      </Tab>
      <Tab eventKey={2} title="Proof Of Reserve">
        <ProofOfReserve nextBtn={nextBtn} tabkey={TabKey} saveproofofReserve = {saveproofofReserve}/>
      </Tab>
      <Tab eventKey={3} title="Review">
        <Review nextBtn={nextBtn} tabkey={TabKey} stablecoinDetiails={stablecoinDetiails} 
          managementDetiails = {managementDetiails} proofofReserve ={proofofReserve}/>
      </Tab>
    </Tabs>    
    </>
  );
}

