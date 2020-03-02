import React, { Component } from 'react';

export class Blog extends Component {
  static displayName = Blog.name;

  constructor(props) {
    super(props);
    this.state = { blogs: [], loading: true };
  }

  componentDidMount() {
    this.populateBlogData();
  }

  static renderBlogsTable(blogs) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
              <th>ID</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog =>
            <tr key={blog.blogId}>
                <td>{blog.blogId}</td>
              <td>{blog.url}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Blog.renderBlogsTable(this.state.blogs);

    return (
      <div>
        <h1 id="tabelLabel" >Blogs</h1>
        {contents}
      </div>
    );
  }

  async populateBlogData() {
    const response = await fetch('api/Blog');
    const data = await response.json();
    this.setState({ blogs: data, loading: false });
  }
}
