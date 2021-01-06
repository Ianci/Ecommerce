import React, { useState } from 'react'
import { Formik, Form, ErrorMessage, Field} from 'formik'
import { Input, Button } from 'semantic-ui-react'
import * as Yup from 'yup';
import { BASE_PATH } from '../../../utils/constants'

export default function RegisterForm({ showLoginForm, onCloseModal}) {
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)
   


    async function registerFunction(values){
        const url = `${BASE_PATH}/auth/local/register`
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        };
        try {
            const response = await fetch(url, params)
            const result = await response.json()
            console.log(result)

        } catch (error) {
            console.log(error.message)
            setError('Error al crear usuario. El email ya está en uso')
        }
    }
    return (
        <Formik initialValues={{name: "", email: "", password: "", confirm: ""}}
        validationSchema = {Yup.object({
            name: Yup.string()
            .required('Por favor introduce tu nombre')
            .max(15, 'Tu nombre debe contener 15 caracteres máximo'),

            email: Yup.string()
            .email('Introduce un email válido')
            .required('Completa el campo con tu email'),
            
            password: Yup.string()
            .required('Introduce tu contraseña')
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .max(15, 'La contraseña debe tener como máximo 15 caracteres'),

            confirm: Yup.string()
            .required('Vuelva a escribir la contraseña')
            .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
        })}
        onSubmit={(values, actions) => {
                    setLoading(true)
                    registerFunction(values)
                setTimeout(() => {
                    actions.setSubmitting(false);
                    setLoading(false)
                    onCloseModal()
                  }, 1000);
        }}>
       {( {isValid, dirty, isSubmitting})=>(
           
            <div className="login">
                <div className="login__container">
                     <Form className="login__form">
                         <div className="login__content">
                         <Field as={Input}  type="text"  className="login__input" name="name" label="Introduce tu nombre" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                                 <ErrorMessage name="name" component="small" className="login__error" />

                                 <Field as={Input}  type="email"  className="login__input" name="email" label="Introduce tu email" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                                 <ErrorMessage name="email" component="small" className="login__error" />

                                 <Field as={Input} type="password" className="login__input" name="password" label="Introduce tu contraseña" autoComplete="off" size="small"/>
                                 <ErrorMessage name="password" component="small" className="login__error" />

                                 <Field as={Input}  type="password"  className="login__input" name="confirm" label="Repita su contraseña" autoComplete="off" size="small"/>
                                 <ErrorMessage name="confirm" component="small" className="login__error" />
                                 <Button primary type="submit" disabled={!(isValid && dirty) || isSubmitting} loading={loading}>Entrar</Button>

                                 <Input>Ya tienes cuenta ? <span onClick={showLoginForm} className="login__span">Loguear</span></Input>
                                 {error && <span>{error}</span>}
                            </div>
                     </Form>
                </div>
            </div>
            
       )}
       </Formik>
    )
}
