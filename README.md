![alt tag](https://raw.github.com/belozyorcev/jquery.spif/master/img/spif-logo-light-434x300.png)
### Description
Light (Spify < 2 Kb) and sample jQuery plugin for sprite animations

### 1.Getting Started
Load jQuery and include spify plugin

```html
<script src="jquery.js"></script>
<script src="jquery.spify.min.js"></script>
```
### 2.Set up your HTML

```html
<div class="animation"></div>
```
or with data-* options

```html
<div class="animation"
    data-size="100,100"
    data-count="4"
    data-duration="500"
    data-url="sprite.png">
</div>
```
### 3.Call the plugin
With JS params
```js
$(".animation").spify({
    size: [100, 100],
    count: 4,
    duration: 500,
    url: 'sprite.png'
});
```
If is set data-* options initialize animation very easy
```js
$(".animation").spify();
```
### Options
```js
    /* Required */

    url:      string        // Url to sprite image

    size:     array         // Size frame
                            // js: [width, height]
                            // html: "width, height"

    count:    int           // Count frames


    /* Extanded */

    duration: int           // Duration for all frames
                            // Default: 300

    durations: object       // Duration for individual frames
                            // Example
                            // js: {1: 300, 3: 2000}
                            // html: "1: 300, 3: 2000"

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
