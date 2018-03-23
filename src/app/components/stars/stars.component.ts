import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'stars',
  templateUrl: 'stars.component.html'
})

export class Stars {
  @Input()
  rate: number;

  constructor(
    // public verbsService: VerbsService
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes', changes);
  }
}
