import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Field, Input, Label, Title, Text, View, Logo } from 'components';

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

interface State {
  value: number;
}
class App extends React.Component {
  state = {
    value: 0,
  };

  handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <View padding="none">
        <AppHeader>
          <Logo animate appearance="light" alt="logo" />
          <Title>Neverend</Title>
        </AppHeader>
        <View padding="heavy">
          <Text className="App-intro">
            <Field>
              <Label htmlFor="value"> foo</Label>
              <Input
                value={this.state.value}
                onChange={this.handleInputChange}
                id="value"
                name="value"
                type="text"
              />
            </Field>
          </Text>
        </View>
      </View>
    );
  }
}

export default App;
