import react, { useState } from 'react'
import { chain, useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected';
import axios from 'axios'
import Moralis from 'moralis';
import { Router } from 'react-router-dom';

// const { connectAsync } = useConnect();
// const { disconnectAsync } = useDisconnect();
// const { isConnected } = useAccount()
// const { signMessageAsync } = useSignMessage();


export const connetWallet = async () => {
    
    if (isConnected) {
        await disconnectAsync();
    }
    try {
        const { account, chain } = await connectAsync({ connector: new InjectedConnector() });
        const userData = {
            address: account,
            chain: chain.id,
            network: "evm"
        }
        const { data } = await axios.post('/api/auth/request-message', userData, {
            headers: {
                'content-type': 'application/json',
            },
        });
        const message = data.message;
        const signature = await signMessageAsync({ message });
        const { url } = await signIn('credentials', { message, signature, redirect: false, callbackUrl: '/' })
        Router.push(url)
    } catch (e) {
        console.log(e)
    }
}

export async  function checkWallet() {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY })
    if (isConnected) {
        await disconnectAsync();
    }
    try{
        const { account, chain } = await connectAsync({ connector: new InjectedConnector() });
        const options = {
            chain: chain.id,
            address: account,
        }
        const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance(options);
        let balance =  nativeBalance.result.balance.ether
        console.log(balance)
        if(balance < 0.5){
            throw new error("You don't have enough MSME COIN")
        }else return;
    }catch(e){
        return e;
    };

}

