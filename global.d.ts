declare interface Performance extends Performance {
  memory?: {
    jsHeapSizeLimit: number;
    totalJSHeapSize: number;
    usedJSHeapSize: number;
  };
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare interface Window {
  chrome?: {
    app: {
      [key: string]: any;
    };
  };
  __webSee__: {
    [key: string]: any;
  };
}

declare module 'rrweb' {
  export interface eventWithTime {
    type: number;
    data: any;
    timestamp: number;
  }
  
  export function record(options: {
    emit: (event: eventWithTime, isCheckout: boolean) => void;
    recordCanvas?: boolean;
    checkoutEveryNms?: number;
  }): () => void;
}

declare module 'ua-parser-js' {
  export interface IUAParser {
    getBrowser(): {
      name: string;
      version: string;
    };
    getOS(): {
      name: string;
      version: string;
    };
    getDevice(): {
      model: string;
      type: string;
      vendor: string;
    };
    getUA(): string;
    getResult(): {
      ua: string;
      browser: {
        name: string;
        version: string;
      };
      device: {
        model: string;
        type: string;
        vendor: string;
      };
      os: {
        name: string;
        version: string;
      };
    };
  }

  export class UAParser implements IUAParser {
    constructor(ua?: string);
    getBrowser(): { name: string; version: string };
    getOS(): { name: string; version: string };
    getDevice(): { model: string; type: string; vendor: string };
    getUA(): string;
    getResult(): {
      ua: string;
      browser: {
        name: string;
        version: string;
      };
      device: {
        model: string;
        type: string;
        vendor: string;
      };
      os: {
        name: string;
        version: string;
      };
    };
  }
}
