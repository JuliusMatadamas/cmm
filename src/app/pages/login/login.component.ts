import { Component } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        FontAwesomeModule,
        NgOptimizedImage,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    faUser = faUser;
    logoPath: string = 'assets/images/logo-cmm.png';
}
