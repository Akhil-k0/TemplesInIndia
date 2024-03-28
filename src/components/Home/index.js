import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  background-color: #a0a0a0;
  height: 100%;
`;

const IntroSectionContainer = styled.div`
  background-color: #ffdc60;
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media screen and (max-width: 998px) {
    height: 90vh;
  }
`;

const IntroSectionLayout = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 998px) {
    flex-direction: column;
    align-items: center;
    height: 85vh;
  }
`;

const IntroImage = styled.img`
  width: 46%;
  @media screen and (max-width: 998px) {
    order: 1;
    height: 60%;
    max-height: 350px;
    width: 64%;
    max-width: 450px;
    margin-top: 10px;
  }
`;

const IntroTextContainer = styled.div`
  width: 60%;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 998px) {
    order: 0;
    width: 100%;
    height: 250px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const TempleCount = styled.span`
  color: #a4213c;
  font-size: 38px;
  font-weight: bold;
`;

const IntroText = styled.p`
  color: #a4213c;
  font-size: 36px;
  font-weight: 500;
  @media screen and (max-width: 998px) {
    font-size: 30px;
  }
`;

const AddTempleBtn = styled.button`
  background-color: #a4213c;
  color: #ffffff;
  font-size: 18px;
  height: 55px;
  width: 180px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const HomeDescriptionContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-wrap: wrap;
  background-color: #f2f2f2;
  @media screen and (max-width: 998px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const FeaturedRecentlyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  margin-top: 20px;
  margin-left: 6%;
  order: -3;
  @media screen and (max-width: 998px) {
    flex-direction: row;
    height: 23vh;
    margin: 6px;
    order: 0;
  }
`;
export const FeaturedContent = styled.img`
  height: 130px;
  width: 150px;
  @media screen and (max-width: 998px) {
    margin-right: 10px;
  }
`;
export const RecentlyEdited = styled.img`
  height: 130px;
  width: 150px;
`;
export const TemplesContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-top: 40px;
  order: -2;
  @media screen and (max-width: 998px) {
    order: 3;
    width: 90%;
    margin-left: 8px;
  }
`;
export const TempleCard = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0.5px 1px 5px 2px #d9d9d9;
  border-radius: 8px;
  margin: 10px;
`;
export const TempleName = styled.h1`
  color: #b32d00;
  font-size: 18px;
`;
export const TemplePlace = styled.p`
  color: #737373;
  font-size: 15px;
`;
export const TempleImage = styled.img``;
export const TempleDescription = styled.p`
  color: #737373;
  font-size: 15px;
`;

export const PostsContainer = styled.div`
  height: 70vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  margin-right: 6%;
  order: -1;
  @media screen and (max-width: 998px) {
    order: 1;
    height: 50%;
    width: 80%;
    margin-top: 10px;
    margin-left: 10px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const PostHeading = styled.h1`
  color: #000000;
  font-size: 20px;
  align-self: flex-start;
  display: none;
  @media screen and (max-width: 998px) {
    font-size: 27px;
    margin-left: 8px;
    display: block;
  }
`;

export const PostHeading2 = styled.h1`
  color: #000000;
  font-size: 26px;
  align-self: flex-start;
  @media screen and (max-width: 998px) {
    font-size: 27px;
    margin-left: 8px;
    display: none;
  }
`;
export const TagHeading = styled.h1`
  color: #000000;
  font-size: 20px;
  align-self: flex-start;
  @media screen and (max-width: 998px) {
    font-size: 27px;
    align-self: flex-start;
  }
`;
export const PostNames = styled.p`
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  margin-top: 0px;
  margin-bottom: 6px;
  align-self: flex-start;
  border-bottom: 1px #000000 solid;
  @media screen and (max-width: 998px) {
    margin-bottom: 0px;
    margin-top: 0px;
    margin-right: 12px;
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  align-self: flex-start;

  @media screen and (max-width: 998px) {
    order: 2;
    width: 100%;
  }
`;

export const TagButton = styled.button`
  background-color: #d9d9d9;
  height: 30px;

  border-radius: 20px;
  color: #737373;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
`;
const TagsList = [
  {
    id: 1,
    tag: "Bhoodevi",
  },
  {
    id: 2,
    tag: "Mumbai",
  },
  {
    id: 3,
    tag: "Awasthi",
  },
  {
    id: 4,
    tag: "Shiva",
  },
  {
    id: 5,
    tag: "2022",
  },
  {
    id: 6,
    tag: "Kailasa",
  },
];

const TemplesList = [
  {
    id: "A",
    name: "Shree Sanwaliya Seth Temples",
    imageUrl:
      "https://templesofindia.org/assets/compressed/b55cab46fe141661e214dbb4f39ea6d8_1150.jpg",
    place: "Rajasthan",
    description:
      "The legend has it that in the year 1840, a milkman named Bholaram Gurjar had a dream of three divine idols buried underground in the Chapar village of Bhadsoda-Bagund; on digging out the site, thre.....",
  },
  {
    id: "B",
    name: "Sri Vaidhya Veeraraghava Swamy Temple",
    imageUrl:
      "https://templesofindia.org/assets/compressed/6f0c6eaa04e826644282a1b76ef5e930_219.jpeg",
    place: "Tamil Nadu",
    description:
      "The legend connected with this temple says that one Thai Amavasyai  (Jan-Feb New Moon)day, a wandering sage named Salihothran reached Thiruvallur, where he met a congregation sage. ",
  },
  {
    id: "C",
    name: "Kathithamalai Murugan Temple",
    imageUrl:
      "https://templesofindia.org/assets/compressed/f9b9ca1d7ee055c974f03564466f6ca2_942.png",
    place: "Tamil Nadu",
    description:
      "Sage Agasthya took a pilgrimage to all shrines of Lord Muruga.  He was accompanied by Maharshi Narada and the Devas.  There was no water in this place to prepare the nivedhana for the puj.....",
  },
  {
    id: "D",
    name: "Ananthamangalam Rajagopalaswamy temple",
    imageUrl:
      "https://templesofindia.org/assets/compressed/de7ff9cd4bb6c939f0d5e100807b2b03_219.jpeg",
    place: "Tamil Nadu",
    description:
      "I have been to Ananthamangalam Shree Veerapathira Dhasapuja Anchaneyar Temple well known as Sri Rajagopalaswami temple at Nagapattinam along with my parents ^^ Abi sister (Myladuthurai). The pre.....",
  },
  {
    id: "E",
    name: "Sri Bhuvaraha Swamy Temple (Purana Sthalam)",
    imageUrl:
      "https://templesofindia.org/assets/compressed/3eb8a9e7db8c004b81e8c1f7e0c9317c_942.png",
    place: "Cuddalore",
    description:
      "Lord Sri Narayana chased the demon Hiranysura in Varaha Avatara – in the form of a divine swine with a menacing horn on the nose – killed him and recovered earth stolen by him.  The Lord re-in.....",
  },
  {
    id: "F",
    name: "Hanuman Ji Mandir",
    imageUrl:
      "https://templesofindia.org/assets/compressed/c61bd037aa3165c21aea93d9a2b0ea07_1151.jpg",
    place: "Madhya Pradesh",
    description:
      "Bheema (second among five Pandava brothers) meets Lord Hanuman (one of the seven Chiranjeevi's in Hinduism of India) during the greatest Indian epic Mahabharat in 3rd Dvapar Yug (Ramayan belongs to.....",
  },
  {
    id: "G",
    name: "Sri Agnineeswar Temple, Padal Petra Temple",
    imageUrl:
      "https://templesofindia.org/assets/compressed/3a16f937e5a350acd5382392532c3b15_942.JPG",
    place: "Nagapattinam",
    description:
      "Banasura belongs to the demon community.  His mother was Madhiniar.  She was a staunch Lord Shiva devotee.  To facilitate his mother’s Shiva puja, Banasura was bringing many swayambu.....",
  },
  {
    id: "H",
    name: "Veeranarayana Swamy Temple",
    imageUrl:
      "https://templesofindia.org/assets/compressed/7b84e3a94ca7c1c247f569ad1d39a2f4_219.jpg",
    place: "Karnataka",
    description:
      "The Veera Narayana temple is located in Belavadi, a village in the Chikkamagaluru district of Karnataka state, India. The temple was built during the rule of the Hoysala Empire. Known to legend as .....",
  },
];

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <HomeContainer>
          <IntroSectionContainer>
            <IntroSectionLayout>
              <IntroImage
                src="https://templesofindia.org/assets/images/NewHomeTemple.png"
                alt="temple image"
              />

              <IntroTextContainer>
                <IntroText>
                  <TempleCount>7,50,000</TempleCount> Plus Temples and
                  Counting...
                </IntroText>
                <AddTempleBtn type="button">Add Your Temple</AddTempleBtn>
              </IntroTextContainer>
            </IntroSectionLayout>
          </IntroSectionContainer>
          <HomeDescriptionContent>
            <FeaturedRecentlyContent>
              <Link to="https://templesofindia.org/featured-temples">
                <FeaturedContent
                  src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711436314/newFeatured_fupvg6.png"
                  alt="featured"
                />
              </Link>
              <Link to="https://templesofindia.org/recently-updated">
                <RecentlyEdited
                  src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711436325/newRecentlyEdited_qigwdu.png"
                  alt="recent-temples"
                />
              </Link>
            </FeaturedRecentlyContent>
            <TemplesContainer>
              {TemplesList.map((eachTemple) => (
                <TempleCard key={eachTemple.id}>
                  <TempleName>{eachTemple.name}</TempleName>
                  <TemplePlace>{eachTemple.place}</TemplePlace>

                  <TempleImage
                    src={eachTemple.imageUrl}
                    alt={eachTemple.name}
                  />

                  <TempleDescription>
                    {eachTemple.description}
                  </TempleDescription>
                </TempleCard>
              ))}
            </TemplesContainer>

            <PostHeading>Posts</PostHeading>
            <PostsContainer>
              <PostHeading2>Posts</PostHeading2>
              <PostNames> 16 Divine Darshans of Unique Shivlingas </PostNames>
              <PostNames>
                {" "}
                Top 10 Tallest Statues of Hindu Gods in the World{" "}
              </PostNames>
              <PostNames>
                {" "}
                12 famous and beautiful Hindu Temples outside India{" "}
              </PostNames>
              <PostNames>
                {" "}
                10 Ancient Magnificent Sculptures of Hindu Gods{" "}
              </PostNames>
              <PostNames>
                {" "}
                Arumigu Subramaniya Swamy Temple, Tiruchendur{" "}
              </PostNames>
              <PostNames> Kopeshwar Temple </PostNames>
              <div>
                <TagHeading>Tags</TagHeading>
                <TagsContainer>
                  {TagsList.map((eachTag) => (
                    <TagButton key={eachTag.id}> {eachTag.tag}</TagButton>
                  ))}
                </TagsContainer>
              </div>
            </PostsContainer>
          </HomeDescriptionContent>
        </HomeContainer>
        <Footer />
      </>
    );
  }
}

export default Home;
