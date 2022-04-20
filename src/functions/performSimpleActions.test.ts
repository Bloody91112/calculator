import { performSimpleActions } from './performSimpleActions';

test('should return 0', () => {
    expect(performSimpleActions(['1', '2' ,'3', '*' ,'0'])).toStrictEqual([0])
})

test('should return 10', () => {
    expect(performSimpleActions(['1' ,'3', '-' ,'3'])).toStrictEqual([10])
})

test('should return 100', () => {
    expect(performSimpleActions(['10' ,'*', '10'])).toStrictEqual([100])
})
