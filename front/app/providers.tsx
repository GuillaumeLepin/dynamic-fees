"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { type ReactNode } from "react"
import { WagmiProvider } from "wagmi"

import { config } from "@/lib/wagmi"
import {
    DynamicContextProvider,
    EthereumWalletConnectors,
    DynamicWagmiConnector,
} from "@/lib/dynamic"

const queryClient = new QueryClient()

export function Providers(props: { children: ReactNode }) {
    return (
        <DynamicContextProvider
            settings={{
                environmentId: "b5c6f1db-1d77-415e-8857-830a42f4ed67",
                walletConnectors: [EthereumWalletConnectors],
            }}
        >
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <DynamicWagmiConnector>
                        {props.children}
                    </DynamicWagmiConnector>
                </QueryClientProvider>
            </WagmiProvider>
        </DynamicContextProvider>
    )
}
