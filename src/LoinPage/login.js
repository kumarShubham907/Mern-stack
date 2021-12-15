import React, { useState } from 'react'
import { Container,Card,Form,Button,Input,Lable } from './styled'
import { DataList } from '../Redux/Action/Action'
const Login = () => {
    const [loginInput, setloginInput] = useState({email: '', password: ""})
    const handler = (e)=>{
        const valueData = e.target.value
        const namedata = e.target.name
        setloginInput({...loginInput,[namedata]: valueData})
    }
    const [Error, setError] = useState({})
    const submit = (e)=>{
        e.preventDefault()
        setError(checkData(loginInput))
    }
    const checkData = ()=>{
        const error = {}
        if(!loginInput.email){
            error.name = "Please Enter UserName"
        }
        if(!loginInput.password){
            error.password = "Please Enter UserName"
        }
        return error
    }
    return (
        <>
            <Container>
                <Card>
                    <Form onSubmit={submit}>
                        <lable>User Name</lable>
                    <Input type="text" value={loginInput.email} onChange={handler} name="email"/>
                    <lable>Password</lable>
                    <Input type="text" value={loginInput.password} onChange={handler} name="password"/>
                    <Button>Sig In</Button>
                    </Form>
                </Card>
                <Card>

                </Card>
            </Container>
        </>
    )
}

export default Login
