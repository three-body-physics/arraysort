import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraySortService {

  private integerArray: number[] = [];
  

  constructor() { }

// Logic:

// 1) First the Array is sorted so that repeating Integers are next to each other
// 2) For loop to check if each number in an iteration is part of a repeating chain
// 3) In order to be the matching integer, it must satisfy three conditions:
//		First, the Integer at current [i] must be the same as the integer at the end of the chain length determined by how many times the number repeats [i + count -1]
//		Secondly, the integer at end of the chain [i + count] must not be the same as the next integer, this is to make sure the Integer repeats only exact number specified
//      Thirdly, current integer at [i] must not be the same as the previous one, again to make sure it only repeats exact number of times specified 
// 4) For Loop goes up the Array until above conditions are met, then quits the loop. 
// The method is capable of finding multiple duplicates that repeats exactly <insert> number of times.

  

  findDuplicate(count: number, intArray: number[], callback): number[] {

  	let sortedArray = intArray.sort( (a, b) => { return a - b; } );
  	let matched  = false;
  	let matchedIntegers: number[] = [];

  	for (let i = 0; i < sortedArray.length; i++) {

  		if((sortedArray[i] === sortedArray[i + count - 1])  && (sortedArray[i + count] !== sortedArray[i + count -1]) && (sortedArray[i-1] !== sortedArray[i])) {

  			matched = true;
  			matchedIntegers.push(sortedArray[i]);
  			// return matchedIntegers;                  //Use if only one integer repeats so that loop terminates early
  			

  		} else if (i == sortedArray.length - 1 && matched === false) {

  			return callback();

  		}
  	}

  	return matchedIntegers;

  }




}
