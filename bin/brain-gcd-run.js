#!/usr/bin/env node
import runGame from '../src/run-game.js';
import generateBrainGcd from '../src/games/brain-gcd.js';

runGame(generateBrainGcd());
