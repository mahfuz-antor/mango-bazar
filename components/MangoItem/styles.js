import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mangoContainer: {
        width: '100%',
        height: 720
      },
    
      headings:{
        marginTop: '25%',
        alignItems: 'center',
        // position: 'relative',
        color: '#fff'
      },
    
      heading:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0af9ac',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
      },
    
      price: {
        fontSize: 26,
        color: '#0af9ac',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        marginTop: 10,
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },

      buttonContainer: {
          position: 'absolute',
          bottom: 50,
          alignItems: 'center',
          width: '100%',
      }
    

});

export default styles;