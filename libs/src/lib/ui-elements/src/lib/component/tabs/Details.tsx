// @ts-nocheck
'use client';

import { useState } from 'react';
import { ethers } from 'ethers';

export function Details(props: any) {
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [symbol, setSymbol] = useState('');
  const [symbolErr, setSymbolErr] = useState('');
  const [decimals, setDecimals] = useState('');
  const [decimalsErr, setDecimalsErr] = useState('');
  const [supply, setSupply] = useState('');
  const [supplyErr, setSupplyErr] = useState('');
  const [initialSupply, setInitialSupply] = useState('');
  const [initialSupplyErr, setInitialSupplyErr] = useState('');
  const [maxSupply, setMaxSupply] = useState('');
  const [maxSupplyErr, setMaxSupplyErr] = useState('');

  const handleNext = (formdata: FormData) => {
    let error = 0;
    if (name == '') {
      setNameErr('Please enter name');
      error = 1;
    } else {
      setNameErr('');
    }
    if (symbol == '') {
      setSymbolErr('Please enter symbol');
      error = 1;
    } else {
      setSymbolErr('');
    }
    if (decimals == '') {
      setDecimalsErr('Please enter decimal');
      error = 1;
    } else {
      setDecimalsErr('');
    }
    if (supply == '') {
      setSupplyErr('Please enter supply');
      error = 1;
    } else {
      setSupplyErr('');
    }
    if (initialSupply == '') {
      setInitialSupplyErr('Please enter inial supply');
      error = 1;
    } else {
      if (initialSupply == 'Finite') {
        if (maxSupply == '') {
          setMaxSupplyErr('Please enter max supply');
          error = 1;
        } else {
          setMaxSupplyErr('');
        }
      }
      setInitialSupplyErr('');
    }

    console.log(initialSupply);
    if (error == 0) {
      let data = {
        name: name,
        symbol: symbol,
        decimals: decimals,
        supply: supply,
        supplyInWei: ethers.utils.parseUnits(supply, decimals),
        initialSupply: initialSupply,
        maxSupplyInWei: ethers.utils.parseUnits(
          maxSupply ? maxSupply : '0',
          decimals
        ),
        maxSupply: maxSupply,
      };
      props.saveStableCointDetails(data);
    }
    //props.nextBtn(1);
  };
  return (
    <>
      <form action={handleNext}>
        <div className="form">
          <div className="row">
            <div className="col-4">
              <div className="subheading">
                <h2>STABLECOIN DETAILS :</h2>
              </div>
              <div className="form-group">
                <label htmlFor="name">
                  Stablecoin Name <i className="imp">*</i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
                {nameErr != '' && <p className="error-msg">{nameErr}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="symbol">
                  Coin Symbol <i className="imp">*</i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="symbol"
                  name="symbol"
                  onChange={(e) => setSymbol(e.target.value)}
                />
                {symbolErr != '' && <p className="error-msg">{symbolErr}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="decimals">
                  Decimals <i className="imp">*</i>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="decimals"
                  name="decimals"
                  onChange={(e) => setDecimals(e.target.value)}
                />
                {decimalsErr != '' && (
                  <p className="error-msg">{decimalsErr}</p>
                )}
              </div>
            </div>

            <div className="col-4">
              <div className="subheading">
                <h2>STABLECOIN SUPPLY DETAILS :</h2>
              </div>
              <div className="form-group">
                <label htmlFor="supply">
                  Collateral Supply <i className="imp">*</i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="supply"
                  name="supply"
                  onChange={(e) => setSupply(e.target.value)}
                />
                {supplyErr != '' && <p className="error-msg">{supplyErr}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="supply">
                  Supply Type<i className="imp">*</i>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={''}
                  name="initialSupply"
                  onChange={(e) => setInitialSupply(e.target.value)}
                >
                  <option value="">Select Supply Type</option>
                  <option value="Finite">Finite</option>
                  <option value="Infinite">Infinite</option>
                </select>
                {initialSupplyErr != '' && (
                  <p className="error-msg">{initialSupplyErr}</p>
                )}
              </div>
              {initialSupply == 'Finite' && (
                <div className="form-group">
                  <label htmlFor="maxsupply">Max Supply </label>
                  <input
                    type="text"
                    className="form-control"
                    id="maxsupply"
                    name="maxsupply"
                    onChange={(e) => setMaxSupply(e.target.value)}
                  />
                  {maxSupplyErr != '' && (
                    <p className="error-msg">{maxSupplyErr}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="btn-botm-wrap">
          <button type="submit" className="nextbtn">
            Next Step <img src="../imgs/next.svg" alt="" />
          </button>
        </div>
      </form>
    </>
  );
}
