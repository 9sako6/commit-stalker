SRC = ./public/css/style

all: $(SRC).scss
	sass $(SRC).scss:$(SRC).css
	firebase serve --only functions,hosting
