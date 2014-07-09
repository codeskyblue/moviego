package routers

import (
	"github.com/astaxie/beego"
	"moviego/controllers"
)

func init() {
	beego.Router("/api/search/movie", &controllers.SearchController{}, "get:Movie")
	beego.Router("/api/movie/rating", &controllers.MovieController{}, "get:Rating")
	beego.Router("/api/movie/:id:string", &controllers.MovieController{}, "get:Movie")
	beego.Router("/", &controllers.MainController{})
	beego.Router("/*", &controllers.MainController{})
}
