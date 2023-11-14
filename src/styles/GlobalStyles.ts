"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #0F52BA;
        --color-gray-000: #EEEEEE;
        --color-gray-100: #2C2C2C;
        --color-gray-200: #373737;
        --color-white: #FFFFFF;
        --color-black: #000000;
    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }
    
    body {
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }
`;
