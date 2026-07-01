import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
    title: "Conditions générales de vente",
    description:
        "Conditions générales de vente des prestations de Tiaré Assist', secrétariat indépendant à Frouzins (31270).",
    alternates: { canonical: "/conditions-generales-vente" },
    robots: { index: false, follow: true },
};

export default function ConditionsGeneralesVente() {
    return (
        <>
            <Header />
            <main className="legal-content">
                <h1>Conditions Générales de Vente</h1>

                <h2>1 - Objet</h2>
                <p>
                    Les Conditions Générales de Vente (CGV) de prestations de
                    services décrites ci-après détaillent les droits et
                    obligations de l’entreprise individuelle{" "}
                    <strong>TIARE ASSIST’</strong>, représentée par{" "}
                    <strong>Mandy MICHEAU</strong> (Secrétaire indépendante) et de
                    son <strong> Client</strong>, dans le cadre de{" "}
                    <strong>
                        missions de secrétariat dans les domaines administratif et
                        social.
                    </strong>
                </p>

                <h2>2 - Application</h2>
                <p>
                    Toute commande implique, pour devenir ferme et définitive,
                    l’adhésion entière et sans réserve du <strong>Client</strong>{" "}
                    aux présentes CGV, qu’il déclare avoir lues, comprises et
                    acceptées. Aucune condition particulière ou générale d’achat
                    ne peut, sauf accord express et écrit des deux parties,
                    prévaloir sur les présentes CGV.
                </p>

                <h2>3 - Lieu et durée d’intervention</h2>
                <p>
                    Les prestations prévues à l’article 1 sont réalisées dans les
                    locaux de l’entreprise <strong>TIARE ASSIST’</strong> (son
                    domicile), en <strong>télétravail</strong>, ou dans ceux du{" "}
                    <strong>Client sur site</strong>, sur le matériel du{" "}
                    <strong>Client</strong> après accord entre les deux parties.
                </p>

                <h2>4 - Devis et validité des commandes</h2>
                <p>
                    Chaque commande est précédée d’un devis gratuit établi par{" "}
                    <strong>TIARE ASSIST’</strong> sur la base des informations
                    communiquées par le <strong>Client</strong> et indiquant le
                    détail de la prestation à effectuer. Pour confirmer sa
                    commande de manière ferme et définitive, le{" "}
                    <strong>Client</strong> doit retourner à{" "}
                    <strong>TIARE ASSIST’</strong>, par tout moyen à sa
                    convenance, le devis incluant les présentes CGV, sans aucune
                    modification, dûment signé avec la mention «Bon pour accord»,
                    les professionnels devant en outre apposer leur cachet
                    commercial. En cas de confirmation de commande par courrier
                    électronique, une mention devra préciser l’adhésion pleine et
                    entière du <strong>Client</strong> auxdites CGV, figurant en
                    ligne à l’adresse : https://www.tiareassist.fr. À défaut
                    de réception de l’acceptation du devis et des CGV,{" "}
                    <strong> TIARE ASSIST’ </strong>se réserve le droit de ne pas
                    commencer sa prestation.
                </p>

                <h2>5 - Exécution des commandes et délai de réalisation</h2>
                <p>
                    <strong>TIARE ASSIST’</strong> est soumise à une obligation de
                    moyens, s’engage à accomplir avec le plus grand soin et
                    conformément au devis accepté les prestations commandées, et à
                    proposer les délais les plus adaptés à la demande du{" "}
                    <strong>Client</strong>, dans la mesure de ses
                    disponibilités. La livraison est réalisée à la date indiquée
                    sur le devis, sauf accord contraire ou retard du{" "}
                    <strong> Client </strong>pour confirmer sa commande, pouvant
                    donner lieu à un dépassement des délais. Les délais de
                    livraison n’étant donnés qu’à titre indicatif, leur
                    dépassement ne pourra donner lieu, au profit du{" "}
                    <strong> Client</strong>, à allocation de dommages et intérêts,
                    pénalités pour retard ou annulation de la commande. Le{" "}
                    <strong> Client </strong>s’engage à mettre à la disposition de
                    <strong> TIARE ASSIST’ </strong>tous les éléments nécessaires
                    à l’exécution de la prestation définie. Tout retard ou
                    omission de sa part pourra entraîner soit une révision de la
                    date de livraison, soit une annulation de la commande.
                </p>

                <h2>6 - Les tarifs</h2>
                <p>
                    Les tarifs appliqués sont ceux en vigueur au jour de la prise
                    de commande. Les prix peuvent être calculés à l’unité, à
                    l’heure ou au forfait. Ils sont exprimés en euros et ne sont
                    pas soumis à la TVA, conformément à l’article 293 B du Code
                    Général des Impôts. Les services aux entreprises sont négociés
                    de gré à gré et leur tarif final pourra varier en fonction des
                    exigences particulières que requièrent les prestations, soit
                    en faveur du <strong> Client</strong>, soit en faveur de{" "}
                    <strong> TIARE ASSIST’</strong>. Ainsi, les tarifs indiqués sur
                    les supports de communication de{" "}
                    <strong> TIARE ASSIST’ </strong>
                    sont donnés à titre indicatif et ne remplacent nullement un
                    devis personnalisé en bonne et due forme. Les tarifs seront
                    majorés des éventuels frais d’affranchissement, d’impression,
                    de fourniture particulière et/ou de livraison applicables au
                    jour de la commande. Pour toute commande d’une prestation
                    d’envoi en nombre, une provision correspondant aux frais
                    d’affranchissement au tarif en vigueur sera demandée. Toute
                    prestation sur site sera majorée de frais de déplacement selon
                    barème kilométrique en vigueur et d’éventuels frais de
                    stationnement. De manière générale, les tarifs sont révisables
                    au 1er janvier de chaque année. Toutefois,{" "}
                    <strong> TIARE ASSIST’ </strong>
                    s’accorde le droit de modifier ses tarifs à tout moment, étant
                    entendu que les travaux en cours seront facturés aux prix
                    indiqués lors de l’enregistrement de la commande, validée par
                    la signature du devis et des présentes CGV.
                </p>

                <h2>7 - Majorations</h2>
                <p>
                    Les prestations réalisées en <strong>urgence</strong> à la
                    demande du <strong> Client </strong> seront majorées de la
                    façon suivante :
                    <br />- Travaux effectués après 18h30, les samedis ou à
                    remettre dans un délai inférieur à 24 heures : + 25%
                    <br />- Travaux réalisés les dimanches et jours fériés : + 50
                    %.
                </p>

                <h2>8 - Droit de rétractation et annulation</h2>
                <p>
                    Un droit de rétractation sera accepté dans la limite de sept
                    jours ouvrables suivant la date du devis signé, uniquement
                    s’il est prévu un début d’exécution de la prestation
                    postérieur à ce délai de sept jours. Il ne sera alors facturé
                    au <strong> Client </strong>
                    aucun frais. En cas d’annulation d’une commande en cours de
                    réalisation par le <strong> Client</strong>, quelle qu’en soit
                    la cause, ce dernier s’engage à régler la totalité de la
                    prestation déjà effectuée. L’annulation devra être confirmée
                    par le <strong> Client </strong> de{" "}
                    <strong> TIARE ASSIST’ </strong> par écrit par mail avec accusé
                    de réception ou par courrier recommandé. Par voie de
                    conséquence, le document réalisé en totalité ou en partie par{" "}
                    <strong> TIARE ASSIST’ </strong> et pour lequel le{" "}
                    <strong> Client </strong> a usé de son droit de rétractation,
                    devient de fait la propriété de{" "}
                    <strong> TIARE ASSIST’</strong>, et est soumis au droit en
                    vigueur en matière de propriété intellectuelle.
                </p>

                <h2>9 - Modalités de règlement et conditions d’escompte</h2>
                <p>
                    Les conditions et délais de règlement varient selon le type,
                    le volume et le montant des prestations et sont mentionnés sur
                    chaque devis. <strong> TIARE ASSIST’ </strong>
                    établit une facture à chaque fin d’intervention ponctuelle, ou
                    mensuellement pour les interventions ponctuelles nécessitant
                    plusieurs mois de travail ainsi que pour les interventions
                    permanentes. Sauf mention contraire sur le devis préalablement
                    établi, le règlement des prestations s’effectue au comptant, à
                    réception de chaque facture par chèque bancaire (libellé à
                    l’ordre de Mandy MICHEAU) ou par virement bancaire (RIB fourni
                    avec la facture). Le règlement en espèces est accepté pour les
                    particuliers, et sera encaissé en totalité à la commande.
                    Aucun escompte n’est applicable en cas de paiement anticipé.
                </p>

                <h2>10 - Pénalités de retard</h2>
                <p>
                    Sauf accord préalable entre les parties par écrit, en cas de
                    défaut de paiement d’une facture à l’échéance, une pénalité de
                    retard égale au taux d’intérêt légal majoré ainsi qu’une
                    indemnité forfaitaire de frais de recouvrement de 40 euros,
                    conformément à l’article L441-6 et D441-5 du Code de Commerce,
                    est exigible sans qu’aucune mise en demeure ne soit
                    nécessaire. Cette pénalité, calculée sur le montant net de la
                    somme restant due, court de plein droit le jour suivant la
                    date de règlement portée sur la facture, tout comme
                    l’indemnité forfaitaire de frais de recouvrement de 40 euros.
                    En cas de recouvrement judiciaire, le{" "}
                    <strong> Client </strong> supportera tous les frais de mise en
                    demeure et de contentieux, ainsi que la facturation, à titre
                    de clause pénale, d’une somme égale à 15 % du montant total de
                    la commande passée par le <strong> Client</strong>, avec un
                    minimum forfaitaire de trente Euros par dossier, et ce, sans
                    préjudice de tous dommages et intérêts ou indemnités que{" "}
                    <strong> TIARE ASSIST’ </strong> pourrait réclamer. En outre,
                    TIARE ASSIST’ se réserve le droit de suspendre ou de résilier
                    toutes les commandes ou contrats en cours du{" "}
                    <strong> Client</strong>, après l’envoi d’une mise en demeure
                    restée infructueuse.
                </p>

                <h2>11 - Confidentialité</h2>
                <p>
                    <strong> TIARE ASSIST’ </strong> s’engage à respecter
                    strictement la confidentialité de toutes les informations,
                    documents, données ou concepts dont elle pourrait avoir
                    connaissance avant, pendant ou après la réalisation de sa
                    prestation, ainsi que du contenu des travaux commandés et
                    réalisés. La responsabilité de{" "}
                    <strong> TIARE ASSIST’ </strong> ne peut être engagée en raison
                    d’une interception ou d’un détournement des informations lors
                    du transfert des données, notamment par Internet. Par
                    conséquent, il appartient au <strong> Client</strong>, lors de
                    la commande, d’informer <strong> TIARE ASSIST’ </strong> des
                    moyens de transfert qu’il souhaite voir mis en œuvre afin de
                    garantir la confidentialité de toute information à caractère
                    sensible. De convention expresse, les résultats de la mission
                    seront en la pleine maîtrise du <strong> Client </strong> à
                    compter du paiement intégral de la prestation, et celui-ci
                    pourra en disposer comme il l’entend. TIARE ASSIST’ s’interdit
                    de faire état des résultats et de les utiliser de quelque
                    manière que ce soit, sauf obtention préalable de
                    l’autorisation écrite du <strong> Client</strong>.
                </p>

                <h2>12 - Responsabilité et cas de force majeure</h2>
                <p>
                    <strong> TIARE ASSIST’ </strong> s’engage, à titre
                    d’obligation de moyens, à exécuter ses obligations avec tout le
                    soin en usage dans sa profession et à utiliser les règles de
                    l’art du moment. <strong> TIARE ASSIST’ </strong> mettra en
                    œuvre tous les moyens nécessaires mis à sa disposition pour
                    prendre soin et préserver les fichiers informatiques et autres
                    documents qui lui seront confiés par le{" "}
                    <strong> Client </strong> pour la réalisation de la prestation
                    commandée. Toutefois, compte tenu des risques de dommage ou de
                    détérioration encourus par ce type de support, il appartiendra
                    au <strong> Client </strong> de s’en prémunir par tous moyens à
                    sa convenance, qui décharge en conséquence{" "}
                    <strong> TIARE ASSIST’ </strong> de toute responsabilité. À
                    compter de la remise des documents livrés par{" "}
                    <strong> TIARE ASSIST’</strong>, le <strong> Client </strong>{" "}
                    sera responsable de l’utilisation, de l’exploitation et de la
                    diffusion du contenu qui y est présenté. Il décharge en
                    conséquence <strong> TIARE ASSIST’ </strong> de toute
                    responsabilité et la garantit contre tout recours susceptible
                    d’être intenté à son encontre, de ce fait ou en raison de
                    toute perte de bénéfices ou trouble commercial.{" "}
                    <strong> TIARE ASSIST’ </strong> se réserve le droit de refuser
                    tous travaux dont les intentions seraient contraires à
                    l’honnêteté ou à la morale : (pornographie, racisme,
                    incitation à la violence…). Les textes, images et documents
                    confiés à TIARE ASSIST’ restent la propriété du{" "}
                    <strong> Client</strong>, qui seul assume les conditions
                    d’utilisation, notamment en ce qui concerne les droits et
                    éventuels copyrights.
                    <strong> TIARE ASSIST’ </strong> ne saurait être tenue
                    responsable d’une quelconque utilisation frauduleuse. La
                    responsabilité de <strong> TIARE ASSIST’ </strong> ne pourra
                    pas être mise en œuvre si la non-exécution ou le retard dans
                    l’exécution de l’une de ses obligations décrites dans les
                    présentes CGV découle d’un cas de force majeure. À ce titre, la{" "}
                    <strong>force majeure</strong> s’entend de tout événement
                    imprévisible, irrésistible et extérieur, au sens de l’article
                    1148 du Code civil.
                </p>

                <h2>13 - Droit applicable et juridiction compétente</h2>
                <p>
                    Tout litige relatif à l’application ou à l’interprétation des
                    présentes CGV est soumis au droit français. À défaut de
                    résolution amiable, le litige sera porté devant la juridiction
                    compétente.
                </p>

                <ul>
                    <li>
                        <Link href="/mentions-legales">Mentions Légales</Link>
                    </li>
                    <li>
                        <Link href="/conditions-generales-utilisation">
                            Conditions générales d'utilisation
                        </Link>
                    </li>
                    <li>
                        <Link href="/politique-de-confidentialite">
                            Politique de confidentialité
                        </Link>
                    </li>
                </ul>
            </main>
            <Footer />
        </>
    );
}
