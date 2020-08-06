#!/usr/bin/env node
import gamePlaying from '../src/games/run-game.js';
import generateRoundBrainEven from '../src/games/brain-even.js';

gamePlaying(generateRoundBrainEven(), 'Answer "yes" if the number is even, otherwise answer "no".');
