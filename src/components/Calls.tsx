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
  Button,
  Icon,
  Fab
} from "native-base";
import Moment from "moment";
import { ThemeColors } from "../../ThemeColors";

export default class Calls extends Component {
  render() {
    return (
      <Container>
        <List
          dataArray={this.props.calls}
          keyExtractor={(item, index) => index + item}
          renderRow={call => (
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: call.contactAvatar }} />
              </Left>
              <Body>
                <Text>{call.contactName}</Text>
                <Text note style={styles.lineHeight}>
                  {this.getFormatedDate(call.time)}
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon style={styles.callButton} active name="call" />
                </Button>
              </Right>
            </ListItem>
          )}
        />
        <Fab style={styles.fab} position="bottomRight">
          <Icon name="md-call" />
        </Fab>
      </Container>
    );
  }

  getFormatedDate(date: Date) {
    return (
      Moment(date).format("MMMM") +
      " " +
      Moment(date).format("D") +
      ", " +
      Moment(date).format("hh:mm a")
    );
  }
}
const styles = StyleSheet.create({
  lineHeight: {
    height: 21
  },
  fab: {
    backgroundColor: ThemeColors.secondary
  },
  callButton: {
    color: ThemeColors.primary
  }
});
