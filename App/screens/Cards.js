import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, LogBox } from "react-native";

import { Button, ButtonContainer, ButtonNext } from "../components/Button";
import { Alert, AlertEnd } from "../components/Alert";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#515151",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
    paddingBottom: 20
  },
  questionText: {
    // color: "#fff",
    // fontSize: 17,
    // textAlign: "center",
    // letterSpacing: -0.02,
    // fontWeight: "600",
    // textAlign: 'justify'
    color: "#515151",
    fontSize: 17,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
    textAlign: 'justify',
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 1,
    borderColor: "#797979",
    borderRadius: 10
  },
  safearea: {
    flex: 1,
    marginTop: 20,
    justifyContent: "space-between"
  }
});

class Cards extends React.Component {
  state = {
    correctCount: 0,
    questionNumber: 1,
    totalCount: this.props.navigation.getParam("questions", []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    ended: false,
    textValue: '?'
  };

  nextCard = () => {
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;
      this.setState({
        textValue: '?'
      });

      if (nextIndex >= state.totalCount) {
        return { ended: true }
      }

      state.questionNumber++;
      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };

  end = () => {
    return this.props.navigation.popToTop();
  }

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    const question = questions[this.state.activeQuestionIndex];
    console.disableYellowBox = true;
    
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.navigation.getParam("color") }
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{`${this.state.questionNumber}/${this.state.totalCount}`}</Text>
            <Text style={styles.questionText}>{question.question}</Text>

            <ButtonContainer>
              {question.answers.map(answer => (<Button
                key={answer.id}
                text={this.state.textValue}
                onPress={() => this.setState({
                  textValue: answer.text
                })}
              />))}
            </ButtonContainer>
          </View>
          <ButtonNext
            text='⇨'
            onPress={() => {
              setTimeout(() => this.nextCard(), 750);
            }}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default Cards;
