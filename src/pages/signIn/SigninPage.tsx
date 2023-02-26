import React from "react"
import { UserLayout } from "../../layouts/userLayout"
import { SigninForm } from "./SigninForm"
export const SigninPage: React.FC = () => {
    return <UserLayout>
        <SigninForm></SigninForm>
    </UserLayout>
}