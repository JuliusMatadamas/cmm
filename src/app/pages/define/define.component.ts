import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-define',
    standalone: true,
    imports: [
        FaIconComponent
    ],
    templateUrl: './define.component.html',
    styleUrl: './define.component.css'
})
export class DefineComponent {
    logoPath: string = 'assets/images/logo-cmm.png';
    protected readonly faUser = faUser;
}
