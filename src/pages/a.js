import React, { Component } from 'react';

class a extends Component {
  constructor(){
    super()
    this.callJquery = this.callJquery.bind(this);
  }

  callJquery(){
    window.$("#sample").click(function(){
      alert("Text: Button Clicked");
    });
  }

  render() {
    return (
      <div className="App">
        <div id="sample" onClick={this.callJquery}> Hellow </div>
      </div>
    );
  }
}

export default a;