import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { ThemeProvider, Button } from 'react-native-elements';

import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";
import testas1 from "../data/testas1";
import testas2 from "../data/testas2";

import { RowItem } from "../components/RowItem";

const theme = {
  Text1: {
    backgroundColor: '#FC612B',
    borderTopColor: 'white',
    textAlign: 'justify',
    color: 'white',
    padding: 15
  },
  View: {
    backgroundColor: 'white',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20
  },
  Text2: {
    fontSize: 20,
    padding: 15,
    color: '#333333',
    fontWeight: "bold"
  }
};

export default ({ navigation }) => (
  <ThemeProvider theme={theme}>
    <StatusBar barStyle="dark-content" />
    <Text style={theme.Text1}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </Text>

    {/* Testai */}
    <View style={theme.View}>
      <Text style={theme.Text2}>Testai</Text>
      <ScrollView>
        <RowItem
          name="Testas 1"
          color="#FFFFFF"
          onPress={() =>
            navigation.navigate("Quiz", {
              title: "Testas 1",
              questions: testas1,
              color: "#797979"
            })
          }
        />
        <RowItem
          name="Testas 2"
          color="#FFFFFF"
          onPress={() =>
            navigation.navigate("Quiz", {
              title: "Testas 2",
              questions: testas2,
              color: "#36b1f0"
            })
          }
        />
      </ScrollView>
    </View>

    {/* Mokomosios korteles */}
    <View style={theme.View}>
      <Text style={theme.Text2}>Mokomosios kortelės</Text>
      <ScrollView>
        <RowItem
          name="Testas1"
          color="#36b1f0"
          onPress={() =>
            navigation.navigate("Quiz", {
              title: "Testas1",
              questions: testas1,
              color: "#36b1f0"
            })
          }
        />
        <RowItem
          name="Westerns"
          color="#799496"
          onPress={() =>
            navigation.navigate("Quiz", {
              title: "Westerns",
              questions: westernsQuestions,
              color: "#799496"
            })
          }
        />
        <RowItem
          name="Computers"
          color="#49475B"
          onPress={() =>
            navigation.navigate("Quiz", {
              title: "Computers",
              questions: computerQuestions,
              color: "#49475B"
            })
          }
        />
      </ScrollView>

    </View>


  </ThemeProvider>
);
