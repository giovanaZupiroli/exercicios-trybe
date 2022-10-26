import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { writeAbout, handleChange } = this.props;
    const LIMIT_CARACTERES = 50;
    return (
      <label>
      Write about Sakura:
      <textarea name="writeAbout" value={writeAbout} onChange={handleChange} />
      { !writeAbout ? 'Fale alguma coisa!' : ''}
      { writeAbout.length > LIMIT_CARACTERES  
        ? 'Mas não precisa falar tanto' : ''}
    </label>
    )
  }
}

TextArea.propTypes = {
  writeAbout: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextArea;