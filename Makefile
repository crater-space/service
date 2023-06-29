SHELL = /bin/sh

help:
	@echo "Use one of the following options:"
	@echo " - setup"
	@echo " - update"

primary-deps:
	@echo "Making sure SBCL is installed..."
ifneq ($(shell command -v sbcl),)
	@echo "SBCL found."
else ifneq ($(shell command -v xbps-query),)
	sudo xbps-install -Syu sbcl
else ifneq ($(shell command -v pacman),)
	sudo pacman -Sy sbcl
else ifneq ($(shell command -v dnf),)
	sudo dnf install -y sbcl
else ifneq ($(shell command -v apt),)
	sudo apt install -y sbcl
else
	@echo "Could not determine steps to install SBCL! Please install SBCL and try again."
	exit 1
endif

setup: primary-deps
	git clone https://github.com/crater-space/db.git
	git clone https://github.com/crater-space/db-reader.git
	npm install
	@echo "crater-service is now ready for use."

update:
	git pull origin main
	git -C ./db pull origin main
	git -C ./db-reader pull origin main
	@echo "All components have been updated."
