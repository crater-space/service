SHELL = /bin/sh

help:
	@echo "Use one of the following options:"
	@echo " - setup"
	@echo " - update"

setup:
	git clone https://github.com/crater-space/db.git
	git clone https://github.com/crater-space/db-reader.git
	npm install
	@echo "crater-service is now ready for use."

update:
	git pull origin main
	git -C ./db pull origin main
	git -C ./db-reader pull origin main
	@echo "All components have been updated."
