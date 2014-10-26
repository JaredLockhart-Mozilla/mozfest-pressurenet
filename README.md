PressureNet Workshop Objectives - Mozfest 2014
==============================================

#Introduction
##What is PressureNet
[PressureNet](https://pressurenet.io/) is an open source platform for collecting atmospheric data from smartphones,
aggregating it, and providing it to atmospheric researchers at public and private institutions.


##What have we accomplished
We have built the client and server architecture to collect data from a network of over 300k phones,
we receive 4 million data points per day, and have over 600 million data points in our database.

##What have we yet to accomplish
We are presently working towards being able to aggregate and 'clean' the raw data we receive
into a form that is more easily integratable into existing weather forecasting and analysis
tools/platforms.

#Workshop Objectives
My hope with this workshop is to be able to easily provide a sample of the data we take in,
and work with people that are interested in developing interesting ways to visualize or analyze the data.

#Platforms
This workshop will focus on numerical data analysis using Python, and data visualization using
HTML/JS/CSS.

#Materials
## Data Formats
The data for this workshop is presented in either JSON or CSV.

## Readings Data
The readings data contains the raw sensor data collected from the phones, organized into the following fields:

- altitude **float** Altitude in meters above sea level.
- daterecorded **integer** Unix timestamp in milliseconds (Javascript format)
- location_accuracy **float** The radius in meters of the circle which the device is expected to occupy
- latitude **float** Geographic Latitude in degrees
- longitude **float** Geographic Longitude in degrees
- observation_type **string** Presently always shows 'pressure'
- observation_unit **string** Presently always measured in milibars
- provider **string** One of {'gps', 'network'}
- reading **float** The recorded atmospheric pressure
- reading_accuracy **float** Presently always 0.0
- tzoffset **integer** The timezone modifier to be applied to the daterecorded time stamp, in milliseconds
- user_id **string** A unique identifier of the device which captured the reading

## Conditions Data
The conditions data contains manually submitted descriptions of the local weather at the time and place it was sent.
It contains the following fields:

- altitude **float** Altitude in meters above sea level.
- cloud_type **string** One of {'-', 'Heavy Fog', 'Mostly Cloudy', 'Partly Cloudy', 'Very Cloudy'}
- daterecorded **integer** Unix timestamp in milliseconds (Javascript format)
- fog_thickness **string** One of {'-', 'Light Fog', 'Moderate Fog'}
- general_condition **string** One of {'Clear', 'Cloudy', 'Foggy', 'Precipitation', 'Severe', 'Thunderstorm'}
- latitude **float** Geographic Latitude in degrees
- longitude **float** Geographic Longitude in degrees
- precipitation_amount **float** One of {0.0, 1.0, 2.0}
- precipitation_type **string** One of {'-', 'Hail', 'Rain', 'Snow'}
- precipitation_unit **string** Unused
- thunderstorm_intensity **string** One of {'-', 'Frequent Lightning', 'Heavy Lightning', 'Infrequent Lightning'}
- tzoffset **integer** The timezone modifier to be applied to the daterecorded time stamp, in milliseconds
- user_comment **string** One of {'-', 'Dust storm', 'Flooding', 'Tornado', 'Tropical storm', 'Wildfire'} 
- windy **string** One of {'-', '0', '1', '2', '3'}

#Visualization
I've prepared some rudimentary data visualizations as a starting point for exploring more interesting ways to view the data.
There's many interesting and hidden trends in the data sets which I think would be interesting to explore, so I'm hoping
that the workshop participants will find interesting ways to visualize or interact with the data.
 

# Examples

- http://jaredkerim-mozilla.github.io/mozfest-pressurenet/visualization/heatmap/index.html
- http://jaredkerim-mozilla.github.io/mozfest-pressurenet/visualization/conditions/index.html
- http://jaredkerim-mozilla.github.io/mozfest-pressurenet/visualization/flot/index.html

## Heatmap
I built a prototype of a heatmap using Google Maps.  My goal was to see the distribution of pressure spatially.  However,
there's some notable shortcomings with this implementation.  

I couldn't use the Google Maps heatmap API because that will weight the visualization based on the density of recorded data points,
not their relative value.  If there is a way to make the Google Heatmaps API behave the way I had expected (a uniform distribution of data points 
with relative weights and colouring associated with the weights) please show me how!

Time series

Animated heatmap?
Incorporate conditions into spatial or time series visualizations

#Data processing/cleaning
- Isolate moving/stationary devices
- Aggregate values in a region into a consistent stream
- Isolate and remove outliers
- Interpolate data gaps
- Prediction:
- predict a condition label given some raw data for a region/period
- predict the future output of a sensor given a historical trend
- Correlate with interesting third party data sources:
- External weather services to assist data cleaning?
- Correlate condition labels with outdoor photos from a photo api?
- Correlate weather trends with financial trends?


