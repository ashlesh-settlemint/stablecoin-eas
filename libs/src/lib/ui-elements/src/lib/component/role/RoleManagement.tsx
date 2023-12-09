// @ts-nocheck
'use client';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { stablecoinAbi } from '../../../../../../abis/stablecoin';
import { stablecoiFactoryAbi } from '../../../../../../abis/stablecoinFactory';
import styles from '../../../../../../../../apps/dapp/app/operate/page.module.css';
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

/* eslint-disable-next-line */
export interface CoinDetails {}
export function RoleManagement(props: CoinDetails) {
  const [coins, setCoins] = useState([]);
  const [selectedCoinAddress, setSelectedCoinAddress] = useState();
  const [selectedCoinAddressErr, setSelectedCoinAddressErr] = useState('');
  const [selectedCoinAddressType, setSelectedCoinAddressType] = useState('');
  const [selectedCoinAddressTypeErr, setSelectedCoinAddressTypeErr] =
    useState('');
  const [callFunctionName, setCallFunctionName] = useState('');
  const [address, setAddress] = useState('');
  const [addressErr, setAddressErr] = useState('');

  const [amountErr, setAmountErr] = useState('');
  const [args, setArgs] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [callUpdate, setCallUpdate] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);
  const handleSubmit = () => setShowPopup(!showPopup);

  const { data, isError, isLoading } = useContractRead({
    address: process.env.NEXT_PUBLIC_FACTORY_CONTRACT_ADDRESS,
    abi: stablecoiFactoryAbi,
    functionName: 'getAllStableCoins',
  });
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
    isLoading: createLoading,
  } = usePrepareContractWrite({
    address: selectedCoinAddress,
    abi: stablecoinAbi,
    functionName: 'grantRole',
    args: [selectedCoinAddressType, address],
  });

  const {
    data: writeData,
    write,
    isLoading: writeLoading,
    error: writeError,
  } = useContractWrite(config);
  const { isLoading: waitLoading, isSuccess } = useWaitForTransaction({
    hash: writeData?.hash,
  });

  useEffect(() => {
    if (data && data?.length > 0) {
      setCoins(data);
    }
  }, [data]);
  useEffect(() => {
    if (writeData) {
      handleShow();
    }
  }, [writeData]);
  useEffect(() => {
    if (writeError) {
      toast(writeError?.message);
    }
  }, [writeError]);

  const updateAddressType = (ele: any) => {
    setSelectedCoinAddressType(ele.target.value);
  };
  const submitForm = () => {
    let error = 0;
    if (selectedCoinAddress == '') {
      error = 1;
      setSelectedCoinAddressErr('Please select address');
    } else {
      setSelectedCoinAddressErr('');
    }
    if (selectedCoinAddressType == '') {
      error = 1;
      setSelectedCoinAddressTypeErr('Please select type');
    } else {
      setSelectedCoinAddressTypeErr('');
    }
    if (address == '') {
      error = 1;
      setAddressErr('Please  enter wallet address');
    } else {
      setAddressErr('');
    }
    if (error == 0) {
      let myargs = [];
      myargs.push(selectedCoinAddressType);
      myargs.push(address);
      setArgs(myargs);
      setCallUpdate(true);
      if (isPrepareError) {
        toast(prepareError?.message);
      } else {
        write?.();
      }
    }
  };
  return (
    <>
      <div className="col-4">
        <div className={styles['operate-box']}>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setSelectedCoinAddress(e.target.value)}
          >
            <option selected>Select Stablecoin</option>
            {coins.map((address: string) => {
              return (
                <option value={address.coinAddress}>
                  {address.name} - {address.symbol}
                </option>
              );
            })}
          </select>
          {selectedCoinAddressErr != '' && (
            <p className="error-msg">{selectedCoinAddressErr}</p>
          )}
        </div>
        <div className={styles['operate-box']}>
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectedCoinAddressType}
            onChange={(e) => updateAddressType(e)}
          >
            <option selected>Choose An Operation</option>
            <option value="0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6">
              Mint
            </option>
            <option value="0x3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848">
              Burn
            </option>
            <option value="0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a">
              Pause
            </option>
          </select>
          {selectedCoinAddressTypeErr != '' && (
            <p className="error-msg">{selectedCoinAddressTypeErr}</p>
          )}
        </div>
        <div className={styles['cashBox']}>
          <label>Wallet Address</label>
          <input
            type="text"
            name="cash"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {addressErr != '' && <p className="error-msg">{addressErr}</p>}
        </div>
        <div>
          <button
            type="button"
            className={styles['submitBtn']}
            disabled={writeLoading || waitLoading}
            onClick={() => submitForm()}
          >
            {writeLoading || waitLoading ? 'Updating....' : 'Update Role'}
          </button>
        </div>
      </div>
      <Modal show={show && isSuccess} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transaction Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body className="wordwrap">
          <h5>Blockchain Explorer:</h5>
          {isSuccess && (
            <a
              target="_blank"
              href={'https://mumbai.polygonscan.com/tx/' + writeData?.hash}
            >
              Click here for transaction confirmation.
            </a>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}
