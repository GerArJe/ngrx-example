import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective implements AfterViewInit {
  constructor(private element: ElementRef) {
  }

  ngAfterViewInit(): void {
    if ((this.element.nativeElement.textContent as string).includes('-')) {
      this.element.nativeElement.style.color = 'red'
    } else {
      this.element.nativeElement.style.color = 'green'
    }
  }

}
