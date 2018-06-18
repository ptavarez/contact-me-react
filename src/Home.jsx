import React from 'react';
import './Home.css'

class Home extends React.Component {
  constructor() {
      super();
      this.state = {contactList: []};
  }

  componentDidMount() {
    const accessToken = this.props.auth.getAccessToken();
    
    fetch("https://localhost:5001/api/contacts", {headers: new Headers({
        "Accept": "application/json",
        "Authorization": `Bearer ${accessToken}`
      })})
        .then(response => response.json())
        .then(contacts => this.setState({contactList: contacts}))
        .catch(error => console.log(error))
  }

  render() {
    let contactList = this.state.contactList.map((contact) =>
      <li><h3><i>{contact.first_name} {contact.last_name}</i></h3></li>);

    return <ul>
      {contactList}
    </ul>;
  }
}

export default Home;
