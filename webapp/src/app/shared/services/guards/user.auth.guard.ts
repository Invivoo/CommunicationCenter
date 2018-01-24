import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FakeAuthService } from '../services/fake.auth.service';
import { Location } from "@angular/common";


@Injectable()
export class UserAuthGuard implements CanActivate {
 
    constructor(private router: Router , private auth : FakeAuthService , private location : Location ) { }
 
    canActivate() {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        this.location.go(this.auth.redirectAfterSuccess);
        location.reload();
        return false;
    }
}