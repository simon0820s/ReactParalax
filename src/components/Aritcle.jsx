import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding: 100px;
  background-color: #1c0522;

  &::before{
    content:'';
    position:absolute;
    bottom:0;
    width:100%;
    height: 100%;
    background:linear-gradient(to top,#1c0522,transparent);
  }
`;
const Title = styled.h2`
  font-size: 3.5em;
  margin-bottom: 10px;
  color: snow;
  font-weight: bold;
  text-align:center;
`;
const Text = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
  color: snow;
  font-weight: bold;
  text-align:center;
`;
const Aritcle = () => {
  return (
    <Container id="sec">
      <Title>Paralax Scrolling Effects</Title>
      <Text>
        El efecto de paralaje es una técnica de diseño visual que crea una
        ilusión de profundidad y movimiento en una composición, generalmente
        utilizada en diseño web y gráfico. Su objetivo principal es ofrecer una
        experiencia visual más inmersiva y atractiva para los usuarios.<br></br><br></br> La
        técnica se basa en la idea de que los objetos cercanos parecen moverse
        más rápido que los objetos lejanos cuando se observan desde un punto de
        vista en movimiento. <br></br><br></br> Este fenómeno se aplica al diseño al desplazar
        diferentes elementos a diferentes velocidades, lo que crea una sensación
        de profundidad y dinamismo en la composición. Existen diferentes
        enfoques y variaciones para lograr el efecto de paralaje en el diseño
        web. Aquí te presento algunos de los más comunes: Desplazamiento de
        capas: Este es el enfoque más utilizado. <br></br><br></br>Consiste en dividir la
        composición en diferentes capas o secciones que se mueven a diferentes
        velocidades al hacer scroll en la página. Las capas cercanas al usuario
        se mueven más rápido, mientras que las capas más lejanas se mueven más
        lentamente. Esto crea una sensación de profundidad y da la impresión de
        que los elementos se encuentran en diferentes planos. Desvanecimiento o
        cambio de opacidad: En este enfoque, los elementos se desvanecen
        gradualmente o cambian su opacidad a medida que el usuario se desplaza
        por la página. Al desaparecer o aparecer gradualmente, los elementos
        crean la ilusión de movimiento o alejamiento, lo que añade profundidad y
        dinamismo a la composición. Efectos de escala y rotación: Además del
        movimiento vertical u horizontal, los elementos también pueden ser
        animados mediante efectos de escala y rotación. Al aplicar estos efectos
        a diferentes capas o elementos en función del scroll, se logra un
        aspecto más dinámico y tridimensional.<br></br><br></br> El efecto de paralaje se puede
        utilizar para diversos propósitos, como destacar elementos clave, contar
        historias de forma interactiva o simplemente crear una experiencia
        visual llamativa. Sin embargo, es importante utilizarlo con moderación y
        cuidado, ya que un uso excesivo o inapropiado puede afectar
        negativamente la usabilidad y la experiencia del usuario. En resumen, el
        efecto de paralaje es una técnica de diseño visual que crea una
        sensación de profundidad y movimiento al desplazar diferentes elementos
        a diferentes velocidades. Se logra aplicando desplazamientos de capas,
        desvanecimientos, efectos de escala y rotación, entre otros. Esta
        técnica se utiliza para crear experiencias visuales inmersivas y
        atractivas en el diseño web y gráfico.
      </Text>
    </Container>
  );
};

export default Aritcle;
