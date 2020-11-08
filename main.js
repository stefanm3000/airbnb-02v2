"use strict";

import { populateDivs } from "./components/populateDivs.js";
import { createSearchElements } from "./components/search.js";
import propertyService from "./services/propertyService.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  async function searchWrap(searchQuery = "") {
    const properties = await propertyService.getProperties(searchQuery);
    populateDivs(properties);
  }

  searchWrap();
  createSearchElements(searchWrap);
}
