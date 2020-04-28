import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class TodoScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ''
    };
  }

  handleChangeText = text => this.setState({ taskName: text });

  render() {
    return (
      <View style={styles.container}>
        <Text>To-Do List</Text>
        <View id='todos-container'>
          {this.props.todos.map(todo => (
            <Text>{todo}</Text>
          ))}
        </View>
        <TextInput
          placeholder='Write task'
          value={this.state.taskName}
          onChangeText={this.handleChangeText}
        />
        <Button title='Add' onPress={() => this.props.actions.addTodo(this.state.taskName)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
