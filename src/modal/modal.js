import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
import * as Yup from 'yup';
import './modal.css'

const MyTextInput = ({label,...props}) => {
    const [filed,meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>label</label>
            <input {...props} {...filed}/>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
}
const CustomForm = () => {
    return (
        <Formik
            initialValues = {{
                name:'',
                email:'',
                amount:'0',
                currency:'',
                text:'',
                terms: false
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                    .test(
                        'is-james',
                        (d) => `${d.path} is not James`,
                        function (value) {
                            if(value.length < 3 ) {
                                console.log('he')
                            }
                        }
                    )
                    .required('Обизателное поле!'),
                email: Yup.string()
                    .email('Неправилний email адрес')
                    .required('Обизателное поле!'),
            })}
            onSubmit={values => console.log(JSON.stringify(values,null,2))}
        >
            <Form className="modal.css">
                <label htmlFor="text">Ваше сообщение</label>
                <Field
                    id="text"
                    name="text"
                />
                <Field
                    id="currency"
                    name="currency"
                    as="select"
                >
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage name='amount' className='error' component='div'/>
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;