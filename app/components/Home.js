var React = require('react');
var ReactRouter = require('react-router');
var MainContainer = require('./MainContainer');
var NVD3Chart = require('react-nvd3');

function Home () {
  var datum = [{
    key: "Evo 2016",
    values: [
      {
        "label": "SF5",
        "value": 5065
      }, {
        "label": "Smash 4",
        "value": 2637
      }, {
        "label": "Melee",
        "value": 2350
      }, {
        "label": "Pokken",
        "value": 1165
      }, {
        "label": "UMVC3",
        "value": 770
      }, {
        "label": "MKX",
        "value": 707
      }, {
        "label": "T7",
      "value": 543
    }, {
      "label": "KI",
      "value": 540
    }]
  }];
  return (
    <MainContainer>
      <h1>ayee its lit! 🔥</h1>
      <NVD3Chart id="barChart" type="discreteBarChart" datum={datum} x="label" y="value"/>
    </MainContainer>
  )
}

module.exports = Home;
