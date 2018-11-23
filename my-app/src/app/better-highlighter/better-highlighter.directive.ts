import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class AppBetterHighlight implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.cursor') cursor: string = 'pointer';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;

    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow', false, false);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent', false, false);
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('click') click(eventData: Event) {
    console.log('clicked ', eventData);
  }
}
