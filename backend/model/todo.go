package model

import (
	"time"
)

type Todo struct {
	ID          uint      `json:"id" gorm:"primary_key"`
	Title       string    `json:"title" binding:"required"`
	Description string    `json:"description" binding:"required"`
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"`
}

type User struct {
	ID        uint      `json:"id" gorm:"primary_key"`
	Name      string    `json:"name" binding:"required"`
	Email     string    `json:"email" binding:"required"`
	Gender    string    `json:"gender"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updateAt"`
}
