import React, {Component} from 'react';
import { View } from 'react-native';
import CustomText from './CustomText'

export default class Page3 extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (
            <View >
                <CustomText text="Je suis sur la page 3" color='blue'/>
            </View>

        );
    }
}

