//create parent class for Primary, Middle and High subclasses
class School {
	constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  //create getters for the name, level and numberOfStudents properties
  get name() {
    return this._name;
  }
  
  get level() {
  return this._level;
  }
  
  get numberOfStudents() {
  return this._numberOfStudents;
  }
  //create a setter for numberOfStudents. The method should first check if the input (newNumberOfStudents) is a number.
  set numberOfStudents(value) {
    if (typeof newNumberOfStudents === 'number'){
      this._numberOfstudents = newNumberOfStudents;
    }
    else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
	}
  //create a method quickFacts
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  //create a static method pickSubstituteTeacher
  static pickSubstituteTeacher(substituteTeachers) {
     const randIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randIndex];
	}
};

//build a PrimarySchool class that extends School
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy  = pickupPolicy;
  }
  //create one new getter to the PrimarySchool class
  get pickupPolicy(){
    return this._pickupPolicy;
  }
};
//create a HighSchool class that extends the School class
class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams(){
    return this._sportsTeams;
    console.log(sportsTeams);
  }
};

//create a PrimarySchool instance with the following properties
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
//call .quickFacts()
lorraineHansbury.quickFacts();
//call .pickSubstituteTeacher() on School
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
//create a HighSchool instance
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
//get value saved to the sportsTeams property in alSmith
console.log(alSmith.sportsTeams);
