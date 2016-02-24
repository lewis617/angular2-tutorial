declare var fetch;
import {Pipe, PipeTransform} from 'angular2/core';
@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe  implements PipeTransform {
  private fetchedValue: any;
  private fetchPromise: Promise<any>;
  transform(value: string, args: string[]): any {
    if (!this.fetchPromise) {
      this.fetchPromise = fetch(value)
        .then((result: any) => result.json())
        .then((json: any)   => this.fetchedValue = json);
    }
    return this.fetchedValue;
  }
}
