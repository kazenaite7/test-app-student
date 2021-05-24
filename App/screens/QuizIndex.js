import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { ThemeProvider, Button } from 'react-native-elements';

import testas1 from "../data/testas1";
import testas2 from "../data/testas2";
import kortele1 from "../data/kortele1";
import kortele2 from "../data/kortele2";

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
      Modulio tikslas – perteikti studentams susistemintas žinias apie visuomeninių santykių, susijusių su informacinių ir ryšių
      technologijų naudojimu, teisinį reguliavimą Lietuvoje (šį reguliavimą lyginant ir su Europos Sąjungos, tarptautiniu bei
      užsienio valstybių reguliavimu) ir pagrindinius gebėjimus taikyti šias žinias.
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
              color: "#FFFFFF"
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
              color: "#FFFFFF"
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
          name="Rinkinys 1"
          color="#FFFFFF"
          onPress={() =>
            navigation.navigate("Cards", {
              title: "Rinkinys 1",
              questions: kortele1,
              color: "#FFFFFF"
            })
          }
        />
        <RowItem
          name="Rinkinys 2"
          color="#FFFFFF"
          onPress={() =>
            navigation.navigate("Cards", {
              title: "Rinkinys 2",
              questions: kortele2,
              color: "#FFFFFF"
            })
          }
        />
      </ScrollView>

    </View>


  </ThemeProvider>
);
