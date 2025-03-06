import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
    return (
        <CardWrapper headerLable="Welcome back"
        backButtonLable="? Dont have an account"
        backButtonHref="/auth/register"
        showSocial
        >
            Login Form
        </CardWrapper>
    );
}