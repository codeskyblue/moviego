package routers

import (
	"github.com/astaxie/beego"
	"moviego/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/api/search/movie", &controllers.SearchController{}, "get:Movie")
	beego.Router("/api/rating", &controllers.MovieController{}, "get:Rating")
}
