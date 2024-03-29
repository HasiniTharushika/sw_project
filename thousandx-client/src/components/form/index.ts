import AntdForm, {FormProvider} from 'rc-field-form';
import {
  FormColumn,
  FormField,
  FormFieldsProps,
  FormSchema,
  InternalForm,
  NamePath,
  NamePathArr,
  SchemaFormItems,
  setValidationErrors,
  TypeAdapter,
  ValidationAdapter,
} from './lib/Form';
import {SchemaFormConfigProvider} from './lib/SchemaFormConfig';
import {MapProps} from './lib/CommonAdapters';

// export * from './lib/Form';

type InternalFormType = typeof InternalForm;
type CompoundedComponent = InternalFormType & {
  useForm: typeof AntdForm.useForm;
  // useFormInstance: typeof AntdForm.useFormInstance;
  useWatch: typeof AntdForm.useWatch;
  Item: typeof AntdForm.Field;
  Items: typeof SchemaFormItems;
  List: typeof AntdForm.List;
  // ErrorList: typeof AntdForm.ErrorList;
  Provider: typeof FormProvider;
  ConfigProvider: typeof SchemaFormConfigProvider;
};
//
// declare const Form: CompoundedComponent;
// export default Form;

const Form: CompoundedComponent = InternalForm as CompoundedComponent;
Form.useForm = AntdForm.useForm;
// Form.useFormInstance = AntdForm.useFormInstance;
Form.useWatch = AntdForm.useWatch;
Form.Item = AntdForm.Field;
Form.List = AntdForm.List;
// Form.ErrorList = AntdForm.ErrorList;
Form.Provider = FormProvider;
Form.Items = SchemaFormItems;
Form.ConfigProvider = SchemaFormConfigProvider;

export type {
  FormColumn,
  FormField,
  NamePathArr,
  NamePath,
  FormFieldsProps,
  TypeAdapter,
  ValidationAdapter,
  FormSchema,
};
export {setValidationErrors, MapProps};
export default Form;
