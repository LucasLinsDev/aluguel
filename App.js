import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto"  />
    <View style={{display:flex,flexDirection:'row'}}>
        <Image
        source={{uri:'https://picsum.photos/200/300'}}
        style={styles.postImage}    
      />
        <View style={styles.postContentWrap}>
          <View>
          <Text style={{fontWeight:"bold"}}>This is our core project</Text>
          <Text style={{color:"grey"}}>New Your</Text>
          </View>
        <Text style={{color:"#fec85c",backgroundColor:"#293141",alignSelf:"flex-start",padding:5,borderRadius:10,}}>$100 / Day</Text>
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#fec85c",
  },
  postImage:{
    height:100,
    width:100,
    marginLeft:20,
    marginRight:20,
    marginVertical:10,  
  },
  postContentWrap:{justifyContent:"space-around",paddingVertical:10}
});
