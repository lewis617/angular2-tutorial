import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
    <div>
    <h2>属性绑定</h2>
    <input [value]="firstName" [placeholder]="firstNamePlaceholder" />
    <input value="{{firstName}}" placeholder="{{firstNamePlaceholder}}" />
    <hr>
    <h2>事件</h2>
    <button (click)="doSomething($event)" >点击</button>
    <hr>
    <h2>双向数据绑定</h2>
    <input type="text" [value]="firstName" (input)="firstName=$event.target.value" />
    <input type="text" [(ngModel)]="firstName" />
    <hr>
    <h2>#局部变量</h2>
    <input #phone placeholder="phone number">
    <button (click)="callPhone(phone.value)">Call</button>

    <input var-fax placeholder="fax number">
    <button (click)="callFax(fax.value)">Fax</button>
    <hr>
    <h2>*语法</h2>
    <p *ngIf="isActive">我是段落</p>
    <template [ngIf]="isActive"><p>我是段落</p></template>

</div>`
})
export class App {
    firstName:string = 'lewis';

    doSomething($event) {
        console.log('点击了这个按钮：', $event.target);
    }

    callPhone(val) {
        console.log('局部变量phone的值：', val);
    }

    callFax(val) {
        console.log('局部变量fax的值：', val);
    }

    isActive:boolean = true;
}