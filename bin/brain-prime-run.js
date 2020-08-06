#!/usr/bin/env node
import gamePlaying from '../src/games/run-game.js';
import generateRoundBrainPrime from '../src/games/brain-prime.js';

gamePlaying(generateRoundBrainPrime(), 'Answer "yes" if given number is prime. Otherwise answer "no".');
