package todohandlers

import (
	"foreignnews/db"
	"foreignnews/model"
	"net/http"

	"github.com/gin-gonic/gin"
)

// 新規作成
func CreateTodoHandler(c *gin.Context) {
	var todo model.Todo

	//リクエストデータを取得
	if err := c.ShouldBindJSON(&todo); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return
	}

	create_todo := model.Todo{Title: todo.Title, Description: todo.Description, PublishedAt: todo.PublishedAt}
	db.DB.Create(&create_todo)

	c.JSON(http.StatusOK, create_todo)
}

// 一覧取得
func ListTodosHandler(c *gin.Context) {
	var todos []model.Todo
	db.DB.Find(&todos)

	c.JSON(http.StatusOK, todos)
}

// とある1件の値を取得
func FindTodoHandler(c *gin.Context) {
	var todo model.Todo
	if err := db.DB.Where("id = ?", c.Param("id")).First(&todo).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}
	c.JSON(http.StatusOK, todo)
}
