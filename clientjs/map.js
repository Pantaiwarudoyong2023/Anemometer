// Provide your access token
// Create a map in the div #map
var config = {
    apiKey: "AIzaSyBYVwVZUBLXSm7iR5Fp6k-dziJGEuhwExk",
    authDomain: "megaboth007.firebaseapp.com",
    databaseURL: "https://megaboth007.firebaseio.com",
    projectId: "megaboth007",
    storageBucket: "megaboth007.appspot.com",
    messagingSenderId: "942424390212",
    appId: "1:942424390212:web:c3622743b0fba57b5a1a11"
  
    };
    
  firebase.initializeApp(config);
  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var db = firebase.database();
  var p1 = db.ref("/point1");
  var p2 = db.ref("/point2");
  var p3 = db.ref("/point3");
  var p4 = db.ref("/point4");
  
  
  var div = document.getElementById('map'); 
  var map = L.map(div).setView([ -8.149580, 113.710700 ], 18);
  
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmFyZWV2ZTIiLCJhIjoiY2tmazM5OG92MG9vazJ4cGpuMG02bzJsaSJ9._uU8ojeLGV9GJEeUKhvsqQ', {
              maxZoom: 22,
              id: 'nareeve2/ckfk3lm4h1xoi19lvgl5nnk2h',
              tileSize: 512,
              zoomOffset: -1
          }).addTo(map);
  
  // Create a divicon
  var icon_1 = L.divIcon({
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, 0],
    shadowSize: [0, 0],
    className: 'animated-icon_1 my-icon_1',
    html: '<div class="inner-icon_1"></div>'
  });
  
  var icon_2 = L.divIcon({
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, 0],
    shadowSize: [0, 0],
    className: 'animated-icon_2 my-icon_2',
    html: '<div class="inner-icon_2"></div>'
  });
  var icon_3 = L.divIcon({
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, 0],
    shadowSize: [0, 0],
    className: 'animated-icon_3 my-icon_3',
    html: '<div class="inner-icon_3"></div>'
  });
  var icon_4 = L.divIcon({
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, 0],
    shadowSize: [0, 0],
    className: 'animated-icon_4 my-icon_4',
    html: '<div class="inner-icon_4"></div>'
  });
  
  //marker latlng
  var ll_1 = L.latLng(-8.149580, 113.710700)
  var ll_2 = L.latLng(-8.148580, 113.710700)
  var ll_3 = L.latLng(-8.148580, 113.711700)
  var ll_4 = L.latLng(-8.148580, 113.711600)
  
  var marker_1 = L.marker(ll_1, {icon: icon_1,})
  var marker_2 = L.marker(ll_2, {icon: icon_2,})
  var marker_3 = L.marker(ll_3, {icon: icon_3,})
  var marker_4 = L.marker(ll_4, {icon: icon_4,})
  
  marker_1.addTo(map)
  marker_2.addTo(map)
  marker_3.addTo(map)
  marker_4.addTo(map)
  
  marker_1.bindPopup("point 1")
  marker_2.bindPopup("point 2")
  marker_3.bindPopup("point 3")
  marker_4.bindPopup("point 4")
  
  doAnimations()
    setInterval(function(){
      doAnimations();
    }, 4000)
    
  function doAnimations(){
    var myIcon_1 = document.querySelector('.my-icon_1');
    var myIcon_2 = document.querySelector('.my-icon_2');
    var myIcon_3 = document.querySelector('.my-icon_3');
    var myIcon_4 = document.querySelector('.my-icon_4');
    setTimeout(function(){
      p1.on("value", function(snapshot) {
        inc = (snapshot.val());
        if (inc==0){
          myIcon_1.style.width = '100px'
          myIcon_1.style.height = '100px'
          myIcon_1.style.marginLeft = '-50px'
          myIcon_1.style.marginTop = '-50px'
          myIcon_1.style.backgroundColor = 'rgba(0, 255, 17, 0.249)'
          myIcon_1.style.opacity = "5";
          document.getElementById("vp1").innerHTML="aman";
          document.getElementById("alarm_1").pause();
          document.getElementById("warn_1").pause();
  
        }
  
        else if (inc==1){
  
          myIcon_1.style.width = '100px'
          myIcon_1.style.height = '100px'
          myIcon_1.style.marginLeft = '-50px'
          myIcon_1.style.marginTop = '-50px'
          myIcon_1.style.backgroundColor = 'rgba(246, 255, 0, 0.317)'
          myIcon_1.style.opacity = "5";
          document.getElementById("vp1").innerHTML="Siaga";
          document.getElementById("alarm_1").pause();
          document.getElementById("warn_1").play();
        
        }
        else if (inc==2){
          myIcon_1.style.width = '100px'
          myIcon_1.style.height = '100px'
          myIcon_1.style.marginLeft = '-50px'
          myIcon_1.style.marginTop = '-50px'
          myIcon_1.style.backgroundColor = 'rgba(255, 0, 0, 0.249)'
          myIcon_1.style.opacity = "5";
          document.getElementById("vp1").innerHTML="Bahaya";
          document.getElementById("alarm_1").play();
          document.getElementById("warn_1").pause();
  
        
        }
       
            });
      }, 1000)
    setTimeout(function(){
      p2.on("value", function(snapshot) {
        inc = (snapshot.val());
        if (inc==0){
          myIcon_2.style.width = '100px'
          myIcon_2.style.height = '100px'
          myIcon_2.style.marginLeft = '-50px'
          myIcon_2.style.marginTop = '-50px'
          myIcon_2.style.backgroundColor = 'rgba(0, 255, 17, 0.249)'
          myIcon_2.style.opacity = "5";
          document.getElementById("vp2").innerHTML="Aman";
          document.getElementById("alarm_2").pause();
          document.getElementById("warn_2").pause();
  
        }
  
        else if (inc==1){
          myIcon_2.style.width = '100px'
          myIcon_2.style.height = '100px'
          myIcon_2.style.marginLeft = '-50px'
          myIcon_2.style.marginTop = '-50px'
          myIcon_2.style.backgroundColor = 'rgba(246, 255, 0, 0.317)'
          myIcon_2.style.opacity = "5";
          document.getElementById("vp2").innerHTML="Siaga";
          document.getElementById("alarm_2").pause();
          document.getElementById("warn_2").play();
  
        }
        else if (inc==2){
          myIcon_2.style.width = '100px'
          myIcon_2.style.height = '100px'
          myIcon_2.style.marginLeft = '-50px'
          myIcon_2.style.marginTop = '-50px'
          myIcon_2.style.backgroundColor = 'rgba(255, 0, 0, 0.249)'
          myIcon_2.style.opacity = "5";
          document.getElementById("vp2").innerHTML="Bahaya";
          document.getElementById("alarm_2").play();
          document.getElementById("warn_2").pause();
  
        }
            });
      }, 1000)
    setTimeout(function(){
      p3.on("value", function(snapshot) {
          inc = (snapshot.val());
          if (inc==0){
            myIcon_3.style.width = '100px'
            myIcon_3.style.height = '100px'
            myIcon_3.style.marginLeft = '-50px'
            myIcon_3.style.marginTop = '-50px'
            myIcon_3.style.backgroundColor = 'rgba(0, 255, 17, 0.249)'
            myIcon_3.style.opacity = "5";
            document.getElementById("vp3").innerHTML="Aman";
            document.getElementById("alarm_3").pause();
            document.getElementById("warn_3").pause();
  
          }
          else if (inc==1){
            myIcon_3.style.width = '100px'
            myIcon_3.style.height = '100px'
            myIcon_3.style.marginLeft = '-50px'
            myIcon_3.style.marginTop = '-50px'
            myIcon_3.style.backgroundColor = 'rgba(246, 255, 0, 0.317)'
            myIcon_3.style.opacity = "5"; 
            document.getElementById("vp3").innerHTML="Siaga";    
            document.getElementById("alarm_3").pause();
            document.getElementById("warn_3").play();
     
          }
          else if (inc==2){
            myIcon_3.style.width = '100px'
            myIcon_3.style.height = '100px'
            myIcon_3.style.marginLeft = '-50px'
            myIcon_3.style.marginTop = '-50px'
            myIcon_3.style.backgroundColor = 'rgba(255, 0, 0, 0.249)'
            myIcon_3.style.opacity = "5";
            document.getElementById("vp3").innerHTML="Bahaya";    
            document.getElementById("alarm_3").play();
          document.getElementById("warn_3").pause();
      
          } 
              });
      }, 1000)
    setTimeout(function(){
          p4.on("value", function(snapshot) {
              inc = (snapshot.val());
              if (inc==0){
                myIcon_4.style.width = '100px'
                myIcon_4.style.height = '100px'
                myIcon_4.style.marginLeft = '-50px'
                myIcon_4.style.marginTop = '-50px'
                myIcon_4.style.backgroundColor = 'rgba(0, 255, 17, 0.249)'
                myIcon_4.style.opacity = "5";
                document.getElementById("vp4").innerHTML="Aman";
                document.getElementById("alarm_4").pause();
                document.getElementById("warn_4").pause();
  
              }
              else if (inc==1){
                myIcon_4.style.width = '100px'
                myIcon_4.style.height = '100px'
                myIcon_4.style.marginLeft = '-50px'
                myIcon_4.style.marginTop = '-50px'
                myIcon_4.style.backgroundColor = 'rgba(246, 255, 0, 0.317)'
                myIcon_4.style.opacity = "5";     
                document.getElementById("vp4").innerHTML="Siaga";   
                document.getElementById("alarm_4").pause();
                document.getElementById("warn_4").play();
  
              }
              else if (inc==2){
                myIcon_4.style.width = '100px'
                myIcon_4.style.height = '100px'
                myIcon_4.style.marginLeft = '-50px'
                myIcon_4.style.marginTop = '-50px'
                myIcon_4.style.backgroundColor = 'rgba(255, 0, 0, 0.249)'
                myIcon_4.style.opacity = "5";   
                document.getElementById("vp4").innerHTML="Bahaya";  
                document.getElementById("alarm_4").play();
                document.getElementById("warn_4").pause();
     
              } 
                  });
      }, 1000)
  
  
  setTimeout(function(){
  
  
        myIcon_1.style.width = '30px'
        myIcon_1.style.height = '30px'
        myIcon_1.style.marginLeft = '-15px'
        myIcon_1.style.marginTop = '-15px'
        myIcon_1.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  
        myIcon_2.style.width = '30px'
        myIcon_2.style.height = '30px'
        myIcon_2.style.marginLeft = '-15px'
        myIcon_2.style.marginTop = '-15px'
        myIcon_2.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
      
        myIcon_3.style.width = '30px'
        myIcon_3.style.height = '30px'
        myIcon_3.style.marginLeft = '-15px'
        myIcon_3.style.marginTop = '-15px'
        myIcon_3.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  
        myIcon_4.style.width = '30px'
        myIcon_4.style.height = '30px'
        myIcon_4.style.marginLeft = '-15px'
        myIcon_4.style.marginTop = '-15px'
        myIcon_4.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
      
      
      }, 4000)
  }