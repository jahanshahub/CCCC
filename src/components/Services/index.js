import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/Bang.png';
import Icon3 from '../../images/3dgamec.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  // ServicesBg  
} from './ServicesElements';


const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Major Ecosystem Features</ServicesH1>

      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>2D Networking Game</ServicesH2>
          <ServicesP>
            Our 2D virtual game will enable users to interact with the environment and play with other players using their NFTs. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Animated Series</ServicesH2>
          <ServicesP>
            Watch your favourite combat critters in action as they play out awesome scenes and cinematics for everyone to enjoy. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2> Game Development</ServicesH2>
          <ServicesP>
            Transitioning our 2D world into the next stage of development, allowing users to use their NFTs in real time as they interact in a 3D environment - did someone say "Critterverse"?
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
