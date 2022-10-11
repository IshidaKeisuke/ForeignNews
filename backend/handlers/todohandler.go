package todohandlers

import (
	"foreignnews/model"
	"net/http"
	"time"
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/rs/xid"
)

var todos []model.Todo

func init() {
	todos = make([]model.Todo, 0)
}

func CreateTodoHandler(c *gin.Context) {
	var todo model.Todo

	//リクエストデータを取得
	if err := c.ShouldBindJSON(&todo); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return
	}

	// ユニークなIDを作成
	todo.ID = xid.New().String()

	// 現在時刻を追加
	todo.PublishedAt = time.Now()
	todos = append(todos, todo)
	c.JSON(http.StatusOK, todo)
}

func ListTodosHandler(c *gin.Context){
	// c.JSON(http.StatusOK, todos)
	fmt.Println("Hello World")
}
