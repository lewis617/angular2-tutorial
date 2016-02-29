import {Component,Input} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {OnChanges, SimpleChange,OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from 'angular2/core';

@Component({
    selector: "lifecycle",
    template: `
    <div>
    <span>{{name}}</span>
     <button (click)="doSomething()">click and watch the lifecycle</button>
     </div>
    `
})
export class Lifecycle
implements OnChanges, OnInit,AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy{
    @Input()
    name:string
    doSomething(){
        console.log('***********doSomething**********');
        setTimeout(()=>{
             console.log('***********setTimeout**********');
            this.name='susan'
        },1000)
    }
    ngOnInit(){console.log('onInit');}
    ngOnDestroy(){console.log('OnDestroy')}
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}){console.log('ngOnChanges',changes)}
    ngAfterContentInit(){console.log('AfterContentInit')}
    ngAfterContentChecked(){console.log('AfterContentChecked')}
    ngAfterViewInit(){console.log('AfterViewInit')}
    ngAfterViewChecked(){console.log('AfterViewChecked')}
}


                