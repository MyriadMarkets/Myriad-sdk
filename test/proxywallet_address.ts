/* eslint-env jest */
import { getProxyWalletAddress } from "../src";

const testCases: [[string, string], string][] = [
  [
   
    "0xd38d608473ce219b5c26f9c72435513e9a8854a7",
];

describe("getProxyWalletAddress", () => {
  it.each(testCases)(
    `should compute the correct proxy wallet address`,
    ([factoryAddress, userAddress], expectedProxyWalletAddress) =>
      expect(getProxyWalletAddress(factoryAddress, userAddress)).toEqual(expectedProxyWalletAddress),
  );
});

