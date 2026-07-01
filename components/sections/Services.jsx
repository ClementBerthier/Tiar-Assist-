import Image from "next/image";
import PriceModalButton from "@/components/ui/PriceModalButton";
import { FORMULAS } from "@/lib/services";


export default function Services() {
    return (
        <section id="services" className="bg-sand py-[90px]">
            <div className="mx-auto max-w-[1180px] px-7">
                <div className="reveal mx-auto mb-[54px] max-w-[40em] text-center">
                    <span className="eyebrow">
                        <span className="eyebrow-dot" /> Mes formules
                    </span>
                    <h2 className="mb-3 mt-[18px] font-heading text-[clamp(1.95rem,3.6vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.018em] text-green-dark">
                        Des services à votre rythme
                    </h2>
                    <p className="text-[1.06rem] text-muted">
                        Au-delà du secrétariat, je prends en charge votre gestion
                        commerciale et informatique : rédaction de documents,
                        saisie de données, transcription audio, SAV de vos
                        logiciels, suivi des stocks fournisseurs… Un service sur
                        mesure, adapté à vos besoins.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-[26px] max-[860px]:grid-cols-1">
                    {FORMULAS.map((formula, index) => (
                        <article
                            key={formula.name}
                            className={`reveal d${index + 1} group flex flex-col items-center rounded-[22px] border border-green/[0.06] bg-white p-[34px_26px] text-center shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-card-lg`}
                        >
                            <div className="mb-[18px] h-[98px] w-[98px] overflow-hidden rounded-[20px] shadow-card">
                                <Image
                                    src={formula.image}
                                    alt=""
                                    width={196}
                                    height={196}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.07]"
                                />
                            </div>
                            <h3 className="font-heading text-[1.25rem] font-bold text-green-dark">
                                {formula.name}
                            </h3>
                            <div className="mt-[5px] font-heading text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-muted">
                                {formula.tag}
                            </div>
                            <div className="mb-1 mt-3.5 text-terracotta">
                                <span className="block font-heading text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-muted">
                                    À partir de
                                </span>
                                <span className="font-heading text-[1.75rem] font-extrabold">
                                    {formula.price}
                                </span>
                                <small className="block font-heading text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-muted">
                                    {formula.unit}
                                </small>
                            </div>
                            <p className="mt-3 text-[0.95rem] text-muted">
                                {formula.description}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="reveal mt-[42px] text-center">
                    <p className="mx-auto mb-5 max-w-[46em] text-[0.95rem] text-muted">
                        *Tarifs : estimations minimales hors taxes. Pour le détail
                        des prestations hors formule, consultez la grille
                        tarifaire.
                    </p>
                    <PriceModalButton />
                </div>
            </div>
        </section>
    );
}
