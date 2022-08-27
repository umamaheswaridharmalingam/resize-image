<h1 align="center"><a href="http://photoshop.umamaheswarid.com/" target="_blank">Resize Image</a></h1>
<p align="center">
  <img src="/images/ud-logo.png" alt="Uma Website Logo" width="120px" height="120px"/>
  <br>
  Fast canvas image resize/resample using ResizeImage filter with JavaScript. Supports transparency, gives good quality. Library was created for canvas manipulation, but it also can resize HTML images.
</p>

Uses web workers with transferable objects. Also single core version is supported.

## Live Working Demo 
https://jsfiddle.net/574g81dv/6/



**Install** with NPM:
```
npm install https://github.com/umamaheswaridharmalingam/resize-image.git
```

**Usage** with NPM:
```
import ResizeImage_class from 'resize-image';
var RESIZEIMAGE = new ResizeImage_class();
```

**Usage**:
```javascript
<script src="../dist/hermite.js"></script>
<script>
var RESIZEIMAGE = new ResizeImage_class();
//default resize
RESIZEIMAGE.resample(canvas, width, height);
//more options
RESIZEIMAGE.resample(canvas, width, height, true, finish_handler); //true=resize canvas
//single core
RESIZEIMAGE.resample_single(canvas, width, height);

//resize image to 300x100
RESIZEIMAGE.resize_image('image_id', 300, 100);
//resize image to 50%
RESIZEIMAGE.resize_image('image_id', null, null, 50);
</script>
```

- demo file included: ```test/demo.html``` 