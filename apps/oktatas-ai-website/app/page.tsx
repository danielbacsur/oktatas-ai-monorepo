"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Balancer } from "react-wrap-balancer";
import { motion, AnimatePresence } from "framer-motion";
import { signInWithGoogle } from "@/actions/auth";
import { useSession } from "next-auth/react";

const problems = [
  "Problémáid vannak az algebrával?",
  "Segítség kell a történelem esszédhez?",
  "Nem tudsz rájönni a kémiai feladatra?",
  "Gondjaid vannak Shakespeare-rel?",
];

export default function LandingPage() {
  const [problem, setProblem] = useState(problems[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProblem((prevProblem) => {
        const currentIndex = problems.indexOf(prevProblem);
        const nextIndex = (currentIndex + 1) % problems.length;
        return problems[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const session = useSession();
  const firstName = session.data?.user?.name?.split(" ")[0];

  return (
    <>
      <main>
        <section
          id="hero"
          className="bg-gradient-to-b from-gray-100 to-gray-200 pt-24"
        >
          <div className="container mx-auto px-6 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 md:pr-8 mb-8 md:mb-0">
                <motion.h1
                  className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-center md:text-left !leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {firstName ? (
                    <>
                      Üdvözöllek {firstName}! <br />
                      Alig várom, hogy együtt tanuljunk! 📚
                    </>
                  ) : (
                    <>
                      Ismerd meg Sophiet, <br />A Virtuális Tanárodat
                    </>
                  )}
                </motion.h1>
                <motion.p
                  className="mt-8 text-gray-800 text-center md:text-left leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {firstName ? (
                    <>
                      Felkerültél a várólistára! Hamarosan értesíteni fogunk,
                      amint publikusan is elérhetővé válik oktatási platformunk.
                    </>
                  ) : (
                    <>
                      Sophie egy AI alapú virtuális magántanár, aki a magyar
                      követelményeknek megfelelően képes 20 perces személyre
                      szabott tanórákat tartani.
                    </>
                  )}
                </motion.p>
                {!firstName && (
                  <motion.div
                    className="mt-8 text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button
                      className="px-8 md:px-10 py-4 md:py-5 font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
                      onClick={() => signInWithGoogle()}
                    >
                      Beszélj Sophieval
                    </Button>
                  </motion.div>
                )}
              </div>
              <div className="flex-1 h-80 md:h-[32rem] lg:h-[70dvh]">
                <motion.img
                  className="h-full w-full object-contain"
                  src="/sophie.gif"
                  alt="Sophie"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 md:mb-16 text-center">
              Már ennyien tanulnak Sophieval
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-6xl font-bold text-indigo-600 mb-4 md:mb-6">
                  13+
                </p>
                <p className="text-lg text-gray-800">Tantárgy</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-6xl font-bold text-indigo-600 mb-4 md:mb-6">
                  5000+
                </p>
                <p className="text-lg text-gray-800">Segített Diák</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-6xl font-bold text-indigo-600 mb-4 md:mb-6">
                  0-24
                </p>
                <p className="text-lg text-gray-800">Elérhetőség</p>
              </motion.div>
            </div>
            {!firstName && (
              <div className="mt-12 text-center">
                <Button
                  className="px-8 md:px-10 py-4 md:py-5 font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
                  onClick={() => signInWithGoogle()}
                >
                  Próbáld ki te is
                </Button>
              </div>
            )}
          </div>
        </section>

        <section className="bg-gradient-to-t from-gray-100 to-gray-200 py-16 md:py-20">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={problem}
                className="text-3xl font-bold text-gray-900 mb-6 md:mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {problem}
              </motion.h2>
            </AnimatePresence>
            <p className="text-gray-800 leading-relaxed">
              <Balancer>
                Sophie itt van, hogy segítsen leküzdeni a kihívásaidat személyre
                szabott órákkal és támogatással.
              </Balancer>
            </p>

            <p className="text-gray-800 mb-16 leading-relaxed text-justify">
              <br />
              Elsődleges célunk a projekt során az volt, hogy avatárjaink
              képesek legyenek élethű kommunikációs élményt biztosítani a
              tanulók számára. Ezáltal a diákok szóban fogalmazhatják meg
              kérdéseiket, amiket ezek a virtuális tanárok értelmeznek, majd
              szóban válaszolnak. Csak mint egy ember.
              <br />
              <br />
              Az általunk fejlesztett oktatási platformon úgy néz ki a tanítás,
              hogy a tanulók a bejelentkezést követően meg tudják szabni, hogy
              hányadikosok, hogy mit szeretnének megtanulni, és hogy azt milyen
              szinten. Ezt követően saját AI modelljeink összeállítanak egy
              egyéni tanrendet a nemzeti alaptantervben megfogalmazott
              elvárásoknak megfelelően.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-6">
                  Személyre Szabott Órák
                </h3>
                <p className="text-gray-800 leading-relaxed text-justify">
                  Sophie teljes 20 perces órákat kínál, amelyek az egyéni
                  tanulási igényeidhez igazodnak. Az anyagot a fejlődésed
                  alapján alakítja, így biztos lehetsz benne, hogy minden
                  fogalmat megértesz, mielőtt továbblépsz.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-6">
                  Interaktív Tanulási Élmény
                </h3>
                <p className="text-gray-800 leading-relaxed text-justify">
                  Vegyél részt interaktív órákon, amelyek szórakoztatóvá teszik
                  a tanulást. Sophie játékosan fog bevezetni a tananyagba, és
                  majd különböző feladatokkal és kvízekkel teszteli a tudásod.
                </p>
              </motion.div>
            </div>
            {!firstName && (
              <div className="mt-12 text-center">
                <Button
                  className="px-8 md:px-10 py-4 md:py-5 font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
                  onClick={() => signInWithGoogle()}
                >
                  Kezdj Tanulni Sophieval
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
