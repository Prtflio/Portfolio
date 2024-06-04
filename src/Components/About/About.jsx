import { Grid, Typography } from "@mui/material";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./styles.css";
import Reacticon from '../../assets/react-icon.png';
import Boostrapicon from '../../assets/linkedin.png';
import Viteicon from '../../assets/github.png';
import Springbooticon from '../../assets/whatsapp.png';
import JSicon from '../../assets/instagram.png';
import Htmlicon from '../../assets/react-icon.png';
import Cssicon from '../../assets/linkedin.png';

function About() {
  return (
    <>
      <br /><br /><br /><br /><br /><br />
      <Grid container id="about">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <ScrollAnimation animateIn="fadeInLeft" className="animate">
            <Typography variant="h2" sx={{ fontWeight: 'bold' }} className="sub1">
              About me
            </Typography>
          </ScrollAnimation><br />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className="contentxs">
          <ScrollAnimation animateIn="fadeInLeft" className="animate">
            <Typography variant="body1" className="sub1">
              Hi there! I'm Aadhil, a website developer with a passion for creating custom online experiences for my clients.
              With a skill set including HTML, CSS, JavaScript, and React,
              I have the tools to bring any website vision to life.
            </Typography>
          </ScrollAnimation><br />
          <ScrollAnimation animateIn="fadeInLeft" className="animate">
            <Typography variant="body1" className="sub1">
              But my services go beyond just custom development - I'm also proficient in using CMS systems like
              WordPress and Shopify, making it easy for my clients to take control of their own websites and
              keep them up to date.
            </Typography>
          </ScrollAnimation><br />
          <ScrollAnimation animateIn="fadeInLeft" className="animate">
            <Typography variant="body1" className="sub1">
              So if you're in need of a new website or just looking to revamp your current online presence,
              I'd love to chat and see how I can help.
              Let's bring your website dreams to reality together!
            </Typography>
          </ScrollAnimation><br />
          <ScrollAnimation animateIn="fadeInLeft" className="animate">
            <Typography variant="h5" className="sub">
              Here are my main skills:
            </Typography>
          </ScrollAnimation>


          <Grid container spacing={2} className="hability">
            {[Cssicon, Htmlicon, JSicon, Springbooticon, Viteicon, Boostrapicon, Reacticon, Viteicon, Springbooticon, Htmlicon].map((icon, index) => (
              <><Grid></Grid>
                <Grid item xs={3.6} sm={2.7} md={1.8} key={index} className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={(0.10 + index * 0.02) * 1000}>
                    <img src={icon} alt="icon" />
                  </ScrollAnimation>
                </Grid></>
            ))}
          </Grid>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}></Grid>
      </Grid>
    </>
  )
}

export default About;
