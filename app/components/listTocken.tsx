"use client"

import { useState } from "react"
import {
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"

const people = [
    {
        id: 1,
        name: "ARB",
        avatar: "https://img.cryptorank.io/coins/60x60.arbitrum1696871846920.png",
    },
    {
        id: 2,
        name: "USDC",
        avatar: "https://img.cryptorank.io/coins/60x60.usd%20coin1634317395959.png",
    },
    {
        id: 3,
        name: "USDT",
        avatar: "https://img.cryptorank.io/coins/60x60.tether1645007690922.png",
    },
    {
        id: 4,
        name: "TUSD",
        avatar: "https://s2.coinmarketcap.com/static/img/coins/64x64/2563.png",
    },
    {
        id: 5,
        name: "1INCH",
        avatar: "https://s2.coinmarketcap.com/static/img/coins/64x64/8104.png",
    },
    {
        id: 6,
        name: "WBTC",
        avatar: "https://img.cryptorank.io/coins/60x60.wrapped%20bitcoin1628063974037.png",
    },
    {
        id: 7,
        name: "DAI",
        avatar: "https://img.cryptorank.io/coins/60x60.multi-collateral-dai1574400689822.png",
    },
    {
        id: 8,
        name: "UNI",
        avatar: "https://img.cryptorank.io/coins/60x60.uniswap1720803010318.png",
    },
    {
        id: 9,
        name: "LINK",
        avatar: "https://img.cryptorank.io/coins/60x60.chainlink1541078222348.png",
    },
    {
        id: 10,
        name: "PEPE",
        avatar: "https://img.cryptorank.io/coins/60x60.pepe1715931310909.png",
    },
]

export default function Example() {
    const [selected, setSelected] = useState(people[1])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <Label className="block text-sm font-medium leading-6 text-gray-900">
                Token
            </Label>
            <div className="relative mt-1">
                <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                        <img
                            alt=""
                            src={selected.avatar}
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                        />
                        <span className="ml-3 block truncate">
                            {selected.name}
                        </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-400"
                        />
                    </span>
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                    {people.map((person) => (
                        <ListboxOption
                            key={person.id}
                            value={person}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                        >
                            <div className="flex items-center">
                                <img
                                    alt=""
                                    src={person.avatar}
                                    className="h-5 w-5 flex-shrink-0 rounded-full"
                                />
                                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                    {person.name}
                                </span>
                            </div>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                <CheckIcon
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                />
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    )
}
