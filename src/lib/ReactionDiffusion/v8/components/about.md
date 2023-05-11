# Gray-Scott model for Reaction-Diffusion systems

This page contains my experiementations aroud [reaction-diffusion systems](https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system).

## What is this?

For this project I wanted to learn more about reaction-diffusion systems. The systems I have been considering are mathematical models corresponding to a physical system in which two chemical substances react with each other while also diffusing in the environment.

The main parameters for these simulations are the `f` and `k` variables. I explain more in details what the correspond to in the next sections, for now just keep in mind that varying `f` and `k` make the simulation generate different kinds of patterns.

The application contains 4 tabs you can explore.

### Auto
This is my "artistic" stake at this simulation. The `f` and `k` parameters are contiually changing to automatically generate different kinds of patterns. A mecanism also regularly regenerates some amount of solution so that there is as few stable states as possible. You don't have to do anything, just load the tab and watch funny colors move on the screen.

You can use the menu on the let to tweak how fast the `f` and `k` parameters change and how much they change each time.

There are several configurations to try out and which give various results:

- Increasing the change magnitude impacts the stability of the system. Small change magnitudes keeps `f` and `k` in a smaller area so the diversity of patterns generated is reduced, on the other hand larger magnitudes will create larger changes in the parameters space so it might create situations where the one of the chemical reacts with all of the other leaving a uniform colored texture.

- Increasing the change rate makes the parameters get updated more often which might leave more time for configurations to stabilize and display all of their features.

### Manual

This is an interactive view of the model.

The menu on the left allows the user to change the `f` and `k` parameters of the simulation and see how they influence the reaction. In the center screen the user can drop some amout of solution by moving the mouse around and clicking the left mouse button, the solution can also be removed with the right mouse button. The user can also zoom in the simulation by holding the `Ctrl` button and scrolling with the mouse wheel (note that there is a bug in the zoom mecanism which move the simulation around when zooming in/out). Finally the menu on the left allows the user to tweak various parameters like the color scheme used, the speed of the simulation, and the initial conditions, the pen setting to add or remove the solution, etc...

This unlike the Auto tab, this simulation runs a configuration continuously and let the user tweak the parameters as they want. This is a good tool to understand how each parameter impacts the simulation you can try to find many different patterns like the following:

![pattern1](/reaction_diffusion_about/pattern1.png)
![pattern2](/reaction_diffusion_about/pattern2.png)
![pattern3](/reaction_diffusion_about/pattern3.png)
![pattern4](/reaction_diffusion_about/pattern4.png)
![pattern5](/reaction_diffusion_about/pattern5.png)

### Parameters map
I used this tab to generate the parameters map used in the simulation parameters menu. By default the settings are lower compared to those I used to generate the final parameter map. Here the difference with the other tabs is that the `f` and `k` parameters of the simulation are uniform on the grid, they vary accross the screen to show the different possible patterns.

### Previous versions
It took me several iterations to get the results shown in the other tabs. This tab regroups my different iterations.


## Resources

Here are some resources I have used to document myself to create this project:

### Gray-Scott model
- Karlsims tutorial about Reaction-diffusion, very good introduction and good explanation of the formula
  https://karlsims.com/rd.html
- Mrob list of a lot of interesting parameter classes
  https://www.mrob.com/pub/comp/xmorphia/pearson-classes.html#eta
- Mrob Uskate parameter space
  https://mrob.com/pub/comp/xmorphia/uskate-world.html
- A very good high level introduction to reaction diffusion with some great analogies with the particule approach. Lot of interesting links.
  https://www.redblobgames.com/x/2202-turing-patterns/
- Redblobgames implementation of the parameter map visualisation
  https://www.redblobgames.com/x/2203-reaction-diffusion/art/parameter-map.html
- Good schema of the experience, one clue about the color map and a parameter space graph visualisation
  https://itp.uni-frankfurt.de/~gros/StudentProjects/Applets_2014_GrayScott/
- A scientific paper "Spatially localized structures in the Gray-Scott model"
  https://royalsocietypublishing.org/doi/10.1098/rsta.2017.0375

### Color maps
- General approach to color maps. Lot of visual representations of colormaps. The interesting one here is the diverging method.
  https://matplotlib.org/stable/tutorials/colors/colormaps.html#diverging

### Other implementations

- https://www.redblobgames.com/x/2203-reaction-diffusion/
- https://www.mrob.com/pub/comp/xmorphia/ogl/index.html
- interesting colormaps and flows implemented. The interface is interesting.
    https://www.karlsims.com/rdtool.html
- Good interface to tweak colors
    https://pmneila.github.io/jsexp/grayscott/

## History of the project

### Prototyping with P5.js (v1, v2, v3)
In versions v1, v2 and v3 were mostly prototyping to validate that I was understanding the math behind the model and the general idea of the simulation.

These versions use the [p5.js](p5js.org/) framework to render and update the simulation. The world is represented by a 2D array in typescript and the update is a simple nested for loop iterating on each item of the grid and applying the formula.

The main difference between these 3 versions is the way I was updating the grid. In v1 I started with a very naive approach where I recreated the grid on each iteration. In v3 the algorithm is smarter, I create two grids when I built the world and then each update reads from one of the grids and writes to the other one which is then used by p5 to draw the canvas.

### Dabbling with WebGL (v4)

With the 3 previous versions I validated I understood the model and in v4 I started to make the simulation larger by using the GPU to update the world instead of doing that on the CPU in typescript. This was my first experience with [regl](https://github.com/regl-project/regl) which is an incredibly cool framework to make working with WebGL much easier. This version was laying the fundations for my WebGL simulation: First, in typescript we generate a grid representing the world and we generate two WebGL texture where each pixel is an item of the generated grid.

For each pixel we only generate a value on the red and green channels. Each value is comprised between `0.0` and `1.0` and corresponds to the concentration of each solution in each discrete position of the world.

Once this is done we create two regl commands:

- The `update` command which is responsible for reading from one of the created texture and updating the new state in the other texture.
- The `draw` command which simply takes the last updated texture and draws it directly on the canvas. The texture is drawn "raw" as in the red and green channels are used directly in the shader.

```glsl
precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;
void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
```

### Adding basic controls to the simulation (v5)

Once my simulation started to work properly on the GPU I wanted to add some interactivity. This was an interesting phase for two reasons:

First it was the opportunity to play with [dat.gui](https://github.com/dataarts/dat.gui/). This is a library which allows to easily create a graphical interface to modify the properties of a javascript object. I had already experimented with this library in my [previous game of life project](/gameoflife)

In this simulation I added the following settings:

- A very crude manual selection of `f` and `k` parameters, allowing me to better grasp the impact of the feed rate and kill rate.
- Some additional preset seletions for `f` and `k`. I took these preset from the examples in [Robert Munafo's extended pearsons classification](https://www.mrob.com/pub/comp/xmorphia/pearson-classes.html). The fact that the classes I took from Robert's website were producing results similar to his own visualization was an encouraging sign that I was going in the right direction.
- A setting allowing to use different initial conditions for the world. It is useful because this version doesn't allow to modify the world with the mouse so having different starting worlds allowed me to test different `f` and `k` parameters.
- Some basic settings like the ability to pause and reset the simulation or see the current iteration number.

### Using the mouse to change the world (v6)

v6 saw a big improvement in my way to handle the glsl code for my shaders: instead of writing the shader code directly in the initialization of the regl commands (as it's shown in [regl's examples](https://github.com/regl-project/regl/blob/gh-pages/example/basic.js)) I created a mechanism which allows me to write the shader code in separate `.glsl` files which are imported in the typescript code and then injected in the regl commands properties.

Having a better separated code allowed me to pass more uniforms to my shaders and particularly to passe the mouse state to the update shader. Now the shader takes the position of the mouse as well as the state of each mouse button as uniforms. This way when updating each pixel if the pixel is close enough from the mouse and the button is pressed we can override the new value of the pixel (and ignore the value coming from the simulation) that allows to artifically increase the concentration of one of the solution on specific spots of the world.

### Zoom and `fk` selection (v7)

In v7 I focused on the UI of the application. A lot of things changed on this iteration.

Firstly I reworked the regl code and created two separate pipelines for the simulation itself and for its rendering. The simulation pipeline is basically the same one as in the previous versions.

The graphic pipeline is pretty different:

This version introduce a system where I use several texture to apply different transformations to the simulation texture before displaying it on the screen:

- Step 1 "Zoom": In the vertex shader of the graphical pipeline I pass as uniforms the state of the zoom (i.e. the zoom level and the pan on the x and y axis). These uniforms allows me to draw only the parts of the texture which are currently in a zoomed in area.
- Step 2 "Colors": To make the simulation more visally appealing the first stage takes the raw red and green channels of the simulation texture and transform them to use a wider spectrum of colors. Since regl makes the glsl code quite modular I was able to create different fragment shaders applying different color palettes.
- Step 3 "Grid": To help me debugging the implementation of my zoom mecanism I added a step which overlays a grid on the resulting texture. The goal was to have a grid with a fixed sized which would better show the resolution of the zoom.
- Step 4 "Cursor": To make the mouse drawing more intuitive I add another overlay showing the area which the cursor will drawn on.

This approach has the big advantage of keeping my code very modular and making it easier to implement the different steps. The main drawback is that it requires to keep one texture for each step of the pipeline which has an impact on the GPU. An alternative solution would be to do all the transformations in the same shader but I haven't experimented with that already and I'm not sure what are the best practices for this topic.

I also created the interface to select `f` and `k` on the parameters map. To do that, the first step was to create another type of simulation largely based on my previous experiements but where the `f` and `k` parameters are varying among the world. This way when initializing the world with small concentrations of the solutions and letting the simulation run for a few hundreds of thousands of iteration we get a nice map like this one

![parameter map](/parameters_map.png)

Some inpsiration I had for the parameters map:

- [mrob](https://mrob.com/pub/comp/xmorphia/uskate-world.html)
- [RebBlobGames](https://www.redblobgames.com/x/2203-reaction-diffusion/art/parameter-map.html)

### "Auto Visualizer" (v8)

My last goal for this project was to create an infinite visualization based on the simulation. The issue with the raw simulation is that most of the parameters classes tend to create stable states after a number of iterations. Stable states are interesting to study the Gray-Scott system but they get boring quickly so I created the Auto Visualizer based on two ideas:

First the `f` and `k` parameters need to change regularly to create new patterns but they need to change slowly. A big step between two values of (f, k) often tend to destroy all the concentrations of chemicals. So reusing the menu component I created to select f and k, I added a bounding box of the values which create the most interesting patterns and then used a noise function to make the parameters vary slowly and consistenly over time.

Even when changing `f` and `k` the chemicals tends to disappear from the system so I have a mecanism which simulates the user clicking on the screen to add more chemical.
