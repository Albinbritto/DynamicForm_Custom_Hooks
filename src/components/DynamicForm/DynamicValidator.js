export default function Validator(
  formMetaData,
  formValues,
  errorObj,
  isSubmitting = false
) {
  console.log('Incomig error', errorObj);
  let errors = {};
  errors = { ...errorObj };

  if (isSubmitting) {
    formMetaData.forEach((metaData) => {
      if (metaData.required) {
        const keyExist = Object.keys(formValues).includes(metaData.id);
        if (!keyExist && !metaData.value) {
          errors[metaData.id] = metaData.requiredMsg;
        }
      }
    });
  } else {
    const metaData = formMetaData[0];
    if (metaData.required && !formValues[metaData.id]) {
      errors[metaData.id] = metaData.requiredMsg;
    } else if (
      metaData.minlength &&
      formValues[metaData.id].length < metaData.minlength
    ) {
      errors[
        metaData.id
      ] = `${metaData.label} should be minimum ${metaData.minlength} characters`;
    } else {
      delete errors[metaData.id];
    }
  }
  console.log(errors);
  return errors;
}
