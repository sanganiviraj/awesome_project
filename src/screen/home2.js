import React from "react";
import { StyleSheet, View, Image, FlatList, Text } from 'react-native';


const pokedata = [

    {
        name: 'Balbausar',
        ability: ['overgrow', 'chlorophyl'],
        type: ['grass', 'poison'],
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    },
    {
        name: 'Ivysaur',
        ability: ['overgrow', 'chlorophyll'],
        type: ['grass', 'poison'],
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
    },
    {
        name: 'Venusaur',
        ability: 'overgrow',
        type: 'fire',
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
    },
    {
        name: 'Charizard',
        ability: ['torrent', 'ultimate'],
        type: ['fire'],
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
    },
    {
        name: 'Pidgeotto',
        ability: ['big-pecks', 'tangled-feet', 'keen-eye'],
        type: ['normal', 'flying'],
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'
    },
    {
        name: 'Pikachu',
        ability: ['electric', 'thundershot'],
        type: ['ultimate'],
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
    },
    {
        name: 'Snorlax',
        ability: ['sleep', 'weight'],
        type: ['Normal'],
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png'
    },
    {
        name: 'Butterfree',
        ability: ['fire', 'ice'],
        type: ['flying'],
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png'
    },
    
]


const Home2 = () => {
    return (
        <View style={styles.contain}>
            <FlatList
                data={pokedata}
                contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
                renderItem={({ item }) => {

                    const abilities=item.ability.toString();
                    const types=item.type.toString();
                    return (<View style={styles.box}>
                        <Image style={styles.bg} source={{ uri: item.url }}>
                        </Image>

                        <Text style={styles.title}>{item.name} </Text>

                        <Text style={{ fontSize: 18, fontWeight: 600, color: '#fb8500',textAlign:'center' }}>
                            Abilities :
                            <Text style={styles.ability}> { abilities}
                            </Text></Text>


                        <Text style={{ fontSize: 18, fontWeight: 600, color: '#fb8500',textAlign:'center',marginTop:10 }}> Types :
                            <Text style={styles.type}> {types}
                            </Text>
                        </Text>

                    </View>
                    )
                }

                }
            ></FlatList>


        </View>
    )

};

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    box: {
        width: 175,
        height: 320,
        backgroundColor: '#023047',
        margin: 10,
        borderRadius: 12,
        alignItems: 'center'

    },
    bg: {
        width: 150,
        height: 150,
        borderRadius: 12,
        margin: 10,
        borderWidth:1,
        borderColor:'white'


    },
    title: {
        fontSize: 20,
        fontWeight: 700,
        color: '#ffb703',
        marginBottom: 15

    },
    ability: {
        fontSize: 15,
        color: '#fcefef',
        fontWeight: 500,
        
        textAlign:'center'

    },
    type: {
        fontSize: 15,
        fontWeight: 500,
        color: '#fcefef',
        textAlign:'center',
        

    }



})

export default Home2;