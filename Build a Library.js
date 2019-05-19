//Objective: create a parent class named Media with three subclasses: Book, Movie, and CD in a library system.
//create a parent class Media
class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  };
//createa getters for title, isCheckedOut and ratings properties
  get title(){
    return this._title;
  };

  get isCheckedOut(){
    return this._isCheckedOut;
  };

  get ratings(){
    return this._ratings;
  };
  
//create a method toggleCheckOutStatus that changes the valuse saved to the _isCheckedOut property. If value is true, then change it to false. If the value is false, then change it to true.
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  };
  
//create a method getAverageRating that returns an average value of ratings array
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)/this._ratings.length;
    return ratingsSum;
    }
  
//create a method addRating 
  addRating(ratings){
    this._ratings.push(ratings);
    }
};

//create a Book class that extends Media
class Book extends Media {
  constructor(author, title, pages){
   	super(title);
  	this._author = author;
    this._pages = pages;
  }
    
    
//create getters for author and pages
  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }
};
  
//create a Movie class that extends Media
class Movie extends Media{
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
//create getters for director and runTime
  get director(){
    return this._director;
  }
  
  get runTime(){
    return this._runTime;
  }
};
 
//create a Book instance with the following properties
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

//call.toggleCheckOutStatus() on the historyOfEverything instance
historyOfEverything.toggleCheckOutStatus();

//log the value
console.log(historyOfEverything.isCheckedOut);

//call .addRating
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();

//log the result
console.log(historyOfEverything.getAverageRating());


//create a Movie instance with the following properties
const speed = new Movie('Jan de Bont', 'Speed', 116);

//Call .toggleCheckOutStatus() on the speed instance
speed.toggleCheckOutStatus();

//log the value saved to the isCheckedOut property
console.log(speed.isCheckedOut);

//call .addRating
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();

//log the result
console.log(speed.getAverageRating());
