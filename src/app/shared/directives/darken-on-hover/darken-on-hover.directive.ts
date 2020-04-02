import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: "[apDarkenOnHover]"
})
export class DarkenOnHoverDirective {

    @Input() brightness: number = 80;

    constructor(
        private el: ElementRef,
        private render: Renderer2
    ) { }

    @HostListener("mouseover")
    darkenOn() {
        this.render.setStyle(this.el.nativeElement, "filter", `brightness(${this.brightness}%)`);
    }

    @HostListener("mouseleave")
    darkenOff() {
        this.render.setStyle(this.el.nativeElement, "filter", `brightness(100%)`);
    }
}