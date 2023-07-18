var selectedFile; 
     function getfile() 
     { 
         var pic = document.getElementById("photo"); 
 
         // selected file is that file which user chosen by html form 
         selectedFile = pic.files[0]; 
 
         // make save button disabled for few seconds that has id='submit_link' 
         document.getElementById('submit_link').setAttribute('disabled', 'true'); 
         myfunction(); // call below written function 
     } 
     function myfunction() 
     { 
         // select unique name for everytime when image uploaded 
         // Date.now() is function that give gambarcurrent timestamp 
         var name="1"+Date.now(); 
 
         // make ref to your firebase storage and select images folder 
         var storageRef = firebase.storage().ref('/images/'+ name); 
 
         // put file to firebase 
         var uploadTask = storageRef.put(selectedFile); 
 
         // all working for progress bar that in html 
         // to indicate image uploading... report 
         uploadTask.on('state_changed', function(snapshot){ 
             var progress = 
             (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
             var uploader = document.getElementById('uploader'); 
             uploader.value=progress; 
             switch (snapshot.state) { 
                 case firebase.storage.TaskState.PAUSED: 
                 console.log('Upload is paused'); 
                 break; 
                 case firebase.storage.TaskState.RUNNING: 
                 console.log('Upload is running'); 
                 break; 
             } 
         }, function(error) {console.log(error); 
         }, function() { 
 
             // get the uploaded image url back 
             uploadTask.snapshot.ref.getDownloadURL().then( 
                 function myFunction(downloadURL) { 
                 
           document.getElementById("myText").value = (downloadURL);
           document.getElementById("myImg").src =(downloadURL);
                   

           console.log(downloadURL);     
    
             // You get your url from here 
             
                 console.log('File available at', downloadURL); 
                     
             // print the image url 
             
     
             document.getElementById('submit_link').removeAttribute('disabled'); 
             }); 
         }); 
     }; 
