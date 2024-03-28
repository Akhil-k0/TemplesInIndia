import Footer from "../Footer";
import Header from "../Header";

import styled from "styled-components";

export const AboutBgContainer = styled.div`
  height: 110%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutHeading = styled.h1`
  color: #000000;
  font-weight: 500;
  font-size: 24px;
`;

export const TemplesDescription = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  width: 60%;
  line-height: 30px;
`;

export const Profiles = styled.img`
  border-radius: 100px;
`;
export const ProfileName = styled.p`
  color: #039be5;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const Donators = styled.p`
  width: 60%;
  font-size: 18px;
`;
export const DenoteButton = styled.button`
  color: #ffffff;
  font-size: 18px;
  background-color: #008b02;
  border: none;
  outline: none;
  border-radius: 6px;
  height: 45px;
  width: 250px;
  align-self: flex-start;
  margin-left: 20%;
`;

const About = () => {
  return (
    <>
      <Header />
      <AboutBgContainer>
        <AboutHeading> About Temples of India </AboutHeading>
        <TemplesDescription>
          Temples of India is a devotees led movement to create a comprehensive
          and detailed online repository of temples across the Bharatvarsha.
          Temples of India is a not-for-profit knowledge platform to document
          and store possibly all details of temples across Bharatvarsha. <br />{" "}
          We aim to present each detail related to the temple such as its
          location, images of the temple, videos, open and close timings, etc
          contributed by devotees like you. You can search temples located
          nearby but unknown to you. Our goal is to acquaint users with the rich
          heritage of our country whose core lies in the temples. We are a group
          of students from IIT Bombay mentored by{" "}
          <a href="https://www.cse.iitb.ac.in/~ganesh/">
            Prof. Ganesh Ramakrishnan
          </a>
        </TemplesDescription>
        <p>Core Team: </p>
        <Profiles
          src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711449594/ayush_yaktc4.jpg"
          alt="arun"
        />
        <ProfileName>Ayush Maheshwari</ProfileName>
        <Profiles
          src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711449602/arun_kboqpl.jpg"
          alt="ayush"
        />
        <ProfileName> Arun Jayaramakrishnan</ProfileName>
        <AboutHeading> ACKNOWLEDGEMENTS : </AboutHeading>
        <ProfileName>
          Prof. Saketha Nath <br />
          Prof. Ravi Pooviah <br />
          Aditya Verma
          <br />
          Bhagyarsh Dhumal <br />
          Anjay Goel (Android Development) <br />
          Prateek (App Backend) <br />
          Siddharth Raja (Web Backend) <br />
          Aman Kumar(Web Frontend) <br />
          Arjun Sable
        </ProfileName>
        <Donators>
          We thank Mangilal Godarafor generous donation of <br />
          We thank Parmanand Ahirwar for generous donation of $1000 (2021-22).
        </Donators>
        <AboutHeading> Support Temples of India </AboutHeading>
        <TemplesDescription>
          Temples of India is a non-profit cause which is being run by students
          and devotees like you. We are completely dependent on devotees for
          preserving our rich temple heritage about temples in the country. Do
          your little help in preserving the glory of Sanatan Dharma for
          eternity by either adding temples you love and if possible, help us
          monetarily.
        </TemplesDescription>
        <DenoteButton>Donate to us </DenoteButton>
        <TemplesDescription>
          Are you a Techie? You could help us by joining our development team.
          Let us know your interest by mailing at{" "}
          <ProfileName>devs@templesofindia.org</ProfileName>
        </TemplesDescription>
        <TemplesDescription>
          For any other queries, mail us at contact@templesofindia.org
        </TemplesDescription>
      </AboutBgContainer>
      <Footer />
    </>
  );
};

export default About;
