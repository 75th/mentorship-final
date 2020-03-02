import React from "react"
import containerStyles from "./css/styles.scss"
const Container = ({ children }) => (
  <div className="Collection object not-home">
    <a href="#main-content" className="visually-hidden focusable">
      Skip to main content
    </a>
    <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
      <header role="banner">
        <div className="topbar">
          <div className="hours">
            <p>We are closed now. 8:30 am – 5:00 pm</p>
          </div>
          <div className="directions">
            <p>
              <a href="https://www.google.com/maps/dir//Osage+Nation+Museum,+819+Grandview+Ave,+Pawhuska,+OK+74056"
                target="_blank" title="Get Directions Here">
                <span className="fa fa-map-marker"></span>
                Directions
              </a>
            </p>
          </div>
          <div className="call">
            <p><a href="tel:9182475441" title="Call Us"><span className="fa fa-phone"></span> (918) 247-5441</a></p>
          </div>
          <div className="help">
            <p><a href="/visit/contact" title="We can help!"><span className="fa fa-question"></span> Need Help?</a></p>
          </div>
        </div>
        <div id="mainnav" className="clearfix">
          <div id="logobox">
            <a id="logo" href="/" title="Home" rel="home">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.86 65.02">
                <g id="hlogo" data-name="Layer 2">
                  <g>
                    <path className="dust"
                      d="M21,62.4a1.06,1.06,0,0,0-1.35.54,1,1,0,0,0,.5,1.31,1.06,1.06,0,0,0,1.35-.54A1,1,0,0,0,21,62.4" />
                    <path className="dust"
                      d="M64.07,21.49a1.05,1.05,0,0,0,0-1.45,1,1,0,0,0-1.4,0,1.05,1.05,0,0,0,0,1.45,1,1,0,0,0,1.4,0" />
                    <path className="dust"
                      d="M19.07,50.51a1.05,1.05,0,0,0-1.45,0,1,1,0,0,0,0,1.4,1.05,1.05,0,0,0,1.45,0,1,1,0,0,0,0-1.4" />
                    <path className="dust"
                      d="M21.93,37.67a1,1,0,0,0-1.45,0,1,1,0,0,0,0,1.4,1.05,1.05,0,0,0,1.45,0,1,1,0,0,0,0-1.4" />
                    <path className="dust"
                      d="M28.59,27.17a1.05,1.05,0,0,0-1.45,0,1,1,0,0,0,0,1.4,1.05,1.05,0,0,0,1.45,0,1,1,0,0,0,0-1.4" />
                    <path className="dust"
                      d="M39.33,20.28a1,1,0,0,0-1.45,0,1,1,0,0,0,0,1.4,1,1,0,0,0,1.45,0,1,1,0,0,0,0-1.4" />
                    <path className="dust"
                      d="M51.64,17.54a1,1,0,0,0-1.45,0,1,1,0,0,0,0,1.4,1.05,1.05,0,0,0,1.45,0,1,1,0,0,0,0-1.4" />
                    <path className="dust"
                      d="M78.15,19.09c-2.47-1-4.46,1-6.27,2.44.82-2.15,1.77-4.82.1-6.75,2.15,1.12,4.26-1,6.38-2.63-1,2.62-2,4.79-.21,6.94" />
                    <path className="dust"
                      d="M63.1,11c-2.67,0-3.75,2.61-4.87,4.65-.06-2.3-.2-5.13-2.48-6.28,2.42.21,3.58-2.51,4.9-4.86.08,2.79,0,5.19,2.45,6.49" />
                    <path className="dust"
                      d="M46.9,9.4c-2.45,1.07-2.43,3.87-2.65,6.19-1-2.09-2.2-4.64-4.75-4.8,2.3-.75,2.29-3.71,2.58-6.4,1.18,2.54,2,4.78,4.82,5" />
                    <path className="dust"
                      d="M31.86,14.12C30,16,31,18.61,31.69,20.85c-1.66-1.59-3.76-3.5-6.19-2.71,1.87-1.55.77-4.3,0-6.9,2,1.93,3.65,3.7,6.32,2.88" />
                    <path className="dust"
                      d="M18.88,24.49c-1,2.48,1,4.46,2.45,6.27-2.15-.82-4.82-1.76-6.75-.09,1.12-2.15-1-4.26-2.64-6.37,2.62,1,4.8,2,6.94.19" />
                    <path className="dust"
                      d="M11.35,38.36c0,2.67,2.56,3.78,4.59,4.92-2.3,0-5.13.14-6.31,2.41.24-2.41-2.47-3.6-4.81-4.95,2.8-.05,5.19.08,6.53-2.38" />
                    <path className="dust"
                      d="M9.28,55.1c1,2.46,3.84,2.47,6.16,2.72-2.1.93-4.67,2.15-4.86,4.69-.72-2.31-3.68-2.34-6.37-2.66,2.56-1.15,4.81-2,5.07-4.75" />
                    <path className="dust" d="M45.9.36c4.16,4.29,9.24,4.54,13.62.41A43.59,43.59,0,0,0,45.9.36" />
                    <path className="dust" d="M27.56,6.13C33,8.58,37.82,6.94,40.38,1.49A43.33,43.33,0,0,0,27.56,6.13" />
                    <path className="dust" d="M11.83,18.83c6,.15,9.77-3.23,10-9.25a43.43,43.43,0,0,0-10,9.25" />
                    <path className="dust" d="M2.69,35.75c5.6-2.07,7.88-6.61,5.88-12.29A43.26,43.26,0,0,0,2.69,35.75" />
                    <path className="dust" d="M65.85,2.11c2.13,5.57,6.7,7.8,12.36,5.74A43.23,43.23,0,0,0,65.85,2.11" />
                    <path className="dust" d="M.3,56.09C4.64,52,5,46.92.88,42.48A43.44,43.44,0,0,0,.3,56.09" />
                    <path className="letter"
                      d="M32.28,31.22a5.48,5.48,0,0,1,4,1.6,5.56,5.56,0,0,1-3.94,9.51,5.38,5.38,0,0,1-4-1.61,5.28,5.28,0,0,1-1.62-3.9A5.66,5.66,0,0,1,27.5,34a5.57,5.57,0,0,1,2-2,5.43,5.43,0,0,1,2.76-.73m0,1a4.53,4.53,0,0,0-3.87,2.26,4.62,4.62,0,0,0-.59,2.31,4.46,4.46,0,0,0,4.46,4.49,4.53,4.53,0,0,0,2.29-.6,4.35,4.35,0,0,0,1.63-1.64,4.6,4.6,0,0,0,.59-2.3,4.5,4.5,0,0,0-.59-2.28,4.38,4.38,0,0,0-1.65-1.63,4.47,4.47,0,0,0-2.27-.61" />
                    <path className="letter"
                      d="M39,40.1l.9-.54c.64,1.16,1.37,1.75,2.2,1.75a2.15,2.15,0,0,0,1-.25,1.77,1.77,0,0,0,.71-.67,1.66,1.66,0,0,0,.25-.88,1.8,1.8,0,0,0-.36-1,8.83,8.83,0,0,0-1.82-1.7,8.69,8.69,0,0,1-1.64-1.44,2.62,2.62,0,0,1-.57-1.62,2.44,2.44,0,0,1,1.27-2.16,2.82,2.82,0,0,1,2.7.05A4.6,4.6,0,0,1,45,33l-.86.66a4.24,4.24,0,0,0-1-1,1.74,1.74,0,0,0-.92-.25,1.48,1.48,0,0,0-1.05.39,1.28,1.28,0,0,0-.4,1,1.66,1.66,0,0,0,.14.66,2.37,2.37,0,0,0,.53.71c.14.13.59.49,1.37,1.06a7.78,7.78,0,0,1,1.88,1.8,2.93,2.93,0,0,1,.51,1.59,2.73,2.73,0,0,1-.87,2,3,3,0,0,1-2.13.84,3.14,3.14,0,0,1-1.75-.51A4.84,4.84,0,0,1,39,40.1" />
                    <path className="letter"
                      d="M51.72,31.48l4.94,10.59H55.51l-1.66-3.48H49.29l-1.65,3.48H46.46l5-10.59Zm-.14,2.25-1.81,3.83h3.62Z" />
                    <path className="letter"
                      d="M68.51,33.26l-.82.78a6.31,6.31,0,0,0-1.94-1.32,5.21,5.21,0,0,0-2-.45,4.93,4.93,0,0,0-2.38.61,4.42,4.42,0,0,0-1.74,1.66,4.3,4.3,0,0,0,0,4.48,4.57,4.57,0,0,0,1.77,1.69,5.13,5.13,0,0,0,2.48.62,4.24,4.24,0,0,0,2.76-.92A3.63,3.63,0,0,0,68,38H64.58V37h4.56a5.32,5.32,0,0,1-1.46,3.9,5.22,5.22,0,0,1-3.86,1.44,5.78,5.78,0,0,1-4.65-2,5.29,5.29,0,0,1-1.32-3.56,5.43,5.43,0,0,1,.76-2.8,5.29,5.29,0,0,1,2.07-2,6,6,0,0,1,3-.73,6.75,6.75,0,0,1,2.54.48,7.54,7.54,0,0,1,2.31,1.56" />
                    <polygon className="letter"
                      points="71.16 31.48 77.23 31.48 77.23 32.52 72.22 32.52 72.22 35.84 77.19 35.84 77.19 36.87 72.22 36.87 72.22 41.03 77.19 41.03 77.19 42.07 71.16 42.07 71.16 31.48" />
                    <polygon className="letter"
                      points="83.15 42.07 83.15 31.48 83.38 31.48 90.43 39.6 90.43 31.48 91.47 31.48 91.47 42.07 91.23 42.07 84.24 34.05 84.24 42.07 83.15 42.07" />
                    <path className="letter"
                      d="M98.37,31.48l4.94,10.59h-1.14l-1.67-3.48H95.94l-1.65,3.48H93.11l5-10.59Zm-.13,2.25-1.81,3.83h3.62Z" />
                    <polygon className="letter"
                      points="102.71 32.52 102.71 31.48 108.51 31.48 108.51 32.52 106.15 32.52 106.15 42.07 105.07 42.07 105.07 32.52 102.71 32.52" />
                    <rect className="letter" x="109.89" y="31.48" width="1.06" height="10.59" />
                    <path className="letter"
                      d="M118.41,31.22a5.49,5.49,0,0,1,4,1.6,5.56,5.56,0,0,1-3.94,9.51,5.41,5.41,0,0,1-4-1.61,5.28,5.28,0,0,1-1.62-3.9,5.67,5.67,0,0,1,.74-2.83,5.42,5.42,0,0,1,4.77-2.77m0,1a4.35,4.35,0,0,0-2.23.61,4.4,4.4,0,0,0-1.64,1.65,4.51,4.51,0,0,0-.59,2.31,4.46,4.46,0,0,0,4.46,4.49,4.52,4.52,0,0,0,2.28-.6,4.31,4.31,0,0,0,1.64-1.64,4.6,4.6,0,0,0,.59-2.3,4.5,4.5,0,0,0-.59-2.28,4.34,4.34,0,0,0-1.66-1.63,4.43,4.43,0,0,0-2.26-.61" />
                    <polygon className="letter"
                      points="126.19 42.07 126.19 31.48 126.42 31.48 133.47 39.6 133.47 31.48 134.51 31.48 134.51 42.07 134.28 42.07 127.28 34.05 127.28 42.07 126.19 42.07" />
                    <polygon className="letter"
                      points="26.56 64.53 29.35 45.09 29.66 45.09 37.57 61.05 45.4 45.09 45.71 45.09 48.51 64.53 46.61 64.53 44.68 50.63 37.81 64.53 37.31 64.53 30.35 50.52 28.44 64.53 26.56 64.53" />
                    <path className="letter"
                      d="M52.4,45.09h1.94V56.83a24.93,24.93,0,0,0,.08,2.6,4.3,4.3,0,0,0,.68,1.93,4,4,0,0,0,1.62,1.29,5.07,5.07,0,0,0,2.21.52,4.26,4.26,0,0,0,1.85-.41,4.06,4.06,0,0,0,1.48-1.13,4.7,4.7,0,0,0,.88-1.76,14.91,14.91,0,0,0,.19-3V45.09h2V56.83A14.24,14.24,0,0,1,64.77,61a5.7,5.7,0,0,1-2,2.79A5.77,5.77,0,0,1,59,65a7.1,7.1,0,0,1-4-1.12,5.41,5.41,0,0,1-2.24-3,15.68,15.68,0,0,1-.36-4.1Z" />
                    <path className="letter"
                      d="M68.05,60.91l1.66-1q1.74,3.21,4,3.21a3.94,3.94,0,0,0,1.84-.45,3.29,3.29,0,0,0,1.31-1.22,3.21,3.21,0,0,0,.45-1.63,3.32,3.32,0,0,0-.66-1.92,16,16,0,0,0-3.34-3.12,16.81,16.81,0,0,1-3-2.65,4.87,4.87,0,0,1-1-3,4.58,4.58,0,0,1,.61-2.31A4.38,4.38,0,0,1,71.6,45.2a5,5,0,0,1,2.4-.6,5.18,5.18,0,0,1,2.58.68,9,9,0,0,1,2.53,2.51L77.52,49a7.55,7.55,0,0,0-1.87-1.92A3.3,3.3,0,0,0,74,46.61a2.69,2.69,0,0,0-1.92.71,2.35,2.35,0,0,0-.75,1.76,2.9,2.9,0,0,0,.27,1.23,4.53,4.53,0,0,0,1,1.3c.26.24,1.1.89,2.52,1.94a14.19,14.19,0,0,1,3.46,3.32,5.31,5.31,0,0,1,.94,2.92,5,5,0,0,1-1.61,3.67A5.39,5.39,0,0,1,73.93,65a5.73,5.73,0,0,1-3.22-.94,8.77,8.77,0,0,1-2.66-3.17" />
                    <polygon className="letter"
                      points="83.56 45.09 94.71 45.09 94.71 46.99 85.51 46.99 85.51 53.09 94.63 53.09 94.63 54.99 85.51 54.99 85.51 62.63 94.63 62.63 94.63 64.53 83.56 64.53 83.56 45.09" />
                    <path className="letter"
                      d="M98.14,45.09h1.94V56.83a24.93,24.93,0,0,0,.08,2.6,4.42,4.42,0,0,0,.67,1.93,4,4,0,0,0,1.63,1.29,5.07,5.07,0,0,0,2.21.52,4.26,4.26,0,0,0,1.85-.41A4.15,4.15,0,0,0,108,61.63a4.54,4.54,0,0,0,.87-1.76,14.67,14.67,0,0,0,.2-3V45.09H111V56.83A14.24,14.24,0,0,1,110.5,61a5.62,5.62,0,0,1-2,2.79,5.8,5.8,0,0,1-3.7,1.19,7.06,7.06,0,0,1-4-1.12,5.42,5.42,0,0,1-2.25-3,15.8,15.8,0,0,1-.35-4.1Z" />
                    <polygon className="letter"
                      points="114.92 64.53 117.7 45.09 118.02 45.09 125.92 61.05 133.75 45.09 134.06 45.09 136.86 64.53 134.96 64.53 133.04 50.63 126.16 64.53 125.66 64.53 118.7 50.52 116.79 64.53 114.92 64.53" />
                  </g>
                </g>
              </svg>
            </a>
            <nav role="navigation" aria-labelledby="block-osage-main-menu-menu" id="block-osage-main-menu">
              <h2 className="visually-hidden" id="block-osage-main-menu-menu">Main navigation</h2>
              <ul className="bignav">
                <li className="menu-item-23f78e95 expanded">
                  <a href="/visit" data-drupal-link-system-path="node/2">Visit</a>
                  <ul className="subnav">
                    <li className="menu-item-73841afa">
                      <a href="/visit" data-drupal-link-system-path="node/2">Plan Your Visit</a>
                    </li>
                    <li className="menu-item-334c8dd6">
                      <a href="/visit/schools" data-drupal-link-system-path="node/6">For Schools and Teachers</a>
                    </li>
                    <li className="menu-item-833bc53e">
                      <a href="/visit/families" data-drupal-link-system-path="node/7">For Kids and Families</a>
                    </li>
                    <li className="menu-item-f96d98e4">
                      <a href="/visit/about" data-drupal-link-system-path="node/9">About the Museum</a>
                    </li>
                    <li className="menu-item-158b2610">
                      <a href="/visit/discover" data-drupal-link-system-path="node/10">Discover the Osage Nation</a>
                    </li>
                    <li className="menu-item-77138f15">
                      <a href="/visit/staff" data-drupal-link-system-path="node/42">Meet the Staff</a>
                    </li>
                    <li className="menu-item-ed33f02d">
                      <a href="/visit/news" data-drupal-link-system-path="node/38">News &amp; Press</a>
                    </li>
                    <li className="menu-item-463a1a1f">
                      <a href="/visit/contact" data-drupal-link-system-path="node/12">Contact Us</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-3a9b75f4 expanded">
                  <a href="/exhibits" data-drupal-link-system-path="node/3">Exhibits &amp; Events</a>
                  <ul className="subnav">
                    <li className="menu-item-83138e6e">
                      <a href="/exhibits" data-drupal-link-system-path="node/3">Exhibits &amp; Events Overview</a>
                    </li>
                    <li className="menu-item-fb6d7d2c">
                      <a href="/exhibits/new" data-drupal-link-system-path="node/39">Current &amp; Upcoming Exhibits</a>
                    </li>
                    <li className="menu-item-e750bc2f">
                      <a href="/exhibits/calendar" data-drupal-link-system-path="node/41">Events Calendar</a>
                    </li>
                    <li className="menu-item-e0ba0682">
                      <a href="/exhibits/past" data-drupal-link-system-path="node/40">Past Exhibits</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-d13c1db7 expanded">
                  <a href="/artists" data-drupal-link-system-path="node/43">Artists</a>
                  <ul className="subnav">
                    <li className="menu-item-7cb971d6">
                      <a href="/artists" data-drupal-link-system-path="node/43">Artists Overview</a>
                    </li>
                    <li className="menu-item-5555f4cb">
                      <a href="/artists/featured" data-drupal-link-system-path="node/24">Featured ONM Artist</a>
                    </li>
                    <li className="menu-item-861b99bb">
                      <a href="/artists" data-drupal-link-system-path="node/43">All Artists</a>
                    </li>
                    <li className="menu-item-3b009b61">
                      <a href="/artists/register" data-drupal-link-system-path="node/18">Osage Artist Registry</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-e8ad19ed">
                  <a href="/collection" data-drupal-link-system-path="node/353">Collection</a>
                </li>
                <li className="menu-item-4b7d9f19 expanded">
                  <a href="/education" data-drupal-link-system-path="node/13">Education</a>
                  <ul className="subnav">
                    <li className="menu-item-786e8649">
                      <a href="/education" data-drupal-link-system-path="node/13">Education Overview</a>
                    </li>
                    <li className="menu-item-8ef543e2">
                      <a href="/education/blog" data-drupal-link-system-path="node/37">Blog</a>
                    </li>
                    <li className="menu-item-e98d3090">
                      <a href="/education/questions" data-drupal-link-system-path="node/61">Your Questions</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-67751bef expanded">
                  <a href="/support" data-drupal-link-system-path="node/14">Support Us</a>
                  <ul className="subnav">
                    <li className="menu-item-b87b9441">
                      <a href="/support" data-drupal-link-system-path="node/14">Support Us Overview</a>
                    </li>
                    <li className="menu-item-da21b320">
                      <a href="/support/donate" data-drupal-link-system-path="node/28">Donate</a>
                    </li>
                    <li className="menu-item-d0b9421d">
                      <a href="/support/stories" data-drupal-link-system-path="node/29">Donor Stories</a>
                    </li>
                    <li className="menu-item-dc54a3dd">
                      <a href="/support/volunteer" data-drupal-link-system-path="node/30">Volunteer</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div id="extra-menus">
              <div className="extra-menu-desktop-button"><span></span><span></span><span></span></div>
              <div className="extra-menus-wrapper clearfix">
                <div className="hoursbox extra-menu">
                  <span className="title"><span data-icon="fa-map-marker" className="fa fa-map-marker"></span> <span>Hours &amp;
                      Location</span> <span className="fa caret fa-caret-right"></span> </span>
                  <div>
                    <h2>We’re Closed Now</h2>
                    <p><strong>Today’s Hours:</strong> 8:30 am – 5:00 pm<br /><strong>Tomorrow’s Hours:</strong> 8:30 am –
                      5:00 pm</p>
                      <p>
                        819 Grandview Ave.<br />
                        Pawhuska, OK 74056<br />
                        918-287-5441
                      </p>
                      <a target="_blank"
                        href="https://www.google.com/maps/dir/34.758498,-92.399238/osage+museum/@35.5446292,-96.583838,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x87b733c8a336dc87:0xc1cc2fe5eeb841af!2m2!1d-96.340051!2d36.667798"
                        className="button">Get Directions <span className="fa fa-map-marker"></span></a>
                  </div>
                </div>
                <div className="calendarbox extra-menu">
                  <span className="title"><span data-icon="fa-calendar" className="fa fa-calendar"></span> <span>Calendar</span>
                    <span className="fa caret fa-caret-right"></span> </span>
                  <div>
                    <p><strong>See What's Happening</strong></p>
                    <div>
                      <div
                        className="view-events-extra-menu js-view-dom-id-13aa47864751fd18a165c38a2a8fcea32c1cc9d6c84a535bd1912dd015683e6d event-calendar">
                        <div className="list views-row">
                          <article data-history-node-id="49" role="article"
                            about="/events/calendar/current-new-exhibit-example" className="event--extra-menu">
                            <a href="/events/calendar/current-new-exhibit-example">
                              <time className="event__date">
                                <strong>Dec</strong>23
                              </time>
                              <div className="event__info">
                                <div className="event__category">
                                  <i className="fas fa-tag"></i>
                                  Open House
                                </div>
                                <h3 className="event__title">
                                  <span>Current / New Exhibit Example</span>
                                </h3>
                              </div>
                              <div className="event__image">
                                <img src="/sites/default/files/2019-03/K29.jpg" alt="adfsf" typeof="foaf:Image" />
                              </div>
                            </a>
                          </article>
                        </div>
                        <div className="list views-row">
                          <article data-history-node-id="48" role="article" about="/events/calendar/past-exhibit-example"
                            className="event--extra-menu">
                            <a href="/events/calendar/past-exhibit-example">
                              <time className="event__date">
                                <strong>Oct</strong>01
                              </time>
                              <div className="event__info">
                                <div className="event__category">
                                  <i className="fas fa-tag"></i>
                                  Open House
                                </div>
                                <h3 className="event__title">
                                  <span>Past Exhibit Example</span>
                                </h3>
                              </div>
                              <div className="event__image">
                                <img src="/sites/default/files/2019-03/moreevents.png" alt="Test" typeof="foaf:Image" />
                              </div>
                            </a>
                          </article>
                        </div>
                        <div className="list views-row">
                          <article data-history-node-id="15" role="article" about="/events/calendar/event-example"
                            className="event--extra-menu">
                            <a href="/events/calendar/event-example">
                              <time className="event__date">
                                <strong>Nov</strong>01
                              </time>
                              <div className="event__info">
                                <div className="event__category">
                                  <i className="fas fa-tag"></i>
                                  Open House
                                </div>
                                <h3 className="event__title">
                                  <span>Event Example</span>
                                </h3>
                              </div>
                              <div className="event__image">
                                <img src="/sites/default/files/2019-01/Asset%203.png" alt="Poster" typeof="foaf:Image" />
                              </div>
                            </a>
                          </article>
                        </div>
                        <div className="view-footer">
                          <div>
                            <img src="/sites/default/files/styles/medium/public/2019-03/K29.jpg?itok=wGw8pzRL" alt="adfsf"
                              typeof="Image" />
                            <a href="/exhibits/calendar">View All Events</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="newsbox extra-menu">
                  <span className="title"><span data-icon="fa-newspaper-o" className="fa fa-newspaper-o"></span> <span>News &amp;
                      Blog</span> <span className="fa caret fa-caret-right"></span> </span>
                  <div>
                    <p><strong>See What's New</strong></p>
                    <div>
                      <div
                        className="view-news-extra-menu js-view-dom-id-8896d0f5250f90dc1323a9bb8d9e8d36a3c2e302366dba2c45cd42ef2c48d605 news-blog">
                        <div className="views-rows">
                          <div className="list views-row">
                            <article data-history-node-id="44" role="article" about="/education/blog/test-blog-post"
                              className="story--extra-menu">
                              <a href="/education/blog/test-blog-post">
                                <div className="story__info">
                                  <h3 className="story__title">
                                    <span>Test Blog Post</span>
                                  </h3>
                                  <time className="story__date">
                                    March 13, 2019
                                  </time>
                                </div>
                                <div className="story__image">
                                  <img
                                    src="/sites/default/files/styles/large/public/2019-03/anniversary-birthday-blue-264787_0.jpg?itok=xOTKCRfe"
                                    alt="Test" typeof="foaf:Image" />
                                </div>
                              </a>
                            </article>
                          </div>
                          <div className="list views-row">
                            <article data-history-node-id="50" role="article"
                              about="/education/blog/did-you-know-osage-murders" className="story--extra-menu">
                              <a href="/education/blog/did-you-know-osage-murders">
                                <div className="story__info">
                                  <h3 className="story__title">
                                    <span>Did you know? Osage Murders</span>
                                  </h3>
                                  <time className="story__date">
                                    March 28, 2019
                                  </time>
                                </div>
                                <div className="story__image">
                                  <img src="/sites/default/files/styles/large/public/2019-03/Bill_Hale.jpg?itok=J3GvKEJR"
                                    alt="Bill Hale" typeof="foaf:Image" />
                                </div>
                              </a>
                            </article>
                          </div>
                          <div className="list views-row">
                            <article data-history-node-id="51" role="article"
                              about="/education/blog/osage-history-people-stars-origin-story" className="story--extra-menu">
                              <a href="/education/blog/osage-history-people-stars-origin-story">
                                <div className="story__info">
                                  <h3 className="story__title">
                                    <span>Osage History: People from the Stars; Origin Story</span>
                                  </h3>
                                  <time className="story__date">
                                    March 28, 2019
                                  </time>
                                </div>
                                <div className="story__image">
                                  <img
                                    src="/sites/default/files/styles/large/public/2019-03/Mural%201%20It%20has%20been%20said%20in%20ths%20Lodge.jpg?itok=RHV3SpEZ"
                                    alt="Mural" typeof="foaf:Image" />
                                </div>
                              </a>
                            </article>
                          </div>
                        </div>
                        <div className="view-footer">
                          <div><a href="/visit/news">View All News</a>
                            <div><a href="/education/blog">View All Blogs</a>
                              <a href="/education/blog/test-blog-post">
                                <img
                                  src="/sites/default/files/styles/medium/public/2019-03/anniversary-birthday-blue-264787_0.jpg?itok=x7LqJ-mx"
                                  alt="Test" typeof="Image" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="searchbox extra-menu">
                  <span className="title"><span data-icon="fa-search" className="fa fa-search"></span> <span>Search</span> <span
                      className="fa caret fa-caret-right"></span> </span>
                  <div>
                    <p><strong>Search the Site</strong></p>
                    <form action="/search/node" method="get" id="search-block-form" accept-charset="UTF-8">
                      <div
                        className="js-form-item form-item js-form-type-search form-item-keys js-form-item-keys form-no-label">
                        <label for="edit-keys" className="visually-hidden">Search</label>
                        <input title="Enter the terms you wish to search for." data-drupal-selector="edit-keys"
                          type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128"
                          className="form-search" />
                      </div>
                      <div data-drupal-selector="edit-actions" className="form-actions js-form-wrapper form-wrapper"
                        id="edit-actions">
                        <input data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Search"
                          className="button js-form-submit form-submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-menu-mobile-button"><span className="fa fa-bars"></span></div>
          </div>
        </div>
      </header>
      <div className="page-content">
        <div className="messages">
          <div data-drupal-messages-fallback className="hidden"></div>
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
      <div className="footer-wrap">
        <section id="support">
          <div className="container">
            <h2>The Osage Nation Museum Thrives When Our Constituents and Visitors <strong>Get Involved</strong></h2>
            <a className="button" href="/support/donate" title="Donate Now">Support Us</a>
            <hr />
          </div>
        </section>
        <footer>
          <div className="container footer-logo grid">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.86 65.02">
                <g id="flogo" data-name="Layer 2">
                  <g>
                    <path className="dust"
                      d="M21,62.4a1.06,1.06,0,0,0-1.35.54,1,1,0,0,0,.5,1.31,1.06,1.06,0,0,0,1.35-.54A1,1,0,0,0,21,62.4" />
                    <path className="dust"
                      d="M64.07,21.49a1.05,1.05,0,0,0,0-1.45,1,1,0,0,0-1.4,0,1.05,1.05,0,0,0,0,1.45,1,1,0,0,0,1.4,0" />
                    <path className="dust"
                      d="M19.07,50.51a1.05,1.05,0,0,0-1.45,0,1,1,0,0,0,0,1.4,1.05,1.05,0,0,0,1.45,0,1,1,0,0,0,0-1.4" />
                    <path className="dust"
                      d="M21.93,37.67a1,1,0,0,0-1.45,0,1,1,0,0,0,0,1.4,1.05,1.05,0,0,0,1.45,0,1,1,0,0,0,0-1.4" />
                    <path className="dust"
                      d="M28.59,27.17a1.05,1.05,0,0,0-1.45,0,1,1,0,0,0,0,1.4,1.05,1.05,0,0,0,1.45,0,1,1,0,0,0,0-1.4" />
                    <path className="dust"
                      d="M39.33,20.28a1,1,0,0,0-1.45,0,1,1,0,0,0,0,1.4,1,1,0,0,0,1.45,0,1,1,0,0,0,0-1.4" />
                    <path className="dust"
                      d="M51.64,17.54a1,1,0,0,0-1.45,0,1,1,0,0,0,0,1.4,1.05,1.05,0,0,0,1.45,0,1,1,0,0,0,0-1.4" />
                    <path className="dust"
                      d="M78.15,19.09c-2.47-1-4.46,1-6.27,2.44.82-2.15,1.77-4.82.1-6.75,2.15,1.12,4.26-1,6.38-2.63-1,2.62-2,4.79-.21,6.94" />
                    <path className="dust"
                      d="M63.1,11c-2.67,0-3.75,2.61-4.87,4.65-.06-2.3-.2-5.13-2.48-6.28,2.42.21,3.58-2.51,4.9-4.86.08,2.79,0,5.19,2.45,6.49" />
                    <path className="dust"
                      d="M46.9,9.4c-2.45,1.07-2.43,3.87-2.65,6.19-1-2.09-2.2-4.64-4.75-4.8,2.3-.75,2.29-3.71,2.58-6.4,1.18,2.54,2,4.78,4.82,5" />
                    <path className="dust"
                      d="M31.86,14.12C30,16,31,18.61,31.69,20.85c-1.66-1.59-3.76-3.5-6.19-2.71,1.87-1.55.77-4.3,0-6.9,2,1.93,3.65,3.7,6.32,2.88" />
                    <path className="dust"
                      d="M18.88,24.49c-1,2.48,1,4.46,2.45,6.27-2.15-.82-4.82-1.76-6.75-.09,1.12-2.15-1-4.26-2.64-6.37,2.62,1,4.8,2,6.94.19" />
                    <path className="dust"
                      d="M11.35,38.36c0,2.67,2.56,3.78,4.59,4.92-2.3,0-5.13.14-6.31,2.41.24-2.41-2.47-3.6-4.81-4.95,2.8-.05,5.19.08,6.53-2.38" />
                    <path className="dust"
                      d="M9.28,55.1c1,2.46,3.84,2.47,6.16,2.72-2.1.93-4.67,2.15-4.86,4.69-.72-2.31-3.68-2.34-6.37-2.66,2.56-1.15,4.81-2,5.07-4.75" />
                    <path className="dust" d="M45.9.36c4.16,4.29,9.24,4.54,13.62.41A43.59,43.59,0,0,0,45.9.36" />
                    <path className="dust" d="M27.56,6.13C33,8.58,37.82,6.94,40.38,1.49A43.33,43.33,0,0,0,27.56,6.13" />
                    <path className="dust" d="M11.83,18.83c6,.15,9.77-3.23,10-9.25a43.43,43.43,0,0,0-10,9.25" />
                    <path className="dust" d="M2.69,35.75c5.6-2.07,7.88-6.61,5.88-12.29A43.26,43.26,0,0,0,2.69,35.75" />
                    <path className="dust" d="M65.85,2.11c2.13,5.57,6.7,7.8,12.36,5.74A43.23,43.23,0,0,0,65.85,2.11" />
                    <path className="dust" d="M.3,56.09C4.64,52,5,46.92.88,42.48A43.44,43.44,0,0,0,.3,56.09" />
                    <path className="letter"
                      d="M32.28,31.22a5.48,5.48,0,0,1,4,1.6,5.56,5.56,0,0,1-3.94,9.51,5.38,5.38,0,0,1-4-1.61,5.28,5.28,0,0,1-1.62-3.9A5.66,5.66,0,0,1,27.5,34a5.57,5.57,0,0,1,2-2,5.43,5.43,0,0,1,2.76-.73m0,1a4.53,4.53,0,0,0-3.87,2.26,4.62,4.62,0,0,0-.59,2.31,4.46,4.46,0,0,0,4.46,4.49,4.53,4.53,0,0,0,2.29-.6,4.35,4.35,0,0,0,1.63-1.64,4.6,4.6,0,0,0,.59-2.3,4.5,4.5,0,0,0-.59-2.28,4.38,4.38,0,0,0-1.65-1.63,4.47,4.47,0,0,0-2.27-.61" />
                    <path className="letter"
                      d="M39,40.1l.9-.54c.64,1.16,1.37,1.75,2.2,1.75a2.15,2.15,0,0,0,1-.25,1.77,1.77,0,0,0,.71-.67,1.66,1.66,0,0,0,.25-.88,1.8,1.8,0,0,0-.36-1,8.83,8.83,0,0,0-1.82-1.7,8.69,8.69,0,0,1-1.64-1.44,2.62,2.62,0,0,1-.57-1.62,2.44,2.44,0,0,1,1.27-2.16,2.82,2.82,0,0,1,2.7.05A4.6,4.6,0,0,1,45,33l-.86.66a4.24,4.24,0,0,0-1-1,1.74,1.74,0,0,0-.92-.25,1.48,1.48,0,0,0-1.05.39,1.28,1.28,0,0,0-.4,1,1.66,1.66,0,0,0,.14.66,2.37,2.37,0,0,0,.53.71c.14.13.59.49,1.37,1.06a7.78,7.78,0,0,1,1.88,1.8,2.93,2.93,0,0,1,.51,1.59,2.73,2.73,0,0,1-.87,2,3,3,0,0,1-2.13.84,3.14,3.14,0,0,1-1.75-.51A4.84,4.84,0,0,1,39,40.1" />
                    <path className="letter"
                      d="M51.72,31.48l4.94,10.59H55.51l-1.66-3.48H49.29l-1.65,3.48H46.46l5-10.59Zm-.14,2.25-1.81,3.83h3.62Z" />
                    <path className="letter"
                      d="M68.51,33.26l-.82.78a6.31,6.31,0,0,0-1.94-1.32,5.21,5.21,0,0,0-2-.45,4.93,4.93,0,0,0-2.38.61,4.42,4.42,0,0,0-1.74,1.66,4.3,4.3,0,0,0,0,4.48,4.57,4.57,0,0,0,1.77,1.69,5.13,5.13,0,0,0,2.48.62,4.24,4.24,0,0,0,2.76-.92A3.63,3.63,0,0,0,68,38H64.58V37h4.56a5.32,5.32,0,0,1-1.46,3.9,5.22,5.22,0,0,1-3.86,1.44,5.78,5.78,0,0,1-4.65-2,5.29,5.29,0,0,1-1.32-3.56,5.43,5.43,0,0,1,.76-2.8,5.29,5.29,0,0,1,2.07-2,6,6,0,0,1,3-.73,6.75,6.75,0,0,1,2.54.48,7.54,7.54,0,0,1,2.31,1.56" />
                    <polygon className="letter"
                      points="71.16 31.48 77.23 31.48 77.23 32.52 72.22 32.52 72.22 35.84 77.19 35.84 77.19 36.87 72.22 36.87 72.22 41.03 77.19 41.03 77.19 42.07 71.16 42.07 71.16 31.48" />
                    <polygon className="letter"
                      points="83.15 42.07 83.15 31.48 83.38 31.48 90.43 39.6 90.43 31.48 91.47 31.48 91.47 42.07 91.23 42.07 84.24 34.05 84.24 42.07 83.15 42.07" />
                    <path className="letter"
                      d="M98.37,31.48l4.94,10.59h-1.14l-1.67-3.48H95.94l-1.65,3.48H93.11l5-10.59Zm-.13,2.25-1.81,3.83h3.62Z" />
                    <polygon className="letter"
                      points="102.71 32.52 102.71 31.48 108.51 31.48 108.51 32.52 106.15 32.52 106.15 42.07 105.07 42.07 105.07 32.52 102.71 32.52" />
                    <rect className="letter" x="109.89" y="31.48" width="1.06" height="10.59" />
                    <path className="letter"
                      d="M118.41,31.22a5.49,5.49,0,0,1,4,1.6,5.56,5.56,0,0,1-3.94,9.51,5.41,5.41,0,0,1-4-1.61,5.28,5.28,0,0,1-1.62-3.9,5.67,5.67,0,0,1,.74-2.83,5.42,5.42,0,0,1,4.77-2.77m0,1a4.35,4.35,0,0,0-2.23.61,4.4,4.4,0,0,0-1.64,1.65,4.51,4.51,0,0,0-.59,2.31,4.46,4.46,0,0,0,4.46,4.49,4.52,4.52,0,0,0,2.28-.6,4.31,4.31,0,0,0,1.64-1.64,4.6,4.6,0,0,0,.59-2.3,4.5,4.5,0,0,0-.59-2.28,4.34,4.34,0,0,0-1.66-1.63,4.43,4.43,0,0,0-2.26-.61" />
                    <polygon className="letter"
                      points="126.19 42.07 126.19 31.48 126.42 31.48 133.47 39.6 133.47 31.48 134.51 31.48 134.51 42.07 134.28 42.07 127.28 34.05 127.28 42.07 126.19 42.07" />
                    <polygon className="letter"
                      points="26.56 64.53 29.35 45.09 29.66 45.09 37.57 61.05 45.4 45.09 45.71 45.09 48.51 64.53 46.61 64.53 44.68 50.63 37.81 64.53 37.31 64.53 30.35 50.52 28.44 64.53 26.56 64.53" />
                    <path className="letter"
                      d="M52.4,45.09h1.94V56.83a24.93,24.93,0,0,0,.08,2.6,4.3,4.3,0,0,0,.68,1.93,4,4,0,0,0,1.62,1.29,5.07,5.07,0,0,0,2.21.52,4.26,4.26,0,0,0,1.85-.41,4.06,4.06,0,0,0,1.48-1.13,4.7,4.7,0,0,0,.88-1.76,14.91,14.91,0,0,0,.19-3V45.09h2V56.83A14.24,14.24,0,0,1,64.77,61a5.7,5.7,0,0,1-2,2.79A5.77,5.77,0,0,1,59,65a7.1,7.1,0,0,1-4-1.12,5.41,5.41,0,0,1-2.24-3,15.68,15.68,0,0,1-.36-4.1Z" />
                    <path className="letter"
                      d="M68.05,60.91l1.66-1q1.74,3.21,4,3.21a3.94,3.94,0,0,0,1.84-.45,3.29,3.29,0,0,0,1.31-1.22,3.21,3.21,0,0,0,.45-1.63,3.32,3.32,0,0,0-.66-1.92,16,16,0,0,0-3.34-3.12,16.81,16.81,0,0,1-3-2.65,4.87,4.87,0,0,1-1-3,4.58,4.58,0,0,1,.61-2.31A4.38,4.38,0,0,1,71.6,45.2a5,5,0,0,1,2.4-.6,5.18,5.18,0,0,1,2.58.68,9,9,0,0,1,2.53,2.51L77.52,49a7.55,7.55,0,0,0-1.87-1.92A3.3,3.3,0,0,0,74,46.61a2.69,2.69,0,0,0-1.92.71,2.35,2.35,0,0,0-.75,1.76,2.9,2.9,0,0,0,.27,1.23,4.53,4.53,0,0,0,1,1.3c.26.24,1.1.89,2.52,1.94a14.19,14.19,0,0,1,3.46,3.32,5.31,5.31,0,0,1,.94,2.92,5,5,0,0,1-1.61,3.67A5.39,5.39,0,0,1,73.93,65a5.73,5.73,0,0,1-3.22-.94,8.77,8.77,0,0,1-2.66-3.17" />
                    <polygon className="letter"
                      points="83.56 45.09 94.71 45.09 94.71 46.99 85.51 46.99 85.51 53.09 94.63 53.09 94.63 54.99 85.51 54.99 85.51 62.63 94.63 62.63 94.63 64.53 83.56 64.53 83.56 45.09" />
                    <path className="letter"
                      d="M98.14,45.09h1.94V56.83a24.93,24.93,0,0,0,.08,2.6,4.42,4.42,0,0,0,.67,1.93,4,4,0,0,0,1.63,1.29,5.07,5.07,0,0,0,2.21.52,4.26,4.26,0,0,0,1.85-.41A4.15,4.15,0,0,0,108,61.63a4.54,4.54,0,0,0,.87-1.76,14.67,14.67,0,0,0,.2-3V45.09H111V56.83A14.24,14.24,0,0,1,110.5,61a5.62,5.62,0,0,1-2,2.79,5.8,5.8,0,0,1-3.7,1.19,7.06,7.06,0,0,1-4-1.12,5.42,5.42,0,0,1-2.25-3,15.8,15.8,0,0,1-.35-4.1Z" />
                    <polygon className="letter"
                      points="114.92 64.53 117.7 45.09 118.02 45.09 125.92 61.05 133.75 45.09 134.06 45.09 136.86 64.53 134.96 64.53 133.04 50.63 126.16 64.53 125.66 64.53 118.7 50.52 116.79 64.53 114.92 64.53" />
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h2>Visit Osage Partner Sites</h2>
              <nav role="navigation" aria-labelledby="block-osagepartnersites-menu" id="block-osagepartnersites">
                <h2 className="visually-hidden" id="block-osagepartnersites-menu">Osage Partner Sites</h2>
                <ul className="bignav">
                  <li className="menu-item-c7bd62b3">
                    <a href="https://www.osagenation-nsn.gov/who-we-are/language-department" target="_blank">Language
                      Department</a>
                  </li>
                  <li className="menu-item-daecd468">
                    <a href="https://www.osagenation-nsn.gov/who-we-are/cultural-center" target="_blank">Cultural
                      Center</a>
                  </li>
                  <li className="menu-item-851602ff">
                    <a href="https://www.osagenation-nsn.gov/who-we-are/historic-preservation" target="_blank">Historic
                      Preservation</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="band">
            <div className="container grid">
              <div className="hours">
                <h3>Closed Now: 8:30 am – 5:00 pm</h3>
                <p>819 Grandview Avenue<br />
                  Pawhuska, OK 74056<br /><a href="mailto:museum@osagenation-nsn.gov">museum@osagenation-nsn.gov</a><br />
                  918-287-5441</p>
              </div>
              <div className="follow clearfix">
                <h2>Follow Us</h2>
                <div>
                  <ul>
                    <li><a href="https://www.facebook.com/OsageNationMuseum/" target="_blank"> <span
                          className="fa fa-facebook-square"></span></a></li>
                    <li><a href="https://www.instagram.com/osage.nation.museum/" target="_blank"> <span
                          className="fa fa-instagram"></span></a></li>
                    <li><a href="https://twitter.com/osagenation?lang=en" target="_blank"> <span
                          className="fa fa-twitter"></span></a></li>
                  </ul>
                  <div className="footer-subscribe">
                    <h2>Sign up for e-news</h2>
                    <form
                      className="webform-submission-form webform-submission-add-form webform-submission-newsletter-signup-form webform-submission-newsletter-signup-add-form webform-submission-newsletter-signup-node-106-form webform-submission-newsletter-signup-node-106-add-form js-webform-details-toggle webform-details-toggle"
                      data-drupal-selector="webform-submission-newsletter-signup-node-106-add-form" action="/node/106"
                      method="post" id="webform-submission-newsletter-signup-node-106-add-form" accept-charset="UTF-8">
                      <div
                        className="js-form-item form-item js-form-type-email form-item-your-email js-form-item-your-email form-no-label">
                        <label for="edit-your-email" className="visually-hidden js-form-required form-required">Your
                          Email</label>
                        <input data-drupal-selector="edit-your-email" type="email" id="edit-your-email" name="your_email"
                          value="" size="60" maxlength="254" placeholder="john.doe@example.com"
                          className="form-email required" required="required" aria-required="true" />
                      </div>
                      <div data-drupal-selector="edit-actions"
                        className="form-actions webform-actions js-form-wrapper form-wrapper" id="edit-actions--2">
                        <input className="webform-button--submit button button--primary js-form-submit form-submit"
                          data-drupal-selector="edit-actions-submit" type="submit" id="edit-actions-submit" name="op"
                          value="Subscribe" />
                      </div>
                      <input autocomplete="off" data-drupal-selector="form-pvphh4yyirunnf4cd5hz7h67i0p5gl0x5g2on-oe0vy"
                        type="hidden" name="form_build_id" value="form-pvphH4yYiruNnf4cd5HZ7H67I0P5GL0x5G2On-Oe0VY" />
                      <input data-drupal-selector="edit-webform-submission-newsletter-signup-node-106-add-form"
                        type="hidden" name="form_id" value="webform_submission_newsletter_signup_node_106_add_form" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copy">
            <div className="container grid">
              <div className="copyright">
                <p>&copy; 2019 Osage Nation. All Rights Reserved.</p>
              </div>
              <div className="fmenu">
                <nav role="navigation" aria-labelledby="block-footer-menu" id="block-footer">
                  <h2 className="visually-hidden" id="block-footer-menu">Footer</h2>
                  <ul className="bignav">
                    <li className="menu-item-df39f22a">
                      <a href="/visit/about" data-drupal-link-system-path="node/9">About the Museum</a>
                    </li>
                    <li className="menu-item-d69423a6">
                      <a href="/support/donate" data-drupal-link-system-path="node/28">Donate</a>
                    </li>
                    <li className="menu-item-0225b1f0">
                      <a href="/support/volunteer" data-drupal-link-system-path="node/30">Volunteer</a>
                    </li>
                    <li className="menu-item-f51c3a49">
                      <a href="/visit/contact" data-drupal-link-system-path="node/12">Contact Us</a>
                    </li>
                    <li className="menu-item-24ffdf82">
                      <a href="/privacy">Privacy Policy</a>
                    </li>
                    <li className="menu-item-0bf51978">
                      <a href="/terms">Terms</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
)

export default Container;
