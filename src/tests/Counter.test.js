import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import Counter from '../src/components/Counter';

describe('Counter Component', () => {
  test('renders Counter component', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(screen.getByText(/Counter:/)).toBeInTheDocument();
  });

  test('increments the counter', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Increment/));
    expect(screen.getByText(/Counter: 1/)).toBeInTheDocument();
  });

  test('decrements the counter', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Increment/)); // Counter: 1
    fireEvent.click(screen.getByText(/Decrement/)); // Counter: 0
    expect(screen.getByText(/Counter: 0/)).toBeInTheDocument();
  });

  test('resets the counter', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Increment/)); // Counter: 1
    fireEvent.click(screen.getByText(/Reset/)); // Counter: 0
    expect(screen.getByText(/Counter: 0/)).toBeInTheDocument();
  });
});
