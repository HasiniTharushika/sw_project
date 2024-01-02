import ImagePicker, {
  Image as ImagePickerImage,
  Options as ImagePickerOptions,
} from 'react-native-image-crop-picker';
import S3FileUploader from '../components/upload/S3FileUploader';
import {ConnectionType} from '@sezenta/react-native-connection';

export enum ImageType {
  Profile,
  Cover,
}

export enum ImageSource {
  Library,
  Camera,
}

interface ImageCallbacks {
  setProfileImageData?: (imageData: string) => void;
  setCoverImageData?: (imageData: string) => void;
  setProfileBottomSheetVisible?: (isVisible: boolean) => void;
  setCoverBottomSheetVisible?: (isVisible: boolean) => void;
  setProfileUploading?: (loading: boolean) => void;
  setCoverUploading?: (loading: boolean) => void;
  onError?: () => void;
}

export const selectImage = (
  connection: ConnectionType,
  imageType: ImageType,
  imageSource: ImageSource,
  callbacks: ImageCallbacks,
) => {
  const baseOptions: ImagePickerOptions = {
    width: imageType === ImageType.Profile ? 112 : 600,
    height: imageType === ImageType.Profile ? 112 : 300,
    cropping: true,
    includeBase64: true,
    cropperCircleOverlay: imageType === ImageType.Profile,
    mediaType: 'photo',
    compressImageQuality: 0.6,
  };

  const action =
    imageSource === ImageSource.Library
      ? ImagePicker.openPicker
      : ImagePicker.openCamera;

  try {
    action(baseOptions)
      .then(async (image: ImagePickerImage) => {
        try {
          if (imageType === ImageType.Profile) {
            callbacks.setProfileBottomSheetVisible?.(false);
          } else {
            callbacks.setCoverBottomSheetVisible?.(false);
          }
          await new S3FileUploader(
            connection,
            imageType === ImageType.Profile
              ? callbacks.setProfileUploading
              : callbacks.setCoverUploading,
          )
            .upload(image)
            .then(url => {
              if (imageType === ImageType.Profile) {
                callbacks.setProfileImageData?.(url);
              } else {
                callbacks.setCoverImageData?.(url);
              }
            });
        } catch {
          callbacks.onError?.();
        }
      })
      .catch(() => {
        //callbacks.onError?.();
        callbacks.setProfileBottomSheetVisible?.(false);
        callbacks.setCoverBottomSheetVisible?.(false);
      });
  } catch {
    //callbacks.onError?.();
  }
};
