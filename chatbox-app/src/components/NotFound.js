/**
 * Composant NotFound qui affiche un message indiquant que la page demandée n'est pas trouvée.
 * Utilisé pour les routes non définies dans l'application.
 *
 * @returns {JSX.Element} Un élément <h2> avec un message indiquant que la page n'existe pas.
 */
import React, {Fragment} from 'react';
import Header from "./Header";
import Footer from "./Footer";

const NotFound = () => (
    <Fragment>
        <Header />
        <div className='connexionBox'>
            <h2 className='notFound'>Y'a rien ici</h2>  {/* Message affiché pour les routes non trouvées */}
        </div>
        <Footer />
    </Fragment>

);

export default NotFound;
