import { Component, Input, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  @Input() max =10;

  myNumber!: number

  constructor(private randomService: RandomService) {}

  ngOnInit(): void {
    this.myNumber = this.randomService.randomNumber(this.max);
  }

  btnClick(): void {
    this.myNumber = this.randomService.randomNumber(this.max);
  }

  isSmallerThanHalf(): boolean {
    return this.myNumber <= this.max / 2;
  }
}
