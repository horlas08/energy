import SignInForm from './SignInForm'

const SignIn = () => {
    return (
        <div>
            <div className="mb-8">
                <h3 className="mb-1 text-center">Welcome back!</h3>
                <p className={'text-center'}>
                    Enter your account details to login
                </p>
            </div>
            <SignInForm disableSubmit={false} />
            <p className={' max-w-[400px] mt-[50px] mx-auto text-center'}>
                By clicking “Login or Signup”, you assert that you have read and
                agreed to our{' '}
                <b className={'text-primary cursor-pointer'}>
                    Terms of Service
                </b>{' '}
                and{' '}
                <b className={'text-primary cursor-pointer'}>Privacy Policy.</b>
            </p>
        </div>
    )
}

export default SignIn
