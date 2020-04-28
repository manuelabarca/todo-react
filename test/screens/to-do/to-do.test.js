import React from 'react';
import { shallow } from 'enzyme';
import { View, Text, TextInput, Button } from 'react-native';

import TodoScreen from '../../../src/screens/to-do/to-do';

describe('TodoScreen', () => {
  let props = {};

  beforeEach(() => {
    props = {
      todos: [],
      actions: {
        addTodo: jest.fn()
      }
    };
    jest.clearAllMocks();
  });

  it('Should render', () => {
    const wrapper = shallow(<TodoScreen {...props} />);
    const container = wrapper.find(View);

    const title = container.find(Text);
    const input = container.find(TextInput);
    const button = container.find(Button);

    expect(title).toHaveLength(1);
    expect(title.childAt(0).text()).toEqual('To-Do List');
    expect(input).toHaveLength(1);
    expect(input.prop('placeholder')).toEqual('Write task');
    expect(button).toHaveLength(1);
    expect(button.prop('title')).toEqual('Add');
  });

  it('Should render to-do list', () => {
    const customProps = {
      ...props,
      todos: ['First thing to do', 'Second thing to do']
    };
    const wrapper = shallow(<TodoScreen {...customProps} />);
    const todosContainer = wrapper.find('#todos-container');
    const todos = todosContainer.find(Text);

    expect(todos).toHaveLength(2);
    expect(
      todos
        .at(0)
        .childAt(0)
        .text()
    ).toEqual('First thing to do');
    expect(
      todos
        .at(1)
        .childAt(0)
        .text()
    ).toEqual('Second thing to do');
  });

  it('Should render empty to-do list when props.todos is undefined', () => {
    delete props.todos;
    const wrapper = shallow(<TodoScreen {...props} />);
    const todosContainer = wrapper.find('#todos-container');
    const todos = todosContainer.find(Text);

    expect(todos).toHaveLength(0);
  });

  it('Should call action addTodo when add button is pressed', () => {
    //GIVEN
    const customProps = {
      ...props,
      todos: []
    };
    const wrapper = shallow(<TodoScreen {...customProps} />);
    const button = wrapper.find(Button);
    //WHEN
    button.simulate('press');
    //THEN
    expect(props.actions.addTodo).toHaveBeenCalledTimes(1);
  });

  it.only('Should call action addTodo with "new todo" when the user type "new todo" on text input and press add button', () => {
    //GIVEN
    const customProps = {
      ...props,
      todos: []
    };
    const wrapper = shallow(<TodoScreen {...customProps} />);
    const textInput = wrapper.find(TextInput);
    const button = wrapper.find(Button);
    //WHEN
    textInput.prop('onChangeText')('new todo');
    button.simulate('press');
    //THEN
    expect(wrapper.find(TextInput).prop('value')).toEqual('new todo');
    expect(props.actions.addTodo).toHaveBeenCalledTimes(1);
    expect(props.actions.addTodo).toHaveBeenCalledWith('new todo');
  });
});
