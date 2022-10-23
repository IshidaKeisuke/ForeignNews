package routes

import (
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"foreignnews/handlers"
)

func Init() {
	r := router()
	r.Run()
}

func router() *gin.Engine {
		r := gin.Default()
    r.Use(cors.New(cors.Config{
			// 許可したいHTTPメソッドの一覧
			AllowMethods: []string{
					"POST",
					"GET",
					"PUT",
					"DELETE",
			},
			// 許可したいHTTPリクエストヘッダの一覧
			AllowHeaders: []string{
					"Access-Control-Allow-Headers",
					"Content-Type",
					"Content-Length",
					"Accept-Encoding",
					"X-CSRF-Token",
					"Authorization",
			},
			AllowAllOrigins: true,
			// 許可したいアクセス元の一覧
			// AllowOrigins: []string{
			// 		"http://localhost",
			// },
			// 自分で許可するしないの処理を書きたい場合は、以下のように書くこともできる
			// AllowOriginFunc: func(origin string) bool {
			//  return origin == "https://www.example.com:8080"
			// },
			// preflight requestで許可した後の接続可能時間
			// https://godoc.org/github.com/gin-contrib/cors#Config の中のコメントに詳細あり
			MaxAge: 24 * time.Hour,
		 }))

		todo := r.Group("/todos")

		{
			todo.POST("", todohandlers.CreateTodoHandler)
			todo.GET("", todohandlers.ListTodosHandler)
			todo.GET("/:id", todohandlers.FindTodoHandler)
			todo.PUT("/:id", todohandlers.UpdateTodoHandler)
			todo.DELETE("/:id", todohandlers.DeleteTodoHandler)
		}
		return r
}
