package todohandlers

import (
	"fmt"
	"foreignnews/db"
	"foreignnews/model"
	"net/http"

	// "time"

	"github.com/gin-gonic/gin"
	// "github.com/jinzhu/gorm"
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

	create_todo := model.Todo{Title: todo.Title, Description: todo.Description, CreatedAt: todo.CreatedAt, UpdatedAt: todo.UpdatedAt}
	db.DB.Create(&create_todo)

	c.JSON(http.StatusOK, create_todo)
}

// 一覧取得
func ListTodosHandler(c *gin.Context) {
	var todos []model.Todo
	db.DB.Find(&todos)

	c.JSON(http.StatusOK, todos)
}

func FindTodoHandler(c *gin.Context) {
	var todo model.Todo
	if err := db.DB.Where("id = ?", c.Param("id")).First(&todo).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}
	c.JSON(http.StatusOK, todo)
}

// 更新
func UpdateTodoHandler(c *gin.Context) {
	var todo model.Todo
	id := c.Params.ByName("id")

	if err := db.DB.Where("id = ?", id).First(&todo).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}
	c.BindJSON(&todo)

	db.DB.Save(&todo)
	c.JSON(200, todo)
}

// 削除
func DeleteTodoHandler(c *gin.Context) {
	id := c.Params.ByName("id")
	var todo model.Todo

	if err := db.DB.Where("id = ?", id).First(&todo).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}

	c.ShouldBind(&todo)
	db.DB.Delete(&todo)
	c.JSON(http.StatusOK, todo)
}
