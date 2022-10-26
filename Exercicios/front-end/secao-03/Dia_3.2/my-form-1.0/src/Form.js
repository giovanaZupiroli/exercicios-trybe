import React, { Component } from 'react';

import TextArea from './textArea';

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      writeAbout: '',
      colors: '',
      myName: '', 
      age: 0, 
      confirmCheckbox: false,
      formularioComErros: true,
    };
  }

  handleError() {
    const { writeAbout } = this.state;

    const errorCases = [
      !writeAbout.length
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    })
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.handleError);
  }

  render() {
    const { writeAbout, formularioComErros } = this.state;
    return (
      <div>
        <h1>Para fixar</h1>
        <form className="form">
          <label>
            Choose a color:
            <select name="colors" value={this.state.colors} onChange={this.handleChange}>
              <option value="pastelPink">Pastel Pink</option>
              <option value="sageGreen">Sage Green</option>
              <option value="deepRed">Deep Red</option>
            </select>
          </label>
          <br/>
          <label>
            What's your name? 
            <input type="text" name="myName" value={this.state.myName} onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            How old are you?
            <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
          </label>
          <br/>
          <fieldset>
            <TextArea writeAbout={ writeAbout } handleChange={this.handleChange}/>
            <br/>
            <label>
              She's badass? Absolutely!!!!! Without a doubt!
              <input type="checkbox" name="confirmCheckbox" value={this.state.confirmCheckbox} onChange={this.handleChange} />
            </label>
            <br/>
            <label>
              Shannaroo! 
              <input type="file" name="file" />
            </label>
          </fieldset>
        </form>
        { formularioComErros
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    );
  }
}

export default Form;