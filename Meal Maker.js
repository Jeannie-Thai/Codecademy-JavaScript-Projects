//Generate a random three-course meal based on what is available on the menu
const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers () {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    //Create a method which will add a new dish to the specified course on the menu
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },
    //Create a method to get a random dish from a course on the menu
    getRandomDishFromCourses (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    //Create a function which will automatically generate a three-course meal 
    generateRandomMeal (){
      const appetizers = this.getRandomDishFromCourses('appetizers');
      const mains = this.getRandomDishFromCourses('mains');
      const desserts = this.getRandomDishFromCourses('desserts');
      const totalPrice = appetizers.price + mains.price + desserts.price;
        return `Your meal is ${appetizers.name}, ${mains.name}, and ${desserts.name}. The price is ${totalPrice}.`;
    }
};

//create a menu
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Chicken Soup', 3.50);
menu.addDishToCourse('appetizers', 'Fries', 5.00);

menu.addDishToCourse('mains', 'Steak', 15.00);
menu.addDishToCourse('mains', 'Pasta', 18.00);
menu.addDishToCourse('mains', 'Burger', 12.50);

menu.addDishToCourse('desserts','Cake', 6.00);
menu.addDishToCourse('desserts','Ice Cream', 5.00);
menu.addDishToCourse('desserts','Pie', 7.00);

//generate a random meal and print result 
const meal = menu.generateRandomMeal();
console.log(meal);

  
  
  
  
  
