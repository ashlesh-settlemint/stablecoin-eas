'use client'

import { useState } from "react";

export function PermissionManagement(props : any) {
  const [cashWalletAddress, setCashWalletAddress] = useState('');
  const [cashWalletAddressErr, setCashWalletAddressErr] = useState('');
  const [burnWalletAddress, setBurnWalletAddress] = useState('');
  const [burnWalletAddressErr, setBurnWalletAddressErr] = useState('');
  const [wipeWalletAddress, setWipeWalletAddress] = useState('');
  const [wipeWalletAddressErr, setWipeWalletAddressErr] = useState('');
  const [pauseWalletAddress, setPauseWalletAddress] = useState('');
  const [pauseWalletAddressErr, setPauseWalletAddressErr] = useState('');

  const handleNext = () => {    
    let error = 0;
    if(cashWalletAddress == ''){
      setCashWalletAddressErr('Please enter address');
      error = 1;
    }else{
      setCashWalletAddressErr('');
    }
    if(burnWalletAddress == ''){
      setBurnWalletAddressErr('Please enter address');
      error = 1;
    }else{
      setBurnWalletAddressErr('');
    }
    if(wipeWalletAddress == ''){
      setWipeWalletAddressErr('Please enter address');
      error = 1;
    }else{
      setWipeWalletAddressErr('');
    }
    if(pauseWalletAddress == ''){
      setPauseWalletAddressErr('Please enter address');
      error = 1;
    }else{
      setPauseWalletAddressErr('');
    }    
    if(error == 0){
      let data = {
        cashWalletAddress : cashWalletAddress,
        wipeWalletAddress : wipeWalletAddress,
        burnWalletAddress : burnWalletAddress,
        pauseWalletAddress : pauseWalletAddress
      }
      props.saveManagementDetails(data);
    }
  }
  /* 
  const handleNext = () => {   
    props.nextBtn(2);
  }; */
  const handlePrev = () => {   
    props.nextBtn(0);
  };
  return (
    <>
      <div className="subheading">
        <h2>PERMISSION MANAGEMENT :</h2>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <ul className="box-area">
            <li>Cash In</li>
            <li>
              <div className="wallet-info">
                <label htmlFor="">Wallet Address</label>
                <div className="token-area">
                  <input type="text" name="cashWalletAddress" value={cashWalletAddress} onChange={(e) => setCashWalletAddress(e.target.value)} />                  
                </div>
              </div>              
            </li>
          </ul>
          {cashWalletAddressErr != "" && <p className="error-msg">{cashWalletAddressErr}</p> }
        </div>
        <div className="col-md-6 mb-4">
          <ul className="box-area">
            <li>Default Admin</li>
            <li>
              <div className="wallet-info">
                <label htmlFor="">Wallet Address</label>
                <div className="token-area">
                  <input type="text" name="wipeWalletAddress"  value={wipeWalletAddress} onChange={(e) => setWipeWalletAddress(e.target.value)}/>                  
                </div>
              </div>
              
            </li>            
          </ul>
          {wipeWalletAddressErr != "" && <p className="error-msg">{wipeWalletAddressErr}</p> }
        </div>
        <div className="col-md-6 mb-4">
          <ul className="box-area">
            <li>Burn</li>
            <li>
              <div className="wallet-info">
                <label htmlFor="">Wallet Address</label>
                <div className="token-area">
                  <input type="text" name="burnWalletAddress" value={burnWalletAddress} onChange={(e) => setBurnWalletAddress(e.target.value)} />                  
                </div>
              </div>              
            </li>
          </ul>
          {burnWalletAddressErr != "" && <p className="error-msg">{burnWalletAddressErr}</p> }
        </div>        
        <div className="col-md-6 mb-4">
          <ul className="box-area">
            <li>Pause</li>
            <li>
              <div className="wallet-info">
                <label htmlFor="">Wallet Address</label>
                <div className="token-area">
                  <input type="text" name="pauseWalletAddress"  value={pauseWalletAddress} onChange={(e) => setPauseWalletAddress(e.target.value)}/>                  
                </div>
              </div>              
            </li>
          </ul>
          {pauseWalletAddressErr != "" && <p className="error-msg">{pauseWalletAddressErr}</p> }
        </div>
      </div>
      <div className="btn-botm-wrap">
        <button type="submit" className="backbtn" onClick={() => handlePrev()}>
          <img src="../imgs/back-icon.svg" alt="" /> Go Back
        </button>
        <button type="submit" className="nextbtn" onClick={() => handleNext()}>
          Next Step <img src="../imgs/next.svg" alt="" />
        </button>
      </div>
    </>
  );
}