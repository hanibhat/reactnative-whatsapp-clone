import React from "react";
import { StyleSheet } from "react-native";
import { Header, Body, Right, Button, Icon, Title } from "native-base";
import { ThemeColors } from "../../ThemeColors";

export default class MyHeader extends React.Component {
  render() {
    return (
      <Header hasTabs noShadow transparent noLeft style={styles.header}>
        <Body>
          <Title>WhatsApp</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
          <Button transparent>
            <Icon type="SimpleLineIcons" name="options-vertical" />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: ThemeColors.primary
  }
});
