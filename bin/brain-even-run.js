#!/usr/bin/env node
import gamePlaying from '../src/run-game.js';
import generateRoundBrainEven from '../src/games/brain-even.js';
import greeting from '../src/games/brain-games.js';

gamePlaying(generateRoundBrainEven(), 'Answer "yes" if the number is even, otherwise answer "no".', greeting);
