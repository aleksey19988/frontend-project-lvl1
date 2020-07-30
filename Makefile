install:
	npm install
brain-games:
	node src/games/brain-games-run.js
brain-even:
	node src/games/brain-even-run.js
brain-calc:
	node src/games/brain-calc-run.js
brain-gcd:
	node src/games/brain-gcd-run.js
brain-prime:
	node src/games/brain-gcd-run.js
brain-progression:
	node src/games/brain-progression-run.js
publish:
	npm publish --dry-run
lint:
	npm install eslint --save-dev
	npx install-peerdeps --dev eslint-config-airbnb-base
	npx eslint .
