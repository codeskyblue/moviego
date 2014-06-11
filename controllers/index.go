package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Get() {
	beego.AutoRender = true
	this.TplNames = "index.tpl"
}
