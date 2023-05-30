import React from 'react'
import { Text, StyleSheet} from 'react-native'



// We can also create a heading component using this strategy 
// <Heading>My Heading</Heading>

function AppText({children, style}) {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
      fontSize: 18, 
      fontFamily: Platform.OS === "android" ? "Roboto" : "Avenior"
  }
})



export default AppText; 