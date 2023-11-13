import { renderHook } from '@testing-library/react';

import { useId } from './useId';

describe('useId test cases', () => {
  it('Returns a string of random chars and numbers (max len 13)', () => {
    const { result } = renderHook(useId);
    expect(result.current).toMatch(/(\w|\d){13}/);
  });
  it('Generates unique string per each render', () => {
    const { result: res1 } = renderHook(useId);
    const { result: res2 } = renderHook(useId);

    expect(res1.current).not.toBe(res2.current);
  });
});
