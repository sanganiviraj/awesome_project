import React from "react";
import { Text, Image, ImageBackground, StyleSheet, Vibration, View, FlatList, } from "react-native";

const Data = [

    {
        name: 'Balbausar',
        ability: ['overgrow', 'chlorophyl'],
        type: ['grass', 'poison'],
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jRiAgeBVxPbXPjsUJY6LxtNn-wwvuKN0GA&usqp=CAU'
    },
    {
        name: 'Ivysaur',
        ability: ['overgrow', 'chlorophyll'],
        type: ['grass', 'poison'],
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7ErSMUpDTAwBiEJsecN-KXFhfQq_XAfjsw&usqp=CAU'
    },
    {
        name: 'Venusaur',
        ability: 'overgrow',
        type: 'fire',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSIohpWK5X9MrjSRm2uSRRzZZJum0yE60xA&usqp=CAU'
    },
    {
        name: 'Charizard',
        ability: ['torrent', 'torrent'],
        type: ['water'],
        url: 'https://staticg.sportskeeda.com/editor/2021/05/b5967-16219277162645-800.jpg'
    },
    {
        name: 'Pidgeotto',
        ability: ['big-pecks', 'tangled-feet', 'keen-eye'],
        type: ['normal', 'flying'],
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkiv7a2JNOsHwnMJOrelutGdLNOi4wJpKJXLCu8O-8VOo1URkL9i5UknmAmUBC8-Yzjs&usqp=CAU'
    },
    {
        name: 'Pikachu',
        ability: ['electric', 'thundershot'],
        type: ['ultimate'],
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWG9Pg__rJnmCtJgwQYJDlVBmi-vEpNu4qQ&usqp=CAU'
    }
]

const Home = () => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={Data}
                renderItem={({ item }) => {
                    const abilities = item.ability.toString();
                    const types = item.type.toString();
                    return (

                        <View style={styles.box}>
                             <Image style={styles.bg} source={{ uri: item.url }}>
                            </Image>
                            
                            
                            <View style={{ flexDirection: 'column', margin: 10 }}>
                                <Text style={styles.title}> {item.name}
                                </Text>

                                <View style={{ width: 150,justifyContent:'flex-start',alignItems:'flex-start' }}>

                                    <Text style={{ fontSize: 18, fontWeight: 600, color: '#fb8500' }}>
                                        Abilities :
                                        <Text style={styles.ability}> {abilities}
                                        </Text></Text>


                                    <Text style={{ fontSize: 18, fontWeight: 600, color: '#fb8500' }}> Types : 
                                    <Text style={styles.type}> {types}
                                    </Text>
                                    </Text>
                                </View>


                            </View>

                        </View>
                    )
                }}
            />



        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
    },
    box: {
        width: 350,
        height: 160,
        borderRadius: 12,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        backgroundColor: '#023047',
        margin: 20,
        flexDirection: 'row'

    },
    bg: {
        width: 120,
        height: 120,
        margin: 20,
        alignSelf: 'center',
        borderRadius: 12,
        elevation:5
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
        color: '#ffb703',
        marginBottom:10

    },
    ability: {
        fontSize: 15,
        color: '#fcefef',
        fontWeight: 500,
        marginBottom:5,

    },
    type: {
        fontSize: 15,
        fontWeight: 500,
        color: '#fcefef'
    },
    shadow:{
        shadowColor: '#202020',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5,
    }

});

export default Home;