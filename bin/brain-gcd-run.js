#!/usr/bin/env node
import gamePlaying from '../src/games/run-game.js';
import generateRoundBrainGcd from '../src/games/brain-gcd.js';

gamePlaying(generateRoundBrainGcd(), 'Find the greatest common divisor of given numbers.');
