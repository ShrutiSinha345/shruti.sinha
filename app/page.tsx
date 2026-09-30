import Image from "next/image";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

    <section
       id="top"
       className="flex flex-col items-center justify-center min-h-screen text-center px-8"
     >
     <div className="mb-8">
       <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-cyan-400/60 shadow-[0_0_35px_rgba(34,211,238,0.25)]">
      <Image
          src="/profile.jpg"
          alt="Shruti Sinha"
          fill
          className="object-cover"
          priority
      />
       </div>
     </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-8">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-100 via-cyan-400 to-cyan-800 bg-clip-text text-transparent">
            Shruti Sinha
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          AI Engineer • Data Engineer • GenAI Enthusiast
        </h2>

        <p className="max-w-4xl text-lg md:text-xl leading-9 text-gray-400 mb-12">
          Building intelligent AI applications, scalable data platforms,
          analytics solutions, and cloud-based systems using Python,
          Azure, SQL, Snowflake, Power BI, and Large Language Models.
        </p>

        <div className="flex gap-6">

         <a
           href="#projects"
           className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl font-semibold text-slate-950 transition"
          >
         View Projects
         </a>

         <a
         href="/resume.pdf"
         target="_blank"
         rel="noopener noreferrer"
        className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white hover:text-slate-950 transition"
        >
        Download Resume
        </a>

        </div>

      </section>

      <section
         id="about"
         className="min-h-screen scroll-mt-24 bg-slate-900 px-8 py-24"
         >
        <div className="mx-auto max-w-6xl">

        <div className="mb-16 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        About Me
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
        From Data to AI
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        I am a Data Engineering and Analytics professional with 8+ years
        of experience working with databases, cloud platforms, business
        intelligence, and data solutions. My recent work and higher
        studies have expanded my focus toward Artificial Intelligence,
        Generative AI, and intelligent data applications.
        </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

        {/* AI & GenAI */}
        <div className="rounded-2xl border border-white/10 bg-slate-950 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40">
        <div className="mb-5 text-4xl">🤖</div>

        <h3 className="mb-4 text-2xl font-semibold">
          AI & GenAI
        </h3>

         <p className="mb-6 leading-7 text-gray-400">
          Building practical AI applications using Python, LLMs,
          Retrieval-Augmented Generation, prompt engineering, and
          modern AI frameworks.
         </p>

         <p className="text-sm text-cyan-400">
          Python • LLMs • RAG • Prompt Engineering
         </p>
        </div>

      {/* Data Engineering */}
       <div className="rounded-2xl border border-white/10 bg-slate-950 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40">
         <div className="mb-5 text-4xl">⚙️</div>

        <h3 className="mb-4 text-2xl font-semibold">
          Data Engineering
        </h3>

        <p className="mb-6 leading-7 text-gray-400">
          Designing data solutions, ETL/ELT workflows, data models,
          and cloud-based platforms that turn raw data into
          reliable, analytics-ready datasets.
        </p>

        <p className="text-sm text-cyan-400">
          SQL • Azure • Snowflake • Databricks
        </p>
       </div>

       {/* Analytics */}
       <div className="rounded-2xl border border-white/10 bg-slate-950 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40">
        <div className="mb-5 text-4xl">📊</div>

        <h3 className="mb-4 text-2xl font-semibold">
          Analytics
        </h3>

        <p className="mb-6 leading-7 text-gray-400">
          Transforming complex data into actionable insights through
          data modeling, dashboards, reporting, and business
          intelligence solutions.
        </p>

        <p className="text-sm text-cyan-400">
          Power BI • Data Modeling • BI • Visualization
        </p>
       </div>

     </div>


    </div>
   </section>

       {/* SKILLS SECTION */}
    <section
      id="skills"
      className="scroll-mt-24 bg-slate-950 px-8 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Tools I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            A combination of data engineering, analytics, cloud,
            and AI technologies that I use to build practical solutions.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* AI & GenAI */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-cyan-400/40">
            <div className="mb-5 text-3xl">🤖</div>

            <h3 className="mb-5 text-xl font-semibold">
              AI & GenAI
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Python
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                LLMs
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                RAG
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Prompt Engineering
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                AI Applications
              </span>
            </div>
          </div>

          {/* Data Engineering */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-cyan-400/40">
            <div className="mb-5 text-3xl">⚙️</div>

            <h3 className="mb-5 text-xl font-semibold">
              Data Engineering
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                SQL
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Azure
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Databricks
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Snowflake
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                ETL / ELT
              </span>
            </div>
          </div>

          {/* Cloud & Data Platforms */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-cyan-400/40">
            <div className="mb-5 text-3xl">☁️</div>

            <h3 className="mb-5 text-xl font-semibold">
              Cloud & Platforms
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Azure Data Factory
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                ADLS Gen2
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Azure Synapse
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                AWS
              </span>
            </div>
          </div>

          {/* Analytics */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-cyan-400/40">
            <div className="mb-5 text-3xl">📊</div>

            <h3 className="mb-5 text-xl font-semibold">
              Analytics & BI
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Power BI
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Data Modeling
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Tableau
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Excel
              </span>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Reporting
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>

        {/* PROJECTS SECTION */}
    <section
      id="projects"
      className="scroll-mt-24 bg-slate-900 px-8 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Things I've Built
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            A selection of projects combining artificial intelligence,
            data engineering, analytics, and software development.
          </p>
        </div>

        {/* Project Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950">

          <div className="grid md:grid-cols-2">

            {/* Project Visual */}
            <div className="flex min-h-[350px] items-center justify-center bg-gradient-to-br from-cyan-500/10 via-slate-950 to-blue-500/10 p-10">

              <div className="text-center">

                <div className="mb-6 text-7xl">
                  🧍‍♀️
                </div>

                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Master's Thesis
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  Human Pose Estimation
                </h3>

              </div>

            </div>

            {/* Project Information */}
            <div className="p-10">

              <div className="mb-6 flex flex-wrap gap-2">

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  Python
                </span>

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  MediaPipe
                </span>

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  TensorFlow
                </span>

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  OpenCV
                </span>

              </div>

              <h3 className="mb-5 text-2xl font-bold">
                Data Augmentation for Human Pose Estimation
              </h3>

              <p className="mb-6 leading-8 text-gray-400">
                My Master's thesis investigating the impact of data
                augmentation on human pose estimation using a small
                workout-pose dataset. The project explores how
                controlled augmentation can improve model performance
                and reduce overfitting.
              </p>

              {/* Result */}
              <div className="mb-8 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">

                <p className="text-sm text-gray-400">
                  Key Result
                </p>

                <p className="mt-2 text-2xl font-bold text-cyan-400">
                  94.44% Test Accuracy
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Improved from 77.78% on the original dataset
                  after applying controlled data augmentation.
                </p>

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">

                <a
                  href="https://github.com/ShrutiSinha345/human-pose-estimation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  View GitHub
                </a>

                <a
                 href="/projects/human-pose-estimation"
                 className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-950"
                 >
                 View Details
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

        {/* EXPERIENCE SECTION */}
    <section
      id="experience"
      className="scroll-mt-24 bg-slate-950 px-8 py-24"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Experience across data engineering, analytics, databases,
            business intelligence, and cloud technologies.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-white/10 md:block" />

          {/* Experience 1 */}
          <div className="relative mb-12 md:pl-12">

            <div className="absolute left-0 top-2 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 md:flex" />

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition hover:border-cyan-400/30">

              <div className="flex flex-col justify-between gap-3 md:flex-row">

                <div>
                  <p className="text-sm font-medium text-cyan-400">
                    Data & AI Engineering
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Senior Data / Analytics Professional
                  </h3>
                </div>

                <span className="text-sm text-gray-500">
                  Recent Experience
                </span>

              </div>

              <p className="mt-5 leading-7 text-gray-400">
                Designed and developed data solutions using SQL,
                cloud technologies, business intelligence tools,
                and modern data engineering practices. Worked
                across data transformation, analytics, automation,
                reporting, and database solutions.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  SQL
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Azure
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Power BI
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Data Engineering
                </span>

              </div>

            </div>

          </div>

          {/* Experience 2 */}
          <div className="relative mb-12 md:pl-12">

            <div className="absolute left-0 top-2 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 md:flex" />

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition hover:border-cyan-400/30">

              <div className="flex flex-col justify-between gap-3 md:flex-row">

                <div>
                  <p className="text-sm font-medium text-cyan-400">
                    Database & BI
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Database / Business Intelligence
                  </h3>
                </div>

                <span className="text-sm text-gray-500">
                  Professional Experience
                </span>

              </div>

              <p className="mt-5 leading-7 text-gray-400">
                Worked with relational databases, SQL development,
                stored procedures, triggers, performance tuning,
                reporting, dashboard development, and data
                automation. Built solutions to support operational
                and analytical business requirements.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  SQL Server
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Stored Procedures
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Power BI
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Database Design
                </span>

              </div>

            </div>

          </div>

          {/* Experience 3 */}
          <div className="relative md:pl-12">

            <div className="absolute left-0 top-2 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 md:flex" />

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition hover:border-cyan-400/30">

              <div className="flex flex-col justify-between gap-3 md:flex-row">

                <div>
                  <p className="text-sm font-medium text-cyan-400">
                    Analytics & Automation
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Data Analytics & Reporting
                  </h3>
                </div>

                <span className="text-sm text-gray-500">
                  Earlier Experience
                </span>

              </div>

              <p className="mt-5 leading-7 text-gray-400">
                Developed analytical reports, dashboards, data
                transformations, and automation solutions using
                SQL, Excel, VBA, Power BI, and related analytics
                technologies.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  SQL
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Excel
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  VBA
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Analytics
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

       {/* EDUCATION & CERTIFICATIONS */}
<section
  id="education"
  className="scroll-mt-24 bg-slate-900 px-8 py-24"
>
  <div className="mx-auto max-w-6xl">

    {/* Section Heading */}
    <div className="mb-16 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Education & Certifications
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        Learning & Credentials
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        A combination of academic learning and professional certifications
        supporting my work across data, cloud, analytics, and AI.
      </p>
    </div>

    {/* Education */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* Master's Degree */}
      <div className="rounded-3xl border border-white/10 bg-slate-950 p-8 transition hover:border-cyan-400/30">

        <div className="mb-6 text-4xl">
          🎓
        </div>

        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          Master's Degree
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          M.Sc. in Software Engineering
        </h3>

        <p className="mt-2 text-lg text-gray-300">
          Big Data Management & Analytics
        </p>

        <p className="mt-4 text-gray-400">
          Heilbronn University, Germany
        </p>

        <p className="mt-2 text-sm text-gray-500">
          2024 – 2026
        </p>

        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="leading-7 text-gray-400">
            Focus areas include data engineering, analytics,
            artificial intelligence, machine learning, and
            modern data-driven applications.
          </p>
        </div>

      </div>

      {/* Bachelor's Degree */}
      <div className="rounded-3xl border border-white/10 bg-slate-950 p-8 transition hover:border-cyan-400/30">

        <div className="mb-6 text-4xl">
          🎓
        </div>

        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          Bachelor's Degree
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          B.Tech in Electronics & Communication Engineering
        </h3>

        <p className="mt-4 text-gray-400">
          West Bengal University of Technology
        </p>

        <p className="mt-2 text-sm text-gray-500">
          2011 – 2015
        </p>

      </div>

    </div>

    {/* Certifications */}
    <div className="mt-16">

      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Professional Certifications
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">

        {/* Microsoft */}
        <div className="rounded-2xl border border-white/10 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

          <div className="mb-5 text-4xl">
            ☁️
          </div>

          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Microsoft
          </p>

          <h3 className="mt-3 text-xl font-bold">
            Azure Data Engineer Associate
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Microsoft Certified: Azure Data Engineer Associate
          </p>

          <span className="mt-5 inline-block rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-cyan-300">
            DP-203
          </span>

        </div>

        {/* Google */}
        <div className="rounded-2xl border border-white/10 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

          <div className="mb-5 text-4xl">
            📋
          </div>

          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Google
          </p>

          <h3 className="mt-3 text-xl font-bold">
            Project Management
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Google Project Management Certificate
          </p>

          <span className="mt-5 inline-block rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-cyan-300">
            Professional Certificate
          </span>

        </div>

        {/* IBM */}
        <div className="rounded-2xl border border-white/10 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

          <div className="mb-5 text-4xl">
            🤖
          </div>

          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            IBM
          </p>

          <h3 className="mt-3 text-xl font-bold">
            Develop Generative AI Applications
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            IBM certification focused on developing Generative AI
            applications.
          </p>

          <span className="mt-5 inline-block rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-cyan-300">
            Generative AI
          </span>

        </div>

      </div>

    </div>

  </div>
</section>

  {/* Beyond Technology */}
     <div className="mt-16 rounded-2xl border border-white/10 bg-slate-950/60 p-8 text-center">
      <h3 className="mb-4 text-2xl font-semibold">
        Beyond Technology 🌍
      </h3>

      <p className="mx-auto max-w-3xl leading-8 text-gray-400">
        Outside technology, I enjoy travelling, discovering new places,
        and experiencing different cultures. Travel keeps me curious,
        open-minded, and inspired to look at problems from different
        perspectives.
      </p>
    </div>

    {/* CONTACT SECTION */}
<section
  id="contact"
  className="scroll-mt-24 bg-slate-900 px-8 py-24"
>
  <div className="mx-auto max-w-4xl text-center">

    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
      Contact
    </p>

    <h2 className="text-4xl font-bold md:text-5xl">
      Let's Connect
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
      Interested in Data Engineering, Analytics, Artificial Intelligence,
      or Generative AI? I'd love to connect and explore opportunities.
    </p>


    {/* Contact Buttons */}
    <div className="mt-10 flex flex-wrap justify-center gap-4">

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/shruti-s-96478590/?isSelfProfile=true"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        LinkedIn
      </a>


      {/* GitHub */}
      <a
        href="https://github.com/ShrutiSinha345"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-950"
      >
        GitHub
      </a>


      {/* Email */}
      <a
        href="mailto:shrutimoha345@gmail.com"
        className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-950"
      >
        Email Me
      </a>

    </div>


    {/* Availability */}
    <div className="mt-12 rounded-2xl border border-cyan-400/20 bg-slate-950 p-6">

      <div className="flex items-center justify-center gap-3">

        <span className="h-3 w-3 rounded-full bg-green-400"></span>

        <p className="text-gray-300">
          Open to Data Engineering, Analytics & AI opportunities
        </p>

      </div>

    </div>

  </div>
</section>

    </main>
  );
}