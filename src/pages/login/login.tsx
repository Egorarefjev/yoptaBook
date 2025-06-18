import { useState } from 'react';
import Button from '../../components/ui/button/Button';
import Input from '../../components/ui/input/Input';
import UiError from '../../components/ui/Error/Error';
import styles from './login.module.scss';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);


    const { login, register } = useAuth();

    function resetForm() {
        setLoginInput('');
        setPasswordInput('');
    }

    function toggleMode() {
        resetForm();
        setIsSignUp(prev => !prev);
    }

    async function handleSubmit(): Promise<void> {
        setErrors([]);
        try {
            if (isSignUp) {
                await register(loginInput, passwordInput);
            } else {
                await login(loginInput, passwordInput);
            }

            setErrors([]);
        } catch (e) {
            if (e instanceof Error) {
                const errorMessage = (e as Error).message;
                setErrors(prev => [...prev, errorMessage]);
                console.error('Ошибка входа/регистрации:', e.message);
            } else {
                console.error('Неизвестная ошибка входа/регистрации:', e);
            }
        }
    }

    return (
        <div className={`${styles.wrapper} container`}>
            <div className={styles.title}>Добро пожаловать!</div>

            <div className="mb-md">
                <div className={`${styles.subtitle} mb-md`}>
                    {isSignUp ? 'Регистрация' : 'Вход'}
                </div>
                <p className={styles.text}>
                    {isSignUp
                        ? 'Если у вас нет аккаунта, создайте его. Только не забудьте пароль.'
                        : 'Для входа в аккаунт введите логин и пароль.'}
                </p>
            </div>

            <div className="mb-md">
                <Input
                    className='mb-sm'
                    placeholder="Логин"
                    type="text"
                    value={loginInput}
                    onChange={e => setLoginInput(e.target.value)}
                />
                <Input
                    placeholder="Пароль"
                    type="password"
                    value={passwordInput}
                    onChange={e => setPasswordInput(e.target.value)}
                />
            </div>

            <div className={styles.buttons}>
                <Button onClick={toggleMode}>
                    {isSignUp ? 'Есть аккаунт' : 'Зарегистрироваться'}
                </Button>
                <Button onClick={handleSubmit}>
                    {isSignUp ? 'Создать аккаунт' : 'Войти'}
                </Button>
            </div>
            <div>
                {errors.length > 0 && (
                    <div className={`${styles.errors} mb-sm`}>
                        {errors.map((textError, i) => (
                            <UiError key={i} textError={textError} className='mb-sm' />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
