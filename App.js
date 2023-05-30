
import { StyleSheet, Text, View } from 'react-native';
import Card from './app/assets/components/Card';

import AppText from './app/assets/components/AppText';


export default function App() {
  return (
    <View style={{
      backgroundColor: "#f8f4f4", 
      padding: 20, 
      paddingTop: 100, 
    }}>
      <Card 
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/woman_red_jacket.jpg")}
      />

    </View>
  );
}

