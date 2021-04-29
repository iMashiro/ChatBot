const express = require("express");
const git_api = require("./git_api");

async function getData() {
  const response = await git_api.git_api();
  var final_data = [];
  final_data = response.data.items;

  for (var i = 0; i < final_data.length; i++) {
    var date_1 = new Date(final_data[i].created_at);
    for (var j = 0; j < final_data.length; j++) {
      var date_2 = new Date(final_data[j].created_at);

      if (date_1.getTime() < date_2.getTime()) {
        var aux = final_data[i];
        final_data[i] = final_data[j];
        final_data[j] = aux;
      }
    }
  }

  const data = {
    card_1: {
      name: final_data[0].name,
      descp: final_data[0].description,
    },
    card_2: {
      name: final_data[1].name,
      descp: final_data[1].description,
    },
    card_3: {
      name: final_data[2].name,
      descp: final_data[2].description,
    },
    card_4: {
      name: final_data[3].name,
      descp: final_data[3].description,
    },
    card_5: {
      name: final_data[4].name,
      descp: final_data[4].description,
    },
  };
  return data
}

module.exports.getData = getData;
