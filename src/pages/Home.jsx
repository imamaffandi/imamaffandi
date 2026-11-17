import { useEffect, useRef, useState } from "react";
import { Noise } from "@/components";
import { useSmoothScroll } from "@/components/SmoothScroll";
import CircularGallery from "@/components/CircularGallery";
import { data as projects, getProjectSummary } from "@/data/projects";
import { skybg } from "@/assets";
import { whatsapp } from "@/constant";

const pad = (n) => String(n).padStart(2, "0");

/* CircularGallery parses colours on a canvas, so it needs a literal value (--color-light). */
const LABEL_COLOR = "#f7f2e9";
const LABEL_FONT = '400 30px "Cormorant Garamond", "Times New Roman", serif';
const ITEMS = projects.map((p) => ({ image: p.image, text: p.title }));

function Carousel({ onUnsupported }) {
    const gallery = useRef(null);
    const [active, setActive] = useState(0);
    const [open, setOpen] = useState(false);
    const p = projects[active];
    const { built } = getProjectSummary(p);

    // Arrow keys anywhere on the page; the gallery handles (and prevents) them itself when focused.
    useEffect(() => {
        const onKey = (e) => {
            if (e.defaultPrevented) return;
            if (["ArrowRight", "ArrowDown", "PageDown"].includes(e.key)) {
                e.preventDefault();
                gallery.current?.next();
            }
            if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
                e.preventDefault();
                gallery.current?.prev();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <div className="relative h-svh overflow-hidden">
            <div className="absolute inset-x-0 top-[14vh] bottom-[clamp(8rem,22vh,12rem)]">
                <CircularGallery
                    ref={gallery}
                    items={ITEMS}
                    textColor={LABEL_COLOR}
                    font={LABEL_FONT}
                    itemAspect={16 / 9}
                    itemSize={0.95}
                    gap={0.16}
                    bend={2}
                    borderRadius={0.025}
                    wave={0.6}
                    shadow={0.3}
                    scrollEase={0.06}
                    onActiveChange={setActive}
                    onOpenChange={setOpen}
                    onUnsupported={onUnsupported}
                    aria-label="Projects"
                />
            </div>

            <div className="absolute right-5 bottom-5 left-5 flex flex-col items-end gap-3 text-right font-text text-xs text-light md:left-auto md:w-[min(32rem,50vw)]">
                {/* Details only appear while a project is highlighted (click a card to open it) */}
                <div
                    aria-live="polite"
                    aria-hidden={!open}
                    className={`flex flex-col items-end gap-3 transition-[opacity,translate] duration-500 ${open ? "" : "pointer-events-none invisible translate-y-2 opacity-0"}`}
                >
                    <p>
                        <span className="tabular-nums opacity-60">({pad(active + 1)})</span> {p.title}
                    </p>
                    <p className="leading-relaxed opacity-80">{built}</p>
                    <a href={p.link} target="_blank" rel="noreferrer" className="rounded-full bg-dark px-4 py-2.5 text-light">
                        Visit Site ↗
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <span className="mr-2 tabular-nums opacity-60">
                        {pad(active + 1)} / {pad(projects.length)}
                    </span>
                    <button type="button" onClick={() => gallery.current?.prev()} className="grid size-9 place-items-center rounded-full bg-light text-dark" aria-label="Previous project">
                        ←
                    </button>
                    <button type="button" onClick={() => gallery.current?.next()} className="grid size-9 place-items-center rounded-full bg-light text-dark" aria-label="Next project">
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}

/* Fallback when the browser can't run the WebGL gallery. */
function List() {
    return (
        <ol className="px-5 pt-[17vh] pb-40 text-light">
            {projects.map((p, i) => {
                const { built } = getProjectSummary(p);
                return (
                    <li key={p.id} id={p.id} className="grid grid-cols-12 items-start gap-y-4 border-t border-light/30 py-8">
                        <span className="col-span-2 font-display text-4xl md:col-span-3">{i + 1}</span>
                        <div className="col-span-10 md:col-span-4">
                            <h2 className="font-display text-4xl">{p.title}</h2>
                            <p className="mt-4 max-w-md font-text text-xs leading-relaxed">{built}</p>
                            <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-block font-text text-xs underline underline-offset-4">
                                Visit Site ↗
                            </a>
                        </div>
                        <img
                            src={p.image}
                            alt={`${p.title} homepage`}
                            width="1920"
                            height="1080"
                            loading="lazy"
                            decoding="async"
                            className="col-span-12 aspect-video w-full bg-dark object-cover md:col-span-5"
                        />
                    </li>
                );
            })}
            <li className="border-t border-light/30 pt-10 font-text text-xs">
                Have a project in mind?{" "}
                <a className="underline underline-offset-4" href={whatsapp} target="_blank" rel="noreferrer">
                    Tell me what you need →
                </a>
            </li>
        </ol>
    );
}

const Home = () => {
    const { lock, unlock } = useSmoothScroll();
    const [webgl, setWebgl] = useState(true);

    // The carousel is a single locked screen; the fallback list scrolls normally.
    useEffect(() => {
        if (!webgl) return;
        window.scrollTo(0, 0);
        lock();
        return unlock;
    }, [webgl, lock, unlock]);

    return (
        <main
            id="main"
            style={{ backgroundImage: `url(${skybg})` }}
            className={`relative bg-dark bg-cover bg-fixed bg-bottom ${webgl ? "h-svh overflow-hidden" : "min-h-svh"}`}
        >
            <div className="pointer-events-none fixed inset-0">
                <Noise />
            </div>
            <h1 className="sr-only">Projects</h1>
            {webgl ? <Carousel onUnsupported={() => setWebgl(false)} /> : <List />}
        </main>
    );
};

export default Home;
