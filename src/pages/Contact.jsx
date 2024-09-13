// pages/Contact.js

import {MainTitle} from "../components/MainTitle.jsx";
import {Input} from "../components/input.jsx";
import {Submit} from "../components/submit.jsx";
import {ContactUs} from "../components/ContactUs.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Contact() {

    return <>
        <MainTitle title={'Contact'}/>
        <ContactUs/>
        <ToastContainer autoClose={3000}/>
    </>
}

/* function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    formData.get('password');

} */

