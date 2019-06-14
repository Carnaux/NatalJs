let objects = [];
let logoNatalJs;
let logoTeam;
let logoNatalNet;
let logo3;
let logoGit;

let tempNet;
let tempTeam;
let tempMesh;
let temp3;
let tempGit;

let loaded = false;
let rotate = false;
let logoRotate;
let inter = false;

let stage1State = false;

let stages = 0;
let t = 0;

var mouse = new THREE.Vector2();

var scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(255,255,255)");
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
var renderDiv = document.getElementById("renderDiv");
renderDiv.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls( camera,  renderDiv);
controls.saveState();
console.log(controls)
var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 2 );
scene.add( light );

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 10;


importPrefabs();

window.addEventListener( 'resize', onWindowResize, false );
window.addEventListener( 'mousedown', onDocumentMouseDown, false );
document.addEventListener("keydown", onDocumentKeyDown, false);

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}


function animate() {
    requestAnimationFrame( animate );

    if(!loaded){
        if ( tempMesh instanceof THREE.Mesh) {
            renderDiv.style.display = "block";

            addPrefabs();
        }
    }
    if(rotate){  
        logoNatalJs.rotation.z += 0.0174533;    
        
    }
    if(inter){
        if(t < 0.9){
            t += 0.01;
            let y = 8 * t;
            let z = -(3) * t;
            logoNatalJs.position.set(logoNatalJs.position.x, y, z);
        }else{
            inter = false;
        }
       
    }
    if(stages == 1){
        logoNatalNet.rotation.z += 0.0174533;
        logoTeam.rotation.z += 0.0174533;   
    }else if(stages == 2){
        logo3.rotation.z += 0.0174533;  
    }else{
        logoGit.rotation.z += 0.0174533;  
    }
    controls.update();
    
    

    renderer.render( scene, camera );
};

animate();

function addPrefabs(){
    logoGit = new THREE.Mesh(tempGit.geometry, tempGit.material);
    logoGit.rotation.x = Math.PI/2;
    logoGit.name = "logoGit";
    logoGit.visible = false;
    scene.add(logoGit);

    logo3 = new THREE.Mesh(temp3.geometry, temp3.material);
    logo3.rotation.x = Math.PI/2;
    logo3.name = "logo3";
    logo3.visible = false;
    scene.add(logo3);

    logoTeam = new THREE.Mesh(tempTeam.geometry, tempTeam.material);
    logoTeam.rotation.x = Math.PI/2;
    logoTeam.name = "logoTeam";
    logoTeam.position.x = -6;
    logoTeam.position.y = -3.5;
    logoTeam.scale.set(0.5,0.5,0.5);
    logoTeam.visible = false;
    scene.add(logoTeam);

    logoNatalNet = new THREE.Mesh(tempNet.geometry, tempNet.material);
    logoNatalNet.material.transparent = true;
    logoNatalNet.material.opacity = 0.75;
    logoNatalNet.rotation.x = Math.PI/2;
    logoNatalNet.name = "logoNatalNet";
    scene.add(logoNatalNet);
    logoNatalNet.position.x = -8.5;
    logoNatalNet.position.y = -3.5;
    logoNatalNet.scale.set(0.5,0.5,0.5);
    logoNatalNet.visible = false;
    

    logoNatalJs = new THREE.Mesh(tempMesh.geometry, tempMesh.material);
    logoNatalJs.rotation.x = Math.PI/2;
    logoNatalJs.name = "logoNatal";
    objects.push(logoNatalJs);
    scene.add(logoNatalJs);
    loaded = !loaded;
    console.clear();
}

function importPrefabs(){
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath( 'src/models/nataljs/' );
    var url = "git.mtl";
    mtlLoader.load( url, function( materials ) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        objLoader.setPath( 'src/models/nataljs/' );
        objLoader.load( 'git.obj', function ( object ) {

            
           
            object.traverse( function ( child ) {

                if ( child instanceof THREE.Mesh ) {
                    tempGit = new THREE.Mesh(child.geometry, child.material);
                }
            } );

        });

    });

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath( 'src/models/nataljs/' );
    var url = "logoThree.mtl";
    mtlLoader.load( url, function( materials ) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        objLoader.setPath( 'src/models/nataljs/' );
        objLoader.load( 'logoThree.obj', function ( object ) {

            
           
            object.traverse( function ( child ) {

                if ( child instanceof THREE.Mesh ) {
                    temp3 = new THREE.Mesh(child.geometry, child.material);
                }
            } );

        });

    });

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath( 'src/models/nataljs/' );
    var url = "logoTeam.mtl";
    mtlLoader.load( url, function( materials ) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        objLoader.setPath( 'src/models/nataljs/' );
        objLoader.load( 'logoTeam.obj', function ( object ) {

            
           
            object.traverse( function ( child ) {

                if ( child instanceof THREE.Mesh ) {
                    tempTeam = new THREE.Mesh(child.geometry, child.material);
                }
            } );

        });

    });

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath( 'src/models/nataljs/' );
    var url = "logoNatalNet.mtl";
    mtlLoader.load( url, function( materials ) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        objLoader.setPath( 'src/models/nataljs/' );
        objLoader.load( 'logoNatalNet.obj', function ( object ) {

            
           
            object.traverse( function ( child ) {

                if ( child instanceof THREE.Mesh ) {
                    tempNet = new THREE.Mesh(child.geometry, child.material);
                }
            } );

        });

    });

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath( 'src/models/nataljs/' );
    var url = "logoNatal.mtl";
    mtlLoader.load( url, function( materials ) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        objLoader.setPath( 'src/models/nataljs/' );
        objLoader.load( 'logoNatal.obj', function ( object ) {

            
           
            object.traverse( function ( child ) {

                if ( child instanceof THREE.Mesh ) {
                    tempMesh = new THREE.Mesh(child.geometry, child.material);
                }
            } );

        });

    });

}

function onDocumentMouseDown(event) {
    //event.preventDefault();
  
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;
  
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
  
    let intersects = raycaster.intersectObjects(objects);

    
    if(intersects.length > 0){
        let name = intersects[0].object.name
        
        if(name == "logoNatal"){
            if(stages == 0){
                initPresentation(); 
            }

        }
    }
} 

function resetCam(){
        controls.reset();
        camera.position.z = 10;
}

function initPresentation(){
    rotate = !rotate; 
    inter = true;
    logoRotate = setInterval(function(){rotate = !rotate;  logoNatalJs.rotation.z = 0;}, 6000);
    stages++;
    stage1();
    
}

function onDocumentKeyDown(event) {
    let keyCode = event.which;
    if (keyCode == 13) {
        nextStage(); 
    }
};

function stage1(){
    stage1State = true;
    logoTeam.visible = true;
    logoNatalNet.visible = true;
    document.getElementById("initial").style.display = "block";
    document.getElementById("advBt").style.display = "block";
    
}

function stage2(){
    stage1State = false;
    logoTeam.visible = false;
    logoNatalNet.visible = false;
    logoNatalJs.visible = false;
    document.getElementById("initial").style.display = "none";
    
    logo3.visible = true;
}

function nextStage(){
    if(stages == 0){
        initPresentation(); 
    }else if(stages == 1){
        stage2();
        window.open("https://threejs.org/");
        stages++;
    }else{
        logo3.visible = false;
        logoGit.visible = true;
        window.open("https://carnaux.github.io/");
        document.getElementById("advBt").style.display = "none";
        stages++;
    }
}