import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FakeAuthService } from '../services/fake.auth.service';
import { Location } from "@angular/common";

@Injectable()
export class UserWelcomeAuthGuard implements CanActivate {

    constructor(private router: Router , private auth : FakeAuthService , private location : Location ) { }

    canActivate() {
        
        var isAuthed : boolean ;
        this.auth.isLoggedIn().subscribe(val => isAuthed = val);
        
        if (!isAuthed) {
            return true;
        }
        this.router.navigate([this.auth.redirectToProfile]);
        return false;
    }

}