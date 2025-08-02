import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

const cv = {
  name: "Ulises Rodríguez Candela",
  email: "ulisescandela99@gmail.com",
  role: "Software Engineer",
  phone: "+52 871 178 7067",
  address: "Coahuila, México",
  website: "ulises.io",
  linkedin: "linkedin.com/in/ulisescandela",
  workExperience: [
    {
      company: "John Deere",
      position: "Information Security Engineer",
      location: "Monterrey, NL (Remote, Hybrid in Torreon, Coahuila)",
      startDate: "Mar 2023",
      endDate: "Present",
      description: [
        "Optimize processes and tools related to ServiceNow asset management, catalog items, workflow automation, scripts, etc.",
        "Build and maintain cibersecurity tools with Python (Django, Flask, etc.) and database managment (MySQL), to monitor the company's assets and networks.",
        "Deploy and maintain web applications in a Linux RHEL environment.",
        "Incident management and ticket solving as a ServiceNow administrator and developer.",
      ]
    },
    {
      company: "HandCloud",
      position: "ServiceNow Developer",
      location: "Guadalajara, Jalisco (Remote)",
      startDate: "May 2022",
      endDate: "Mar 2023",
      description: [
        "Develop and maintain ServiceNow applications to automate processes and improve efficiency.",
        "Modify, Create and maintain ServiceNow catalog items, workflows, scripts, automations, business rules, integrations, etc.",
        "Manage ServiceNow instances and environments.",
      ]
    },
    {
      company: "Quickapps",
      position: "Software Developer",
      location: "Torreon, Coahuila",
      startDate: "Sep 2021",
      endDate: "May 2022",
      description: [
        "Trained in web development (HTML, CSS, JavaScript), Zoho CRM development (Deluge, low-code integrations, workflows, sql queries).",
        "Integrated Zoho CRM with other applications (Zoho Creator, Zoho Analytics, Zoho Books, etc.) using Deluge.",
        "Migrated data from Magento to a new store built with Shopify.",
      ]
    }
  ],
  education: [
    {
      degree: "Master's Degree in Information Technology Administration",
      institution: "Universidad Tecmilenio",
      location: "Torreon, Coahuila",
      startDate: "Sep 2022",
      endDate: "May 2024",
    },
    {
      degree: "Bachelor's of Science in Mechatronics Engineering",
      institution: "Tecnologico de La Laguna",
      location: "Torreon, Coahuila",
      startDate: "Aug 2017",
      endDate: "Dec 2021",
    }
  ],
  skills: {
    "Programming Languages": ["Python", "JavaScript", "SQL", "Deluge"],
    "Frameworks & Libraries": ["Django", "Flask", "React", "Next.js", "TailwindCSS", "Node.js", "Express"],
    "Databases": ["MySQL", "PostgreSQL"],
    "Platforms & Tools": ["ServiceNow", "Linux RHEL", "Git", "Zoho CRM"],
    "Security & Infrastructure": ["Cybersecurity Tools", "Asset Management", "Incident Response"],
    "Other": ["Project Management", "Workflow Automation", "API Integrations"]
  },
  softSkills: {
    "Communication": ["Cross-functional Collaboration", "Technical Documentation", "Client Relations"],
    "Leadership & Management": ["Project Management", "Process Optimization", "Team Coordination"],
    "Problem Solving": ["Critical Thinking", "Analytical Skills", "Incident Resolution"],
    "Adaptability": ["Remote Work", "Multi-disciplinary Background", "Continuous Learning"],
    "Languages": ["Spanish (Native)", "English (Professional)"]
  }
}

export default function CVPage() {
  return (
    <>
      <Link href="/">
        <div className="flex flex-row gap-2 items-center mt-4 w-fit text-blue-700 font-medium text-sm ml-10 sticky top-10 bg-white border border-gray-200 rounded-xl p-2.5 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-gray-300 hover:cursor-pointer">
          <HiArrowLeft className="w-4 h-4" />
          <span className="text-sm">Return to home</span>
        </div>
      </Link>
      <div className="max-w-4xl mx-auto px-4 pb-8 flex flex-col gap-4 justify-center items-center text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-0">{cv.name}</h1>
        <h2 className="text-4xl font-bold text-gray-900 mb-2">{cv.role}</h2>

        {/* <div className="flex flex-row gap-4 text-lg">
          <p>{cv.email}</p>
          <span className="text-gray-500">•</span>
          <p>{cv.phone}</p>
          <span className="text-gray-500">•</span>
          <p>{cv.address}</p>
        </div> */}
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-8 flex flex-col gap-0 text-lg items-start">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">About Me</h2>
        <p className="mb-4 pb-0">
          Experienced professional (+4 years) with a multi-disciplinary background in software development, design, and project management. I have experience in different technologies and industries.
        </p>
        <p>My main stack is based on web fullstack development on different languages and frameworks (Next.js with React and TailwindCSS, Node.js with Express, Postgres, MySQL, Django and Flask with Python, etc.)
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-8 flex flex-col gap-0 text-lg items-start">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Work Experience</h2>
        {cv.workExperience.map((workExperience, index) => (
          <WorkExperience key={index} {...workExperience} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-8 flex flex-col gap-0 text-lg items-start">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Education</h2>
        {cv.education.map((education, index) => (
          <Education key={index} {...education} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-8 flex flex-col gap-0 text-lg items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Skills</h2>
            <Skills skills={cv.skills} />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Soft Skills</h2>
            <SoftSkills softSkills={cv.softSkills} />
          </div>
        </div>
      </div>
    </>
  );
}

function Education(education) {
  const { degree, institution, location, startDate, endDate } = education;
  return (
    <div className="mb-5">
      <h3 className="text-xl font-bold text-gray-600 mb-0 pb-0">{degree} / <span className="text-blue-700/70">{institution}</span></h3>
      <p className="text-lg text-gray-600">
        <span className="italic">{startDate} - {endDate}</span>
        <span className="text-gray-600"> • </span>
        <span className="text-gray-600">{location}</span>
      </p>
    </div>
  );
}

function WorkExperience(workExperience) {
  const { company, position, location, startDate, endDate, description } = workExperience;
  return (
    <div className="mb-5">
      <h3 className="text-xl font-bold text-gray-600 mb-0 pb-0">
        {position} / <span className="text-blue-700/70">{company}</span>
      </h3>
      <p className="text-lg text-gray-600">
        <span className="italic">{startDate} - {endDate}</span>
        <span className="text-gray-600"> • </span>
        <span className="text-gray-600">{location}</span>
      </p>
      {description.map((item, index) => (
        <p className="text-gray-900 mt-0 pt-0" key={index}>{item}</p>
      ))}
    </div>
  );
}

function Skills({ skills }) {
  return (
    <div className="flex flex-col gap-2 text-lg items-start">
      {Object.entries(skills).map(([category, skillList]) => (
        <p key={category} className="mb-1">
          <span className="font-semibold text-gray-700">{category}:</span> {skillList.join(", ")}
        </p>
      ))}
    </div>
  );
}

function SoftSkills({ softSkills }) {
  return (
    <div className="flex flex-col gap-2 text-lg items-start">
      {Object.entries(softSkills).map(([category, skillList]) => (
        <p key={category} className="mb-1">
          <span className="font-semibold text-gray-700">{category}:</span> {skillList.join(", ")}
        </p>
      ))}
    </div>
  );
}