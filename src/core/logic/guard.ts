export interface IGuardResult {
  succeeded: boolean;
  message?: string;
}

export interface IGuardArgument {
  argument: any;
  argumentName: string;
}

export type GuardArgumentCollection = IGuardArgument[];

export class Guard {
  public static combine(guardResults: IGuardResult[]): IGuardResult {
    const failedResult = guardResults.find(
      result => result.succeeded === false
    );

    return failedResult || { succeeded: true };
  }

  public static greaterThan(
    minValue: number,
    actualValue: number
  ): IGuardResult {
    return actualValue > minValue
      ? { succeeded: true }
      : {
          succeeded: false,
          message: `Number given {${actualValue}} is not greater than {${minValue}}`
        };
  }

  public static againstAtLeast(
    numChars: number,
    text: string,
    argumentName: string
  ): IGuardResult {
    return text.length >= numChars
      ? { succeeded: true }
      : {
          succeeded: false,
          message: `${argumentName} is not at least ${numChars} chars.`
        };
  }

  public static againstAtMost(
    numChars: number,
    text: string,
    argumentName: string
  ): IGuardResult {
    return text.length <= numChars
      ? { succeeded: true }
      : {
          succeeded: false,
          message: `${argumentName} is greater than ${numChars} chars.`
        };
  }

  public static againstAtBetween(
    minNumChars: number,
    maxNumChars: number,
    text: string,
    argumentName: string
  ): IGuardResult {
    return text.length >= minNumChars && text.length <= maxNumChars
      ? { succeeded: true }
      : {
          succeeded: false,
          message: `${argumentName} must be between ${minNumChars} and ${maxNumChars}.`
        };
  }

  public static againstNullOrUndefined(
    argument: any,
    argumentName: string
  ): IGuardResult {
    if (argument === null || argument === undefined) {
      return {
        succeeded: false,
        message: `${argumentName} is null or undefined`
      };
    }
    return { succeeded: true };
  }

  public static againstNullOrUndefinedBulk(
    args: GuardArgumentCollection
  ): IGuardResult {
    for (const arg of args) {
      const result = this.againstNullOrUndefined(
        arg.argument,
        arg.argumentName
      );
      if (!result.succeeded) return result;
    }

    return { succeeded: true };
  }

  public static isOneOf(
    value: any,
    validValues: any[],
    argumentName: string
  ): IGuardResult {
    const isValid = validValues.some(validValue => validValue === value);

    if (isValid) {
      return { succeeded: true };
    }
    return {
      succeeded: false,
      message: `${argumentName} isn't oneOf the correct types in ${JSON.stringify(
        validValues
      )}. Got "${value}".`
    };
  }

  public static inRange(
    num: number,
    min: number,
    max: number,
    argumentName: string
  ): IGuardResult {
    const isInRange = num >= min && num <= max;
    if (!isInRange) {
      return {
        succeeded: false,
        message: `${argumentName} is not within range ${min} to ${max}.`
      };
    }
    return { succeeded: true };
  }

  public static allInRange(
    numbers: number[],
    min: number,
    max: number,
    argumentName: string
  ): IGuardResult {
    let failingResult: IGuardResult = null;
    for (const num of numbers) {
      const numIsInRangeResult = this.inRange(num, min, max, argumentName);
      if (!numIsInRangeResult.succeeded) failingResult = numIsInRangeResult;
    }

    if (failingResult) {
      return {
        succeeded: false,
        message: `${argumentName} is not within the range.`
      };
    }
    return { succeeded: true };
  }
}