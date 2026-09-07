"use client";

import { useState } from "react";

type Experiment = {
  id: string;
  title: string;
  description: string;
  time: string;
  skills: string;
};

const experiments: Experiment[] = [
  {
    id: "social",
    title: "Create a social media post",
    description:
      "Create a short Instagram post for a small business and explain why you chose the format and message.",
    time: "20 min",
    skills: "Content · Creativity · Communication",
  },
  {
    id: "research",
    title: "Make a market decision",
    description:
      "Look at simple customer data and recommend which product a small business should promote next.",
    time: "25 min",
    skills: "Analysis · Strategy · Decision making",
  },
  {
    id: "data",
    title: "Clean and organize data",
    description:
      "Work with a small spreadsheet dataset and decide how to organize the information for a business report.",
    time: "20 min",
    skills: "Data · Organization · Problem solving",
  },
];

export default function Home() {
  const [screen, setScreen] = useState("home");
  const [selected, setSelected] = useState<Experiment | null>(null);
  const [work, setWork] = useState("");
  const [result, setResult] = useState("");
  const [reflection, setReflection] = useState({
    enjoyed: "",
    difficult: "",
    next: "",
  });

  const startExperiment = (experiment: Experiment) => {
    setSelected(experiment);
    setScreen("detail");
  };

  const submitExperience = () => {
    setScreen("feedback");
  };

  const finishReflection = () => {
    setScreen("next");
  };

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#202020]">
      <nav className="flex items-center justify-between border-b border-black/10 px-6 py-5 md:px-12">
        <button
          onClick={() => setScreen("home")}
          className="text-xl font-bold tracking-tight"
        >
          Pathly
        </button>

        <div className="text-sm text-black/50">
          Real experiences. Clearer paths.
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-6 py-10 md:px-12">
        {screen !== "home" && (
          <div className="mb-8 flex items-center gap-2 text-sm text-black/50">
            <button
              onClick={() => setScreen("home")}
              className="hover:text-black"
            >
              Pathly
            </button>
            <span>/</span>
            <span>
              {screen === "select" && "Choose an experiment"}
              {screen === "detail" && "Your experiment"}
              {screen === "submit" && "Your work"}
              {screen === "feedback" && "Feedback"}
              {screen === "reflection" && "Reflection"}
              {screen === "next" && "What to try next"}
            </span>
          </div>
        )}

        {screen === "home" && (
          <section className="grid min-h-[70vh] items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-block rounded-full border border-black/10 bg-white px-4 py-2 text-sm">
                Explore before you decide
              </div>

              <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                Find your next direction by trying real work.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
                Pathly helps students turn real experiences into clearer next
                steps. Try something small, learn from it, and decide what to
                explore next.
              </p>

              <button
                onClick={() => setScreen("select")}
                className="mt-8 rounded-full bg-black px-7 py-4 font-medium text-white transition hover:scale-[1.02]"
              >
                Start an experiment →
              </button>
            </div>

            <div className="rounded-[32px] border border-black/10 bg-white p-8 shadow-sm">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium">Your Pathly journey</span>
                <span className="rounded-full bg-[#f7f3ec] px-3 py-1 text-xs">
                  1 of 3
                </span>
              </div>

              <div className="space-y-5">
                {[
                  ["01", "Try something real"],
                  ["02", "Reflect on what you learned"],
                  ["03", "Choose what to try next"],
                ].map(([number, text], index) => (
                  <div
                    key={number}
                    className={`flex items-center gap-4 rounded-2xl p-4 ${
                      index === 0 ? "bg-[#f7f3ec]" : ""
                    }`}
                  >
                    <span className="text-sm text-black/40">{number}</span>
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-6 text-black/50">
                Pathly gives recommendations for experiments, not predictions
                about your future.
              </p>
            </div>
          </section>
        )}

        {screen === "select" && (
          <section>
            <div className="mb-10">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-black/40">
                Step 1
              </p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Choose something to try.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-black/60">
                Pick a small experiment based on real work. You do not need to
                know if it is your career. You just need to try it.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {experiments.map((experiment) => (
                <button
                  key={experiment.id}
                  onClick={() => startExperiment(experiment)}
                  className="rounded-3xl border border-black/10 bg-white p-6 text-left transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="rounded-full bg-[#f7f3ec] px-3 py-1 text-xs">
                      {experiment.time}
                    </span>
                    <span className="text-xl">↗</span>
                  </div>

                  <h2 className="text-xl font-semibold">{experiment.title}</h2>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {experiment.description}
                  </p>

                  <p className="mt-6 text-xs font-medium text-black/50">
                    {experiment.skills}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}

        {screen === "detail" && selected && (
          <section className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-black/40">
              Your experiment
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {selected.title}
            </h1>

            <div className="mt-8 rounded-3xl border border-black/10 bg-white p-7 md:p-10">
              <div className="mb-8 flex gap-3">
                <span className="rounded-full bg-[#f7f3ec] px-4 py-2 text-sm">
                  {selected.time}
                </span>
                <span className="rounded-full bg-[#f7f3ec] px-4 py-2 text-sm">
                  Real work
                </span>
              </div>

              <h2 className="text-xl font-semibold">Your task</h2>

              <p className="mt-4 leading-7 text-black/70">
                {selected.description}
              </p>

              <div className="mt-8 rounded-2xl bg-[#f7f3ec] p-5">
                <p className="text-sm font-medium">Keep in mind</p>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  Focus on completing the task. You are not being tested on
                  having the perfect answer.
                </p>
              </div>

              <button
                onClick={() => setScreen("submit")}
                className="mt-8 rounded-full bg-black px-7 py-4 font-medium text-white"
              >
                Start the experiment →
              </button>
            </div>
          </section>
        )}

        {screen === "submit" && selected && (
          <section className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-black/40">
              Step 2
            </p>

            <h1 className="text-4xl font-semibold tracking-tight">
              Tell us what you did.
            </h1>

            <p className="mt-4 text-black/60">
              There is no perfect answer. We want to understand your actual
              work.
            </p>

            <div className="mt-8 space-y-6 rounded-3xl border border-black/10 bg-white p-7 md:p-10">
              <div>
                <label className="text-sm font-medium">
                  What did you do?
                </label>
                <textarea
                  value={work}
                  onChange={(e) => setWork(e.target.value)}
                  placeholder="Describe the main things you did..."
                  className="mt-3 min-h-32 w-full rounded-2xl border border-black/10 bg-[#f7f3ec] p-4 outline-none focus:border-black/30"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  What was your result?
                </label>
                <textarea
                  value={result}
                  onChange={(e) => setResult(e.target.value)}
                  placeholder="What did you produce, decide, or learn?"
                  className="mt-3 min-h-32 w-full rounded-2xl border border-black/10 bg-[#f7f3ec] p-4 outline-none focus:border-black/30"
                />
              </div>

              <button
                onClick={submitExperience}
                disabled={!work.trim() || !result.trim()}
                className="rounded-full bg-black px-7 py-4 font-medium text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                Submit experience →
              </button>
            </div>
          </section>
        )}

        {screen === "feedback" && selected && (
          <section className="mx-auto max-w-3xl">
            <div className="mb-6 inline-block rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium">
              SIMULATED AI FEEDBACK
            </div>

            <h1 className="text-4xl font-semibold tracking-tight">
              Here is what you can learn from this experience.
            </h1>

            <div className="mt-8 rounded-3xl border border-black/10 bg-white p-7 md:p-10">
              <div className="rounded-2xl bg-[#f7f3ec] p-6">
                <p className="text-sm font-medium">What we noticed</p>
                <p className="mt-3 leading-7 text-black/70">
                  You completed a real task and produced a result. This
                  experience gives you evidence about how you work in this
                  specific context.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-black/10 p-5">
                  <p className="text-sm font-medium">Evidence</p>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    Your work shows what you actually did, rather than relying
                    only on a personality test.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 p-5">
                  <p className="text-sm font-medium">Important limit</p>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    One experiment cannot prove a general ability or predict
                    your future.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setScreen("reflection")}
                className="mt-8 rounded-full bg-black px-7 py-4 font-medium text-white"
              >
                Reflect on the experience →
              </button>
            </div>
          </section>
        )}

        {screen === "reflection" && (
          <section className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-black/40">
              Step 3
            </p>

            <h1 className="text-4xl font-semibold tracking-tight">
              What did you learn about yourself?
            </h1>

            <p className="mt-4 text-black/60">
              Your reflection helps turn one experience into information for
              your next decision.
            </p>

            <div className="mt-8 space-y-6 rounded-3xl border border-black/10 bg-white p-7 md:p-10">
              <div>
                <label className="text-sm font-medium">
                  What part did you enjoy?
                </label>
                <textarea
                  value={reflection.enjoyed}
                  onChange={(e) =>
                    setReflection({ ...reflection, enjoyed: e.target.value })
                  }
                  className="mt-3 min-h-24 w-full rounded-2xl border border-black/10 bg-[#f7f3ec] p-4 outline-none"
                  placeholder="What felt interesting or energizing?"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  What was harder than expected?
                </label>
                <textarea
                  value={reflection.difficult}
                  onChange={(e) =>
                    setReflection({
                      ...reflection,
                      difficult: e.target.value,
                    })
                  }
                  className="mt-3 min-h-24 w-full rounded-2xl border border-black/10 bg-[#f7f3ec] p-4 outline-none"
                  placeholder="What did you not enjoy or find difficult?"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  What would you like to try next?
                </label>
                <textarea
                  value={reflection.next}
                  onChange={(e) =>
                    setReflection({ ...reflection, next: e.target.value })
                  }
                  className="mt-3 min-h-24 w-full rounded-2xl border border-black/10 bg-[#f7f3ec] p-4 outline-none"
                  placeholder="Choose a direction to explore, not a final career."
                />
              </div>

              <button
                onClick={finishReflection}
                className="rounded-full bg-black px-7 py-4 font-medium text-white"
              >
                See what to try next →
              </button>
            </div>
          </section>
        )}

        {screen === "next" && (
          <section>
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-xs font-medium">
                NEXT EXPERIMENTS
              </div>

              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                You do not need the answer yet.
              </h1>

              <p className="mt-4 text-lg leading-7 text-black/60">
                Based on what you reflected on, here are different experiences
                you could try next. These are suggestions for exploration, not
                career predictions.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {experiments.map((experiment, index) => (
                <div
                  key={experiment.id}
                  className="rounded-3xl border border-black/10 bg-white p-6"
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-black/40">
                    Option {index + 1}
                  </p>

                  <h2 className="mt-6 text-xl font-semibold">
                    {experiment.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {experiment.description}
                  </p>

                  <button
                    onClick={() => startExperiment(experiment)}
                    className="mt-7 rounded-full border border-black/15 px-5 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
                  >
                    Try this →
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 text-sm text-black/60">
              <strong className="text-black">Remember:</strong> Pathly helps
              you collect evidence from real experiences. It does not rank
              you, label your potential, or decide your future.
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
