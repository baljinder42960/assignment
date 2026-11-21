// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react';

// // import  UseRefEx  from './scr/UseRefEx';
// import Usememo from '../scr/UsememoEx';

// const App = () => {
//   return (

//   //  <UseRefEx/> 
//    <UsememoEx/>



//   )
// }

// export default App

// const styles = StyleSheet.create({})


// import React from 'react';
// import UsememoEx from './scr/UsememoEx';

// const App = () => {
//   return <UsememoEx />;
// };

// export default App;


// // import React, { Component } from 'react'

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>

// //       </div>
// //     )
// //   }
// // }




// // import React from 'react'

// // export default function App() {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }




// // import React from 'react'

// // function App() {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default App

// // import React from 'react'

// // const App = () => {

// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default App





// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>
// //       <h1 style={{color:"blue",fontSize:100,
// // backgroundColor:"orangered",


// //       }}>this is khushman</h1>

// // <div style={{height:100,
// //   width:100,
// //   backgroundColor:"blue"
// // }}>

// // </div>

// //     </div>
// //   )
// // }

// // export default App



// import React, { useState } from 'react'
// import HomePage from './pages/HomePage'
// import PlantPage from './pages/PlantPage'
// import BootStrapPage from './pages/BootStrapPage'
// import ExternalStyle from './pages/ExternalStyle'
// import StateEx from './components/StateEx'
// import LoginScreen from './auth/LoginScreen'
// import FormHandling from './components/FormHandling'
// import ListRendring from './components/ListRendring'
// import ListDoubt from './components/ListDoubt'
// import UseEffectEx from './components/UseEffectEx'
// import FetchEx from './components/FetchEx'
// const App = () => {

// const [isUser,setIsUser]=useState(true)

// if(isUser){
//   return <FetchEx/> 
// }
// else{
//   return <HomePage/>
// }

//   return (
//     <div>
//       {/* <HomePage/> */}
//       {/* <PlantPage/> */}
// {/* <BootStrapPage/> */}
// {/* <ExternalStyle/> */}
// {/*  */}
// {/* <StateEx/> */}
// {/* <FormHandling/> */}

// {/* <ListRendring/> */}
// {/* <ListDoubt/> */}


// {/* <UseEffectEx/> */}
// <FetchEx/>


// {/* {
//   isUser ? <HomePage/> : <LoginScreen/>
// } */}






//     </div>
//   )
// }

// export default App










// import React from 'react'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import NavBar from './components/NavBar'
// import Footer from './components/Footer'
// import HomePage from './pages/HomePage'
// import BootStrapPage from './pages/BootStrapPage'
// import PlantPage from './pages/PlantPage'


// const App = () => {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/boot' element={<BootStrapPage />} />
//         <Route path='/plant' element={<PlantPage />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   )
// }

// export default App




// import React from 'react'
// import UseRefEx from './components/UseRefEx'
// import UseMemeoEx from './components/UseMemeoEx'

// const App = () => {
//   return (
// <UseMemeoEx/>
//   )
// }

// export default App



// import React from 'react'
// import UserContext from './context/userContext'
// import UserScreen from './components/UserScreen'
// import UseMemeoEx from './components/UseMemeoEx'

// const App = () => {
//   const name="rohan verma"
//   return ( 
//     <UserContext.Provider value={name}>
//       <UserScreen />
//     <UseMemeoEx/>
//     </UserContext.Provider>
//   )
// }

// export default App





// your code for 10:30am 


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>hello bootstrap </h1>
//       <button className='btn btn-info'>click</button>


// <>
//   {/* Hello world */}
//   {/* <div id="carouselExample" className="carousel carousel-overlay slide">
//     <div className="carousel-inner rounded-5">
//       <div className="carousel-item active">
//         <img src="https://srv.carbonads.net/static/30242/271dc4f12a21734321a8a7c91a983d2402f2b34e" className="d-block w-100" alt="..." />
//       </div>
//       <div className="carousel-item">
//         <img src="https://srv.carbonads.net/static/30242/271dc4f12a21734321a8a7c91a983d2402f2b34e" className="d-block w-100" alt="..." />
//       </div>
//       <div className="carousel-item">
//         <img src="https://srv.carbonads.net/static/30242/271dc4f12a21734321a8a7c91a983d2402f2b34e" className="d-block w-100" alt="..." />
//       </div>
//     </div>
//     <div className="carousel-overlay-controls">
//       <div>
//         <button
//           className="btn-icon btn-sm btn-subtle theme-secondary"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-icon-prev" aria-hidden="true" />
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="btn-icon btn-sm btn-subtle theme-secondary"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="next"
//         >
//           <span className="carousel-icon-next" aria-hidden="true" />
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//       <div className="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide-to={0}
//           className="active"
//           aria-current="true"
//           aria-label="Slide 1"
//         />
//         <button
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide-to={1}
//           aria-label="Slide 2"
//         />
//         <button
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide-to={2}
//           aria-label="Slide 3"
//         />
//       </div>
//     </div>
//   </div> */}

// <button type="button" class="btn-solid theme-primary" commandfor="invokerDrawer" command="show-modal">
//   Open drawer
// </button>

// <dialog class="drawer drawer-start" tabindex="-1" id="invokerDrawer" aria-labelledby="invokerDrawerLabel">
//   <div class="drawer-header">
//     <h5 class="drawer-title" id="invokerDrawerLabel">Invoker Commands</h5>
//     <button type="button" class="btn-close" commandfor="invokerDrawer" command="close" aria-label="Close"></button>
//   </div>
//   <div class="drawer-body">
//     <p>This drawer opens with <code>command="show-modal"</code> and closes with <code>command="close"</code>. No Bootstrap JavaScript is involved.</p>
//   </div>
// </dialog>




// </>



//     </div>
//   )
// }

// export default App




// import React from 'react'
// import './pages/HomePage'
// import HomePage from './pages/HomePage'
// import BootStrapPage from './pages/BootStrapPage'
// const App = () => {
//   return (
//     <div>
//       <HomePage ></HomePage>
//       {/* <BootStrapPage/> */}

//     </div>
//   )
// }

// export default App





// 15 oct 
// react 2:30 pm 

// import React from 'react'
// import { UserProvider } from './context/userContext'
// import UserScreen from './components/UserScreen'

// const App = () => {
//   return (
//    <UserProvider>
//     <UserScreen/>

//    </UserProvider>
//   )
// }

// export default App




// import React from 'react'
// import CounterScreen from './components/CounterScreen'
// import UserScreen from './components/UserScreen'
// const App = () => {
//   return (
//     <>
//     <CounterScreen/>


//     </>
//   )
// }

// export default App



// import React from 'react'
// import { Text, View } from 'react-native'

// const UserScreen = () => (
//   <View>
//     <Text>User screen</Text>
//   </View>
// )

// const App = () => {
//   return (
//     <>
//       <UserScreen />


//     </>
//   )
// }

// export default App




// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import OnboardingScreen from './scr/Screen/OnboardingScreen'
// const App = () => {
//   return (
//   <OnboardingScreen/>
//   )
// }

// export default App

// const styles = StyleSheet.create({})





//  camera assess and image picker ascess ......




// import { StyleSheet, Text, View, Button, Image } from 'react-native'
// import React, { useState } from 'react'
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

// const App = () => {
//   const [image, setImage] = useState<string | null>(null)

//   const selectImage = () => {
//     const option = {
//       mediaType: 'photo' as const,
//       selectionLimit: 1,
//     }

//     launchImageLibrary(option, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker')
//       } else if (response.errorCode) {
//         console.log('Gallery Error:', response.errorMessage)
//       } else {
//         const uri = response.assets?.[0]?.uri
//         if (uri) {
//           setImage(uri)
//         }
//       }
//     })
//   }

//   // Camera Function
//   const openCamera = () => {
//     const options = {
//       mediaType: 'photo' as const,
//       cameraType: 'back' as const,
//       saveToPhotos: true,
//     }

//     launchCamera(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled camera')
//       } else if (response.errorCode) {
//         console.log('Camera Error:', response.errorMessage)
//       } else {
//         const uri = response.assets?.[0]?.uri
//         if (uri) {
//           setImage(uri)
//         }
//       }
//     })
//   }

//   const removeImage = () => {
//     setImage(null)
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Image picker app</Text>
//       <Button
//         title="Upload Image"
//         onPress={selectImage}
//       />
//       {image && (
//         <>
//           <Image
//             source={{ uri: image }}
//             style={styles.image}
//             resizeMode="cover"
//           />
//           <Button
//             title="Remove Image"
//             onPress={removeImage}
//             color="red"
//           />
//         </>
//       )}
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 20,
//     marginBottom: 15,
//     borderRadius: 10,
//   },
//   spacing: {
//     height: 15,
//   },
// })





// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet,Alert} from 'react-native';
// import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
// import DocumentPicker from 'react-native-document-picker';

// export default function App() {

//   const [file, setFile] = useState<any>(null);

//  const chooseImage = async () => {
//   const result = await launchImageLibrary({ mediaType: 'photo' });
//   if (!result.didCancel && result.assets?.[0]) {
//     setFile(result.assets[0]);
//   }
// };

// const openCamera = async () => {
//   const result = await launchCamera({ mediaType: 'photo' });
//   if (!result.didCancel && result.assets?.[0]) {
//     setFile(result.assets[0]);
//   }
// };

// const chooseDocument = async () => {
//   const result = await DocumentPicker.pick();
//   setFile(result[0]);
// };

//   const removeFile = () => {
//     setFile(null);
//   };


//   const replaceFile = () => {
//     chooseImage();
//   };


//   const uploadFile = () => {

//     if (!file) {
//       Alert.alert("Please select a file first");
//     } else {
//       Alert.alert("File uploaded successfully!");
//     }

//   };

//   return (

//     <View style={styles.container}>

//       <Text style={styles.heading}>
//         Upload Your Files
//       </Text>

//       <Text style={styles.subtitle}>
//         Upload images, photos or documents
//       </Text>



//       <TouchableOpacity style={styles.button} onPress={chooseImage}>
//         <Text style={styles.buttonText}>🖼 Choose Image (Gallery)</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={openCamera}>
//         <Text style={styles.buttonText}>📷 Open Camera</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={chooseDocument}>
//         <Text style={styles.buttonText}>📄 Select Document (PDF/DOCX)</Text>
//       </TouchableOpacity>



//       <View style={styles.preview}>

//         <Text style={styles.previewHeading}>
//           Selected File Preview
//         </Text>

//         {file ? (

//           <View>

//             {file.type?.startsWith('image/') ? (

//               <Image
//                 source={{ uri: file.uri }}
//                 style={styles.image}
//               />

//             ) : (

//               <Text style={styles.fileName}>
//                 📄 {file.name}
//               </Text>

//             )}

//             <Text style={styles.fileType}>
//               File Type: {file.type || 'Document'}
//             </Text>

//             <View style={styles.row}>

//               <TouchableOpacity
//                 style={styles.smallButton}
//                 onPress={replaceFile}
//               >
//                 <Text style={styles.buttonText}>Replace</Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={styles.removeButton}
//                 onPress={removeFile}
//               >
//                 <Text style={styles.buttonText}>Remove</Text>
//               </TouchableOpacity>

//             </View>

//           </View>

//         ) : (

//           <Text style={styles.noFile}>
//             No file selected yet
//           </Text>

//         )}

//       </View>


//       <TouchableOpacity
//         style={styles.uploadButton}
//         onPress={uploadFile}
//       >
//         <Text style={styles.uploadText}>
//           Upload
//         </Text>
//       </TouchableOpacity>

//     </View>

//   );
// }

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#F8F5FF',
//     padding: 20,
//     justifyContent: 'center'
//   },

//   heading: {
//     fontSize: 27,
//     fontWeight: 'bold',
//     color: '#6D28D9',
//     textAlign: 'center'
//   },

//   subtitle: {
//     textAlign: 'center',
//     color: 'gray',
//     margin: 10,
//     marginBottom: 25
//   },

//   button: {
//     backgroundColor: '#EDE9FE',
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//     alignItems: 'center'
//   },

//   buttonText: {
//     color: '#6D28D9',
//     fontWeight: 'bold'
//   },

//   preview: {
//     backgroundColor: 'white',
//     padding: 18,
//     borderRadius: 15,
//     marginTop: 15
//   },

//   previewHeading: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#6D28D9',
//     marginBottom: 15
//   },

//   image: {
//     width: '100%',
//     height: 160,
//     borderRadius: 12
//   },

//   fileName: {
//     fontSize: 15,
//     color: '#333',
//     margin: 10
//   },

//   fileType: {
//     color: 'gray',
//     marginTop: 10
//   },

//   noFile: {
//     textAlign: 'center',
//     color: 'gray',
//     padding: 20
//   },

//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 15
//   },

//   smallButton: {
//     backgroundColor: '#EDE9FE',
//     padding: 12,
//     borderRadius: 10,
//     flex: 1,
//     alignItems: 'center',
//     marginRight: 5
//   },

//   removeButton: {
//     backgroundColor: '#FEE2E2',
//     padding: 12,
//     borderRadius: 10,
//     flex: 1,
//     alignItems: 'center',
//     marginLeft: 5
//   },

//   uploadButton: {
//     backgroundColor: '#6D28D9',
//     padding: 16,
//     borderRadius: 12,
//     marginTop: 20
//   },

//   uploadText: {
//     color: 'white',
//     fontSize: 17,
//     fontWeight: 'bold',
//     textAlign: 'center'
//   }

// });





import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { launchImageLibrary, launchCamera, Asset } from 'react-native-image-picker';
import {errorCodes, isErrorWithCode,pick,types,
} from '@react-native-documents/picker';
type SelectedFile = Asset & { name?: string; };

export default function App() {

  const [file, setFile] = useState<SelectedFile | null>(null);

  // Gallery
  const chooseImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo'
    });

    if (!result.didCancel && result.assets) {
      setFile(result.assets[0]);
      console.log("File ready for upload");
    }
  };

  // Camera
  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo'
    });

    if (!result.didCancel && result.assets) {
      setFile(result.assets[0]);
      console.log("File ready for upload");
    }
  };

  // Document
  const chooseDocument = async () => {
    try {
      const result = await pick({
        type: [types.pdf, types.docx],
      });

      const document = result[0];
      setFile({
        uri: document.uri,
        name: document.name ?? undefined,
        type: document.type ?? undefined,
      });
      console.log("File ready for upload");

    } catch (error) {
      if (!isErrorWithCode(error) || error.code !== errorCodes.OPERATION_CANCELED) {
        console.log("Error selecting document");
      }
    }
  };

  // Remove
  const removeFile = () => {
    setFile(null);
  };

  // Replace
  const replaceFile = () => {
    chooseImage();
  };

  // Upload
  const uploadFile = () => {
    if (!file) {
      console.log("Please select a file first");
    } else {
      console.log("File uploaded successfully!");
    }

  };

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        Upload Your Files
      </Text>

      <Text style={styles.subtitle}>
        Upload images, photos or documents
      </Text>

      {/* Gallery */}

      <TouchableOpacity
        style={styles.button}onPress={chooseImage} >
        <Text style={styles.buttonText}>Choose Image (Gallery)</Text>
      </TouchableOpacity>

      {/* Camera */}

      <TouchableOpacity
        style={styles.button}
        onPress={openCamera}
      >
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>

      {/* Document */}

      <TouchableOpacity
        style={styles.button}
        onPress={chooseDocument}
      >
        <Text style={styles.buttonText}>
          📄 Select Document (PDF/DOCX)
        </Text>
      </TouchableOpacity>

      {/* Preview */}

      <View style={styles.preview}>

        <Text style={styles.previewHeading}>
          Selected File Preview
        </Text>

        {file ? (

          <View>

            {file.type?.startsWith('image/') ? (

              <Image
                source={{ uri: file.uri }}
                style={styles.image}
              />

            ) : (

              <Text style={styles.fileName}>
                📄 {file.name}
              </Text>

            )}

            <Text style={styles.fileType}>
              File Type: {file.type || 'Document'}
            </Text>

            <View style={styles.row}>

              <TouchableOpacity
                style={styles.smallButton}
                onPress={replaceFile}
              >
                <Text style={styles.buttonText}>
                  Replace
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.removeButton}
                onPress={removeFile}
              >
                <Text style={styles.buttonText}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        ) : (

          <Text style={styles.noFile}>
            No file selected yet
          </Text>
        )}

      </View>

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={uploadFile}
      >
        <Text style={styles.uploadText}>
          Upload
        </Text>
      </TouchableOpacity>

    </View>

  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8F5FF',
    padding: 20,
    justifyContent: 'center'
  },

  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#6D28D9',
    textAlign: 'center'
  },

  subtitle: {
    textAlign: 'center',
    color: 'gray',
    margin: 10,
    marginBottom: 25
  },

  button: {
    backgroundColor: '#EDE9FE',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center'
  },

  buttonText: {
    color: '#6D28D9',
    fontWeight: 'bold'
  },

  preview: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 15,
    marginTop: 15
  },

  previewHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6D28D9',
    marginBottom: 15
  },

  image: {
    width: '100%',
    height: 160,
    borderRadius: 12
  },

  fileName: {
    fontSize: 15,
    color: '#333',
    margin: 10
  },

  fileType: {
    color: 'gray',
    marginTop: 10
  },

  noFile: {
    textAlign: 'center',
    color: 'gray',
    padding: 20
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },

  smallButton: {
    backgroundColor: '#EDE9FE',
    padding: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginRight: 5
  },

  removeButton: {
    backgroundColor: '#FEE2E2',
    padding: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginLeft: 5
  },

  uploadButton: {
    backgroundColor: '#6D28D9',
    padding: 16,
    borderRadius: 12,
    marginTop: 20
  },

  uploadText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  }

});