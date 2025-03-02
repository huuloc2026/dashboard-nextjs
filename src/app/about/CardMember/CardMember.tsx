import React from "react";
import "./styles.css";

interface CardMemberProps {
  name: string;
  role: string;
}
const CardMember: React.FC<CardMemberProps> = ({ name, role }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center rounded-xl p-4">
      <div className="CardMember">
        <div className="card">
          <p className="heading">{name}</p>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMember;
