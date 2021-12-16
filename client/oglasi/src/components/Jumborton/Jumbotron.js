import React from "react";

//styles
import {
  JumbotronContainer,
  JumbotronCard,
  CardText,
  CardImage,
} from "./styles/Jumbotron";

function Jumbotron() {
  return (
    <JumbotronContainer>
      <JumbotronCard>
        <CardText>
          Najbolje mesto za prodaju mobilnih telefona za sve prodavce i kupce
        </CardText>
        <CardImage src="https://images.unsplash.com/photo-1530347927633-5f393ff7abd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
      </JumbotronCard>
      <JumbotronCard>
        <CardImage src="https://images.unsplash.com/photo-1530347927633-5f393ff7abd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
        {/* https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80 */}
        <CardText>
          Najbolje mesto za prodaju vasih mobilnih telefona i opreme za iste
          posetavite vas oglas i sve neophodne podatke na nasem sajtu
        </CardText>
      </JumbotronCard>
    </JumbotronContainer>
  );
}

export default Jumbotron;
