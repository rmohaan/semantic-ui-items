import "./styles.css";
import React from "react";
import { Image, Item } from "semantic-ui-react";

const App = () => {
  return (
    <React.Fragment>
      <div> Testing the goodness of semantic-ui </div>
      <Item.Group>
        <Item.Image
          size="tiny"
          src="https://randomuser.me/api/portraits/men/75.jpg"
        />

        <Item.Content>
          <Item.Header as="a">Header</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>
            <Image src="https://randomuser.me/api/portraits/men/75.jpg" />
          </Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item.Group>
    </React.Fragment>
  );
};

export default App;
