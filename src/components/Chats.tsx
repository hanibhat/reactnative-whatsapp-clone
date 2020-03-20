import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Icon,
  Fab
} from "native-base";
import Moment from "moment";
import ThemeColors from "../constants/ThemeColors";

export default class Chats extends Component {
  render() {
    return (
      <Container>
        <List
          dataArray={this.props.chats}
          keyExtractor={(item, index) => index + item}
          renderRow={chat => (
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: chat.contactAvatar }} />
              </Left>
              <Body>
                <Text>{chat.contactName}</Text>
                <Text note style={styles.lineHeight}>
                  {chat.snippet}
                </Text>
              </Body>
              <Right>
                <Text note>{Moment(chat.time).format("hh:mm a")}</Text>
              </Right>
            </ListItem>
          )}
        />
        <Fab style={styles.fab} position="bottomRight">
          <Icon name="md-text" />
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  lineHeight: {
    height: 21
  },
  fab: {
    backgroundColor: ThemeColors.secondary
  }
});
