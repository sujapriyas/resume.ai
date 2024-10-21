"use client";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer, Font } from "@react-pdf/renderer";

Font.register({
  family: "CormorantGaramond",
  fonts: [
    {
      src: "/fonts/CormorantGaramond-Bold.ttf",
      fontWeight: "bold",
    },
    {
      src: "/fonts/CormorantGaramond-SemiBold.ttf",
      fontWeight: "medium",
    },
    {
      src: "/fonts/CormorantGaramond-Medium.ttf",
      fontWeight: "light",
    },
  ],
});
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
  },
  section: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  textHeading: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "CormorantGaramond",
  },
  textMedium: {
    fontSize: 11,
    fontWeight: "medium",
    fontFamily: "CormorantGaramond",
  },
  textSmall: {
    fontSize: 8,
    fontWeight: "light",
    fontFamily: "CormorantGaramond",
  },
});

interface Resume {
  resume: {
    name: string;
    position: string;
    communication: Communication;
    workExperience: WorkExperience[];
    skills: Skill[];
  };
}
interface Skill {
  title: string;
  skills: string;
}
interface WorkExperience {
  position: string;
  company: string;
  duration: string;
  description: string;
  points: string[];
}
interface Communication {
  address: Address;
  email: string;
  phoneNumber: string;
  linkedin: string;
  github: string;
}
interface Address {
  city: string;
  country: string;
}

type Props = {
  resume: Resume;
};

export default function Resume({ resume: resumeObj }: Props) {
  const { resume } = resumeObj;

  return (
    <Document
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ ...styles.textHeading, marginBottom: 4 }}>
            {resume.name}
          </Text>
          <Text style={styles.textMedium}>{resume.position}</Text>
          <Text style={{ ...styles.textSmall, marginTop: 2 }}>
            {resume.communication.address.city},{" "}
            {resume.communication.address.country} •{" "}
            {resume.communication.phoneNumber} • {resume.communication.email} •{" "}
            {resume.communication.linkedin}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={{ ...styles.textSmall, marginTop: 2 }}>
            Software engineering lead with ten years experience implementing
            backend systems in C+t; led re-architecture of key platform that
            serves 100,000 requests per month, increasing speed by 20 percent;
            awarded the prestigious Most Impactful award, given to the top 5
            percent of engineers based on total impact to firm; promoted two
            times in 18 months, six months ahead of
          </Text>
        </View>

        <View style={{ ...styles.section }}>
          <SectionHeading title="Work Experience" />
          {resume.workExperience.map((workExp, index) => (
            <WorkExperience key={index} workExp={workExp} />
          ))}
        </View>

        <View style={{ ...styles.section, marginBottom: 8 }}>
          <SectionHeading title="Education" />
          <Text
            style={{
              ...styles.textMedium,
              marginTop: 8,
              marginBottom: 8,
              flex: 1,
            }}
          >
            Bachelor of Engineering - Computer Science
          </Text>
          <Text
            style={{
              ...styles.textSmall,
              marginTop: 8,
              flex: 1,
            }}
          >
            Velammal Enginnering College, Chennai, Tamilnadu.
          </Text>
        </View>

        <View style={{ ...styles.section, fontWeight: 700 }}>
          <SectionHeading title="Skills & Other" />

          {resume.skills.map((skill, index) => {
            return (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 6,
                }}
              >
                <Text
                  style={{
                    ...styles.textSmall,
                    fontSize: 10,
                    fontWeight: "bold",
                    marginRight: 4,
                  }}
                >
                  {skill.title}:
                </Text>
                <Text style={{ ...styles.textSmall }}>{skill.skills}</Text>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
}

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <Text
      style={{
        ...styles.textMedium,
        paddingBottom: 4,
        borderBottom: 2,
        borderColor: "black",
      }}
    >
      {title}
    </Text>
  );
};

const WorkExperience = ({ workExp }: { workExp: WorkExperience }) => {
  const getBulletList = (content: string) => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View
          style={{
            height: 4,
            width: 4,
            borderRadius: 10,
            backgroundColor: "black",
            marginHorizontal: 4,
            marginTop: 3,
          }}
        />
        <Text style={{ ...styles.textSmall, flex: 1 }}>{content}</Text>
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          borderColor: "grey",
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            ...styles.textMedium,
            marginTop: 6,
            flex: 1,
          }}
        >
          {workExp.position}
        </Text>
        <Text
          style={{
            ...styles.textMedium,
            marginTop: 6,
          }}
        >
          {workExp.duration}
        </Text>
      </View>
      <Text
        style={{
          ...styles.textMedium,
          marginTop: 2,
        }}
      >
        {workExp.company}
      </Text>

      <Text style={{ ...styles.textSmall, marginTop: 2 }}>
        {workExp.description}
      </Text>
      <View
        style={{
          marginTop: 6,
          paddingLeft: 10,
          display: "flex",
          gap: 4,
        }}
      >
        {workExp.points.map((point) => getBulletList(point))}
      </View>
    </>
  );
};

const resumeInfo: Resume = {
  resume: {
    name: "Sujapriya Sakthivel",
    position: "MERN Stack Developer",
    communication: {
      address: { city: "Chennai", country: "India" },
      email: "sujapriyasakthivel806@gmail.com",
      phoneNumber: "9360129050",
      linkedin: "https://www.linkedin.com/in/suja-priya-9332811bb/",
      github: "https://github.com/sujapriyas",
    },
    workExperience: [
      {
        position: "Integrated Software Engineering - 7.15",
        company: "Vellore Institute of Technology",
        duration: "07/2020 - Present",
        description:
          "Developed and maintained software solutions for academic management, medical warehouse maintenance, and music player control using IOT techniques.",
        points: [
          "Created the frontend using React Js for student performance tracking and course material management.",
          "Developed the backend using Unity platform with Vuforia for AR-based warehouse management.",
          "Implemented market basket analysis techniques to uncover patterns in transactional data.",
          "Designed and implemented a movie recommendation system using Spring Boot, HTML, and CSS.",
        ],
      },
    ],
    skills: [
      { title: "Backend", skills: "Java, Python, Hadoop, Hive" },
      { title: "Frontend", skills: "React Js, HTML, CSS" },
      {
        title: "Machine Learning & AI",
        skills: "Artificial Intelligence, Machine Learning",
      },
    ],
  },
};
export const PDFPreview = () => {
  const downloadResume = () => {};

  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1">Hello</div>
      <PDFViewer
        style={{
          height: "100vh",
          width: "50%",
          backgroundColor: "#ffff",
        }}
      >
        <Resume resume={resumeInfo} />
      </PDFViewer>
    </div>
  );
};