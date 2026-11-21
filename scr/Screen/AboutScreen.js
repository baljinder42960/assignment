import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ABoutScreen = () => {
  return (
    <View>
      <Text>ABoutScreen</Text>
    </View>
  )
}

export default ABoutScreen

const styles = StyleSheet.create({})




// Create a professional and modern React Native Upload Screen application.

// App Title: Upload Your Files

// Requirements:

// Create a clean and attractive UI with a heading "Upload Your Files".

// Add three buttons:

// Choose Image (Gallery)

// Open Camera

// Select Document (PDF/DOCX)

// Use react-native-image-picker for gallery and camera functionality.

// Use react-native-document-picker for selecting documents.

// Display selected images in a preview section.

// Display document name and file type.

// Add Remove and Replace buttons for images and documents.

// Use useState() to manage selected files.

// Add an Upload button with validation.

// Show "Please select a file first" if no file is selected.

// Show "File ready for upload" when a file is selected.

// Show an upload success message after simulated upload.

// Design:

// Modern and professional mobile app UI.

// White background with attractive purple and light gradient colors.

// Rounded buttons and cards.

// Upload icons and camera icons.

// Proper spacing and alignment.

// Responsive layout.

// Use React Native StyleSheet.

// Technology:

// React Native (JavaScript)

// Functional Components

// useState()

// react-native-image-picker

// react-native-document-picker

// Create a complete working application with clean code and proper folder structure. No backend or API is required.

// Today at 12:01 AM



// Thought for 14s
// Lovable builds web applications with React and Tailwind rather than native React Native projects. I can build this exact file upload experience as a mobile-responsive web app with the purple gradient styling, file/camera picker, previews, and simulated upload flow.

// If you specifically need React Native source code with react-native-image-picker and react-native-document-picker to plug into an existing mobile app, I can also provide the complete code and folder structure directly here in chat. Which direction works best for you?


// react native ch na de simple code likh de bs

// Today at 12:02 AM



// Thought for 27s
// Aah reha simple React component code. Is vich standard HTML5 file inputs, clean state management, inline SVGs (no external icon dependencies needed), te purple gradient modern mobile card design hai:

// import React, { useState, useRef } from "react";

// export default function FileUploadScreen() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState("idle"); // idle | ready | uploading | success | error
//   const [statusMessage, setStatusMessage] = useState("");
//   const [progress, setProgress] = useState(0);

//   const galleryInputRef = useRef(null);
//   const cameraInputRef = useRef(null);
//   const documentInputRef = useRef(null);

//   // File selection handler
//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const isImage = file.type.startsWith("image/");
//     if (isImage) {
//       setPreviewUrl(URL.createObjectURL(file));
//     } else {
//       setPreviewUrl(null);
//     }

//     setSelectedFile(file);
//     setUploadStatus("ready");
//     setStatusMessage("File ready for upload");
//     setProgress(0);
//   };

//   // Remove selected file
//   const handleRemove = () => {
//     if (previewUrl) URL.revokeObjectURL(previewUrl);
//     setSelectedFile(null);
//     setPreviewUrl(null);
//     setUploadStatus("idle");
//     setStatusMessage("");
//     setProgress(0);

//     // Reset input elements
//     if (galleryInputRef.current) galleryInputRef.current.value = "";
//     if (cameraInputRef.current) cameraInputRef.current.value = "";
//     if (documentInputRef.current) documentInputRef.current.value = "";
//   };

//   // Replace file: trigger the gallery picker
//   const handleReplace = () => {
//     if (galleryInputRef.current) galleryInputRef.current.click();
//   };

//   // Upload handler with validation & simulation
//   const handleUpload = () => {
//     if (!selectedFile) {
//       setUploadStatus("error");
//       setStatusMessage("Please select a file first");
//       return;
//     }

//     setUploadStatus("uploading");
//     setStatusMessage("Uploading file...");
//     setProgress(15);

//     let currentProgress = 15;
//     const interval = setInterval(() => {
//       currentProgress += 25;
//       if (currentProgress >= 100) {
//         clearInterval(interval);
//         setProgress(100);
//         setUploadStatus("success");
//         setStatusMessage("File uploaded successfully!");
//       } else {
//         setProgress(currentProgress);
//       }
//     }, 350);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden">
//         {/* Purple Gradient Header */}
//         <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 p-6 text-white text-center">
//           <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm mb-3">
//             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//             </svg>
//           </div>
//           <h1 className="text-2xl font-bold tracking-tight">Upload Your Files</h1>
//           <p className="text-purple-100 text-xs mt-1">Upload images, photos, or documents</p>
//         </div>

//         <div className="p-6 space-y-5">
//           {/* Hidden File Inputs */}
//           <input
//             ref={galleryInputRef}
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleFileChange}
//           />
//           <input
//             ref={cameraInputRef}
//             type="file"
//             accept="image/*"
//             capture="environment"
//             className="hidden"
//             onChange={handleFileChange}
//           />
//           <input
//             ref={documentInputRef}
//             type="file"
//             accept=".pdf,.doc,.docx,application/pdf,application/msword"
//             className="hidden"
//             onChange={handleFileChange}
//           />

//           {/* Action Buttons */}
//           <div className="grid grid-cols-3 gap-2.5">
//             {/* Gallery Button */}
//             <button
//               onClick={() => galleryInputRef.current?.click()}
//               className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-purple-100 hover:border-purple-400 bg-purple-50/50 hover:bg-purple-50 transition active:scale-95"
//             >
//               <svg className="w-6 h-6 text-purple-600 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//               <span className="text-xs font-semibold text-slate-700 text-center">Gallery</span>
//             </button>

//             {/* Camera Button */}
//             <button
//               onClick={() => cameraInputRef.current?.click()}
//               className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-purple-100 hover:border-purple-400 bg-purple-50/50 hover:bg-purple-50 transition active:scale-95"
//             >
//               <svg className="w-6 h-6 text-purple-600 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//               <span className="text-xs font-semibold text-slate-700 text-center">Camera</span>
//             </button>

//             {/* Document Button */}
//             <button
//               onClick={() => documentInputRef.current?.click()}
//               className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-purple-100 hover:border-purple-400 bg-purple-50/50 hover:bg-purple-50 transition active:scale-95"
//             >
//               <svg className="w-6 h-6 text-purple-600 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//               <span className="text-xs font-semibold text-slate-700 text-center">Document</span>
//             </button>
//           </div>

//           {/* Preview Section */}
//           {selectedFile ? (
//             <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-4 space-y-3">
//               <div className="text-xs font-semibold uppercase tracking-wider text-purple-800">
//                 Selected File Preview
//               </div>

//               {previewUrl ? (
//                 <div className="relative rounded-xl overflow-hidden max-h-48 bg-slate-900 flex items-center justify-center">
//                   <img
//                     src={previewUrl}
//                     alt="Preview"
//                     className="w-full h-48 object-cover rounded-xl"
//                   />
//                 </div>
//               ) : (
//                 <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-purple-100">
//                   <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs uppercase">
//                     {selectedFile.name.split(".").pop() || "DOC"}
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-semibold text-slate-800 truncate">
//                       {selectedFile.name}
//                     </p>
//                     <p className="text-xs text-slate-500">
//                       {(selectedFile.size / 1024).toFixed(1)} KB • {selectedFile.type || "Document"}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Remove & Replace Buttons */}
//               <div className="flex gap-2 pt-1">
//                 <button
//                   onClick={handleReplace}
//                   className="flex-1 py-2 text-xs font-semibold text-purple-700 bg-white border border-purple-200 hover:bg-purple-100/50 rounded-xl transition"
//                 >
//                   Replace
//                 </button>
//                 <button
//                   onClick={handleRemove}
//                   className="flex-1 py-2 text-xs font-semibold text-rose-600 bg-white border border-rose-200 hover:bg-rose-50 rounded-xl transition"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center text-slate-400">
//               <p className="text-sm">No file selected yet</p>
//             </div>
//           )}

//           {/* Status / Validation Feedback */}
//           {statusMessage && (
//             <div
//               className={`text-xs text-center font-medium py-2 px-3 rounded-xl transition ${
//                 uploadStatus === "error"
//                   ? "bg-rose-50 text-rose-600 border border-rose-200"
//                   : uploadStatus === "ready"
//                   ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
//                   : uploadStatus === "uploading"
//                   ? "bg-purple-50 text-purple-700 border border-purple-200"
//                   : "bg-emerald-50 text-emerald-700 border border-emerald-200"
//               }`}
//             >
//               {statusMessage}
//             </div>
//           )}

//           {/* Progress Bar (During Upload) */}
//           {uploadStatus === "uploading" && (
//             <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
//               <div
//                 className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//           )}

//           {/* Upload Button */}
//           <button
//             onClick={handleUpload}
//             disabled={uploadStatus === "uploading"}
//             className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-semibold shadow-lg shadow-purple-500/25 hover:opacity-95 active:scale-[0.98] transition disabled:opacity-50"
//           >
//             {uploadStatus === "uploading" ? "Uploading..." : "Upload"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }