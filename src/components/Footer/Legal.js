// Import packages/modules
import React from 'react'
import { useHistory } from "react-router-dom";

// Import style-sheet
import './footer.scss';

// Component
function Legal() {

  // going to the previous page
  const history = useHistory();

  return (

    <div className="legal">

      <button className="head-icon-back-dark" onClick={() => history.goBack()}>
      〈
      </button>

      <h2>Mentions légales</h2>

      <div>

        <h3>ON EN EST CONSCIENT...</h3>

        <p>Cette page ne trouvera pas de lecteurs, comme sur le site de l'école O'Clock où nous l'avons honteusement copiée. En tout cas, très peu. C’est tout le paradoxe : les mentions légales est la seule page que nous sommes obligés de publier et la seule page que vous ne lirez surement jamais. <span>Et le pire c'est que nous sommes conscients que ces mentions légales ne sont pas les bonnes pour un site comme le notre</span> On ne vous critique pas. On est même d’accord avec vous. Nous partageons votre aversion pour la prose administrative. Mais nous sommes contraints de nous y mettre. C’est pas bien marrant, ce n’est pas intéressant mais c’est comme ça. Nous allons donc nous conformer aux règles et vous informer de nos mentions légales...
        Ceci étant dit et avant de vous présenter toutes les informations transcendantes telles que notre drolatique numéro d’immatriculation simplifiée ou le cultissime code postal de l’hébergeur du site, nous voulions tout de même insister sur l’inanité de cette démarche : écrire une page que personne n’a envie de lire. Enfin, à moins que vous travailliez à la CNIL. Et encore. On ne peut pas dire que vous aurez envie de la lire. Vous devrez, ça oui. Et d’ailleurs on compatit. C’est quand même le genre de page qui se survole beaucoup plus qu’elle ne se dévore. Vous en conviendrez. A quoi cela sert ? Honnêtement ? A rien. Bref, on arrête de digresser et on vous dévoile nos mentions légales…</p>

        <h3>ALORS, JUSTE ÇA, APRÈS ON VOUS LES BALANCE</h3>

        <p>Mais tout de même. Pardonnez-nous de revenir là-dessus, mais on marche sur la tête. A la base, nous avions dans l’idée de créer une école de développement web. Pas n’importe quelle école. Une école en téléprésentiel. Accessible partout, sans contraintes, ouverte à tous les profils. Une école qui met en avant le goût de l’effort, l’autonomie, la sagacité et l’impertinence. Une nouvelle manière d’apprendre où les étudiants seraient libérés des contraintes ennuyeuses pour se concentrer sur l’essentiel. Vous serez d’accord avec nous pour dire que la simple démarche de publier une page dont tout le monde se fout est quelque peu absurde ?
        Oui, oui, on va vous les afficher nos mentions légales. Mais quand même. Est-ce que ce n’est pas notre rôle de se positionner contre ce diktat administratif ? En tant qu’école, ne devons-nous pas être garants que chaque contenu que nous vous proposons soit essentiel pour le changement professionnel que vous opérez actuellement ?
        Vous savez quoi ? On a changé d’avis. Finalement, nous ne vous dévoilerons pas nos mentions légales. Il en va de notre intégrité. Nous, O’clock, portons la responsabilité de vous guider vers vos objectifs. Il est donc de notre devoir de vous proposer uniquement des contenus qui iront dans le sens de vos ambitions et de vos espoirs ! Nous lançons donc un appel : vous qui lisez ce manifeste, levez-vous et indignez-vous. Luttons pour le contenu utile et dégageons-nous de ces maillons administratifs qui brident notre ascension.
        Et cela commence par lire notre méthode où toute notre philosophie de la pédagogie y est racontée. Lisez également le programme de nos formations pour avoir un avant-goût de l’aventure qui vous attend avec O’clock, ou encore consultez notre page Team qui vous présentera les humains qui vous accompagneront pendant votre périple. Alors non, pas de mentions légales sur cette page mentions légales, parce qu’après tout, on fait ce que l’on veut. Et vous aussi !</p>

        <h3>EN MÊME TEMPS…</h3>

        <p>On sort des grandes phrases, on prône l’insurrection, on déploie nos grandes expressions « Diktat administratif », « l'école de la nouvelle sagacité » gna gna gna.
        Mais ici c’est la page mentions légales. Ça veut dire quoi ? Ça veut dire que personne ne va cliquer sur cette page. Et donc ? Et bien, personne ne prendra connaissance de ce texte enflammé. Donc, on a écrit tout ça pour rien du tout. 
        Alors, le plus simple, est-ce que ça ne serait tout simplement pas de vous afficher une bonne fois pour toutes, ces mentions légales ? Qu’est-ce que vous en pensez ? Bon, on vous pose la question mais on sait bien que personne ne lit. Alors on va prendre la décision seuls.</p>

        <h3>VOICI NOS MENTIONS LÉGALES :</h3>

        <h4>Editeur</h4>
        <p>C'est nous, sans rien</p>

        <h4>Directeur de la publication</h4>
        <p>Jean-Pierre Avidole, Marcel Patulacci, Robert Robichet</p>

        <h4>Adresse de courrier électronique et numéro de téléphone</h4>
        <p>contact@wishlist.com - 09.74.76.80.67</p>

        <h4>Hébergeur du site</h4>
        <p>Gandi SAS au capital de 800 000 € ayant son siège social au 63-65 boulevard Massena à Paris (75013), immatriculée sous le numéro 423 093 459 au RCS de Paris.</p>

        <h4>Déclaration CNIL</h4>
        <p>Conformément à la loi N°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, la société O’clock a fait l’objet d’une déclaration auprès de la CNIL sous le numéro d’enregistrement 2027779</p>

      </div>

    </div>

  )
}

// Export component
export default Legal
