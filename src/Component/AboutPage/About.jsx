import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./About.scss";

const About = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container-about">
          <h1 className="about-title">about mollyjogger</h1>
          <div className="group-row">
            <div className="left-item">
              <h3 className="story-title">Our Story</h3>
              <p className="story-desc">
                Mollyjogger,® is an authentic heritage brand, based in the Ozark
                Mountains, celebrating the region’s unique history of outdoor
                recreation and folklore. Adopting the name Mollyjogger from the
                original Mollyjoggers Fishing & Hunting Club, circa 1890; their
                Spring and Fall excursions included wagons loaded with
                provisions, bird dogs and a camp cook. Members filled their days
                with hunting and fishing, and evenings with campfire tales
              </p>
            </div>
            <div className="right-item">
              <div className="image-container">
                <img
                  src="//cdn.shopify.com/s/files/1/0156/0327/files/group-illo.jpg"
                  alt="founder"
                />
              </div>
            </div>
          </div>
          <div className="group-row">
            <div className="left-item-2">
              <div className="image-container">
                <img
                  src="https://cdn.shopify.com/s/files/1/0156/0327/files/camping-illo.jpg"
                  alt="founder"
                />
              </div>
            </div>
            <div className="right-item-2">
              <blockquote className="story-desc">
                Each were highly respected business men, yet as a whole were
                good naturedly regarded as a no-account, fun-loving,
                hard-drinking minnow tribe. They called themselves The
                Mollyjoggers.
                <br />
                <br />— Cheri Lungstrum
              </blockquote>
            </div>
          </div>
          <div className="group-row-2">
            <p className="para">
              Considerable curiosity has often been expressed why the name of
              “Mollyjoggers” was adopted by this club. Like the odd and catchy
              names of other associations, formed for either business or
              pleasure, it was merely a matter of accident. The club was camped
              at one time at what is known as Gibson hole, and were celebrating
              the feast day of the week—Friday, when they were joined by a
              neighboring mountaineer, who came to spend the evening. He was
              made to feel at home, invited to participate in the many good
              things to eat and drink, and hugely enjoyed the fun and good
              stories. Late in the evening, as he was about to depart for home,
              he stepped in the tent door and addressed his host as follows:
            </p>
            <blockquote>
              “I’ve knowned you ’uns fer many a year in your stores in town, and
              never ’lowed they wus any fun in ye, but out here on the crick ye
              are jest like a lot of Mollyjoggers.”
            </blockquote>
            <p className="para">
              For those who are not familiar with the different species of the
              finny tribe found in the Ozarks streams, it will perhaps be
              interesting to know that there is a minnow inhabiting these
              waters—a horny-headed, spotted fellow, who is absolutely
              worthless, not even tempting the versatile appetite of gars and
              turtles when used as bait, and this fish is called by the natives
              the “mollyjogger.” What the old mountaineer said that evening
              struck home, and the name was adopted at once.
            </p>
            <p className="para">— John Dunckel, circa 1905</p>
          </div>
          <div className="container-image-fish">
            <img
              src="//cdn.shopify.com/s/files/1/0156/0327/files/fish-line-divider.png?v=1473192286"
              alt="fish"
            />
          </div>
          <div className="about-shopkeeper">
            <h1 className="shopkeeper-title">about the shopkeeper</h1>
            <p className="para">
              Mollyjogger founder, Rick Stagner, is a fourth generation
              shopkeeper. He was born, raised, and educated in the Queen City of
              the Ozarks—Springfield, Missouri. Rick inherited his passion for
              retail trade, the outdoors, and sporting tradition from his
              parents and ancestors.
            </p>
            <div className="grid-layout">
              <div className="image-cell-1">
                <img
                  src="https://cdn.shopify.com/s/files/1/0156/0327/files/Rick-and-mother.jpg?v=1473192566"
                  alt="mother"
                />
                <p className="image-desc">
                  Rick and his mother at Mollyjoggers Riverside Clubhouse, 1969.
                </p>
              </div>
              <div className="image-cell">
                <img
                  src="https://cdn.shopify.com/s/files/1/0156/0327/files/Rick-and-Keith.jpg?v=1473192612"
                  alt="orvis"
                />
                <p className="image-desc">
                  Rainbow trout fishing with lead Orvis instructor, Keith Oxby.
                </p>
              </div>
              <div className="image-cell-3">
                <img
                  src="https://cdn.shopify.com/s/files/1/0156/0327/files/Rick-Ed-and-Peter.jpg?v=1473192646"
                  alt="smileman"
                />
                <p className="image-desc">
                  2010 Mt. Rainier climb with world renowned RMI mountaineering
                  guides Ed Viesturs and Peter Whitaker.
                </p>
              </div>
              <div className="image-cell">
                <img
                  src="https://cdn.shopify.com/s/files/1/0156/0327/files/Rick-and-Ann.jpg?v=1473192682"
                  alt="smileman"
                />
                <p className="image-desc">
                  Rick and Ann Perinchief, SVP Eddie Bauer, LLC., Bellevue,
                  Washington. The image behind states, “Every great brand has a
                  soul.”
                </p>
              </div>
            </div>
          </div>
          <div className="cooporation">
            <h4 className="cooporation-title">as seen on</h4>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/01-MidwestLiving.png?v=1473194837"
                alt="midwest"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/02-MensJournal.png?v=1473194856"
                alt="mens"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/03-Uncrate.png?v=1473194872"
                alt="uncrate"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/04-Esquire.png?v=1473194886"
                alt="esquire"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/05-BuzzFeed.png?v=1473194902"
                alt="BuzzFeed"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/06-Huckberry.png?v=1473194919"
                alt="HurryBerry"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/07-Outside.png?765027274779505235"
                alt="outside"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/08-UrbanDaddy.png?v=1473194950"
                alt="urbandaddy"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/09-SouthernLiving.png?v=1473194966"
                alt="sounthernliving"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/10-TheChive.png?v=1473194983"
                alt="theChive"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/11-CountryLiving.png?v=1473195000"
                alt="countryliving"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/12-CoolHunting.png?v=1473195015"
                alt="coolhunting"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/13-Bespoke.png?v=1473195035"
                alt="bespoke"
              />
            </a>
            <a className="logo-coop" href="/#">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/14-UrbanOutfitters.png?v=1473195049"
                alt="urbanoutfitters"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
