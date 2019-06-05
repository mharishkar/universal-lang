import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { constanst } from 'src/assets/constant';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('title defaults to: universal-lang', () => {
    expect(component.title).toEqual('universal-lang');
  });
  it('languageOption defaults to: constanst.languageOptions', () => {
    expect(component.languageOption).toEqual(constanst.languageOptions);
  });
  it('language defaults to: constanst.english', () => {
    expect(component.language).toEqual(constanst.english);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'checkBrowserLanguage').and.callThrough();
      component.ngOnInit();
      expect(component.checkBrowserLanguage).toHaveBeenCalled();
    });
  });
  describe('checkBrowserLanguage', () => {
    it('makes expected calls', () => {
      spyOn(component, 'changeLanguage').and.callThrough();
      component.checkBrowserLanguage();
      expect(component.changeLanguage).toHaveBeenCalled();
    });
  });
  describe('getLanguage', () => {
    const event = {
      srcElement : {
        value : 'en-US'
      }
    }
    it('makes expected calls', () => {
      spyOn(component, 'changeLanguage').and.callThrough();
      component.getLanguage(event);
      expect(component.changeLanguage).toHaveBeenCalled();
    });
  });
});
