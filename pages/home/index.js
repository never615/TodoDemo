/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../core/component/app/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <h4>TodoDemo</h4>

        <p>
          <br /><br />
          <br /><br />
          <br /><br />
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default HomePage;

// <ul>
//   {this.props.articles.map((article, i) =>
//     <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
//   )}
// </ul>
