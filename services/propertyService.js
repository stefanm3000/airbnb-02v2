"use strict";

import { filtering } from "../components/search.js";

async function getProperties(searchQuery = "") {
  let response = await fetch("./properties.json");
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  let propertiesjson = await response.json();

  return filtering(propertiesjson, searchQuery);
}

export default {
  getProperties,
};
