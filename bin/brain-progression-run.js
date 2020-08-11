#!/usr/bin/env node
import gamePlaying from '../src/run-game.js';
import generateRoundBrainProgression from '../src/games/brain-progression.js';
import greeting from '../src/games/brain-games.js';

gamePlaying(generateRoundBrainProgression(), 'What number is missing in the progression?', greeting);
