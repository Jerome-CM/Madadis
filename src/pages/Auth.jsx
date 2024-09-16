import { MainTitle } from "../components/MainTitle";
import { Input } from "../components/input.jsx";
import { Submit } from "../components/submit.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export function Auth() {

    const navigate = useNavigate();
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // handleSubmit devient une fonction async
    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const res = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: formData.get('username'),
                    password: formData.get('password'),
                    expiresInMins: 30, // optional, defaults to 60
                })
            });

            if (!res.ok) {
                throw new Error('Invalid credentials');
            }

            const data = await res.json();

            if (data.token) {
                localStorage.setItem('token', data.token);
                toast.success("Login correct. Redirecting in a few seconds...");
                await sleep(3000);
                navigate("/shopping");
            }
        } catch (error) {
            toast.error("Your credentials are incorrect.");
        }
    }

    return (
        <>
            <MainTitle title={'Connexion'} />
            <form
                className="w-10/12 lg:w-5/12 rounded overflow-hidden shadow-lg p-4 my-5 mx-auto bg-white text-black flex flex-col items-center"
                onSubmit={handleSubmit}
                method="post"
            >
                <img className="w-60" src="/src/assets/cadenas.gif" alt="Lock" />
                <Input type={'text'} name={'username'} placeholder={'Username'} />
                <Input type={'password'} name={'password'} placeholder={'Password'} />
                <Submit type={'submit'} value={'Connexion'} />
            </form>
            <ToastContainer autoClose={3000}/>
        </>
    );
}
