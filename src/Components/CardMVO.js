import React, {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class CardMVO extends Component
{
  constructor(props)
  {
    super(props);
  }

  render (){
    return(
    <div>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.mvos.title}</CardTitle>
          <CardSubtitle>{this.props.mvos.subtitle}</CardSubtitle>
          <CardText>{this.props.mvos.description}</CardText>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default CardMVO;