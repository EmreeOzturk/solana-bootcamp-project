"use client"
import React, { useMemo } from 'react'
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import {
    WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";

type SolanaWalletProviderProps = {
    children?: React.ReactNode;

}
const SolanaWalletProvider: React.FC<SolanaWalletProviderProps> = (
    {
        children
    }
) => {
    const endpoint = web3.clusterApiUrl("devnet");
    const wallets = useMemo(() => [], []);
    return (
        <>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} >
                    <WalletModalProvider>
                        {children}
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </>
    )
}

export default SolanaWalletProvider