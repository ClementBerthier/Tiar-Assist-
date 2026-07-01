import { PRICE_COLUMN_GROUPS, PRICE_ROWS } from "@/lib/services";

const GROUP_TH =
    "border border-white/20 bg-green px-3 py-2 text-center font-heading text-[0.68rem] font-bold uppercase tracking-[0.07em] text-white";
const SUB_TH =
    "border border-white/15 bg-green-dark px-3 py-1.5 text-center font-heading text-[0.64rem] font-semibold tracking-wide text-[#e0ece4]";

/**
 * Detailed pricing grid (per-service, télétravail vs sur site, hour/task/month).
 * Rendered inside the homepage pricing modal.
 * `withSurcharge` appends the evening / weekend / holiday surcharge note.
 */
export default function PriceTable({ withSurcharge = true }) {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-xl text-[0.8rem]">
                    <thead>
                        <tr>
                            <th
                                rowSpan={2}
                                className="border border-white/20 bg-green-dark px-3 py-2 text-left align-middle font-heading text-[0.7rem] font-bold uppercase tracking-[0.06em] text-white"
                            >
                                Prestation
                            </th>
                            {PRICE_COLUMN_GROUPS.map((group) => (
                                <th
                                    key={group.label}
                                    colSpan={group.modes.length}
                                    className={GROUP_TH}
                                >
                                    {group.label}
                                </th>
                            ))}
                        </tr>
                        <tr>
                            {PRICE_COLUMN_GROUPS.flatMap((group) =>
                                group.modes.map((mode) => (
                                    <th
                                        key={`${group.label}-${mode}`}
                                        className={SUB_TH}
                                    >
                                        {mode}
                                    </th>
                                )),
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {PRICE_ROWS.map((row, index) => (
                            <tr
                                key={row.service}
                                className={
                                    index % 2 === 0 ? "bg-white" : "bg-sand/50"
                                }
                            >
                                <td className="whitespace-nowrap border border-green/10 px-3 py-2 text-left font-heading text-[0.78rem] font-semibold text-green-dark">
                                    {row.service}
                                </td>
                                {row.values.map((value, i) => (
                                    <td
                                        key={i}
                                        className="whitespace-nowrap border border-green/10 px-3 py-2 text-center text-ink"
                                    >
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {withSurcharge && (
                <p className="mt-4 text-sm leading-relaxed text-muted">
                    Une majoration de <strong>25&nbsp;%</strong> est appliquée
                    pour les urgences après 18h30 et le samedi, et de{" "}
                    <strong>50&nbsp;%</strong> les jours fériés et le dimanche.
                </p>
            )}
        </>
    );
}
