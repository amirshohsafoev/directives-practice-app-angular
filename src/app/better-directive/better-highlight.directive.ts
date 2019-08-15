import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @Input() defaultColor = "transparent";
  @Input("appBetterHighlight") highlightColor = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
  }
  @HostListener("mouseenter")
  mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue",
    //   false,
    //   false
    // );
    this.backgroundColor = this.highlightColor;
  }
  @HostListener("mouseleave")
  mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent",
    //   false,
    //   false
    // );
    this.backgroundColor = this.defaultColor;
  }
}
