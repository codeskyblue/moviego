package models

import (
	//"errors"
	//"fmt"
	"github.com/astaxie/beego"
	"github.com/sunfmin/mgodb"
	"labix.org/v2/mgo"
	"labix.org/v2/mgo/bson"
)

type Movie struct {
	Id_       bson.ObjectId `bson:"_id"`
	Alt       string        `bson:"alt"`
	Casts     []string      `bson:"casts"`
	Countries []string      `bson:"countries"`
	Db_id     string        `bson:"db_id"`
	Directors []string      `bson:"directors"`
	Download  []struct {
		Href   string `bson:"href"`
		Name   string `bson:"name"`
		Format string `bson:"format"`
		Size   string `bson:"size"`
	} `bson:"download"`
	Genres  []string `bson:"genres"`
	Id      int      `bson:"id"`
	Image   string   `bson:"image"`
	Rating  float64  `bson:"rating"`
	Summary string   `bson:"summary"`
	Title   string   `bson:"title"`
	Year    string   `bson:"year"`
}

var (
	db *mgodb.Database
)

func init() {
	NewDb()
}

func NewDb() {
	dbHost := beego.AppConfig.String("mongoHost")
	dbName := beego.AppConfig.String("mongoDb")

	db = mgodb.NewDatabase(dbHost, dbName)

	return
}

func SearchMovie(keyword string) (movies []Movie) {
	db.CollectionDo("movie", func(c *mgo.Collection) {
		c.Find(bson.M{"title": bson.RegEx{keyword, ""}}).All(&movies)
	})
	return movies
}
