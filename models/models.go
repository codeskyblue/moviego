package models

import (
	"log"
	"errors"
	"github.com/astaxie/beego"
 	"labix.org/v2/mgo"
    "labix.org/v2/mgo/bson"
)
type Movie struct{
    Id_     bson.ObjectId `bson:"_id"`
    Alt     string   `bson:"alt"`
    Casts   []string `bson:"casts"`
    Countries   []string `bson:"countries"`
    Db_id   string     `bson:"db_id"`
    Directors   []string `bson:"directors"`
    Download   []struct{
        Href string `bson:"href"`
        Name string `bson:"name"`
        Format string `bson:"format"`
        Size string `bson:"size"`
        } `bson:"download"`
    Genres   []string `bson:"genres"`
    Id   int `bson:"id"`
    Image   string `bson:"image"`
    Rating   float64 `bson:"rating"`
    Summary   string   `bson:"summary"`
    Title   string   `bson:"title"`
    Year   string   `bson:"year"`
}

func InitDb() (){
	session, err := mgo.Dial("127.0.0.1:27017")
    if err != nil {
        panic(err)
    }
    defer session.Close()

    db = session.DB("movie")
    return db
}

func SearchMovie(keyword string) (movies []Movie, err error){
	db := InitDb()
	c := db.C("movie")
	
	err = c.Find(bson.M{"title": bson.RegEx{keyword, ""}}).All(&movies)
	return movies, err
}