"use client"

import {
    Navbar,
    Typography,
    Avatar
} from "@material-tailwind/react";

import Link from "next/link";

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                className="p-1 font-[12px]"
            >
                <Link href="/" className="font-serif items-center text-white">
                    Home
                </Link>
            </Typography>
        </ul>
    );
}

export function Header() {
    return (
        <Navbar className="mx-auto w-[90%] max-w-[600px] border-none px-6 py-1 sticky top-5 bg-[#3978665b] backdrop-blur-md z-30">
            <div className="flex items-center justify-between">
                <Avatar src="favicon.png" size="sm" />
                <div>
                    <NavList />
                </div>
            </div>
        </Navbar>
    );
}