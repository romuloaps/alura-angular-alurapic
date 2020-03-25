import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosBootstrapRenderComponent } from './photos-bootstrap-render.component';

describe('PhotosBootstrapRenderComponent', () => {
  let component: PhotosBootstrapRenderComponent;
  let fixture: ComponentFixture<PhotosBootstrapRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosBootstrapRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosBootstrapRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
