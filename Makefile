SHELL = /bin/sh

install:
	git clone https://github.com/crater-space/db.git
	git clone https://github.com/crater-space/db-reader.git
	npm install
	@echo "crater-service is now ready for use."
