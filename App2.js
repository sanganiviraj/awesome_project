import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    ImageBackground,
    Modal,
    Pressable,
    Alert
} from 'react-native';

const DATA = [
    {
        name: 'bulbasaur',
        url: 'https://e7.pngegg.com/pngimages/72/948/png-clipart-bulbasaur-pokemon-diamond-and-pearl-pokemon-go-pokedex-ivysaur-bulbasaur-pixel-vertebrate-grass.png',
        desc: 'a Grass/Poison-type Pokémon, features a plant bulb on its back that grows into a large flower as it evolves.',
    },
    {
        name: 'ivysaur',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXHIC4PsN9PjjG8708oDDABGOn62GDwAkPw&usqp=CAU',
        desc: 'a powerful Fire/Flying-type Pokémon, boasts immense firepower and the ability to soar through the skies.',
    },
    {
        name: 'venusaur',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDB4Zb8Znju8E0xvExH-yOSfN_YmPvanDdw&usqp=CAU',
        desc: 'an iconic Electric-type Pokémon, is known for its yellow fur and ability to generate electricity from its cheeks.',
    },
    {
        name: 'charmander',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZf6KrJ0KZgqX1KIRp3OJigyfR29QwOjJYNg&usqp=CAU',
        desc: 'a Water-type Pokémon, is a small turtle-like creature with a shell and the ability to shoot water from its mouth.',
    },
    {
        name: 'charmeleon',
        url: 'https://staticg.sportskeeda.com/editor/2021/06/13bc0-16242569431535-800.jpg',
        desc: 'a Normal/Fairy-type Pokémon, captivates its opponents with its lullaby-like singing and can put them to sleep.',
    },
    {
        name: 'charizard',
        url: 'https://staticg.sportskeeda.com/editor/2022/02/9f5d0-16437390245233.png?w=840',
        desc: ' a Psychic-type Legendary Pokémon, possesses incredible psychic powers and is known as one of the most powerful Pokémon in existence.',
    },
    {
        name: 'squirtle',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHYEGWygDybmZQtdAR7PgBOCedDkUS9tvEA&usqp=CAU',
        desc: 'a Normal-type Pokémon, has the unique ability to evolve into various forms representing different elemental types.',
    },
    {
        name: 'wartortle',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3rZR4EQPpkVKd4C_4WOEu_13_c69eyvdzg&usqp=CAU',
        desc: 'a Normal-type Pokémon, has the unique ability to evolve into various forms representing different elemental types.',
    },
    {
        name: 'blastoise',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3WknXMij8n_tsuy6uD7Uhwejhuigy6PK2Q&usqp=CAU',
        desc: 'a Normal-type Pokémon, has the unique ability to evolve into various forms representing different elemental types.',
    },
    {
        name: 'caterpie',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KnaBRzBpLChBf6faAxsRjxeC7Mc30i_R3w&usqp=CAU',
        desc: 'a Normal-type Pokémon, has the unique ability to evolve into various forms representing different elemental types.',
    },
    {
        name: 'metapod',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6z39OZkM_DKOLVyo5igrJzptYg_fSLZ0REA&usqp=CAU',
        desc: 'a Normal-type Pokémon, has the unique ability to evolve into various forms representing different elemental types.',
    },
    {
        name: 'butterfree',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspu5Q0aE75nBKYzMuawnlmqGwOJ16kU-qHg&usqp=CAU',
        desc: 'a Normal-type Pokémon, has the unique ability to evolve into various forms representing different elemental types.',
    },
];


const App = () => {
    const [pokedata, setpokedata] = useState(null);
    const [modalvisible, setmodalvisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalvisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {pokedata != null && (<ImageBackground style={{ width: 170, height: 170, borderRadius: 15 } } imageStyle={{borderRadius:14}} source={{uri:pokedata.url}} ></ImageBackground>)}
                        <Pressable style={[styles.button2, styles.buttonClose]}
                            onPress={() => {
                                setpokedata(null);
                                setmodalvisible(false);
                                Alert.alert(
                                    'Closed Successful'
                                 )
                            }}>
                            <Text style={{ fontSize: 14, textAlign: 'center', color: 'black' }}> Closed </Text>


                        </Pressable>

                    </View>
                </View> 
            </Modal>
            <View style={{ flexDirection: 'column', backgroundColor: 'white'}}>
                <FlatList
                    contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap',alignItems:'center' }}
                    data={DATA}
                    renderItem={({ item }) =>
                        <View style={styles.contain}>
                            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => {
                                setpokedata(item);
                                setmodalvisible(true);
                            }}>
                                <ImageBackground style={styles.imgbg} source={{ uri: item.url }} imageStyle={{borderRadius:13}}>
                                </ImageBackground>


                            </Pressable>

                            <Text style={{ fontSize: 14, fontWeight: 600, color: 'white', textAlign: 'center' }}>
                                {item.name}
                            </Text>
                            <Text style={{ fontSize: 8, fontWeight: 300, color: 'white', textAlign: 'center', margin: 3 }}>
                                {item.desc}

                            </Text>


                        </View>}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 260,
        width: 200,
        backgroundColor: '#2E86C1',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        // backgroundColor: 'pink'
    },
    contain: {
        height: 200,
        width: 170,
        alignItems: 'center',
        borderRadius: 11,
        backgroundColor: '#2D355C',
        margin: 10,
        
    },
    imgbg: {
        width: 110,
        height: 110,
        borderBottomColor: 11,
        margin: 10,
        borderRadius:12,
        
        
    },
    button: {
        borderRadius: 20,
        // padding: 8,
        elevation: 2,
        marginTop: 5,
    },
    button2:{
        borderRadius:11,
        elevation:4,
        margin:4,
        padding:8
    },
    buttonOpen: {
        // backgroundColor: 'white',
    },
    buttonClose: {
        backgroundColor: '#D4AC0D',
    },
});

export default App;