// @ts-nocheck
'use client'

import { useState } from "react";

export function ProofOfReserve(props :any) {
  const [addressRequired, setAddressRequired] = useState(false);  
  const [oracleFeedAddress, setOracleFeedAddress] = useState('');
  const [oracleFeedAddressErr, setOracleFeedAddressErr] = useState('');
  const handleNext = () => {
    let error = 0;
    if(addressRequired)  {
      if(oracleFeedAddress == ''){
        setOracleFeedAddressErr('Please enter address');
        error = 1;
      }else{
        setOracleFeedAddressErr('');
      }
    }
    if(error == 0){
      props.saveproofofReserve({addressRequired:addressRequired,oracleFeedAddress: oracleFeedAddress})
    }    
  };
  const handlePrev = () => {   
    props.nextBtn(1);
  };
 
  return (
    <>
      <div className="subheading">
        <h2>PROOF OF RESERVE :</h2>
      </div>
      <ul className="feed-address">
        <li>
          <p>
            Do you want to integrate oracle for the<br></br> feed
            address?
          </p>
        </li>
        <li>
          {/* toggle button should be here start */}
          <label className="switch">
            <input type="checkbox" onChange={(e) => setAddressRequired(e.target.checked)} />
            <span className="slider round"></span>
          </label>
          {/* toggle button end */}
        </li>
      </ul>
      {/* this div need to toggle */}
      {addressRequired && 
        <div className="form-group feed-address feed-box">
          <label htmlFor="address">
            Oracle Feed Address <i className="imp">*</i>
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            width={400}
            value={oracleFeedAddress}
            onChange={(e) => setOracleFeedAddress(e.target.value)}
          />
          {oracleFeedAddressErr != "" && <p className="error-msg">{oracleFeedAddressErr}</p>}
        </div> 
      }
      {/* end this div */}

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

