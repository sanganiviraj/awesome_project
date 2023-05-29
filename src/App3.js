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
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSIohpWK5X9MrjSRm2uSRRzZZJum0yE60xA&usqp=CAU'
    },
    {
        name: 'charizard',
        ability: ['torrent', 'torrent'],
        type: ['water'],
        url: 'https://staticg.sportskeeda.com/editor/2021/05/b5967-16219277162645-800.jpg'
    },
    {
        name: 'pidgeotto',
        ability: ['big-pecks', 'tangled-feet','keen-eye'],
        type: ['normal', 'flying'],
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkiv7a2JNOsHwnMJOrelutGdLNOi4wJpKJXLCu8O-8VOo1URkL9i5UknmAmUBC8-Yzjs&usqp=CAU'
    },
    {
        name:'pikachu',
        ability:['electric','thundershot'],
        type:['ultimate'],
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWG9Pg__rJnmCtJgwQYJDlVBmi-vEpNu4qQ&usqp=CAU'
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
    shadowProp: {  
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
      },  
    box: {
        width: 350,
        height: 150,
        borderRadius: 12,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: 'black',  
        shadowOpacity: 0.2,  
        shadowRadius: 3, 
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
