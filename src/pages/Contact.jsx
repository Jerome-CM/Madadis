// pages/Contact.js

import {MainTitle} from "../components/MainTitle.jsx";
import {Input} from "../components/input.jsx";
import {Submit} from "../components/submit.jsx";

export function Contact() {
    return <>
        <MainTitle title={'Contact'}/>
        <form className="w-9/12 rounded overflow-hidden shadow-lg p-4 my-5 mx-auto bg-white text-black flex flex-col items-center" onSubmit={handleSubmit} method="post">
            <img className="w-60" src="/src/assets/e-mail.gif" alt="Lock"/>
            <div className="flex flex-row">
                <div className="w-6/12">
                    <Input type={'text'} name={'firstname'} placeholder={'Firstname'}/>
                    <Input type={'text'} name={'lastname'} placeholder={'Lastname'}/>
                    <Input type={'text'} name={'mail'} placeholder={'E-mail'}/>
                </div>
                <textarea placeholder="Your message" name="message" className="w-6/12 form-input px-4 py-3 w-96 m-2 rounded border-none drop-shadow-md"></textarea>
            </div>
            <Submit type={'submit'} value={'Envoyer'}/>
        </form>
    </>
}

function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    formData.get('password');

}

