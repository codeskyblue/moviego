package controllers

import (
	//"fmt"
	"github.com/astaxie/beego"
	"moviego/models"
	"strconv"
)

type MovieController struct {
	beego.Controller
}

func (this *MovieController) Rating() {
	count := this.Input().Get("count")
	intcount, _ := strconv.Atoi(count)
	sort := this.Input().Get("sort")
	intsort, _ := strconv.Atoi(sort)

	if intcount == 0 {
		intcount = 250
	}
	if intsort == 0 {
		intsort = 1
	}

	var movies []models.Movie
	movies = models.TopRating(intcount, intsort)
	this.Data["json"] = movies
	this.ServeJson()
}

func (this *MovieController) Getdd() {

	q := this.GetString("q")
	if q == "" {
		this.Ctx.WriteString("parmas q is empty")
		return
	}

	/*type User struct {
	      Id_       bson.ObjectId `bson:"_id"`
	      Name      string        `bson:"name"`
	      Age       int           `bson:"age"`
	      JoinedAt   time.Time     `bson:"joined_at"`
	      Interests []string      `bson:"interests"`
	  }

	  err = c.Insert(&User{
	  Id_:       bson.NewObjectId(),
	  Name:      "Jimmy Kuu",
	  Age:       33,
	  JoinedAt:  time.Now(),
	  Interests: []string{"Develop", "Movie"},
	  })

	  if err != nil {
	      panic(err)
	  }

	  err = c.Insert(&User{
	      Id_:       bson.NewObjectId(),
	      Name:      "Tracy Yu",
	      Age:       31,
	      JoinedAt:  time.Now(),
	      Interests: []string{"Shoping", "TV"},
	  })

	  if err != nil {
	      panic(err)
	  }
	*/
	/* var users []User
	   // c.Find(bson.M{"Name": "Jimmy Kuu"}).All(&users)
	    c.Find(bson.M{"name": bson.RegEx{"Yu", ""}}).All(&users)
	    this.Data["json"] = users
	    this.ServeJson()
	    fmt.Println("here")
	*/
	var movies []models.Movie

	movies = models.SearchMovie(q)
	this.Data["json"] = movies
	this.ServeJson()
}
