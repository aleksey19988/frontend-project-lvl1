#!/usr/bin/env node
import gamePlaying from '../src/run-game.js';
import generateRoundBrainGcd from '../src/games/brain-gcd.js';
import greeting from '../src/games/brain-games.js';

gamePlaying(generateRoundBrainGcd(), 'Find the greatest common divisor of given numbers.', greeting);
