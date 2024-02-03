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
                text:'',
                select:'',
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                    .required('Обизателное поле!'),
                currency: Yup.string()
                    .required('Обизателное поле!'),
                textarea: Yup.string()
                    .required('Обизателное поле!')

            })}
            onSubmit={values => console.log(JSON.stringify(values,null,2))}
        >
            <Form className="modal.css">
                <h2>Отправить пожертвование</h2>
                <MyTextInput
                    label='Ваше имя'
                    id="name"
                    name="name"
                    type="text"
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
                <ErrorMessage component="div" className="error" name="currency"/>
                <label htmlFor="text">Ваше сообщение</label>
                <Field
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage component="div" className="error" name="text"/>
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;
