interface IDomainError {
  message: string;
}

export abstract class DomainError extends Error implements IDomainError {
  constructor(message: string) {
    super(message);

    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    }
  }
}
