declare module 'base64-img' {
    export function imgSync(
      uri: string,
      dir: string,
      filename: string,
      callback?: (err: Error | null, data: string) => void
    ): string;
  
    export function img(
      uri: string,
      dir: string,
      filename: string,
      callback: (err: Error | null, data: string) => void
    ): void;
  
    export function base64(
      uri: string,
      callback: (err: Error | null, data: string) => void
    ): void;
  
    export function base64Sync(uri: string): string;
  }
  