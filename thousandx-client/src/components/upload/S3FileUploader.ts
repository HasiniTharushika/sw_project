import * as querystring from 'querystring';
import {ConnectionType} from '@sezenta/react-native-connection';
import {Image} from 'react-native-image-crop-picker';

export default class S3FileUploader {
  fileUrl: string = '';

  constructor(
    private readonly connection: ConnectionType,
    private readonly setLoading?: (loading: boolean) => void,
  ) {}

  getUrl = () => {
    return this.fileUrl;
  };

  upload = async (image: Image) => {
    return new Promise<string>((resolve, reject) => {
      const handle = async () => {
        try {
          this.setLoading?.(true);
          const fileName =
            image.filename ??
            (image.path
              ? image.path.split('/').reverse().at(0)
              : 'profile.jpeg');

          const response = await this.connection.post('files/pre-signed-url', {
            fileName: fileName,
            mimeType: image.mime,
            mask: false,
          });
          const value = response.data;
          const urlPath = value.upload.substring(0, value.upload.indexOf('?'));
          const query = value.upload.substring(value.upload.indexOf('?') + 1);
          const url: any = querystring.parse(query);
          this.fileUrl = value.download;
          const xhr = new XMLHttpRequest();
          const awsSecurityToken = url['x-amz-security-token'];
          delete url['x-amz-security-token'];
          xhr.open('PUT', `${urlPath}?${querystring.encode(url)}`, true);
          if (awsSecurityToken) {
            xhr.setRequestHeader('x-amz-security-token', awsSecurityToken);
          }
          xhr.onprogress = e => {
            console.log('ONPROGRESS', {percent: (e.loaded / e.total) * 100});
            // info.onProgress({ percent: (e.loaded / e.total) * 100 });
            // info.onProgress?.(e);
          };
          xhr.onabort = () => {
            console.log('ONABRT');
            // info.onError?.(new Error('aborted'), undefined);
            this.setLoading?.(false);
            reject(new Error('aborted'));
          };
          xhr.onerror = () => {
            console.log('ONERR');
            // info.onError?.(new Error('error'), undefined);
            this.setLoading?.(false);
            reject(new Error('error'));
          };

          xhr.onloadstart = () => {
            console.log('ONSTART');
            // const evt: any = new ProgressEvent('Upload');
            // evt.progress = 0;
            // info.onProgress?.(evt);
          };
          xhr.onload = event => {
            console.log('ONLOAD', event);
            if (xhr.status === 200) {
              console.log('ONSUCCESS', event);
              // info.onSuccess?.(event, xhr);
              resolve(this.fileUrl);
              this.setLoading?.(false);
            } else {
              // info.onError?.(new Error(`error ${xhr.status}`));
              reject(new Error(`error ${xhr.status}`));
              this.setLoading?.(false);
            }
          };
          xhr.setRequestHeader('Content-Type', image.mime);
          const r = await fetch(image.path);
          const blob = await r.blob();
          xhr.send(blob);
        } catch (e) {
          console.error(e);
          // info.onError?.(new Error('error uploading file'));
          this.setLoading?.(false);
          reject(e);
        }
      };
      handle();
    });
  };
}
