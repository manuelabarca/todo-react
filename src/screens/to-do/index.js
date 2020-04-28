import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoScreen from './to-do';
import { getTodos } from './selectors';
import { addTodo } from './actions';

const mapStateToProps = state => ({
  todos: getTodos(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addTodo }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);
