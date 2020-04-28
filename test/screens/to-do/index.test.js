import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

import TodoContainer from '../../../src/screens/to-do';
import * as Selectors from '../../../src/screens/to-do/selectors';

describe('TodoContainer', () => {
  let context, selectors, state;

  beforeEach(() => {
    (state = {}),
      (context = {
        store: createMockStore(state)
      });
    selectors = buildSelectorsSpies();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should have todos property', () => {
    const wrapper = shallow(<TodoContainer {...context} />).dive();

    expect(selectors.getTodos).toHaveBeenCalledTimes(1);
    expect(selectors.getTodos).toHaveBeenCalledWith(state);
    expect(wrapper.prop('todos')).toEqual(['first', 'second']);
  });

  it('Should have addTodo action', () => {
    const wrapper = shallow(<TodoContainer {...context} />).dive();
    expect(wrapper.prop('actions').addTodo).toEqual(expect.any(Function));
  });

  buildSelectorsSpies = () => ({
    getTodos: jest.spyOn(Selectors, 'getTodos').mockImplementation(() => ['first', 'second'])
  });
});
