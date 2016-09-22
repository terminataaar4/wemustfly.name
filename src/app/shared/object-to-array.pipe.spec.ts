import { TestBed, inject } from '@angular/core/testing';
import { ObjectToArrayPipe } from './object-to-array.pipe';

describe('ObjectToArrayPipe', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers:	[
                ObjectToArrayPipe
            ]
        });
    });

    it('should transform the input', inject([ObjectToArrayPipe], (pipe: ObjectToArrayPipe) => {
        let r = pipe.transform({a: 'a', b: 'b', c: 'c'});
        expect(Array.isArray(r)).toBe(true);
        expect(r.join('')).toBe('abc');
    }));
});
