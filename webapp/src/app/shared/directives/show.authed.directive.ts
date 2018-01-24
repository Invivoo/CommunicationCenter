import {
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef
  } from '@angular/core';
  
  import { FakeAuthService  } from '../services/services/fake.auth.service';
  
  @Directive({ selector: '[showAuthed]' })
  export class ShowAuthedDirective implements OnInit {
    constructor(
      private templateRef: TemplateRef<any>,
      private userService: FakeAuthService,
      private viewContainer: ViewContainerRef
    ) {}
  
    condition: boolean;
  
    ngOnInit() {
      this.userService.isLoggedIn().subscribe(
        (isAuthenticated) => {
          if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        }
      );
    }
  
    @Input() set showAuthed(condition: boolean) {
      this.condition = condition;
    }
  
  }