import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { defer, of } from 'rxjs';
import { By } from '@angular/platform-browser';

import { AccountMovementsComponent } from './account-movements.component';
import { generateManyAccountMovements } from '../../../models/account-movemnt.mock';
import { AccountMovementsService } from '../../../services/account-movements.service';

const accountMovementsMock = generateManyAccountMovements(10);

describe('AccountMovementsComponent', () => {
  let component: AccountMovementsComponent;
  let fixture: ComponentFixture<AccountMovementsComponent>;
  let accountMovementsService: jasmine.SpyObj<AccountMovementsService>;

  beforeEach(async () => {
    const accountMovementsServiceSpy: jasmine.SpyObj<AccountMovementsService> =
      jasmine.createSpyObj('AccountMovementsService', ['getAccountMovements']);
    await TestBed.configureTestingModule({
      declarations: [AccountMovementsComponent],
      providers: [
        {
          provide: AccountMovementsService,
          useValue: accountMovementsServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountMovementsComponent);
    component = fixture.componentInstance;
    accountMovementsService = TestBed.inject(
      AccountMovementsService
    ) as jasmine.SpyObj<AccountMovementsService>;
    accountMovementsService.getAccountMovements.and.returnValue(
      of(accountMovementsMock)
    );
    component.actualPage = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return account movement list from service', () => {
    const rowsDebug = fixture.debugElement.queryAll(By.css('tbody > tr'));

    expect(component.accountMovements.length).toEqual(
      accountMovementsMock.length
    );
    expect(component.pagination.length).toBe(
      component.totalRegisters / component.perPage
    );
    expect(rowsDebug.length).toBe(component.accountMovements.length);
  });

  describe('tests for paginationNavigate', () => {
    it('should navigate to previous page', fakeAsync(() => {
      accountMovementsService.getAccountMovements.and.returnValue(
        defer(() => Promise.resolve(accountMovementsMock))
      );
      const pageMock = 2;
      component.actualPage = pageMock;
      const navigationDebug = fixture.debugElement.query(By.css('.page-item'));

      navigationDebug.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.loading).toBeTrue();

      tick();
      fixture.detectChanges();

      expect(component.loading).toBeFalse();
      expect(component.actualPage).toBe(pageMock - 1);
    }));

    it('should navigate to next page', fakeAsync(() => {
      accountMovementsService.getAccountMovements.and.returnValue(
        defer(() => Promise.resolve(accountMovementsMock))
      );
      const pageMock = 1;
      component.actualPage = pageMock;
      const navigationDebug = fixture.debugElement
        .queryAll(By.css('.page-item'))
        .reverse()[0];

      navigationDebug.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.loading).toBeTrue();

      tick();
      fixture.detectChanges();

      expect(component.loading).toBeFalse();
      expect(component.actualPage).toBe(pageMock + 1);
    }));

    it('should navigate to specific page', fakeAsync(() => {
      accountMovementsService.getAccountMovements.and.returnValue(
        defer(() => Promise.resolve(accountMovementsMock))
      );
      const pageMock = 3;
      const navigationDebug = fixture.debugElement
        .queryAll(By.css('.page-item'))
        .reverse()[ pageMock ];

      navigationDebug.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.loading).toBeTrue();

      tick();
      fixture.detectChanges();

      expect(component.loading).toBeFalse();
      expect(component.actualPage).toBe(pageMock);
    }));
  });
});
