import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bannerImage from "./assets/S1.jpg";
import teamImage from "./assets/11-b.jpg";
import nowImage from "./assets/12.jpg";
import scout1 from "./assets/scouts/1_Sobocinski.jpg";
import scout2 from "./assets/scouts/2_Ranc.jpg";
import scout3 from "./assets/scouts/3_Brejska.jpg";
import scout4 from "./assets/scouts/4_Wojcik.jpg";
import scout5 from "./assets/scouts/5_Kolinska.jpg";
import scout6 from "./assets/scouts/6_Bednarek.jpg";
import scout7 from "./assets/scouts/7_Ciszewski.jpg";
import scout8 from "./assets/scouts/8_Jakubowska.jpg";
import scout9 from "./assets/scouts/9_Bilinska.jpg";

function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <button
        className="menu-button"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a
          href="#story"
          className={activeSection === "story" ? "active" : ""}
          onClick={closeMenu}
        >
          The Story
        </a>
        <a
          href="#scouts"
          className={activeSection === "scouts" ? "active" : ""}
          onClick={closeMenu}
        >
          The Scouts
        </a>
        <a
          href="#film"
          className={activeSection === "film" ? "active" : ""}
          onClick={closeMenu}
        >
          The Film
        </a>
        <a
          href="#team"
          className={activeSection === "team" ? "active" : ""}
          onClick={closeMenu}
        >
          The Team
        </a>
        <a
          href="#support"
          className={activeSection === "support" ? "active" : ""}
          onClick={closeMenu}
        >
          Support Us
        </a>
      </div>
    </nav>
  );
}

function Content() {
  const galleryItems = [
    { src: scout1, alt: "Józef Sobociński" },
    { src: scout2, alt: "Ranc" },
    { src: scout3, alt: "Brejska" },
    { src: scout4, alt: "Wojcik" },
    { src: scout5, alt: "Kolinska" },
    { src: scout6, alt: "Bednarek" },
    { src: scout7, alt: "Ciszewski" },
    { src: scout8, alt: "Jakubowska" },
    { src: scout9, alt: "Bilinska" },
  ];

  return (
    <div id="content">
      <div className="banner-wrapper">
        <img
          src={bannerImage}
          alt="SCOUTS MEMBERS OF GROUP 22 AFTER A PLEDGE CEREMONY, GROCHÓW 1943"
          className="banner"
        />
        <p className="caption">
          SCOUTS MEMBERS OF GROUP 22 AFTER A PLEDGE CEREMONY, GROCHÓW 1943
        </p>
      </div>

      <div className="title-section">
        <div className="title">
          <h1>SCOUTS FOREVER</h1>
          <h3>Friends from World War II to the Present</h3>
        </div>
        <hr />
        <p className="copy">
          <b>“Scouts Forever: Friends from World War II to the Present"</b> will
          be a sixty-minute documentary about a group of scouts, all in their
          eighties and nineties, who as children participated in the resistance
          movement in Poland during World War II, and who have been getting
          together regularly for the last 70 years.
        </p>
      </div>

      <section id="story">
        <h2>THE STORY</h2>
        <p className="copy">
          The children belonging to Scout Group #22 and #54 grew up in the
          Grochów neighborhood of Warsaw in the 1930s. They went to the same
          schools, most attended the same church, and they all joined the scouts
          at approximately the same age. As scouts they did what most scouts do
          all over the world: learn camping skills, be loyal to each other, and
          love their country. In 1939, when Poland was invaded by Germany and
          later by the Soviet Union, members of Scouts Groups #22 and #54 joined
          the Polish resistance movement. They served as couriers, distributed
          pamphlets, created anti-invasion graffiti, and later took on high-risk
          combat operations. Some of them were arrested and sent to
          concentrations camps, others were killed. Seventy years later the
          survivors of these groups: fourteen men and six women maintain a
          strong bond of friendship. Under the name of Grey Ranks Circle
          “Bazylika Grochów” they get together regularly to carry on the mission
          of educating new generations of Polish children about the resistance
          movement and of honoring those who gave their life for a free Poland.
        </p>
      </section>

      <section id="scouts">
        <h2>THE VETERAN SCOUTS TODAY</h2>
        <div className="scouts-wrapper">
          <div className="scouts-main">
            <div className="quote">
              <p className="quote-text">
                "I PLEDGE TO YOU THAT I SHALL SERVE WITH THE GRAY RANKS,
                SAFEGUARD THE SECRETS OF THE ORGANIZATION, OBEY ORDERS, AND NOT
                HESITATE TO SACRIFICE MY LIFE"
              </p>
              <p className="quote-desc">- THE SCOUT'S PLEDGE</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{
                type: "fraction",
                renderFraction: (currentClass, totalClass) =>
                  `<span class="${currentClass}"></span> of <span class="${totalClass}"></span>`,
              }}
              spaceBetween={16}
              className="gallery-swiper"
            >
              {galleryItems.map((item, index) => (
                <SwiperSlide key={`${item.alt}-${index}`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="gallery-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <p className="scouts-bottom">
            The Gray Ranks" (in polish: Szare Szeregi) was a codename for the
            underground paramilitary Polish scouting association during World
            War II. The wartime organization created on 27 September 1939 in
            Warsaw, actively resisted and fought German occupation in Poland and
            contributed to the resistance operations of the polish underground
            state.
          </p>
        </div>
      </section>

      <section id="film">
        <h2>THE FILM</h2>

        <div className="video-embed">
          <iframe
            src="https://player.vimeo.com/video/143534011?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title='Trailer / Documentary "Scouts Forever". The story of Polish Scouts who risked their lives for their country&#039;s freedom.'
          ></iframe>
        </div>

        <script src="https://player.vimeo.com/api/player.js"></script>

        <p className="copy">
          The documentary will be in English and Polish. Through the eyes of the
          surviving scouts we capture their personal journey during the past
          seven decades and how historical events influenced their lives. We had
          involved different Polish Scouts groups as well as Group 22 and had
          captured their interaction with veteran scouts of Groups #22 and #54.
          The interviews are being shot on location in Warsaw with
          post-production being carried out between Warsaw and Washington, DC.
          The film is directed to a general worldwide television audience, in
          particular to the Polish Diaspora all over the world.
        </p>

        <h4>Current Progress</h4>
        <p className="copy">
          In order to have the broadcast quality needed to reach an
          international audience, this project requires strong financial
          investment. We are actively seeking the support, monetary as well as
          in-kind contributions, from people and institutions in Poland and the
          United States. So far we had conducted 10 interviews with the
          survivors of Scout Group #22 and #54. We filmed many celebratory
          events of the 70th anniversary of the Warsaw Uprising in 2014 and shot
          several scene reenactments. We are currently in the post-production
          phase and we are in the process of raising new funds.{" "}
        </p>
      </section>

      <section id="team">
        <h2>THE TEAM</h2>

        <img src={teamImage} alt="Film Team" className="image" />

        <p className="copy">
          This documentary is a project of Arthavision and is being produced by
          Dianela Urdaneta de Ratha in collaboration with Katarzyna Timmer
          Lubaczewska. Dianela is an award winning writer and producer.
          Katarzyna is a co-producer, researcher and translator. A team of
          experienced film crew and post-producers are part of the team.
        </p>

        <div className="team-member">
          <h4>Dianela Urdaneta</h4>

          <h5>Producer/Director/Writer</h5>

          <p className="copy">
            Dianela Urdaneta de Ratha is a bilingual producer, writer and
            narrator with more than 25 years of experience. She has produced
            videos both in English and Spanish for Reuters TV, Voice of America
            TV, CNN Spanish, CBS Telenoticias, the Inter-American Development
            Bank, AARP and TMN, among others. She is the owner of the multimedia
            production company, “Arthavision.” A sample of her work can be
            viewed at{" "}
            <a href="https://www.arthavision.com">www.arthavision.com</a>.
          </p>

          <p className="copy">
            Her videos has won five “Communitas Award” given by the Association
            of Marketing and Communication Professionals, in the categories of
            “Making a Difference” and “Social Responsibility”, as well as a
            “Communicator Award” in the category of “Social Issues.
          </p>

          <p className="copy">
            Ms. Urdaneta holds a Master of Art in Film and Video from the
            American University in Washington D.C., and a BA in Broadcast
            Journalism from Zulia University in Venezuela.
          </p>
        </div>

        <hr />

        <div className="team-member">
          <h4>Katarzyna Timmer Lubaczewska</h4>

          <h5>Co-producer/Researcher/Translator</h5>

          <p className="copy">
            Katarzyna is an experienced, accomplished Polish language teacher
            both for foreign adults and Polish children. She is also a certified
            simultaneous Polish/Dutch interpreter and translator.
          </p>

          <p className="copy">
            As Chairwoman of The Hague-Warsaw City Link Foundation in the
            Netherlands, she helped develop and implement a wide array of
            projects and events on political, economic, cultural, educational,
            environmental and religious subjects. For this work she received the
            Golden Cross of Merit from the President of Poland.
          </p>

          <p className="copy">
            Ms. Timmer Lubaczewska holds a Master’s degree in Polish and Slavic
            languages, and completed a PhD Linguistic Studies from the
            University of Warsaw. She comes from Grochów.
          </p>
        </div>

        <hr />

        <div className="team-member">
          <h4>Tadeusz Kieniewicz</h4>

          <h5>Cinematographer</h5>

          <p className="copy">
            Tadeusz was born in Warsaw, Poland to a family of TV personalities
            and was exposed to the TV production environment at a very early
            age. He has been working with still and video cameras since he was 8
            year old.
          </p>

          <p className="copy">
            His work as Director of Photography and as shooter has taken him to
            numerous countries including Tunisia, Italy, Spain, France and
            Portugal. He has worked as a DP and camera man for several music and
            commercial videos and has shot documentaries with directors from
            Poland, Nederland, Venezuela and the USA.
          </p>

          <p className="copy">
            Tadeusz has a unique talent for lighting, creating beautiful looking
            interviews and an eye for unusual and interesting frames.
          </p>

          <p className="copy">
            He has a diploma in Cinematography from the Warsaw Film School. A
            sample of his work can be viewed at{" "}
            <a href="https://www.kieniewicz.com">www.kieniewicz.com</a>.
          </p>
        </div>

        <hr />

        <div className="team-member">
          <h4>Patryk Morawski</h4>

          <h5>Sound Recordist/Boom Operator</h5>

          <p className="copy">
            Patryk Morawski is a musician, a sound engineer and a member of the
            Audio Engineering Society of Poland. His interest in music started
            at a very early age. As a student of the music schools, he has won
            numerous musical competitions in the areas of hearing development,
            harmony and choir performances at the regional and national level.
          </p>

          <p className="copy">
            His interest in exact science studies such as math and physics,
            inspired him to study sound engineering at The Fryderyk Chopin
            University of Music in Warsaw from 2010 – 2015. He is currently
            working on his master thesis on the subject of sound reconstruction
            for the audiovisual forms.
          </p>

          <p className="copy">
            During his professional internships he has worked on many sound
            projects for long films, documentaries and animation films in
            cooperation with the Film Schools of Łódź, Warsaw and Gdynia. He has
            been working as a sound recordist and a boom operator since 2013
          </p>
        </div>
      </section>

      <section id="support">
        <h2>SUPPORT US</h2>

        <p className="copy">
          We welcome the support, monetary as well as in-kind contributions,
          from people and institutions.
        </p>

        <p className="copy">
          Scouts Forever is now fiscally sponsored by Women and Film and Video.
          To receive tax deduction benefits please donate trough WIFV webpage:
          <a href="http://www.wifv.org/about/donate/">
            {" "}
            www.wifv.org/about/donate/
          </a>
          .
        </p>
      </section>

      <section>
        <h2>GET IN TOUCH</h2>
        <div className="image-wrapper">
          <img src={nowImage} alt="Film Team" className="image" />
          <p className="caption">
            MEMBERS OF THE GREY RANK CIRCLE “BAZYLIKA GROCHÓW” AFTER A MEETING
            IN WARSAW, MAY 8TH, 2014
          </p>
        </div>

        <h3>FOLLOW US ON</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/ScoutsForeverDoc" target="_blank">
            FACEBOOK
          </a>{" "}
          <span className="separator" target="_blank">
            •
          </span>
          <a href="https://x.com/ScoutsDoc">X: ScoutsDoc</a>{" "}
          <span className="separator" target="_blank">
            •
          </span>
          <a href="https://www.instagram.com/scoutsforeverdoc">
            INSTAGRAM: @docscoutsforever
          </a>
        </div>
      </section>
    </div>
  );
}

function App() {
  const sectionIds = ["story", "scouts", "film", "team", "support"];
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Content />
    </>
  );
}

export default App;
