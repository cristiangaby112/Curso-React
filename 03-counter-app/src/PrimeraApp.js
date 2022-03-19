import React from 'react';
import PropTypes from 'prop-types';
//FC
const PrimetaApp = ({ saludo, subtitulo}) => {

  // if( !saludo ){
  //   throw new Error('El saludo es necesario')
  // }
  // const saludo = 'Hola Mundo';
  // console.log(props)

  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>{subtitulo}</p>
    </>
  )
}

PrimetaApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimetaApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}

export default PrimetaApp;