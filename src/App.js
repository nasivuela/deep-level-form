import React, { Component } from 'react';
import Experiences from './components/Experiences';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        "experience": [
          {
            "name": "Burbujas SL",
            "roles": [
              {
                "role": "Product manager",
                "from": "2017",
                "until": "2018",
                "challenges": [
                  {
                    "summary": "Reventar burbujas",
                    "actions": [
                      {
                        "summary": "Apretar las burbujas",
                        "tools": "Herramientas muy sofisticadas"
                      }
                    ]
                  }
                ]
              }
            ],
            "references": [
              {
                "name": "",
                "role": "",
                "contact": ""
              }
            ]
          }
        ],
      }
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(name, value) {
    /**
     * Name has the key that we want to update 
     * on first level of formData
     * (currently only experiences)
     */
    this.setState(prevState => {
      return {
        formData: {
          ...prevState.formData,
          [name]: value
        }
      }
    });
  }

  render() {
    const {
      formData,
    } = this.state;
    const { experience } = formData;
    return (
      <div className="App">
        <Experiences
          onUpdate={this.handleUpdate}
          collection={experience}
          name="experience"
        />
      </div>
    );
  }
}

export default App;
