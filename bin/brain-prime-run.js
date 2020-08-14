#!/usr/bin/env node
import runGame from '../src/run-game.js';
import generateBrainPrime from '../src/games/brain-prime.js';

runGame(generateBrainPrime());
