import { getTodos } from '../../../src/screens/to-do/selectors';

describe('TodoSelectors', () => {
  let state;

  beforeEach(() => {
    state = {
      todos: ['first', 'second', 'third']
    };
  });

  it('Should return todos', () => {
    expect(getTodos(state)).toEqual(['first', 'second', 'third']);
  });
});
