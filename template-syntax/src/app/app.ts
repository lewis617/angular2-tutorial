import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: require('./app.html')
})
export class App {
    firstName: string = 'lewis';
    doSomething($event){
        console.log('点击了这个按钮：',$event.target);
    }
    callPhone(val){
        console.log('局部变量phone的值：',val);
    }
    callFax(val){
        console.log('局部变量fax的值：',val);
    }
    isActive:boolean=true;
}