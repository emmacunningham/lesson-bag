# WebGL and three.js 

## Intro

### What is WebGL?
WebGL is an API that allows you to render 3d graphics within the browser natively, with no plugins.  It is similar to canvas in that it renders using the canvas element, but it differs in how your browser distributes the labor associated with rendering the graphics.

Canvas is more widely supported than WebGL, but it’s worth noting that WebGL runs on your graphics card’s GPU, which means that your CPU can concentrate on other non-rendering tasks like any physics or user interaction you’re trying to do.


### What is threejs?
threejs or THREE is a library for accessing the WebGL API that makes it a lot easier to start thinking about how all the many things that create a 3d object need to come together.

### Thinking about 3d objects
As we go through this, we'll be discussing some terms relevant to 3d object rendering:

- Geometry: what points are vertices for the object
- Mesh: vertices, edges, and faces that represent the 3d object (with any material mapping)
- Texture: detailed information about the surface of an object
- Shader: how the shading of surface of the object responds 


## Getting started

To use threejs, we will of course need to load the dependency.  I've taken the liberty of doing so in the starter code already; note that we are pulling from the CDN.

We're going to set up a scene, camera, and renderer.

The **scene** holds all of the objects you want in your scene. Pretty simple, right?  This is where we'll be adding any objects that we want to be viewed.

The **camera** controls the properties of how we view the scene.  Camera controls include things like perspective, field of view, and rotational axes.

The **renderer** takes all of the information about the scene and camera and, well, renders that information out to a 3d view.

```
// Set up scene
var scene = new THREE.Scene();

// Set up camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Setting alpha: true creates a transparent bg
var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Render it all
function render() {
    requestAnimationFrame( render );

    // Any updates to scene, camera, or objects go here
    // That is, this is where the animation happens!

    renderer.render( scene, camera );
}
render();

```

Note that within render() we are calling requestAnimationFrame().  requestAnimationFrame is kinda similar to setInterval except that it is optimized for looping animation behavior (yay! -- for a really great deep dive, check out the wonderful <a href="http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/">Paul Irish's rundown of why it's awesome</a>).

Without anything in our scene, it's really hard to appreciate what each of these things does, so let's add a really basic object to the scene.
  
## Making a cube

```
// Create a cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
```

First we create the BoxGeometry.  Geometry objects (of which there are many different types as well as an abstract class) hold all of the data necessary to describe a 3d model.  That is, it describes the vertices and faces necessary to draw an object with a particular shape.  [Vertices describe the points of a model, while faces describe how these vertices group to form planes along the surface of the shape.]

Next, we create a material to cover our box with.  For now we will just use a standard material, MeshNormalMaterial, which will give each of our faces a slightly different color, woo!  (Check out the threejs docs for different material options).

Now that we have both a geometry and material to apply to that geometry, we can create our cube as a Mesh object.  A mesh is an object that takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around.

Then we have something we can add to our scene!  Notice that if we commented out this step, we'd never see the cube.  Remember, simply creating objects will not render them to a view.  They will need to be added to a scene to be visible.

Lastly, by default, when we created our cube, it was positioned at (0,0,0) -- exactly where our camera currently is.  If we want to be able to SEE the cube, we should back up a bit.  That's what the last line does: it moves the camera with respect to the z axis so that we are pushed back and are in a position to see the cube.  Pretty cool, huh?

### Make the cube move
All Mesh objects extend from the class Object3d.  Check out the documentation to see what we manipulate: http://threejs.org/docs/index.html#Reference/Core/Object3D

Of particular interest will be:

- position (an object containing position information along x, y, and z axes)
- rotation (an object containing rotation information along x, y, and z axes)

Since we created cube as a global variable, we can manipulate stuff from our console (huzzah!).  

If we want to watch our cube just keep rotating in space endlessly, well...

```
// Render it all
function render() {
    requestAnimationFrame( render );

    // Any updates to scene, camera, or objects go here
    // That is, this is where the animation happens!
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;    

    renderer.render( scene, camera );
}
```

## Make the camera move

As we saw when we set up our cube, we can also adjust the properties of the camera.  Let's try changing the camera's position and rotation... 


## Make a sphere

```
  var geometry = new THREE.SphereGeometry( 5, 32, 32 );
  var material = new THREE.MeshNormalMaterial();
  var sphere = new THREE.Mesh( geometry, material );

  scene.add( sphere );
```
  
  
## Adding interactivity

```
$(document).mousemove(function(event) {
    var y = event.pageX / window.innerWidth;
    var x = event.pageY / window.innerHeight;

    camera.rotation.y = y;
    camera.rotation.x = x;
    
});

```

Ok, how could you edit this mousemove handler so that instead of rotating the camera, we just rotated the cube or sphere in the scene?


## Particles!

### First pass at particles

You might imagine that we could create a particle view by simple adding a lot of one object to a scene.  Let's try it:


```
var particles = [];
for (var i = 0; i < 100; i++) {
  var geometry = new THREE.SphereGeometry( 5, 32, 32 );
  var material = new THREE.MeshNormalMaterial(  );
  var sphere = new THREE.Mesh( geometry, material );

  // Randomize starting positions
  sphere.position.x = Math.random() * 500 - 250,
  sphere.position.y = Math.random() * 500 - 250,
  sphere.position.z = Math.random() * 500 - 250,

  scene.add( sphere );
  particles.push(sphere);
}

```

### Creating a PointSystem
Suppose we want to be able to associate all of our spheres to the same system that itself moved contiguously.

```
// create the particle variables
var particleCount = 1000,
    particles = new THREE.Geometry(),
    pMaterial = new THREE.PointsMaterial({
      color: "#f0f",
      size: 10
    });
// now create the individual particles
for (var p = 0; p < particleCount; p++) {

  // create a particle with random
  // position values, -250 -> 250
  var pX = Math.random() * 500 - 250,
      pY = Math.random() * 500 - 250,
      pZ = Math.random() * 500 - 250,
      particle = new THREE.Vector3(pX, pY, pZ);

  // add it to the geometry
  particles.vertices.push(particle);
}

// create the particle system
var particleSystem = new THREE.Points(
    particles,
    pMaterial);

// add it to the scene
scene.add(particleSystem);

```
In order to create a particle system, we will use the constructor Points, which takes two arguments: the first is a... Geometry object!  Yep, we're going to create a Geometry that contains each individual particle as a vertex.  The second argument is a... Material!  Crazy, right?  It's just like creating a Mesh, except now we're creating a system of points.  Points will take the PointsMaterial we define and apply it to every vertex defined for the Points.

Notice that when we create the individual particles, we do so by generating some random values and assigning them as the x, y, and z coordinates using the Vector3 constructor.

### Make your Points rotate
If we add just a bit of code to our render function, we can get our points swirling around... all together as if they were synced in motion!

```
function render() {
    requestAnimationFrame( render );

    // Any updates to scene, camera, or objects go here
    // That is, this is where the animation happens!

	// Add this to watch your particles swirl!
    particleSystem.rotation.y += .01;

    renderer.render( scene, camera );
}
```

## Your turn
- Oh hey, when we resize the screen, you'll notice that even though we used some CSS to make the canvas itself responsive, the scene doesn't seem to hmmm, what's the word... oh yeah *re-render* when the window's viewport gets updated.  I'll be you can cleverly figure out how to fix this :P
- You've made a cube.  You've made a sphere.  Can you figure out how to render text as an object in your scene?
- We didn't get to talk about how to map textures to objects, but this is likely something you'll want to be able to do, right?  See if you can't figure it out by looking at the documentation.  (Hint, you'll want to first create a Texture by loading an image to use for the texture... then you'll want to apply it to a Material...)
  

## Resources

- <a href="http://threejs.org/">three.js Documentation with LOTS of examples</a>
- <a href="http://threejsplaygnd.brangerbriz.net/">three.js in-browser editor and preview</a>
- <a href="https://www.chromeexperiments.com/">Chrome Experiments</a>

