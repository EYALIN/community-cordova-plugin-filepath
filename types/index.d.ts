declare namespace CordovaFilePath {
  /**
   * content:// to file:///
   * @param path content://
   * @param successCallback success callback file:///
   * @param errorCallback error callback
   */
  function resolveNativePath(path: string, successCallback: (url: string) => void, errorCallback: (err: string) => void): void
}

interface Window {
  FilePath: typeof CordovaFilePath
}