import React from "react";
function About() {
  return (
    <section id="about" className="py-20 rounded-2xl p-6 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center">About me</h2>
        <p className="mt-4 text-gray-900 overflow-hidden text-ellipsis ">
          I am a BCA graduate from DBS Global University Dehradun. I live in
          Haridwar, Uttarakhand and having a strong interest in frontend web
          development. I enjoy building practical projects, learning modern
          technologies, and improving my React and UI development skills. I am
          seeking an entry-level role where I can learn, grow, and contribute to
          real-world software solutions.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="p-6 rounded-2xl shadow-2xl hover:bg-blue-100 bg-white/5 backdrop-blur-md cursor-pointer">
            <h3 className="font-semibold text-xl">Education</h3>
            <ul className="mt-2 text-sm text-gray-900 ">
              <li>Bachelor of Computer Applications (BCA)</li>
              <li>
                Doon Business School, Global University, Dehradun (Uttarakhand)
              </li>
              <li>Graduation Year: 2022 - 2025</li>
              <li>CGPA: 7.33</li>
            </ul>
            <h3 className="font-semibold text-xl pt-2">
              Intermediate Class 12
            </h3>
            <ul className="mt-2 text-sm text-gray-900">
              <li>Holy Cross Sr. Sec School, Laksar, Haridwar</li>
              <li>Board: CBSE</li>
              <li>Completion Year: 2022</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl shadow-2xl hover:bg-blue-100 bg-white/5 backdrop-blur-md cursor-pointer">
            <h3 className="font-semibold">What I'm Currently Doing</h3>
            <p className="mt-2 text-sm text-gray-900">
              I'm currently working on several projects and enhance my skills.
              Also build a portfolio. I enjoy learning new technologies and
              applying them in practical scenarios. My goal is to become a
              proficient web/software developer.
            </p>

            <p className="pt-3">
              Explore my{" "}
              <a
                href="https://www.codewars.com/users/Anup%20shahi"
                target="_blank"
                rel="noreferrer"
                className="text-amber-600 font-semibold hover:underline"
              >
                Codewars profile
              </a>
              , where I practice JavaScript skills through coding challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;