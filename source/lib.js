export const $ = (selector) => document.querySelector(selector);

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
