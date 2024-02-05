import { Component } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        FontAwesomeModule,
        NgOptimizedImage,
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
    faUser = faUser;
    logoPath: string = 'assets/images/logo-cmm.png';
}
