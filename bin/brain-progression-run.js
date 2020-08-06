#!/usr/bin/env node
import gamePlaying from '../src/games/run-game.js';
import generateRoundBrainProgression from '../src/games/brain-progression.js';

gamePlaying(generateRoundBrainProgression(), 'What number is missing in the progression?');
