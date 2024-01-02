import ImagePicker from 'react-native-image-crop-picker';
import S3FileUploader from './S3FileUploader';
import {ConnectionType} from '@sezenta/react-native-connection';

export default class ImageUploader {
  static cameraPick = async (
    connection: ConnectionType,
    crop?: {width: number; height: number},
    onLoading?: (loading: boolean) => void,
  ): Promise<string> => {
    const image = await ImagePicker.openCamera({
      width: crop?.width,
      height: crop?.height,
      includeBase64: true,
      mediaType: 'photo',
      compressImageQuality: 0.6,
      cropping: !!crop,
    });
    return await new S3FileUploader(connection, onLoading).upload(image);
  };

  static galleryPick = async (
    connection: ConnectionType,
    crop?: {width: number; height: number},
    onLoading?: (loading: boolean) => void,
  ): Promise<string> => {
    const image = await ImagePicker.openPicker({
      width: crop?.width,
      height: crop?.height,
      includeBase64: true,
      mediaType: 'photo',
      compressImageQuality: 0.6,
      cropping: !!crop,
    });
    return await new S3FileUploader(connection, onLoading).upload(image);
  };
}
