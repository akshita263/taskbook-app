import {connect} from 'react-redux';
import ListItem from '../components/ListItem'; 
import { toggletodo } from '../actions/index'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggletodo(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ListItem)