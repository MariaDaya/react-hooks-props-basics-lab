import React from "react";
import user from "../data/user";

function Links (props){
  return (<div>
    <h3>Links</h3>
    <a href={props.github}>{props.github}</a>
    <a href={props.linkedin}>{props.linkedin}</a>
  </div>)
};

function BioRender ( {isAString} ) {

  return (<div>
            <div>{isAString ? <p> {user.bio} </p> : null }</div>
         </div>)

} ;

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.links.github} linkedin={user.links.linkedin}/>
      <BioRender isAString={true}/>
    </div>
  );
}


export default About;
