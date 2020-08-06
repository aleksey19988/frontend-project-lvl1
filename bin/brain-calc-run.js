#!/usr/bin/env node
import gamePlaying from '../src/games/run-game.js';
import generateRoundBrainCalc from '../src/games/brain-calc.js';

gamePlaying(generateRoundBrainCalc(), 'What is the result of the expression?');
