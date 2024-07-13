"use client";
import React, { useState } from "react";
import {
  Page,
  Input,
  Button,
  Aside,
  CardContent,
  CardFooter,
  AsideContent,
  AsideFooter,
  Card,
  CardHeader,
  CardImage,
} from "design-system-zeroz";

const volunteerTypes = [
  {
    id: 1,
    title: "Educação",
    description: "Ajude na educação de crianças e adultos.",
    url: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Saúde",
    description: "Participe de campanhas de saúde.",
    url: "https://images.pexels.com/photos/6647177/pexels-photo-6647177.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Eventos",
    description: "Auxilie na organização de eventos.",
    url: "https://media.istockphoto.com/id/1625310710/pt/foto/happy-group-of-volunteer-people-stacking-hands-celebrating-together-outdoor-teamwork-and.jpg?b=1&s=612x612&w=0&k=20&c=vXa6fLKAWPkTuSudp0o1ISE_dkpdLaYWncCBHTwi8uE=",
  },
];

export default function Voluntarios() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Page
      namePage="Voluntários"
      description="Esta é nossa área de anúncio de voluntariados"
    >
      <section style={{ display: "flex", gap: "24px" }}>
        {volunteerTypes.map((volunteer) => (
          <Card>
            <CardImage>
              <img height={400} src={volunteer.url} alt={volunteer.title} />
            </CardImage>
            <CardHeader
              title={volunteer.title}
              description={volunteer.description}
            ></CardHeader>
            <CardFooter>
              <div key={volunteer.id} style={{ width: "fit-content" }}>
                <Button
                  size="md"
                  variant="primary"
                  label="Quero me candidatar"
                  onClick={toggleModal}
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>

      <Aside
        isOpen={showModal}
        toggleAside={toggleModal}
        title="Candidatura de Voluntários"
        content={
          <AsideContent>
            <Input
              type="text"
              name="nome"
              label="Nome Completo"
              placeholder="Digite seu nome completo"
              required
            />
            <Input
              type="email"
              name="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              required
            />
            <Input
              type="tel"
              name="telefone"
              label="Telefone"
              placeholder="Digite seu telefone"
              required
            />
          </AsideContent>
        }
        footer={
          <AsideFooter>
            <Button
              size="md"
              variant="primary"
              label="Enviar"
              onClick={toggleModal}
            />
          </AsideFooter>
        }
      />
    </Page>
  );
}
