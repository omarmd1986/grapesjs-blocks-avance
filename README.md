# GrapesJS blocks avance

## Options

|Option|Description|Default|
|-|-|-
|`blocks`|Blocks|`['grid-items', 'list-items', 'header', 'section', 'footer', 'iframe', 'link-block', 'quote', 'text-basic'] (all)`|
|`gridsCategory`|Grids category name|`Marketing`|
|`containerCategory`|Containers category name|`Containers`|
|`avanceCategory`|Avance category name|`Avance`|

## Usage

```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-blocks-avance.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['gjs-blocks-avance'],
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/omarmd1986/grapesjs-blocks-avance.git
$ cd grapesjs-blocks-avance
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause
