import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';

export default function CharacterCard(props) {
  return (  
    <Card.Group className='mainCard'>
      <Card>
        <Card.Content className='cardContent'>
          <Card.Header>{props.character.name}</Card.Header>
          <Card.Meta>Height: {props.character.height} cm</Card.Meta>
          <Card.Meta>Gender: {props.character.gender}</Card.Meta>
          <Card.Meta>Weight: {props.character.mass} kg</Card.Meta>
        </Card.Content>
      </Card>

     </Card.Group>
  )
}