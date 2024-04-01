//Header.js
import React, { useState, useEffect } from 'react';
require('./footer.css')

const Footer = () => {
  const [footerItems, setFooterItems] = useState([]);

  useEffect(() => {
    fetchFooterData();
  }, []);

  const fetchFooterData = async () => {
    try {
      const response = await fetch('/data/footer.json');
      const data = await response.json();
      if (data) {
        setFooterItems(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container-fluid with-footer">
      <div className='container'>
        <footer>
          <ul>
            <li>
              <div className='quicklinks'>
                <p>{footerItems.connectwithustext}</p>
                <input type="text" placeholder="Enter Email id" id="emailField" oninput="handleEmail()" />
                <ul className='social-icons'>
                  {footerItems?.socialmediaicons?.map((icon, index) => (
                    <li>
                      <a href={icon.iconLink}>
                        <img src={icon.iconPath} alt={`Social Icon ${index}`} key={index} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <div className='usefulLinks'>
                <p>{footerItems.usefulLinksText}</p>
                <ul>
                  {footerItems?.usefulLinks?.map((usefulLinks, index) => (
                    <li>
                      <a href='usefulLinks.usefullinkpath'>
                        {usefulLinks.usefullinktitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <div className='usefulLinks'>
                <p>{footerItems.productsText}</p>
                <ul>
                  {footerItems?.products?.map((productsLinks, index) => (
                    <li>
                      <a href='productsLinks.productlink'>
                        {productsLinks.producttitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;