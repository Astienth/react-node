import { Multiply } from './Utils';

describe('Home multiply function', () => {
    it('should multiply by 2', () => {
      expect(Multiply(3)).toEqual(6);
    });
});
