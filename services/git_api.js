const axios = require("axios");
const express = require("express");

async function git_api() {
  const api = axios.create({
    baseURL:
      "https://api.github.com/search/repositories?q=user%3Atakenet+language%3AC%23&ref=advsearch&l=C%23&l=",
  });
  const response = await api.get('');

  return response;
}

module.exports.git_api = git_api;