import { sum, sumOf } from './sum';

describe('모든 수를 더하기', () => {
  // test는 테스트 케이스를 만드는 함수이다.
  it('1 과 2를 더하면 3이다.', () => {
    expect(sum(1, 2)).toBe(3); // toBe는 matchers라고 부르는 함수인데 특정 값이 어떤 조건을 만족하는지, 또는 어떤 함수가 실행이 됐는지, 에러가 났는지
    // 알 수 있게 해준다.
  });

  it('calculates all numbers', () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});
