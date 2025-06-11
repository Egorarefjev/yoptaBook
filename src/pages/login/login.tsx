import { useState } from 'react';
import Button from '/src/components/ui/button/Button';
import Input from '/src/components/ui/input/Input';

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

    function onCreateAccount() {
        console.log(`Аккаунт: ${login} создан`);
    }

    function onLogin() {
        console.log(`Попытка входа в аккаунт: ${login}`);
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
                <Input onChangeAction={onChangeLogin}/>
                <Input type='password'/>
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