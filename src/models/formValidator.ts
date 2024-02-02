import FormDataInterface from "../interfaces/formData";
export default class FormValidatorModel {

    public static validator(formData: FormDataInterface)  {
        const formDataKeys = Object.keys(formData);
        const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(formData.email.current.value);
        const validationErrors:FormDataInterface = {};
        if(formDataKeys && formDataKeys.length) {
            for(let key in formData) {
                const formValues =  formData[key].current.value
                if((formData.email.current.value && !isEmailValid) && key === 'email') {
                    validationErrors[key] = `Please enter valid email`;
                }
                if(!formValues) {
                    validationErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                }
            }
        }
        return validationErrors
    }
}