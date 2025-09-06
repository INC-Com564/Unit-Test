import { describe, it, expect, beforeEach } from "vitest";
import { mockClient } from "aws-sdk-client-mock";
import {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";

import { createItem, listAllItems } from "./dynamo.js";

const ddbMock = mockClient(DynamoDBDocumentClient);

beforeEach(() => {
  ddbMock.reset();
});

describe("CRUD (unit, mocked) with Vitest", () => {
  it("createItem returns the same item", async () => {
    ddbMock.on(PutCommand).resolves({});
    const item = { id: "1", text: "hi" };

    const out = await createItem("Testing", item);

    expect(out).toEqual(item);
  });
  // more tests here
});