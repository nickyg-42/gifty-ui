import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: 'input[restrictEmail]'
})
export class EmailRestrictDirective {

    @Output() valueChange = new EventEmitter();

    constructor(private elementRef: ElementRef) {}

    @HostListener('input', ['$event']) onInputChange(event: any) {
        const initialValue = this.elementRef.nativeElement.value;
        const newValue = initialValue.replace(/[^a-zA-Z0-9@.]*/g, '');
        this.elementRef.nativeElement.value = newValue;
        this.valueChange.emit(newValue);
        if (initialValue !== this.elementRef.nativeElement.value) {
            event.stopPropagation();
        }
    }
}