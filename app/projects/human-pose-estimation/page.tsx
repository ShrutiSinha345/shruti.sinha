export default function HumanPoseEstimation() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">

      <div className="mx-auto max-w-5xl">

        {/* Back to Portfolio */}
        <a
          href="/#projects"
          className="text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to Projects
        </a>

        {/* Project Header */}
        <div className="mt-10">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Master's Thesis
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Data Augmentation for Human Pose Estimation
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A controlled study investigating how data augmentation
            techniques can improve human pose estimation and
            classification performance on a small workout-pose dataset.
          </p>

        </div>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-3">

          <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Python
          </span>

          <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            MediaPipe
          </span>

          <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            TensorFlow
          </span>

          <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            OpenCV
          </span>

          <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Machine Learning
          </span>

        </div>

        {/* Project Overview */}
        <section className="mt-16">

          <h2 className="text-3xl font-bold">
            Project Overview
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            This Master's thesis explores human pose estimation using
            RGB images and investigates whether controlled data
            augmentation can improve model performance when working
            with a small dataset.
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            The study focuses on workout and yoga poses and evaluates
            different augmentation strategies including rotation,
            horizontal flipping, brightness adjustment, and zoom.
          </p>

        </section>

        {/* Methodology */}
        <section className="mt-16">

          <h2 className="text-3xl font-bold">
            Methodology
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            {/* Step 1 */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

              <h3 className="text-xl font-semibold">
                01. Pose Detection
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                MediaPipe was used to detect human body landmarks
                from RGB images and extract pose-related features.
              </p>

            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

              <h3 className="text-xl font-semibold">
                02. Data Augmentation
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Controlled transformations such as rotation,
                horizontal flipping, brightness adjustment, and
                zoom were applied to increase dataset diversity.
              </p>

            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

              <h3 className="text-xl font-semibold">
                03. Classification
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Extracted pose features were used with machine
                learning classification techniques to identify
                different workout poses.
              </p>

            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

              <h3 className="text-xl font-semibold">
                04. Evaluation
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Model performance was evaluated using test accuracy
                and validation techniques to understand the impact
                of different augmentation strategies.
              </p>

            </div>

          </div>

        </section>

        {/* Results */}
        <section className="mt-16">

          <h2 className="text-3xl font-bold">
            Results
          </h2>

          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8">

            <p className="text-sm text-gray-400">
              Test Accuracy
            </p>

            <p className="mt-2 text-5xl font-bold text-cyan-400">
              94.44%
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              The augmented dataset achieved 94.44% test accuracy,
              compared with 77.78% on the original dataset,
              demonstrating the benefit of controlled data
              augmentation in this small-data setting.
            </p>

          </div>

        </section>

        {/* Project Highlights */}
        <section className="mt-16">

          <h2 className="text-3xl font-bold">
            Project Highlights
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

              <p className="text-3xl font-bold text-cyan-400">
                94.44%
              </p>

              <p className="mt-2 text-gray-400">
                Final test accuracy
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

              <p className="text-3xl font-bold text-cyan-400">
                77.78%
              </p>

              <p className="mt-2 text-gray-400">
                Accuracy on original dataset
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

              <p className="text-3xl font-bold text-cyan-400">
                2D
              </p>

              <p className="mt-2 text-gray-400">
                RGB-based pose estimation
              </p>

            </div>

          </div>

        </section>

        {/* Links */}
        <section className="mt-16 flex flex-wrap gap-4">

          <a
            href="https://github.com/ShrutiSinha345/human-pose-estimation"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View GitHub
          </a>

          <a
            href="/#projects"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-950"
          >
            Back to Portfolio
          </a>

        </section>
        

      </div>

    </main>
  );
}