import counterReducer, { increment, decrement, reset } from '../../src/redux/counterSlice';

describe('counterSlice', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual({ value: 0 });
  });

  it('should handle increment', () => {
    const initialState = { value: 0 };
    expect(counterReducer(initialState, increment())).toEqual({ value: 1 });
  });

  it('should handle decrement', () => {
    const initialState = { value: 1 };
    expect(counterReducer(initialState, decrement())).toEqual({ value: 0 });
  });

  it('should handle reset', () => {
    const initialState = { value: 5 };
    expect(counterReducer(initialState, reset())).toEqual({ value: 0 });
  });
});