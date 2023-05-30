import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import FlipCard from 'react-native-flip-card' 
import Ionicons from 'react-native-vector-icons/Ionicons'
import {SliderBox} from 'react-native-image-slider-box'

function UserHome(){
    const images = [
        require('../../assets/image1.jpg'),
        require('../../assets/image2.jpg'), 
        require('../../assets/image3.jpg'),
        require('../../assets/image4.jpg'),   
      ];
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <SliderBox 
                images = {images} 
                dotColor="red" 
                inactiveDotColor="black" 
                dotStyle = {{
                    height: 10, 
                    width: 10, 
                    borderRadius: 50
                }} 
                imageLoadingCOlor = "black" 
                autoplay={true} 
                
                />
            <Text style={styles.title1}>ACTIVITĂȚI</Text>
            <Text style={styles.title2}>Activitățile noastre</Text>
            <Text style={styles.paragraph}>Avem cinci direcții pe care ne desfășurăm activitatea</Text>
                <FlipCard 
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    <View style={styles.face}>
                        <Ionicons size={30} color={'rgba(208,2,27,1)'} name="people-sharp"/>
                        <Text style={styles.facetext}>ERASMUS +</Text>
                    </View>

                    <View style={styles.back}>
                        <Text style={styles.cardtitle}>ERASMUS +</Text>
                        <Text style={styles.backtext}>Scriem și implementăm proiecte Erasmus+</Text>
                    </View>
                </FlipCard>

                <FlipCard 
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    <View style={styles.face}>
                        <Ionicons size={30} color={'rgba(208,2,27,1)'} name="book-sharp"/>
                        <Text style={styles.facetext}>EDUCAȚIE</Text>
                    </View>

                    <View style={styles.back}>
                        <Text style={styles.cardtitle}>EDUCAȚIE</Text>
                        <Text style={styles.backtext}>Desfășurăm activități și traininguri de dezvoltare personală atât pentru voluntarii noștri, cât și ai asociațiilor partenere</Text>
                    </View>
                </FlipCard>
                <FlipCard 
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    <View style={styles.face}>
                        <Ionicons size={40} color={'rgba(208,2,27,1)'} name="bicycle-sharp"/>
                        <Text style={styles.facetext}>SĂNĂTATE ȘI SPORT</Text>
                    </View>

                    <View style={styles.back}>
                        <Text style={styles.cardtitle}>SĂNĂTATE & SPORT</Text>
                        <Text style={styles.backtext}>Susținem stilul de viață sănătos și sportul prin organizarea mai multor activități</Text>
                    </View>
                </FlipCard>
                <FlipCard 
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    <View style={styles.face}>
                        <Ionicons size={30} color={'rgba(208,2,27,1)'} name="logo-euro"/>
                        <Text style={styles.facetext}>DONAȚII</Text>
                    </View>

                    <View style={styles.back}>
                        <Text style={styles.cardtitle}>DONAȚII</Text>
                        <Text style={styles.backtext}>Identificăm nevoile oamenilor și strângem donații cel puțin o dată pe lună</Text>
                    </View>
                </FlipCard>
                <Text style={styles.title1}>ECHIPA NOASTRĂ DE VOLUNTARI</Text>
                <Image style={styles.image} source={require('../../assets/image5.jpg')} />
            </ScrollView>
        </View>
    );

    }
const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#f2f2f2',
       alignItems: 'center'
   },
   title1: {
        color:'rgba(208,2,27,1)',
        fontSize: 18,
        marginTop: 70,
        fontWeight: '700',
        marginLeft: 30
   },
   title2: {
    color:'black',
    fontSize: 30,
    marginTop: 10,
    fontWeight: '700',
    marginLeft: 30
},
    paragraph: {
        color:'#333333',
        fontSize: 15,
        marginTop: 10,
        fontWeight: '300',
        marginLeft: 30
    },
   scrollView: {
    marginHorizontal: 0,
  },
  card: {
    flex: 1,
    width: 350,
    height: 260,
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 13
  },
   face: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  facetext:{
    textAlign:'center',
    fontSize: 23,
    color: 'black',
    fontWeight: 'bold'
  },

  back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(208,2,27,1)',
  },
  cardtitle: {
    textAlign:'center',
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold'
  },
  backtext: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
  },
  image:{
    width: 350,
    height: 260,
    marginTop: 30,
    marginBottom: 0,
    marginLeft: 10
  }
});

export default UserHome;

