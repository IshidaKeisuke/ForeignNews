package main

import (
	"foreignnews/db"
	"foreignnews/routes"
)

func main() {
	db.Init()
	routes.Init()

	db.Close()
}
