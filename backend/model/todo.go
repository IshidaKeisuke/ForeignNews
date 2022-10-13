package model

import (
	"time"
)

type Todo struct {
	ID     				uint   		`json:"id" gorm:"primary_key"`
	Title					string		`json:"title" binding:"required"`
	Description		string		`json:"description" binding:"required"`
	PublishedAt  	time.Time `json:"publishedAt"`
}
