#!/usr/bin/env node
import gamePlaying from '../src/run-game.js';
import generateRoundBrainPrime from '../src/games/brain-prime.js';
import greeting from '../src/games/brain-games.js';

gamePlaying(generateRoundBrainPrime(), 'Answer "yes" if given number is prime. Otherwise answer "no".', greeting);
