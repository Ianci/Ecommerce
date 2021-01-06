import React, { useState } from 'react'
import LoginForm from './login/LoginForm'
import RegisterForm from './register/RegisterForm'

export default function Auth({ onCloseModal, setTitleModal }) {
    const [showLogin, setShowLogin] = useState(true)

    const showLoginForm = () => {
        setShowLogin(true)
        setTitleModal('Iniciar sesion')
    }
    const showRegisterForm = () => {
        setShowLogin(false)
        setTitleModal('Crear cuenta')
    }
    return (
        
            showLogin 
            ? 
            <LoginForm
            showRegisterForm={showRegisterForm}
            onCloseModal={onCloseModal}
            />
            : <RegisterForm showLoginForm={showLoginForm} onCloseModal={onCloseModal}/>
        
    )
}
