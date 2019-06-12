install: install-deps

run:
				npm babel-node -- src/bin/brain-games.js
	 npm babel-node src/bin/brain-games.js

install-deps:
				npm install

start:
				npm run babel-node -- src/bin/brain-games.js

publish:
				npm publish

lint:
				npm run eslint  src/