import { atom } from "recoil";

export const problemTitle = atom<string | null>({
  key: "problemTitle",
  default: null,
});
