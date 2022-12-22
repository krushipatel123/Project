import {
  Directive,
  EventEmitter,
  Input,
  HostListener,
  Output } from '@angular/core';

import { Subject, Observable } from 'rxjs';


@Directive({
  selector: '[appLongpress]'
})
export class LongpressDirective  {
  private touchTimeout: any;
  @Output() longpress = new EventEmitter();

  private rootPage: any;

  constructor() {}

  @HostListener('touchstart') touchstart():void {
    this.touchTimeout = setTimeout(() => {
        this.longpress.emit({});
    }, 400);
  }

  @HostListener('touchend') touchend():void {
      this.touchEnd();
  }
  @HostListener('touchcancel') touchcancel():void {
      this.touchEnd();
  }

  private touchEnd():void {
    clearTimeout(this.touchTimeout);
  }
}












