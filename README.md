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
		- Stone

Installation
------------

For this project to work once downloaded, you will need to run an `npm install`
and a `bower install`.

There is one other hack to make the glyphicons work (wasn't able to find a real
solution).

In the file:
`/bower_components/bootstrap-sass/assets/stylesheets/bootstrap/variables.scss`

Change this line:
`$icon-font-path: if($bootstrap-sass-asset-helper, "bootstrap/", "../fonts/bootstrap/") !default;`

To:
`$icon-font-path: if($bootstrap-sass-asset-helper, "bootstrap/", "../bower_components/bootstrap-sass/assets/fonts/bootstrap/") !default;`