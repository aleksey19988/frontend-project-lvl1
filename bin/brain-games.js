#!/usr/bin/env node

import { clientName } from '../src/cli.js';

export const greeting = () => {
    console.log('Welcome to the Brain Games!');
    let userName = clientName();
    return userName;
}