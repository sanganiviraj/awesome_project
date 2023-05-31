import React from "react";
import { Image, StyleSheet, View, Dimensions, Text, ScrollView, FlatList } from 'react-native';


const img = [
    {
       
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSIohpWK5X9MrjSRm2uSRRzZZJum0yE60xA&usqp=CAU'
        
    },
    {
        url: 'https://staticg.sportskeeda.com/editor/2021/05/b5967-16219277162645-800.jpg'
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkiv7a2JNOsHwnMJOrelutGdLNOi4wJpKJXLCu8O-8VOo1URkL9i5UknmAmUBC8-Yzjs&usqp=CAU'
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWG9Pg__rJnmCtJgwQYJDlVBmi-vEpNu4qQ&usqp=CAU'
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jRiAgeBVxPbXPjsUJY6LxtNn-wwvuKN0GA&usqp=CAU'
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7ErSMUpDTAwBiEJsecN-KXFhfQq_XAfjsw&usqp=CAU'
    }

]

const Detail = (props) => {
    const { navigation , route} = props
    return (
        <View style={styles.bg}>
            <ScrollView>
                <Image style={[styles.commonstyle, styles.img]} source={{ uri: 'https://staticg.sportskeeda.com/editor/2021/05/b5967-16219277162645-800.jpg' }}></Image>

                <View style={[styles.commonstyle, styles.box]}>
                    <Text style={styles.title}> {route.params.pokedata.name} </Text>

                     <Text style={{fontSize:20,fontWeight:500,color:'black'}}> Ability : <Text style={styles.power}> overgrow , chlorophyl </Text></Text>

                     <Text style={{fontSize:20,fontWeight:500,color:'black'}}> Power : <Text style={styles.power}> Grass , poision </Text></Text>
                </View>

                <View style={[styles.commonstyle, styles.box2]}>
                    <Text style={styles.desc}>
                        Pokémon, previously referred to as "Pocket Monsters," are fascinating creatures that we have grown to love because of their unique shapes and sizes, and loveable habits. The Pokémon anime does a wonderful job of showing the facets of Pokémon, but as complex creatures, it is difficult for an animated series to capture their entirety.

                        The new Generation VII Rotom Pokédex is a tool that shows what Pokémon you've caught, can make phone calls, and work as a map, sort of like an iPhone or Android device. Okay, so maybe the Pokédex is about advanced as an average smartphone. The Pokédex also includes eye-catching Pokémon descriptions; some of which are intriguing, while others are unusual. These are 10 unusual Pokémon descriptions in the Pokédex. Enjoy!


                    </Text>



                </View>

                <View style={[styles.commonstyle,styles.box3]}> 
                <FlatList
                data={img}
                horizontal
                HidesHorizontalScrollIndicator
                renderItem={({item}) => {
                    return(
                        
                    <Image style={styles.smallimg} source={{uri:item.url}}>
                         </Image>
                    )
                    

                }}
                > </FlatList> 
         


                

                </View>

            </ScrollView>







        </View>

    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'white'
    },
    commonstyle: {
        borderRadius: 8,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15

    },
    img: {

        height: 300,
       

    },
    box: {
        backgroundColor: '#789fbb',
        padding: 20
    },
    box2: {
        backgroundColor: '#c2d5db',
        padding: 20,

    },
    box3: {
        padding: 5,
        backgroundColor: '#cfdee3',
        marginBottom:15,
      
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        color: '#17202A',
        marginBottom: 5,

    },
    power: {
        fontSize: 18,
        fontWeight: 400,
        color: '#34495E',
        marginBottom: 2
    },
    desc: {
        fontSize: 14,
        fontWeight: 500,
        color: '#1C2833',
        textAlign: 'justify'

    },
    smallimg:{
        width:100,
        height:100,
        borderRadius:7,
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        marginBottom:10,
        borderColor:'#1a1a1a',
        borderWidth:0.6,
    }




})

export default Detail;
