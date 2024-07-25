import {MainTitle} from "../components/MainTitle";
import {Input} from "../components/input.jsx";
import {Submit} from "../components/submit.jsx";


export function Auth(){
    return <>
        <MainTitle title={'Connexion'}/>
        <form className="w-5/12 rounded overflow-hidden shadow-lg p-4 my-5 mx-auto bg-white text-black flex flex-col items-center" onSubmit={handleSubmit} method="post">
            <img className="w-60" src="/src/assets/cadenas.gif" alt="Lock"/>
            <Input type={'text'} name={'username'} placeholder={'Username'}/>
            <Input type={'password'} name={'password'} placeholder={'Password'}/>
            <Submit type={'submit'} value={'Connexion'}/>
        </form>
    </>
}

function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: formData.get('username'),
            password: formData.get('password'),
            expiresInMins: 30, // optional, defaults to 60
        })
    })
        .then(res => res.json())
        .then(data=>{
            if(data.token !== ''){
                localStorage.setItem('token', data.token);
                location.href = '/products';
            }
        });
    }
