import React, { Component } from 'react';


class App extends Component {
  state = { stories: [] }

  componentDidMount() {
    fetch('http://localhost:3000/topstories')
      .then(response => response.json())
      .then(json => this.setState({ stories: json}))
      .catch(error => alert(error.message))
  }
  render () {
    return (
        <div className="wrapper">
          <h2>The latest hacker news</h2>
          {
            this.state.stories.map(story => {
              const { by, id, score, time, title, url } = story;
              return (
                <div key={id}>
                  <h4><a href={url}>{title}</a></h4>
                  <p>Upvotes: {score}</p>
                  <p>{by} - {new Date(time).toLocaleTimeString()}</p>
                </div>
              )
            })
          }
        </div>
        
    )
  }
}


export default App;