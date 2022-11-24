import React, { useEffect, useState } from "react";
import "./template.css";
import pasword from "../../assets/Images/relationship/1password.svg";
import grp from "../../assets/Pictures/password.jpeg";
import { useParams } from "react-router-dom";
import { relationshipData } from "../../data/relationship";

const Pass = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    setData(relationshipData.find((f) => f.title === id));
  }, [id]);

  if (!data) return null;

  return (
    <div className="pass">
      <div className="text-part">
        <div className="img">
          <img src={pasword} alt="" width="200px" height="200px" />
        </div>
        <div className="text">
          <div className="founders">
            <h5>FOUNDERS</h5>
            <div className="line"></div>
            {data.founders.map((f) => (
              <p>{f}</p>
            ))}
          </div>
          <div className="partners">
            <h5>PARTNERS</h5>
            <div className="line"></div>
            {data.partners.map((p) => (
              <p>{p}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="image-part">
        <div className="image">
          <img src={grp} alt="" />
        </div>
        <div className="txt">
          {data.description.map((d) => (
            <p>{d}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Pass;
