import *as React from 'react'
import {
    Text,
    StyleSheet,
    View,
    Image,
    ImageBackground,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Modal,
    TouchableHighlight,
    ActivityIndicator,
    DrawerLayoutAndroid,
    Dimensions,
    RefreshControl,
    Keyboard,
    Platform,
    LogBox,
    FlatList
} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-community/async-storage'




//********************************** / The code Take Time 1:30:43 / *********************************//


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isvisble: true,
            isloading: true,
            Posts: [],
        }
    }

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        );
    }

    async getPosts() {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        this.setState({ Posts: data });
        this.setState({ isloading: false });

    }
    async componentDidMount() {
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.setState({ isvisble: false });
        }
        this.getPosts();
    }


    render() {
        return (
            <View style={styles.container}>
                {
                    (this.state.isvisble == true) ? (
                        <View style={styles.splah_container}>
                            <Text style={styles.splah_text}>SkyLine</Text>
                        </View>
                    ) : (
                        this.state.isloading == true ? (
                            <View style={styles.loading}>
                                <ActivityIndicator size={50} color="#0f0" />
                            </View>

                        ) : (
                            <>
                                <StatusBar
                                    backgroundColor={"#FFFFFF"}
                                    barStyle="dark-content"
                                />
                                <View >
                                    <View style={styles.Header}>
                                        <Text style={{
                                            fontSize: 20,
                                            textAlign: "center",
                                            color: "#000",
                                            fontWeight: "bold"
                                        }}>Home</Text>
                                    </View>

                                    <FlatList
                                        data={this.state.Posts}
                                        keyExtractor={({ id, index }) => id}
                                        renderItem={({ item }) => (

                                            <View style={[styles.Data_view], { backgroundColor: (item.id % 2 == 0 ? "#718000" : "#005780") }}>
                                                <View style={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: 15,
                                                    justifyContent: "center",
                                                    backgroundColor: "#fff",
                                                    margin: 8
                                                }}>
                                                    <Text style={{
                                                        fontSize: 15,
                                                        fontWeight: "bold",
                                                        textAlign: "center",
                                                        color: "#000"
                                                    }}>
                                                        {item.id}</Text>
                                                </View>
                                                <Text style={{
                                                    fontSize: 17,
                                                    fontWeight: "bold",
                                                    marginHorizontal: 10,
                                                    marginVertical: 5
                                                }}>
                                                    {item.title}</Text>
                                                <Text style={{
                                                    fontSize: 15,
                                                    marginHorizontal: 10,
                                                    marginVertical: 5,
                                                    textAlign: "justify"
                                                }}>
                                                    {item.body}</Text>

                                            </View>

                                        )}
                                    />
                                </View>

                            </>
                        )
                    )
                }
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8"
    },
    splah_container: {
        flex: 1,
        backgroundColor: "#00F",
        justifyContent: "center"
    },
    splah_text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center"

    },
    loading: {
        flex: 1,
        justifyContent: "center"
    },
    Data_view: {
        width: "85%",
        height: 55,
        alignSelf: "center",
        marginTop: 20
    },
    Header: {
        width: "100%",
        height: 55,
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    }
})

export default Home;