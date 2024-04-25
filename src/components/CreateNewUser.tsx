import { Button, Card, TextInput, Title } from "@tremor/react";

export function  CreateNewUser () {
    return (
        <Card style={{marginTop:"16px"}}>
            <Title>Create New User</Title>

            <form className="">
             <TextInput placeholder="coloca el nombre" />
             <TextInput placeholder="coloca el email"/>
             <TextInput placeholder="Aqui el usurio de github" />
             <div> <Button type="button" style={{marginTop:'16px'}}>Crear usuario</Button></div>
            </form>
        </Card>
    )
}