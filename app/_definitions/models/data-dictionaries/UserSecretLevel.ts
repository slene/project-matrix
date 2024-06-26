import type { RapidDataDictionary } from "@ruiapp/rapid-extension";

export default {
  code: "UserSecretLevel",
  name: "用户密级",
  valueType: "integer",
  level: "app",
  entries: [
    { name: "非密", value: "1" },
    { name: "内部", value: "2" },
    { name: "一般", value: "3" },
    { name: "重要", value: "4" },
  ],
} as RapidDataDictionary;
