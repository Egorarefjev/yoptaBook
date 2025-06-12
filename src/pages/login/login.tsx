import { useState } from 'react';
import Button from '../../components/ui/button/Button';
import Input from '../../components/ui/input/Input';
import styles from './login.module.scss';
import { apiRequest } from '../../api/index';
import { API_ENDPOINTS } from '../../api/endpoints';

export default function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    function onChangeLogin(e) {
        setLogin(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    function onChangeTypeLogin() {
        setLogin('');
        setPassword('');

        setIsSignUp((prev) => !prev);
    }

    async function onLogin() {
        try {
            const data = await apiRequest(API_ENDPOINTS.LOGIN, 'POST', { login, password });
        }  catch (e) {
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.error('Unknown error', e);
            }
        }
    }

    async function onCreateAccount() {
        try {
            const data = await apiRequest(API_ENDPOINTS.REGISTER, 'POST', { login, password });
        }  catch (e) {
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.error('Unknown error', e);
            }
        }
    }

    return (
        <div className={`${styles.wrapper} container`}>
            <div className={styles.title}>Добро пожаловать!</div>
            <div className='mb-md'>
                {isSignUp ?
                    (
                        <div>
                            <div className={`${styles.subtitle} mb-md`}>Регистрация</div>

                            <p className={styles.text}>
                                Если у вас нет аккаунта, то создайте его,
                                но запишите пароль потому что функцию восстановления мне делать лень пока что
                            </p>
                        </div>

                    ) : (
                        <div>
                            <div className={styles.subtitle}>Вход</div>
                            <p className={styles.text}>
                                Для входа в акк, введите логин и пароль
                            </p>
                        </div>

                    )
                }
            </div>
            <div className='mb-md'>
                <Input onChange={onChangeLogin} type='text'/>
                <Input onChange={onChangePassword} type='password'/>
            </div>
            <div className={styles.buttons}>
                { isSignUp ?
                    (<Button onClick={onChangeTypeLogin}>Есть аккаунт</Button>)
                    : (<Button onClick={onLogin}>Войти</Button>)
                }

                { isSignUp ?
                    (<Button onClick={onCreateAccount}>Создать аккаунт</Button>)
                    : (<Button onClick={onChangeTypeLogin}>Зарегистрироваться</Button>)
                }
            </div>
        </div>
    )
}