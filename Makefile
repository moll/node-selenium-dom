NODE = node
NODE_OPTS = --use-strict
TEST_OPTS =

# NOTE: Sorry, Mocumentation is not yet published.
MOCUMENT = ~/Documents/Mocumentation/bin/mocument
MOCUMENT_OPTS = --type yui --title SeleniumDom.js
GITHUB_URL = $(shell node -e 'console.log(require("./package").homepage)')

love:
	@echo "Feel like makin' love."

test:
	@$(NODE) $(NODE_OPTS) ./node_modules/.bin/_mocha -R dot $(TEST_OPTS)

spec:
	@$(NODE) $(NODE_OPTS) ./node_modules/.bin/_mocha -R spec $(TEST_OPTS)

autotest:
	@$(NODE) $(NODE_OPTS) ./node_modules/.bin/_mocha -R dot --watch $(TEST_OPTS)

autospec:
	@$(NODE) $(NODE_OPTS) ./node_modules/.bin/_mocha -R spec --watch $(TEST_OPTS)

pack:
	@file=$$(npm pack); echo "$$file"; tar tf "$$file"

publish:
	npm publish

tag:
	git tag "v$$($(NODE) -e 'console.log(require("./package").version)')"

doc: doc.json
	@mkdir -p doc
	@$(MOCUMENT) $(MOCUMENT_OPTS) tmp/doc/data.json > doc/API.md

toc: doc.json
	@$(MOCUMENT) $(MOCUMENT_OPTS) \
		--template toc \
		--var api_url=$(GITHUB_URL)/blob/master/doc/API.md \
		tmp/doc/data.json > tmp/TOC.md

	@echo -e '/^API$$/,/^License$$/{/^API$$/{r tmp/TOC.md\na\\\n\\\n\n};/^License/!d;}' |\
		sed -i -f- README.md

doc.json:
	@mkdir -p tmp
	@yuidoc --exclude test,node_modules --parse-only --outdir tmp/doc .

clean:
	rm -rf tmp *.tgz

.PHONY: love
.PHONY: test spec autotest autospec
.PHONY: pack publish tag
.PHONY: clean
