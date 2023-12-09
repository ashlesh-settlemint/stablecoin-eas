// @ts-nocheck
'use client';
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { stablecoiFactoryAbi } from '../../../../../../abis/stablecoinFactory';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
// import Web3 from 'web3';

export function Review(props: any) {
  const router = useRouter();
  // const [supplyInWei, setSupplyinWei] = useState('');

  console.log(
    'weiiiiiii',
    props.stablecoinDetiails.supplyInWei,
    props.stablecoinDetiails.maxSupplyInWei
  );
  // console.log('weiiiiiii', web3.utils.toWei('1', 'ether'));

  const handlePrev = () => {
    props.nextBtn(2);
  };

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_FACTORY_CONTRACT_ADDRESS,
    abi: stablecoiFactoryAbi,
    functionName: 'deployStablecoin',
    args: [
      props.proofofReserve.addressRequired,
      props.proofofReserve.oracleFeedAddress == ''
        ? '0x0000000000000000000000000000000000000000'
        : props.proofofReserve.oracleFeedAddress,
      props.stablecoinDetiails.name,
      props.stablecoinDetiails.symbol,
      props.stablecoinDetiails.supplyInWei,
      props.stablecoinDetiails.maxSupply == ''
        ? '0'
        : props.stablecoinDetiails.maxSupplyInWei,
      props.managementDetiails.wipeWalletAddress,
      props.managementDetiails.pauseWalletAddress,
      props.managementDetiails.cashWalletAddress,
      props.managementDetiails.burnWalletAddress,
      props.stablecoinDetiails.decimals,
    ],
  });

  const {
    data,
    write,
    isLoading: writeLoading,
    error: writeError,
    isError: isWriteError,
  } = useContractWrite(config);
  const { isLoading: waitLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  const handleSubmit = (e: any) => {
    // console.log(
    //   'console args',
    //   web3.utils.toWei(props.stablecoinDetiails.supply, 'ether')
    // );
    e.preventDefault();
    if (!isPrepareError) {
      write?.();
    } else {
      toast(prepareError?.message);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      toast('Stablecoin created successfully');
      setTimeout(() => {
        router.push('stableCoin');
      }, 2000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isWriteError) {
      toast(writeError?.message);
    }
  }, [isWriteError]);

  return (
    <>
      <div className="subheading">
        <h2>STABLECOIN REVIEW :</h2>
      </div>

      <div className="row review-details">
        <div className="col-md-4 review-area">
          <div className="review-box">
            <h3>Stablecoin Details :</h3>
            <div className="review-info">
              <label htmlFor="">Stablecoin Details :</label>
              <span>{props.stablecoinDetiails.name}</span>
            </div>
            <div className="review-info">
              <label htmlFor="">Coin Symbol:</label>
              <span>{props.stablecoinDetiails.symbol}</span>
            </div>
            <div className="review-info">
              <label htmlFor="">Decimals :</label>
              <span>{props.stablecoinDetiails.decimals}</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 review-area">
          <div className="review-box">
            <h3>Stablecoin Supply Details :</h3>
            <div className="review-info">
              <label htmlFor="">Collateral Supply :</label>
              <span>{props.stablecoinDetiails.supply}</span>
            </div>
            <div className="review-info">
              <label htmlFor="">Supply Type:</label>
              <span>{props.stablecoinDetiails.initialSupply}</span>
            </div>
            {props.stablecoinDetiails.maxSupply != '' && (
              <div className="review-info">
                <label htmlFor="">Max Supply :</label>
                <span>{props.stablecoinDetiails.maxSupply}</span>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-4 review-area">
          <div className="review-box">
            <h3>Permission Management Details :</h3>
            <p className="wallet-address-list">Wallet Address</p>
            <div className="review-info">
              <label htmlFor="">Cash In:</label>
              <div className="hash-tag">
                <span>{props.managementDetiails.cashWalletAddress}</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
            <div className="review-info">
              <label htmlFor="">Burn:</label>
              <div className="hash-tag">
                <span>{props.managementDetiails.burnWalletAddress}</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
            <div className="review-info">
              <label htmlFor="">Wipe :</label>
              <div className="hash-tag">
                <span>{props.managementDetiails.wipeWalletAddress}</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
            <div className="review-info">
              <label htmlFor="">Pause :</label>
              <div className="hash-tag">
                <span>{props.managementDetiails.pauseWalletAddress}</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 review-area">
          <div className="review-box">
            <h3>Proof Of Reserve Details :</h3>
            <div className="review-info">
              <label htmlFor="">Oracle Feed Address:</label>
              <div className="hash-tag">
                <span>{props.proofofReserve.oracleFeedAddress}</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-botm-wrap">
        <button type="submit" className="backbtn" onClick={() => handlePrev()}>
          <img src="../imgs/back-icon.svg" alt="" /> Go Back
        </button>
        <button
          type="submit"
          className="nextbtn"
          disabled={writeLoading || waitLoading}
          onClick={(e) => handleSubmit(e)}
        >
          {writeLoading || waitLoading ? 'Creating...' : 'Create Stable Coin'}
        </button>
      </div>
      <ToastContainer />
    </>
  );
}
