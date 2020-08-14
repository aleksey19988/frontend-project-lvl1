#!/usr/bin/env node
import runGame from '../src/run-game.js';
import generateBrainEven from '../src/games/brain-even.js';

runGame(generateBrainEven());
