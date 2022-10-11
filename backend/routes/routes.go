package routes

import (
	"github.com/gin-gonic/gin"
	// "foreignnews/controllers"
	"foreignnews/handlers"

)

func Init() {
	r := router()
	r.Run()
}

func router() *gin.Engine {
		r := gin.Default()
		todo := r.Group("/todos")

		{
			todo.POST("", todohandlers.CreateTodoHandler)
			todo.GET("", todohandlers.ListTodosHandler)
		}
		return r
}
