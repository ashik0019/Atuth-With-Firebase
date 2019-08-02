import React, {Component} from 'react'
import firebase from 'firebase'
import {Header, Button} from './Components/Common'
import LoginForm from './Components/LoginForm'

import {
    View,
    Text,
} from 'react-native'

class App extends Component {
    state = {loggedIn: false}

    UNSAFE_componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBrcoWUs4CEMbCOLw0U8Z8UHrsdPf65u4U",
            authDomain: "authentication-0019.firebaseapp.com",
            databaseURL: "https://authentication-0019.firebaseio.com",
            projectId: "authentication-0019",
            storageBucket: "",
            messagingSenderId: "245895510218",
            appId: "1:245895510218:web:1fd13442eb328568"
        })
        firebase.onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true})
            }else {
                this.setState({loggedIn: false})
            }
        })
    }

    renderContent() {
        if(this.state.loggedIn) {
            return(
                <Button>
                    Log Out
                </Button>
            )
        }

        return <LoginForm/>
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}
export default App