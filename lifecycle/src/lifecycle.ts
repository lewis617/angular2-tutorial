import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';


@Component({
    selector: "lifecycle",
    template: `
    <div>
    <span>{{name}}</span>
     <button (click)="doSomething()">click and watch the lifecycle</button>
     </div>
    `
})
export class Lifecycle {
    name:string='lifecycle'
    doSomething(){
        console.log('***********doSomething**********');
        setTimeout(()=>{
            this.name='susan'
        },1000)
    }
    ngOnInit(){console.log('onInit');}
    ngOnDestroy(){console.log('OnDestroy')}
    ngOnChanges(){console.log('ngOnChanges')}
    ngDoCheck(){console.log('DoCheck')}
    ngAfterContentInit(){console.log('AfterContentInit')}
    ngAfterContentChecked(){console.log('AfterContentChecked')}
    ngAfterViewInit(){console.log('AfterViewInit')}
    ngAfterViewChecked(){console.log('AfterViewChecked')}
}


                