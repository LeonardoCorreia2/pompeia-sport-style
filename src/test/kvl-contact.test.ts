import { describe, expect, it } from "vitest";
import { ADDRESS_LINE, INSTAGRAM_URL, whatsappLink } from "@/lib/kvl";

describe("KVL contact info", () => {
  it("opens WhatsApp on the store number (14) 99810-6597", () => {
    expect(whatsappLink()).toMatch(/^https:\/\/wa\.me\/5514998106597\?text=/);
  });
  it("links to the store Instagram", () => {
    expect(INSTAGRAM_URL).toBe("https://www.instagram.com/lojakvl.ofc/");
  });
  it("shows the store address", () => {
    expect(ADDRESS_LINE).toBe("Rua João da Silva, 1340 — Pompéia, SP");
  });
});
