package model

import (
	"time"
	// "foreignnews/db"

	// _ "github.com/go-sql-driver/mysql"
)

type Todo struct {
	ID						string		`json:"id"`
	Title					string		`json:"title" binding:"required"`
	Description		string		`json:"description" binding:"required"`
	PublishedAt  	time.Time `json:"publishedAt"`
}

// func (t *Todo) TableName() string {
// 	return "todo"
// }

// func GetAllTodos(todo *[]Todo) (err error) {
// 	if err = db.DB.Find(todo).Error; err != nil {
// 		return err
// 	}
// 	return nil
// }
