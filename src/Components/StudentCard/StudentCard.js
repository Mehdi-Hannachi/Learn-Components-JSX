import React from "react";
import { Card } from "react-bootstrap";
import "./studentcard.css";

const students = [
  { name: "Aziz", LastName: "Kefi", age: 20 },
  { name: "Houssem", LastName: "Kefi", age: 20 },
  { name: "Oussema", LastName: "Kefi", age: 20 },
  { name: "Nesrine", LastName: "Kefi", age: 20 },
  { name: "Aziz", LastName: "Kefi", age: 20 },
  { name: "Houssem", LastName: "Kefi", age: 20 },
  { name: "Oussema", LastName: "Kefi", age: 20 },
  { name: "Nesrine", LastName: "Kefi", age: 20 },
];

const StudentCard = () => {
  return (
    <div className="Students-Cards">
      {students.map((el, i) => (
        <Card key={i} style={{ width: "18rem", marginTop: "50px" }}>
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {el.LastName}
            </Card.Subtitle>
            <Card.Text>{el.age}</Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default StudentCard;
