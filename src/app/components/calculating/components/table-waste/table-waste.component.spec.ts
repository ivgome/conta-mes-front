import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWasteComponent } from './table-waste.component';

describe('TableWasteComponent', () => {
  let component: TableWasteComponent;
  let fixture: ComponentFixture<TableWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
