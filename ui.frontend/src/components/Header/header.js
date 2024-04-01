//Header.js
import React, { useState, useEffect, Component } from 'react';
require('./header.css')

const Header = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const toggleMenu = () => {
    setisModalOpen(!isModalOpen);
  };

  const [headerItems, setHeaderItems] = useState([]);

  useEffect(() => {
    fetchHeaderData();
  }, []);

  const fetchHeaderData = async () => {
    try {
      const response = await fetch('/data/header.json');
      const data = await response.json();
      if (data) {
        setHeaderItems(data['jcr:content']['root']);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container-fluid with-header">
        <div className='container'>
          <header>
            <div className="logo-image">
            {/* {headerItems.map((item, index) => ( */}
              <img src="" alt="Logo" />
            {/* ))} */}
            </div>
            <div class="menu-bar" id="openModalBtn">
            <div class="menu-icon">
            {/* {headerItems.map((item, index) => ( */}
              <img src="" onClick={toggleMenu} alt="Logo" />
            {/* ))} */}
              <img src="images/close.png" alt="" class="close" />
            </div>
            </div>
            {/* {isModalOpen && ( */}
          <div id="modalMenu" class="modalMenu">
          <div class="modal-content">
            <span class="close" id="closeModalBtn">&times;</span>
            <div class="menu-container">
              <ul class="menu">
                <li class="grey">
                  <a href="#" class="icon-menu">
                    <img
                      src="images/crown.png"
                      alt=""
                      class="dropdown-icon"
                    />
                    <span>Exclusive at Vation</span>
                  </a>
                </li>
                <li class="grey">
                  <a href="#" class="icon-menu submenu">
                    <img
                      src="images/award.png"
                      alt=""
                      class="dropdown-icon"
                    />
                    <span>Top Brands</span>
                  </a>
                  <ul class="nested-menu1">
                    <li><a href="#">All Top Brands</a></li>
                    <li><a href="">Amazon</a></li>
                    <li><a href="">Atomberg</a></li>
                    <li><a href="">Apple</a></li>
                    <li><a href="">Bajaj</a></li>
                    <li><a href="">Blue Star</a></li>
                    <li><a href="">Boat</a></li>
                    <li><a href="">Borsch</a></li>
                    <li><a href="">Bose</a></li>
                    <li><a href="">Canon</a></li>
                    <li><a href="">Vation</a></li>
                    <li><a href="">Canon</a></li>
                  </ul>
                </li>
                <li class="grey">
                  <a href="#" class="icon-menu">
                    <img
                      src="images/store.png"
                      alt=""
                      class="dropdown-icon"
                    />
                    <span>Vation Store Locator</span>
                  </a>
                </li>

                <li class="grey">
                  <a href="#" class="icon-menu">
                    <img
                      src="images/gift-card.png"
                      alt=""
                      class="dropdown-icon"
                    />
                    <span>Gift Card</span>
                  </a>
                </li>
                <li class="disabled">
                  <a href="#"> Shop by Category </a>
                </li>
                <li>
                  <a href="#" class="submenu2"> Televisions & Accessories </a>

                  <ul class="nested-menu1">
                    <li><a href="">All Televisions & Accessories</a></li>

                    <li>
                      <a href="#" class="submenu2">LED TVs</a>
                      <ul class="nested-menu2">
                        <li><a href="#">All LED TVs</a></li>
                        <li><a href="#">QLED TVs</a></li>
                        <li><a href="">OLED TVs</a></li>
                        <li><a href="">4K Ultra HD TVs</a></li>
                        <li><a href="">8K Ultra HD TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Full HD TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                        <li><a href="">Smart TVs</a></li>
                      </ul>
                    </li>
                    <li><a href="">TV Accessories</a></li>
                    <li><a href="">Media Streaming Devices</a></li>
                    <li><a href="">Projectors</a></li>
                    <li><a href="">Projectors</a></li>

                    <li><a href="">Projectors</a></li>

                    <li><a href="">Projectors</a></li>

                    <li><a href="">Projectors</a></li>

                    <li><a href="">Projectors</a></li>

                    <li><a href="">Projectors</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"> Home Appliances </a>
                </li>
                <li>
                  <a href="#"> Phones & Wearables </a>
                </li>
                <li>
                  <a href="#"> Computers & Tablets </a>
                </li>
                <li>
                  <a href="#">Kitchen Appliances</a>
                </li>
                <li>
                  <a href="#">Audio & Video</a>
                </li>
                <li>
                  <a href="#">Health & Fitness</a>
                </li>
                <li>
                  <a href="#">Grooming & Personal Care</a>
                </li>
                <li>
                  <a href="#">Cameras & Accessories</a>
                </li>
                <li>
                  <a href="#">Smart Devices</a>
                </li>
                <li>
                  <a href="#">Gaming</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Zipcare</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* )} */}
            <div class="search">
            <input type="search" placeholder="What are you looking for?" id="inputField" oninput="handleInput()"/>
            <i class="fa fa-search" id="icon"></i>
          </div>

          <div class="cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
          </header>
        </div>
    </div>
  );
};

export default Header;