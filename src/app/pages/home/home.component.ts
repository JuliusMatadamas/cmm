import { Component } from '@angular/core';
import {
    faArrowLeft,
    faArrowRightFromBracket,
    faBars,
    faClipboardList,
    faHouse,
    faRectangleXmark,
    faTablets,
    faUser,
    faUserDoctor,
    faUserInjured,
    faUsers,
    faUserTag, IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { NgClass, NgForOf, NgOptimizedImage } from "@angular/common";

interface Menu {
    id: number;
    title: string;
    icon: IconDefinition;
    visibleTo: number[]
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        FaIconComponent,
        NgClass,
        NgOptimizedImage,
        NgForOf
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    logoPathW: string = 'assets/images/logo-cmm-white.png';
    protected readonly faUser = faUser;
    protected readonly faUserTag = faUserTag;
    protected readonly faRectangleXmark = faRectangleXmark;
    protected readonly faHouse = faHouse;
    protected readonly faClipboardList = faClipboardList;
    protected readonly faUserDoctor = faUserDoctor;
    protected readonly faUserInjured = faUserInjured;
    protected readonly faTablets = faTablets;
    protected readonly faUsers = faUsers;
    protected readonly faArrowRightFromBracket = faArrowRightFromBracket;
    protected readonly faBars = faBars;
    open:boolean = true;
    Menus: Menu[];

    constructor() {
        this.Menus = [
            {
                id: 1,
                title: "Inicio",
                icon: faHouse,
                visibleTo: [1,2,3,4,5,6]
            },
            {
                id: 2,
                title: "Usuarios",
                icon: faUsers,
                visibleTo: [6]
            },
            {
                id: 3,
                title: "Tipos",
                icon: faUserTag,
                visibleTo: [6]
            },
            {
                id: 4,
                title: "Especialidades",
                icon: faTablets,
                visibleTo: [6]
            },
            {
                id: 5,
                title: "Pacientes",
                icon: faUserInjured,
                visibleTo: [1,2,4,5,6]
            },
            {
                id: 6,
                title: "Médicos",
                icon: faUserDoctor,
                visibleTo: [4,6]
            },
            {
                id: 7,
                title: "Citas",
                icon: faClipboardList,
                visibleTo: [1,2,3,4,5,6]
            },
        ];
    }

    toggleNavbar() {
        this.open = !this.open;
    }

    protected readonly faArrowLeft = faArrowLeft;
}
