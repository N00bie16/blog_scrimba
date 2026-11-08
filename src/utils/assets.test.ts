import { describe, expect, it } from "vitest";

import { getPublicAssetUrl } from "./assets";

describe("getPublicAssetUrl", () => {
  it("removes leading slashes from asset paths", () => {
    const url = getPublicAssetUrl("/logo-icon.webp");

    expect(url.endsWith("logo-icon.webp")).toBe(true);
    expect(url).not.toContain("//logo-icon");
    expect(url).toContain("logo-icon.webp");
  });
});
