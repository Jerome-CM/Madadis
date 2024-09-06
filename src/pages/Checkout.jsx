import { useState, useEffect } from "react";
import { MainTitle } from "../components/MainTitle.jsx";
import { Input } from "../components/input.jsx";
import { Submit } from "../components/submit.jsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Checkout() {
    const navigate = useNavigate();

    const [agree, setAgree] = useState(false); // État uniquement pour la checkbox
    const [isFormValid, setIsFormValid] = useState(false); // Contrôle de validité du formulaire

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate("/auth");
        }
    }, [navigate]);

    useEffect(() => {
        // Active le bouton si la checkbox est cochée
        setIsFormValid(agree);
    }, [agree]);

    const handleInputChange = (e) => {
        const { type, checked } = e.target;
        if (type === 'checkbox') {
            setAgree(checked); // Mets à jour l'état de la checkbox
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            toast.success('Formulaire envoyé avec succès !');
        } else {
            toast.error("Veuillez accepter les conditions avant de soumettre.");
        }
    };

    return (
        <>
            <MainTitle title={'Checkout'} />
            <form
                className="w-8/12 rounded overflow-hidden shadow-lg p-4 my-5 mx-auto bg-white text-black flex flex-col items-center"
                onSubmit={handleSubmit}
            >
                <img className="w-48" src="/src/assets/creditCard.png" alt="Credit Card" />
                <div className="flex flex-row">
                    <div className="text-center">
                        <Input type="text" name="cardNumber" placeholder="Card Number..." />
                        <Input type="text" name="date" placeholder="Expiration Date" />
                        <Input type="text" name="cvv" placeholder="CVV" />
                    </div>
                </div>
                {/* Checkbox simple pour accepter les conditions */}
                <div>
                    <input
                        className="w-4 m-3 rounded"
                        type="checkbox"
                        name="agree"
                        checked={agree}
                        onChange={handleInputChange} // Mets à jour l'état "agree"
                    />
                    <label>Vous acceptez les conditions</label>
                </div>
                {/* Bouton Submit qui se désactive tant que la checkbox n'est pas cochée */}
                <Submit type="submit" value="Envoyer" disabled={!isFormValid} />
            </form>
            <ToastContainer autoClose={3000} />
        </>
    );
}
