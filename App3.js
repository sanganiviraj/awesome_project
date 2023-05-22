import React from "react";
import { Text, Image, ImageBackground, StyleSheet, Vibration, View, FlatList, } from "react-native";

const Data = [

    {
        name: 'balbausar',
        ability: ['overgrow', 'chlorophyl'],
        type: ['grass', 'poison'],
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jRiAgeBVxPbXPjsUJY6LxtNn-wwvuKN0GA&usqp=CAU'
    },
    {
        name: 'ivysaur',
        ability: ['overgrow', 'chlorophyll'],
        type: ['grass', 'poison'],
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7ErSMUpDTAwBiEJsecN-KXFhfQq_XAfjsw&usqp=CAU'
    },
    {
        name: 'venusaur',
        ability: 'overgrow',
        type: 'fire',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jRiAgeBVxPbXPjsUJY6LxtNn-wwvuKN0GA&usqp=CAU'
    },
    {
        name: 'charizard',
        ability: ['torrent', 'torrent'],
        type: ['water'],
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jRiAgeBVxPbXPjsUJY6LxtNn-wwvuKN0GA&usqp=CAU'
    },
    {
        name: 'pidgeotto',
        ability: ['big-pecks', 'tangled-feet','keen-eye'],
        type: ['normal', 'flying'],
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jRiAgeBVxPbXPjsUJY6LxtNn-wwvuKN0GA&usqp=CAU'
    }
]

const demo = () => {
    const detail=Data.toString();


 
    return (
        <View style={styles.screen}>
            <FlatList
                data={Data}
                renderItem={({ item }) =>
                    <View style={styles.box}>
                        <Image style={styles.bg} source={{uri: item.url} }>
                        </Image>
                       <View style={{flexDirection:'column',margin:10}}>
                       <Text style={styles.title}> {item.name}</Text>

                       <View style={{width:150}}> 
                       
                       <Text style={styles.ability}> {item.ability}</Text>


                       <Text style={styles.type}> {item.type}</Text>
                       </View>


                         </View>
                        
                    </View>
                }
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
        height: 150,
        borderRadius: 12,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        backgroundColor: 'pink',
        margin: 20,
        flexDirection:'row'

    },
    bg: {
        width: 120,
        height: 120,
        margin: 20,
        alignSelf: 'center',
        borderRadius:12
    },
    title:{
        fontSize:20,
        fontWeight:700,
        color:'black',
        
    },
    ability:{
        fontSize:18,
        color:'black',
        fontWeight:500,
        margin:2
      
    },
    type:{
        fontSize:18,
        fontWeight:500,
        color:'black'
    }



});

export default demo;
