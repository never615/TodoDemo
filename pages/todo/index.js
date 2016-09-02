import React, { PropTypes } from 'react';
import AddTodo from '../../core/components/TodoLayout/containers/AddTodo'
import VisibleTodoList from '../../core/components/TodoLayout/containers/VisibleTodoList'
import FilterTodo from '../../core/components/TodoLayout/present/FilterTodo'
import Layout from '../../core/components/base/Layout';
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
