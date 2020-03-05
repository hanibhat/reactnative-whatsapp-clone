import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  List,
  ListItem,
  Left,
  Body,
  Thumbnail,
  Text,
  Icon,
  Fab,
  Button
} from "native-base";
import Moment from "moment";
import { ThemeColors } from "../../ThemeColors";

export default class Status extends Component {
  state = {
    user: {
      avatar:
        "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-yoda.png"
    }
  };

  render() {
    return (
      <Container>
        <ListItem avatar noBorder>
          <Left>
            <Thumbnail source={{ uri: this.state.user.avatar }} />
          </Left>
          <Body>
            <Text>My status</Text>
            <Text note style={styles.lineHeight}>
              Tap to add status update
            </Text>
          </Body>
        </ListItem>
        <ListItem itemDivider style={{ marginTop: 10 }}>
          <Text>Recent updates</Text>
        </ListItem>
        <List
          dataArray={this.props.statusItems}
          keyExtractor={(item, index) => index + item}
          renderRow={item => (
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: item.contactAvatar }} />
              </Left>
              <Body>
                <Text>{item.contactName}</Text>
                <Text note style={styles.lineHeight}>
                  {this.getFormatedDate(item.time)}
                </Text>
              </Body>
            </ListItem>
          )}
        />
        <Fab
          active={true}
          style={styles.fab}
          direction="up"
          position="bottomRight"
        >
          <Icon name="share" />
          <Button style={{ backgroundColor: "lightgrey" }}>
            <Icon
              style={{ color: ThemeColors.primary }}
              type="MaterialCommunityIcons"
              name="pencil"
            />
          </Button>
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
  }
});
