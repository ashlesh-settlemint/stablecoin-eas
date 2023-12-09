"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { fetchBalance,getAccount } from '@wagmi/core';
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';
import { useEffect } from 'react';


export function Header() {
  const account = getAccount();
  const { openConnectModal } = useConnectModal();
	

 useEffect(() => {
  if(!account?.address){    
    openConnectModal ? openConnectModal() : () => {};
  }
 },[account])


  return (
    <div className="nav-container">    
      <div className="nav-logo">
        <Link href="/">
          <Image
            src="../imgs/settlemint-logo.svg"
            width={200}
            height={40}
            alt=""
          />
        </Link>
      </div>
        
      <div className="right-nav">
        <img
          className="metamask-icon"
          src="../imgs/Group.svg"
          alt=""
          title="Connect Metamask Wallet"
        />
        <ConnectButton/>

      </div>
    </div>
  );
}
