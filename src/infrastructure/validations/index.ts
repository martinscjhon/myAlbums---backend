export class Validation {
  public static payload(payload: unknown, fields: string[]) {
    if (typeof payload !== "object" || payload === null) {
      throw new Error("Payload inválido");
    }

    fields.forEach((field) => {
      if (field && !(field in payload)) {
        throw new Error(`${field} é obrigatório`);
      }
    });
  }
}
