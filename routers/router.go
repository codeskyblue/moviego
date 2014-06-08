package routers

import (
	"moviego/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
     beego.Router("/api/movie", &controllers.MovieController{})
}
