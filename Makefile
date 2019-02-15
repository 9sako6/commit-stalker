SRC = public/index.pug

all: $(SRC)
	pug $(SRC) --pretty
