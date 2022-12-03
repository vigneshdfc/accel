import React, { useState, useEffect } from "react";
import "./notetemplate.css";
import secret from "../../assets/Images/notetemplate/accelsecret.jpg";
import twitter from "../../assets/Images/icons/twitter.png";
import linkdin from "../../assets/Images/icons/linkedin.png";
import abraham from "../../assets/Images/noteworthy/accel.jpg";
import purplearrow from "../../assets/Images/icons/purplearrow.png";
import mc from "../../assets/Images/notetemplate/accelmc.jpg";
import NA from "../../assets/Images/notetemplate/accelna.jpg";
import { noteData } from "../../data/noteworthy/notetemplate";
import { useParams } from "react-router-dom";

const Notetemplates = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    setData(noteData.find((f) => f.tittle === id));
  }, [id]);

  if (!data) return null;

  return (
    <>
      <div>
        <div className="notetemplate">
          <div className="notetemplate_header">
            {data.heading.map((h) => (
              <h1>{h}</h1>
            ))}
            {data.subheading.map((s) => (
              <p>{s}</p>
            ))}
            <div className="notetemplate_date">
              <div>
                <h4>By Accel</h4>
              </div>
              <div>
                {data.date.map((d) => (
                  <h3>{d}</h3>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="notetemplate_hero">
          <div className="notetemplate_icon">
            <h6>Share this article</h6>

            <div>
              <img src={twitter} alt="logo" width="20px" height="20px" />
            </div>
            <div>
              <img src={linkdin} alt="logo" width="20px" height="20px" />
            </div>
            <div></div>
          </div>
          <div className="notetemplate_img">
            <div>
              <img src={data.image} width="700px" height="350px" />
            </div>
          </div>
          <div className="notetemplate_article">
            {data.content.map((c) => (
              <p>{c}</p>
            ))}
          </div>
        </div>
        <div className="note_h2">
          <h2>Noteworthy</h2>
        </div>
        <div className="noteworthy_cards">
          <div className="card_sectionone">
            <img src={data.noteimgone} width="350px" height="300px" />
            <div className="purple">
              <img src={purplearrow} width="40px" height="40px" />
            </div>
            <div className="card_section">
              {data.sectionone.map((o) => (
                <b>{o}</b>
              ))}
            </div>
          </div>

          <div className="card_sectionone">
            <div>
              <img src={data.noteimgtwo} width="350px" height="300px" />
              <div className="purple">
                <img src={purplearrow} width="40px" height="40px" />
              </div>
              <div className="card_section">
                {data.sectiontwo.map((t) => (
                  <b>{t}</b>
                ))}
              </div>
            </div>
          </div>

          <div className="card_sectionone">
            <img src={data.noteimgthree} width="350px" height="300px" />
            <div className="purple">
              <img src={purplearrow} width="40px" height="40px" />
            </div>
            <div className="card_section">
              {data.sectionthree.map((e) => (
                <b>{e}</b>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Notetemplates;
