import { Component } from '@angular/core';
import { FaIconComponent} from "@fortawesome/angular-fontawesome";
import { faArrowLeftLong, faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-restore',
    standalone: true,
    imports: [
        FaIconComponent
    ],
    templateUrl: './restore.component.html',
    styleUrl: './restore.component.css'
})
export class RestoreComponent {
    logoPath: string = 'assets/images/logo-cmm.png';
    protected readonly faUser = faUser;
    protected readonly faArrowLeftLong = faArrowLeftLong;
}
