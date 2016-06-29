import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'objects2arrays'})
export class Objects2ArraysPipe implements PipeTransform {
    transform(value, args:string[]) : any {
        let keys = [];
        for (let key in value) {
            keys.push(value[key]);
        }
        return keys;
    }
}
