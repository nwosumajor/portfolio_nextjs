import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ayodele",
  lastName: "Nwosu",
  name: `Ayodele Nwosu`,
  role: "DevOps Engineer / Backend Developer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Africa/Lagos",// Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <> Hi, I'm Ayodele - Welcome to my Automated DevOps Capstone!, A weekly newsletter on cloud architecture, DevOps automation, and digital security.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nwosumajor",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nwosumajor/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>DevOps Engineer & Backend Developer</>,
  subline: (
    <>
    I am Ayodele, a DevOps Engineer and Backend Developer based in Lagos at <Text as="span" size="xl" weight="strong">MajorGBN</Text>, where I specialize in containerized microservices, CI/CD automation, and enterprise data governance <br /> Guided by the philosophy of "doing hard things," I build for uncompromising resilience and security.
</>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">MaestroApp</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Architecture Project
        </Text>
      </Row>
    ),
    href: "/work/maestroapp",
  },
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        With over 4 years of experience spanning the tech, industrial, and educational landscapes,
        Ayodele is a driven engineer who thrives on surmounting challenging technical obstacles. 
        His expertise bridges the gap between scalable cloud operations and rigorous financial data security,
        ensuring that complex applications run seamlessly, securely, and without downtime.
        Ayodele's commitment to "doing hard things" is evident in his work,
        where he consistently delivers solutions that prioritize resilience and security, even in the most demanding environments.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "GTBank",
        timeframe: "Feb 2024 - Present",
        role: "Analytics & E-Channel Security Officer",
        achievements: [
          <>
            Designed and implemented stringent database access controls and protocols to actively safeguard sensitive financial data across the bank's digital channels,
            resulting in a 30% reduction in security incidents.
          </>,
          <>
            Monitored high-volume transaction databases to proactively detect anomalies,
             managing comprehensive audit logs for cyber fraud prevention and ensuring compliance with financial regulations.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Major-GBN Innovations",
        timeframe: "Oct 2022 - Dec 2025",
        role: "Lead DevOps Engineer & Backend Developer",
        achievements: [
          <>
           Architected scalable cloud infrastructure using Terraform,
           resulting in a 90% reduction in server provisioning time via Infrastructure as Code (IaC)
          </>,
          <>
            Built automated Jenkins CI/CD pipelines for Node.js services, 
            ensuring continuous deployment and drastically cutting deployment cycles from hours to under 10 minutes and enabling seamless, zero-downtime releases.
          </>,
          <>
            Implemented robust monitoring and alerting systems using Prometheus and Grafana, 
            which reduced incident response times by 40% and significantly improved system reliability.
          </>,
          <>
          Orchestrated highly available, containerized database clusters with Docker and Kubernetes to ensure zero downtime for fintech workloads,
           achieving 99.99% uptime and seamless scalability during peak transaction periods.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Regenesys Business School (Digital Regenesys)",
        description: <>Advanced Cloud and DevOps Engineering</>,
      },
      {
        name: "Olabisi Onabanjo University",
        description: <>Bachelor of Engineering in Electrical Electronics.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Cloud & Infrastructure",
        description: (
          <>AArchitecting scalable, immutable infrastructure using modern DevOps tooling</>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Terraform", icon: "terraform" },
          { name: "AWS", icon: "aws" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Docker", icon: "docker" },
          { name: "Terraform", icon: "terraform" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend & Databases",
        description: (
          <>Developing secure APIs and optimizing high-volume relational and NoSQL databases.</>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MySQL", icon: "mysql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "GraphQL", icon: "graphql" },
          { name: "Redis", icon: "redis" },
          { name: "TypeScript", icon: "typescript" },
          { name: "SQL", icon: "database" },
          { name: "C++", icon: "cpp" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
        {
        title: "Security & Monitoring",
        description: (
          <>Implementing enterprise data governance, cyber fraud prevention, and real-time observability.</>
        ),
        tags: [
       { name: "Prometheus", icon: "prometheus" },
          { name: "Grafana", icon: "grafana" },
          { name: "Security", icon: "security" },
          { name: "Cybersecurity", icon: "cybersecurity" },
          { name: "Data Governance", icon: "data-governance" },
          { name: "Audit Logging", icon: "audit-logging" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about Infrastructure and Security...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Infrastructure and backend projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
