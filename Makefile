install:    install-deps

run:
			npm babel-node -- src/bin/brain-even.js
	        npm babel-node src/bin/brain-even.js

install-deps:
			npm install

start-even:
			npm run babel-node -- src/bin/brain-even.js

start-calc:
			npm run babel-node -- src/bin/brain-calc.js

start-gcd:
			npm run babel-node -- src/bin/brain-gcd.js

start-progression:
			npm run babel-node -- src/bin/brain-progression.js

start-prime:
			npm run babel-node -- src/bin/brain-prime.js

publish:
			npm publish --dry-run

lint:
			npx eslint .