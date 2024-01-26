import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
const LoginScreen = () => {


const [email, setEmail] = useState("");
const [password, setpassword] = useState("");
const navigation= useNavigation();


    return (
     <SafeAreaView   style={{flex:1, backgroundColor:"white", alignItems:"center" } }>

        <View>
<Image style={{ width:150, height: 100, borderRadius:30}} 
    source={{
        uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg"
    }}

/>
            

        </View>
{/* KeyBoard Start */}
<KeyboardAvoidingView>
{/* Container view  start*/}
<View style={{alignItems:"center"}}>
<Text style={{fontSize:17, fontWeight:"bold", marginTop:12, color:"#041E42" }} >Login in To your Account </Text>

{/* Conatiner Icon Start  */}
<View style={{marginTop:70}}>
    <View style={{flexDirection: "row", 
    alignItems:"center", 
    gap:5, 
    backgroundColor:"#D0D0D0", 
    paddingVertical:5,
   
    borderRadius:5, 
    marginTop:30  }} >
        
 <MaterialIcons style={{marginLeft:8}}  name="email" size={24} color={"gray"}    /> 
 <TextInput
 value={email}
 onChangeText={(text)=> setEmail(text)} 
 placeholder='enter your email' 
 style={{marginVertical:10, width:300, fontSize:email ? 18 : 18}}  />
 </View>  


</View>
{/* Container Icon End  */}
</View>
{/* Container view  end*/}


<View  style={{marginTop:10}}>
<View style={{flexDirection: "row", 
    alignItems:"center", 
    gap:5, 
    backgroundColor:"#D0D0D0", 
    paddingVertical:5,
   
    borderRadius:5, 
    marginTop:30  }} >
        
        <AntDesign name="lock" size={24} color="gray" style={{marginLeft:8}}   />
 <TextInput
 value={password}
 onChangeText={(text)=> setpassword(text)}
 secureTextEntry={true}  
 placeholder='enter your password'
  style={{marginVertical:10, width:300 , fontSize:password ? 16: 16}}  />
 </View>  

</View>


<View style={{marginTop:12, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>


    <Text >Keep me logged in </Text>
    <Text style={{color:"#007FFF", fontWeight:"500"}}>Forgot password </Text>

</View>

<View  style={{marginTop:50}} />

<Pressable style={{width:200, 
backgroundColor:"#FEBE10", 
borderRadius:6, 
marginLeft:"auto",
 marginRight:"auto",
 padding:15 }}>

<Text style={{textAlign:"center", color:"white", fontSize:16, fontWeight:"bold"}}> Login</Text>

</Pressable>

<Pressable onPress={()=> navigation.navigate("Register")} style={{marginTop:15}}>
    <Text style={{
    textAlign:"center", 
    color:"gray", 
    fontSize:16}}>Dont have account? Sign up </Text>
</Pressable>

</KeyboardAvoidingView>
{/* KeyBoard End*/}

        </SafeAreaView> 
    )
}

export const styles = StyleSheet.create({
	loginscreen: {
		flex: 1,
	},
});
export default LoginScreen