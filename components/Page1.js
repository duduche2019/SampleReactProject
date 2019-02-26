import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu\n' + 'salut ça va! ',
});

export default class Page1 extends Component {

    constructor(props) {

        super(props);
        
        this.state= {

            counter: 0
        }
    }

    buttonAction() {

    const { counter }= this.state;
    this.setState({counter: counter + 1 });

    }

                                                  // on manipule props et state
    navigateToPage2() {

        this.props.navigation.navigate({routeName: "Page2"})
    };

    navigateToPage3() {

      this.props.navigation.navigate({routeName: "Page3"})
  };

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>{this.state.counter}</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
            <Button
              onPress={() =>this.buttonAction()}
              title="click me"
              color="#841584"
            />
            <Button
              onPress={() =>this.navigateToPage2()}
              title="Change to Page2"
              color="#841584"
            />
            <Button
              onPress={() =>this.navigateToPage3()}
              title="Change to Page3"
              color="#841584"
            />
          </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });