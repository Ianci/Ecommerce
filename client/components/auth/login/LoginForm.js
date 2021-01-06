import React, { useState } from 'react'
import { Formik, Form, ErrorMessage, Field} from 'formik'
import { Input, Button  } from 'semantic-ui-react'
import * as Yup from 'yup';
import { BASE_PATH } from '../../../utils/constants'

export default function LoginForm({ showRegisterForm, onCloseModal }) {

    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    async function loginApi(values){
        
        const url = `${BASE_PATH}/auth/local`;
        const params = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        };
        try {
            const response = await fetch(url, params)
            const result = await response.json()
            console.log(result)
            const errorMsg = result.message[0].messages[0].message
            setError(errorMsg)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    return (
        <Formik initialValues={{identifier: "", password: ""}}
        validationSchema = {Yup.object({
            identifier: Yup.string()
            .email('El email no es válido')
            .required('Por favor introduce tu email'),
            password: Yup.string()
            .required('Por favor introduce tu contraseña')
        })}
        onSubmit= {(values, actions) => {
                setLoading(true)
                loginApi(values)
                setTimeout(() => {
                    actions.setSubmitting(false);
                    onCloseModal()
                    setLoading(false)
                  }, 1000);
        }}>
       {( {isValid, dirty, isSubmitting})=>(
           
            <div className="login">
                <div className="login__container">
                     <Form className="login__form">
                         <div className="login__content">
                                 <Field as={Input}  type="email"  className="login__input" name="identifier" label="Introduce tu email" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                                 <ErrorMessage name="identifier" component="small" className="login__error" />

                                 <Field as={Input} type="password" className="login__input" name="password" label="Introduce tu contraseña" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                                 <ErrorMessage name="password" component="small" className="login__error" />
                                 <Button primary type="submit" disabled={!(isValid && dirty) || isSubmitting} loading={loading}>Entrar</Button>
                                 <Input>No tienes cuenta? <br/><span onClick={showRegisterForm}  className="login__span">Registrate</span></Input>
                                 <span className="login__span">Olvidaste tu contraseña?</span>
                                 {error && <p>{error}</p>}
                            </div>
                     </Form>
                </div>
            </div>
            
       )}
       </Formik>
    )
}
