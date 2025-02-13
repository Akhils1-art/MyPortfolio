import styled from "styled-components"
import { SiLinkedin, SiGithub, SiInstagram, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export const SocialLinks = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <Container theme={theme}>
        <ul>
            <li>
              <a target={"_blank"} rel='noopener noreferrer' href="https://www.linkedin.com/in/sohil-gupta-818826216/"><SiLinkedin/></a>
            </li>
            <li>
              <a target={"_blank"} rel='noopener noreferrer' href="https://github.com/sohil66?tab=repositories"><SiGithub/></a>
            </li>
            
        </ul>
    </Container>
  )
}


const Container = styled.div`
  position: fixed;            // to stick it to the left bottom corner...
  // positioning...
  bottom: 0;
  left: 1em;

  // handling for mobile screens...
  @media (max-width: 780px) {
    display: none;
  }

  ul{
    list-style-type: none;    // remove dots from li elements...
    color: ${props => props.theme==='dark' ? 'white' : 'black'};
    // little bit padding to make all the chils center aligned...
    padding: 1em;
    /// so that line can remain in contact with bottom part...
    padding-bottom: 0;

    // for after element...
    position: relative;
  }

  // for the line...
  ul::after{
    content: "";
    background-color: ${props => props.theme==='dark' ? 'white' : 'black'};
    opacity: .7;
    display: block;

    // resizing the line...
    width: 1px;
    height: 11em;

    // positioning...
    top: 0;
    right: 10em;
    margin-inline: auto;
  }
  
  a{
    // removing default link styling...
    text-decoration: none;
    text-decoration-skip-ink: auto;
    // whatever parent(li) is having...
    color: inherit;
  }

  li{
    opacity: .7;
    // to fill gap between two elements...
    padding-bottom: .9em;
    cursor: pointer;
    font-size: 1.25em;

    // for hover effect...
    position: relative;
    top: 0;
    transition: top ease 0.5s, color ease 0.5s;

    &:hover{
      opacity: 1;
      top: -10px;
      color: #76b687;
    }
  }
`;
