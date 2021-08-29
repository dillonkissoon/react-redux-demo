export default class BaseModel {
  toJSON() {
    const jsonedObject = {};
    for (var x in this) {
      if (x === "toJSON" || x === "constructor") {
        continue;
      }

      if (typeof this[x] == "function") {
        jsonedObject[x] = this[x];
      }

      jsonedObject[x] = this[x];
    }
    return jsonedObject;
  }
}
