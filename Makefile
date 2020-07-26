install:
	npm install
brain-games:
	node bin/brain-games-run.js
brain-even:
	node bin/brain-even-run.js
brain-calc:
	node bin/brain-calc-run.js
brain-gcd:
	node bin/brain-gcd-run.js
brain-prime:
	node bin/brain-gcd-run.js
brain-progression:
	node bin/brain-progression-run.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
