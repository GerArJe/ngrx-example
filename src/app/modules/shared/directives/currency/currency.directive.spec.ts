import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CurrencyDirective } from './currency.directive';

@Component({
  template: `
    <p appCurrency>-USD $21,611.68</p>
    <p appCurrency>USD $88,108.07</p>
  `,
})
class HostComponent {}

describe('CurrencyDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent, CurrencyDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two element with currency directive', () => {
    const elements = fixture.debugElement.queryAll(
      By.directive(CurrencyDirective)
    );
    expect(elements.length).toBe(2);
  });

  it('should set the correct color', () => {
    const elements = fixture.debugElement.queryAll(
      By.directive(CurrencyDirective)
    );
    elements.forEach((element) => {
      if ((element.nativeElement.textContent as string).includes('-')) {
        expect(element.nativeElement.style.color).toBe('red')
      } else {
        expect(element.nativeElement.style.color).toBe('green')
      }
    })
  });
});
