import React, { PropTypes } from 'react';
import AddTodo from '../../core/component/TodoLayout/AddTodo'
import VisibleTodoList from '../../core/component/TodoLayout/todolist/TodoListContainer'
import FilterTodo from '../../core/component/TodoLayout/filter/Filter'
import Layout from '../../core/component/base/Layout';
import s from './styles.css';


class TodoPage extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <Layout className={s.content}>
        <br/>
        <AddTodo/>
        <VisibleTodoList/>
        <FilterTodo/>
      </Layout>
    );
  }

}

export default TodoPage;

// <ul>
//   {this.props.articles.map((article, i) =>
//     <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
//   )}
// </ul>
