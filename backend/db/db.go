package db

import (
	_ "github.com/jinzhu/gorm/dialects/postgres"

	"github.com/jinzhu/gorm"
	"foreignnews/model"
)


var (
	db  *gorm.DB
	err error
)

func Init() {
	db, err = gorm.Open("postgres", "host=db port=5432 user=gorm dbname=gorm password=gorm sslmode=disable")
	if err != nil {
		panic(err)
	}
	autoMigration()
	todo := model.Todo{
			ID:    "1",
			Title:  "aoki",
			Description: "セブンで買い物",
	}
	db.Create(&todo)
}

// GetDB is called in models
func GetDB() *gorm.DB {
	return db
}

// Close is closing db
func Close() {
	if err := db.Close(); err != nil {
			panic(err)
	}
}

func autoMigration() {
	db.AutoMigrate(&model.Todo{})
}
