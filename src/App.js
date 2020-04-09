import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Container, Row, Col} from 'reactstrap';
import { images } from './images';
import {Gallery, GalleryImage} from 'react-gesture-gallery';
import NavBar from './Components/NavBar'
import CardMVO from './Components/CardMVO'
import InfoUEB from './Components/InfoUEB'
import JuntaDirectiva from './Components/JuntaDirectiva'


function BannerPrincipal(){
  const [index, setIndex] = React.useState(0)
    return(
      <Gallery
          index={index}
          onRequestChange={i=>{
              setIndex(i);
          }}
      >
          {images.map(image => (
              <GalleryImage objectFit="contain" src={image}/>
          ))}
      </Gallery>
      
    );

}

function GaleriaRama(){
  const [index, setIndex] = React.useState(0)
    return(
      <Gallery
          index={index}
          onRequestChange={i=>{
              setIndex(i);
          }}
      >
          {images.map(image => (
              <GalleryImage objectFit="contain" src={image}/>
          ))}
      </Gallery>
      
    );

}
class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      misvisobj: [
        {
          title: "Misión",
          subtitle: "IEEE",
          description: "La Misión de la rama IEEE en la universidad el bosque es..."
        },
        {
          title: "Visión",
          subtitle: "IEEE",
          description: "La visión de la rama IEEE en la universidad el bosque es..."
        },
        {
          title: "Objetivos",
          subtitle: "IEEE",
          description: "Los objetivos de la rama IEEE en la universidad el bosque son..."
        }
      ]
    }
  }

  render(){
    let cardMVO = this.state.misvisobj.map(mvos=>{
      return(
        <Col sm="4">
          <CardMVO mvos={mvos}></CardMVO>
        </Col>
      )
    })
    return (
      <div>
      <NavBar/>
      <BannerPrincipal></BannerPrincipal>
      <br></br>
      <Container fluid>
        <Row>
          {cardMVO}
        </Row>
      </Container>
      <br></br>
      <div align="center"><InfoUEB></InfoUEB></div>
      <div align="center"><h1 >Galería Rama IEEE</h1>
        <GaleriaRama></GaleriaRama>
      </div>
      <JuntaDirectiva></JuntaDirectiva>
      
        </div>
      );
    }
}
export default App;