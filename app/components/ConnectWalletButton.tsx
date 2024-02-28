"use client"

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react'
const ConnectWalletButton = () => {

    const WalletMultiButtonDynamic = dynamic(
        async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
        { ssr: false }
    );

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <WalletMultiButtonDynamic />
            </Suspense>
        </div>
    )
}

export default ConnectWalletButton