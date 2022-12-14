export interface I_Input {
  nameForShow: string;
  name: string;
  type: string;
  validation: {
    length: number;
    regEx?: RegExp | string;
  };
}

export interface I_InputsData {
  name: string;
  birthDay: string;
  age: string;
  job: string;
  personImage: MediaSource | any;
  university: string;
  province: string;
  city: string;
  license: string;
  score: string;
  licenseImage: MediaSource | any;
  advantages: I_advantage[];
}

export interface I_advantage {
  advantageName: string;
  advantageValue: number;
  key?: string;
}

export interface I_resultData {
  nameForShow: string;
  data: string | number | MediaSource | any;
  dataType: "i" | "t";
}
