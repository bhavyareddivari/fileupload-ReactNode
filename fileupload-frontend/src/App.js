import React from 'react'
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() 
    const files = this.filesInput.files;
   const url = '/profile/upload';
    //console.log('files', files);
   let formData = new FormData();
    for (var key in files) {
    // check if this is a file:
    if (files.hasOwnProperty(key) && files[key] instanceof File) {
        formData.append("resume", files[key]);
    }
   }  
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    axios.post(url, formData, config)
      .then(res => console.log(res));
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" ref={(input) => { this.filesInput = input; }} name="file"/>
        <button type="submit">Upload</button>
      </form>
   )
  }
}



export default App;