package controllers

import (
	// "foreignnews/model"
	// "net/http"

	"github.com/gin-gonic/gin"
)

type UserController struct{}

func (uc UserController) Index(c *gin.Context) {

}

// func GetTodos(c *gin.Context) {
// 	var todo []model.Todo
// 	err := model.GetAllTodos(&todo)

// 	if err != nil {
// 		c.AbortWithStatus(http.StatusNotFound)
// 	} else {
// 		c.JSON(http.StatusOK, todo)
// 	}
// }
