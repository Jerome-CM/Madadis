import Cookies from 'js-cookie';

export function deleteProductInCookie(cookieName, productIdToRemove) {
    // Lire le cookie
    const cookie = Cookies.get(cookieName);

    if (cookie) {
        try {
            // Convertir la chaîne JSON en objet JavaScript
            let parsedCookie = JSON.parse(cookie);

            // Filtrer les éléments pour supprimer celui correspondant à productIdToRemove
            parsedCookie = parsedCookie.filter(item => item.productId !== productIdToRemove);

            // Si la liste n'est pas vide, mettre à jour le cookie
            if (parsedCookie.length > 0) {
                Cookies.set(cookieName, JSON.stringify(parsedCookie));
            } else {
                // Si la liste est vide, supprimer le cookie
                Cookies.remove(cookieName);
            }

            console.log(`Product with ID ${productIdToRemove} removed from cookie.`);
        } catch (error) {
            console.error('Failed to parse cookie content:', error);
        }
    } else {
        console.log('No cookie found with the given name.');
    }
}
