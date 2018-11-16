import { Component, OnInit } from '@angular/core';
import { ArraySortService } from './../services/array-sort.service';
import { intArray } from './../data/integers';

@Component({
  selector: 'app-array-input',
  templateUrl: './array-input.component.html',
  styleUrls: ['./array-input.component.css']
})
export class ArrayInputComponent implements OnInit {

  integerArray: number[] = intArray;
  count: number;
  result;


  constructor(private ArraySortService: ArraySortService) { }

  ngOnInit() {
  	
  }


  getDuplicates() {  	


  	this.result = this.ArraySortService.findDuplicate(this.count, this.integerArray, () =>

  	  this.result = "No duplicates found"

  	);
  }

 


}
