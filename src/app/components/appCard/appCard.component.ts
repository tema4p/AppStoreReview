import {Component, Input, SimpleChanges} from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-card',
  templateUrl: 'appCard.component.html'
})

export class AppCard {
  @Input()
  item: any;

  constructor(
    // public verbsService: VerbsService
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes', changes);
  }

  public getDateFormatted(text: string): string {
    return moment(text).format('L');
  }
}
