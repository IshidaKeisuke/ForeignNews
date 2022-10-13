package main

import (
	"foreignnews/db"
	"foreignnews/routes"
)

func main() {
	db.ConnectDatabase()
	routes.Init()

}
