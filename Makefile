SRC = ./css/style

all: $(SRC).scss
	sass $(SRC).scss:$(SRC).css
