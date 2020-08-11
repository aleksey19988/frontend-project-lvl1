#!/usr/bin/env node
import gamePlaying from '../src/run-game.js';
import generateRoundBrainCalc from '../src/games/brain-calc.js';
import greeting from '../src/games/brain-games.js';

gamePlaying(generateRoundBrainCalc(), 'What is the result of the expression?', greeting);
