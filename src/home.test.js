import { getExchangeRate, getRequests } from "./components/Home";

test("We should not have an empty array returned from the web api", () => {
  const exchangeRateJson = getExchangeRate();
  expect(exchangeRateJson).not.toEqual([]);
});

test("We should have the data object returned from the web api", () => {
  const requestsJson = getRequests();
  expect(requestsJson).not.toEqual([]);
});
