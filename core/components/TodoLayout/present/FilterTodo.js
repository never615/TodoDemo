/**
 * Created by never615 on 8/31/16.
 */
import React from 'react';
import FilterLink from '../containers/FilterLink';

function FilterTodo() {
  return (
    <p>
      Show:
      {" "}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </p>
  );
}

export default FilterTodo;
