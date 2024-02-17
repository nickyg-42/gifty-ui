import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
    selector: 'input[restrictLetters]'
})
export class LetterRestrictDirective {

    @Output() valueChange = new EventEmitter()

    constructor(private elementRef: ElementRef) {
    }

    @HostListener('input', ['$event']) onInputChange(event: any) {
        const initialValue = this.elementRef.nativeElement.value;
        const newValue = initialValue.replace(/[^a-zA-Z]*/g, '');
        this.elementRef.nativeElement.value = newValue;
        this.valueChange.emit(newValue);
        if (initialValue !== this.elementRef.nativeElement.value) {
            event.stopPropagation();
        }
    }
}