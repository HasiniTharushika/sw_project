// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
// import React, { useState } from 'react'
// import DropDownPicker from 'react-native-dropdown-picker';
// import { Colors } from '../utils/Colors';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// const SelectArea_C9 = () => {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     {label: 'Colombo', value: 'colombo'},
//     {label: 'Gampaha', value: 'gampaha1'},
//     {label: 'Kalutara', value: 'gampaha2'},
//     {label: 'Kandy', value: 'gampaha3'},
//     {label: 'Kegalle', value: 'colombo1'},
//     {label: 'Matara', value: 'colombo2'},
//     {label: 'Colombo', value: 'colombo23'},
//     {label: 'Colombo', value: 'colombo3'},
//   ]);
//   return (
    
//     <ScrollView >
      
//     <View style={styles.container} >
//     <View style={styles.Icon}>
//           <TouchableOpacity >
//           <AntDesign name='left' size={30} color={Colors.PrimaryBlack}/>
//           </TouchableOpacity>
          
//         </View>
//       <View>     
//          <Text style={styles.heading}>Select your area</Text>
         
//         </View>

        
//         <Image style={styles.img}
//             source={
//               require('../assets/appImages/3_location.png')
//             } />
       
// <DropDownPicker 
// style={{

// }}

//   textStyle={{
//   fontSize: 15,
//   fontFamily:'Poppins'
// }}
// placeholder="Select your area"
// placeholderStyle={{
//   color: Colors.PrimaryGrey,
 
// }}
//       min={1}
//       max={1}
//       open={open}
//       value={value}
//       items={items}
//       setOpen={setOpen}
//       setValue={setValue}
//       setItems={setItems}
//     />
// <TouchableOpacity>
//             <Text style={styles.buttonStyle}>Continue</Text>
//           </TouchableOpacity>



//     </View>
//     </ScrollView>
    
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     margin: 20,
//     paddingBottom:20,
//   },
//   Icon: {
//     marginBottom:30,
//   },
//   heading: {
//     fontSize: 15,
//     fontFamily: 'Poppins',
//     fontWeight: 'bold',
//     color: Colors.PrimaryBlack,
//   },
//   img: {
//     justifyContent: 'center',
//     alignContent: 'center',
//     width: 250,
//     height: 350,
  
//     // width:'100%',
//     // height:'100%',
//     resizeMode: "contain",
// },
// dropDownText:{
//   fontFamily:'Poppins',
//   fontSize:15,
// },
// buttonStyle: {
//   height: 40,
//   color: Colors.PrimaryWhite,
//   backgroundColor: Colors.PrimaryBlue,
//   borderRadius: 10,
//   textAlign: 'center',
//   fontFamily: 'Poppins',
//   fontWeight: 'bold',
//   marginTop: 10,
//   // marginHorizontal: 20,
//   lineHeight: 40,
// },
// })

// export default SelectArea_C9



// import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
// import React, { useState } from 'react'
// import { ScrollView } from '../components/rneui'
// import { Colors } from '../utils/Colors'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import { t } from 'i18next'
// type AreaType = {
//     name: string,
// }

// const SelectArea_C9 = () => {
//     const [openDropdown, setopenDropdown] = useState<boolean>(false)
//     const [states,setStates]=useState<AreaType[]>([
//         {name:'Colombo'},
//         {name:'Gampaha'},
//         {name:'Kalutara'},
//         {name:'Colombo'},
//         {name:'Colombo'},
//         {name:'Colombo'},
//     ])
//     const [search,setSearch]=useState<string>("")
//     const [selectedState,setSelectedState]= useState<string>('Select State')

//     const [tempstates,setTempStates]=useState<AreaType[]>([
//         {name:'Colombo'},
//         {name:'Gampaha'},
//         {name:'Kalutara'},
//         {name:'Colombo'},
//         {name:'Colombo'},
//         {name:'Colombo'},
//     ])
//     const onFilter=(txt:string)=>{
// if(txt.length>0){
// let temp=states.filter(item=>{
//     return item.name.toString().toLowerCase().match(txt.toString().toLowerCase())
// })
// setStates(temp)
// }else{
// setStates(tempstates)}
//     return (
        
//             <View style={{ flex: 1, marginTop: 250, justifyContent: 'center', alignItems: 'center' }}>
//                 <View
//                     style={{
//                         width: '90%',
//                         height: 35,
//                         borderWidth: 1,
//                         borderRadius: 10,
//                         flexDirection: 'row',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         paddingLeft: 15,
//                         paddingRight: 15,
//                     }}>
//                     <Text style={{ fontSize: 16 }}>Select Area</Text>
//                     <TouchableOpacity
//                         onPress={() => setopenDropdown(!openDropdown)}>
//                         <AntDesign name='down' size={20} color={Colors.PrimaryBlack} />
//                     </TouchableOpacity>
//                 </View>
//                 {openDropdown &&
//                     (<View style={{
//                         width: '90%',
//                         height: 200,
//                         backgroundColor: Colors.PrimaryWhite,
//                         elevation: 5,
//                         marginTop: 20,
//                         borderRadius: 10,
//                         marginBottom:20,
//                     }}>
//                         <View style={{
//                             width: '90%',
//                             height: 55,
//                             borderRadius: 10,
//                             borderWidth: 0.5,
//                             alignSelf: 'center',
//                             marginTop: 20,
//                             borderColor: '#9e9e9e',
//                             flexDirection: 'row',
//                             justifyContent: 'space-between',
//                             alignItems: 'center',
//                             paddingLeft: 10,
//                             paddingRight: 10,
//                         }}>
//                             <TextInput style={{width: '80%',height: '100%', }}
//                              placeholder='search here...' 
//                             value={search}
//                             onChangeText={txt=>{
//                                 setSearch(txt)
//                                 onFilter(txt)
//                             }}
//                             />
//                         </View>
//                         <FlatList data={states} renderItem={({item,index}) =>{
//                             return(
//                                 <TouchableOpacity style={{
//                                     width: '90%',
//                                     alignSelf:'center',
//                                     height: 40,
//                                     borderBottomWidth:0.3,
//                                     justifyContent:'center'
//                                 }} onPress={()=>{
//                                     setSelectedState(item.name)
//                                     setopenDropdown(false)
//                                 }}
//                                 >
//                                     <Text>{item.name}</Text>
//                                 </TouchableOpacity>
//                             )
//                         }}/>
//                     </View>
//                     )}


//             </View>
       
//     )
// }}

// export default SelectArea_C9;





// // YourScreen.tsx

// // DropDownComponent.tsx




// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import DropDownPicker from 'react-native-dropdown-picker'; // Replace 'your-dropdown-picker-library' with the actual library name


// // const SelectArea_C9 = () => {
// //     const items={
// //         <label htmlFor=""></label>
// //     }
// //   return (
// //     <View style={{padding:30}} >
// //      <DropDownPicker /> 
// //     </View>
// //   )
// // }

// // export default SelectArea_C9
