class Customer {
  _name: string | undefined = "";
  _email: string | undefined = "";
  _address: string;
  _postalCode: number | undefined = 0;
  _city: string;

  constructor(
    name: string,
    email: string,
    address: string,
    postalCode: string,
    city: string
  ) {
    if (name.length > 60 || name.length < 2) {
      console.log(
        "Name must not contain less than 2 or more than 60 characters"
      );
      this._name = undefined;
    } else {
      this._name = name;
    }

    if (!email.includes(".") || !email.includes("@")) {
      console.log('Email must contain "." and "@"');
      this._email = undefined;
    } else {
      this._email = email;
    }

    this._address = address;

    if (this.checkPostalCode(postalCode)) {
      this._postalCode = Number(postalCode);
    } else {
      this._postalCode = undefined;
    }

    this._city = city;
  }

  get name(): string | undefined {
    return this._name;
  }
  set name(value: string) {
    if (value.length > 60 || value.length < 2) {
      console.log(
        "Name must not contain less than 2 or more than 60 characters"
      );
    } else {
      this._name = value;
    }
  }

  get email(): string | undefined {
    return this._email;
  }
  set email(value: string) {
    if (!value.includes(".") || !value.includes("@")) {
      console.log('Email must contain "." and "@"');
    } else {
      this._email = value;
    }
  }

  get address(): string {
    return this._address;
  }
  set address(value: string) {
    this._address = value;
  }

  get postalCode(): number | undefined {
    return this._postalCode;
  }
  set postalCode(value: string) {
    if (this.checkPostalCode(value)) {
      this._postalCode = Number(value);
    } else {
      this._postalCode = undefined;
    }
  }

  get city(): string {
    return this._city;
  }
  set city(value: string) {
    this._city = value;
  }

  checkPostalCode(postalCode: string): boolean {
    if (postalCode.length !== 5) {
      console.log("Postal code must contain exactly 5 digits");
      return false;
    } else {
      const letters: string[] =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
      const filteredLetters: string[] = letters.filter((letter: string) =>
        postalCode.includes(letter)
      );
      if (filteredLetters.length !== 0) {
        console.log("Postal code must not contain letters");
        return false;
      } else {
        return true;
      }
    }
  }
}

export default Customer;
