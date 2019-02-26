import React, {Component} from 'react';
import { View } from 'react-native';
import CustomText from './CustomText'

export default class Page2 extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (
            <View >
                <CustomText text="Je suis sur la page 2" color='green'/>
            </View>

        );
    }
}

