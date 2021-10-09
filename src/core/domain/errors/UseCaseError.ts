interface IUseCaseError {
  message: string;
}

export abstract class UseCaseError extends Error implements IUseCaseError {
  constructor(message: string) {
    super(message);

    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    }
  }
}
