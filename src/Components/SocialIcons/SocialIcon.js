import React from "react";

import "./SocialIcon.css";

function SocialIcon() {
  return (
      <div class="footer-social-links">
        <a href="https://www.facebook.com/shahcoals/" title="Facebook" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com/shahcoals/" title="Twitter" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="https://www.google.com/" title="Google+" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-google-plus"></i>
        </a>
        <a href="https://www.google.com/" title="LinkedIn+" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="https://www.google.com/" title="Dribbble" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-dribbble"></i>
        </a>
      </div>
  );
}

export default SocialIcon;
