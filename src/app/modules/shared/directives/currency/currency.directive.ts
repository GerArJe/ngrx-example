import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appCurrency]',
})
export class CurrencyDirective implements AfterViewInit {
  private element = inject(ElementRef);

  ngAfterViewInit(): void {
    if ((this.element.nativeElement.textContent as string).includes('-')) {
      this.element.nativeElement.style.color = 'red';
    } else {
      this.element.nativeElement.style.color = 'green';
    }
  }
}
