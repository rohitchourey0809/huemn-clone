import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="midnight-blue text-white bg-brown py-4">
        <div className="container flex justify-between items-center">
          <div className="left">
            <div>© 2024 TheMealDB Proudly </div>
            <div>built in the UK</div>
          </div>
          <div className="flex flex-col item-center justify-center border-4 py-6 px-6">
            <div className="flex justify-center ">
              <center className="">Socials:</center>
              <a href="https://www.facebook.com/TheDataDB/">
                <img src="https://www.themealdb.com/images/facebook_icon.png" />
              </a>
              <a href="https://twitter.com/TheAudioDB">
                <img src="https://www.themealdb.com/images/twitter_icon.png" />
              </a>
              <a href="https://discord.com/invite/pFvgaXV">
                <img src="https://www.themealdb.com/images/discord_icon.png" />
              </a>
            </div>

            <div className="flex flex-row py-2 ">
              <a href="https://www.thecocktaildb.com" target="_blank">
                <img
                  src="https://www.themealdb.com/images/logo-tcdb.png"
                  alt="logo"
                />
              </a>
              <a href="http://www.theaudiodb.com" target="_blank">
                <img
                  src="https://www.themealdb.com/images/logo-tadb.png"
                  alt="logo"
                />
              </a>
              <a href="https://www.thesportsdb.com" target="_blank">
                <img
                  src="https://www.themealdb.com/images/logo-tsdb.png"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <div className="right">
            <ul className="flex gap-8 p-2">
              <li>
                <a href="/about.php">About</a>
              </li>
              <li>
                <a href="/faq.php">Faq</a>
              </li>
              <li>
                <a href="/contact.php">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
