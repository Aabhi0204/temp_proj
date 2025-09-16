

import React from 'react';
import { TERipple } from "tw-elements-react";

export default function FooterButtonsDarkExample() {
    return (
        <footer className="bg-neutral-900 text-center text-white">
            <div className="container px-6 pt-6 mx-auto">
                <div className="mb-6 flex flex-wrap justify-center items-center gap-2 w-full">
                   
            <div
                className="p-4 text-center bg-black bg-opacity-20">
                © 2023 Copyright:
                <a className="text-whitehite" href="https://tw-elements.com/"
                >TW Elements</a>
            </div>
                </div>
            </div>
        </footer>
    );
}
