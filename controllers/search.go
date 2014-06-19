package controllers

import (
	"github.com/astaxie/beego"
	"moviego/models"
)

type SearchController struct {
	beego.Controller
}

func (this *SearchController) Movie() {
	q := this.GetString("q")
	if q == "" {
		this.Ctx.WriteString("parmas q is empty")
		return
	}

	var movies []models.Movie

	movies = models.SearchMovie(q)
	this.Data["json"] = movies
	this.ServeJson()
}
