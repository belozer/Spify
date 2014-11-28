#Spif
#### Light (spif < 1 Kb) and sample jQuery plugin for sprite animations

### 1.Getting Started
Load jQuery(1.7+) and include spif plugin

```html
<script src="jquery.js"></script>
<script src="jquery.spif.js"></script>
```
### 2.Set up your HTML

```html
<div class="animation"></div>
```
### 3.Call the plugin
Now call the spif initializer function and your animation is ready.

```js
$(".animation").spif({
    frame: [100, 100],
    frames: 4,
    duration: 500,
    url: 'sprite.png'
});
```

### Options
```js
    /* Required */

    url:      string        // Url to sprite image

    frame:    array         // Sizes frame [width, height]


    frames:   int           // Count frames
                            // Default: 1

    /* Extanded */

    duration: int           // Duration for all frames
                            // Default: 300

    framesDuration: object  // Duration for individual frames
                            // Example: {1: 300, 3: 2000}

    vector:   string        // Position frames in sprite (vertical or horizontal)
                            // Default: vertical
```

### Design sprite
```js
 _______________________________________
|         |         |         |         |
|    1    |    2    |    3    |   ...   | // horizontal
|_________|_________|_________|_________|

 _________
|         |
|    1    |
|_________|
|         |
|    2    |
|_________|  // vertical
|         |
|    3    |
|_________|
|         |
|   ...   |
|_________|
```
License
------------
The MIT License (MIT)

Copyright (c) 2014 Sergey Belozyorcev
