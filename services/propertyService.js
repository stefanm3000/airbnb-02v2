"use strict";

import { filtering } from "../components/search.js";

async function getProperties(searchQuery = "") {
  async function fetchProps() {
    const response = await fetch("./properties.json");

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const props = await response.json();
    return props;
  }

  fetchProps().catch((error) => {
    error.message;
  });

  return filtering(await fetchProps(), searchQuery);
}

export default {
  getProperties,
};
