import { Injectable } from '@angular/core';
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonLsService {
  readonly KEY = 'stored-people-data';
  constructor() { }

  public getAll(): Person[] {
    // set response people variable to an empty array
    let people: Person[] = [];
    // get data from localstorage
    let data = localStorage.getItem(this.KEY)

    console.log('helo?', data)

    // if anything was fetched, parse using JSON.parse() and assign to people
    if(data) {
      people = JSON.parse(data) || [];
    }

    // return all people
    return people
  }

  public getPerson(index: number): Person {
    // get all people and return the one at [index] position
    const people = this.getAll()
    console.log(people[0])
    return people[index]
  }
  
  public addPerson(person: Person): void {
    // get all people
    let people = this.getAll()
    // push person to the array of people
    people.push(person)
    // update localstorage with the array contents serialized using JSON.stringify()
    localStorage.setItem(this.KEY, JSON.stringify(people))
  }
  
  public deletePerson(index: number): void {
    // get all people
    let people = this.getAll()
    // use splice() to remove person at [index] position
    people.splice(index, 1)
    // update localstorage with the new values of people array
    localStorage.setItem(this.KEY, JSON.stringify(people))
  }
}
