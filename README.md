Converter
=========

Make conversions easily with instant results

Units that can be converted:

- Distance
	- Miles
	- Kilometres

- Weight
	- Grams
	- Kilograms
	- Pounds

Installation
------------

For this project to work once downloaded, you will need to run an `npm install`
and a `bower install` (which means you need `node` and `npm` installed).

There is one other hack to make the glyphicons work (wasn't able to find a real
solution in the short time I tried investigating). This needs to be done by you
because this is a bower component that is not stored in this repo.

In the file:

`/bower_components/bootstrap-sass/assets/stylesheets/bootstrap/variables.scss`

Change this line:

`$icon-font-path: if($bootstrap-sass-asset-helper, "bootstrap/", "../fonts/bootstrap/") !default;`

To:

`$icon-font-path: if($bootstrap-sass-asset-helper, "bootstrap/", "../bower_components/bootstrap-sass/assets/fonts/bootstrap/") !default;`

Accessing the site
------------------

This project runs off a node server, so after this has been completed, go to the
root directory and type

`node server.js`

You can then access the site at:

`http://localhost:4434`