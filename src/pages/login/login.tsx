import { useState } from 'react';
import Button from '../../components/ui/button/Button';
import Input from '../../components/ui/input/Input';
import apiRequest from '../../api/index';

export default function Login() {

    const ENDPOINT_NAME_FOR_LOGIN = '/register';
    const ENDPOINT_NAME_FOR_REGISTER = '/register';

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
            const data = await apiRequest(ENDPOINT_NAME_FOR_LOGIN, 'POST', { login, password });
            console.log(data.message);
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
            const data = await apiRequest(ENDPOINT_NAME_FOR_REGISTER, 'POST', { login, password });
            console.log(data.message);
        }  catch (e) {
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.error('Unknown error', e);
            }
        }
    }

    return (
        <div>
            <div>Добро пожаловать в супер удобный инструмент</div>
            <div>
                {isSignUp ?
                    (
                        <div>
                            <div>Регистрация</div>

                            <p>
                                Если у вас нет аккаунта, то создайте его,
                                но запишите пароль потому что функцию восстановления мне делать лень пока что
                            </p>
                        </div>

                    ) : (
                        <div>
                            <div>Вход</div>
                            <p>
                                Для входа в акк, введите логин и пароль
                            </p>
                        </div>

                    )
                }
            </div>
            <div>
                <Input onChange={onChangeLogin} type='text'/>
                <Input onChange={onChangePassword} type='password'/>
            </div>
            <div>
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