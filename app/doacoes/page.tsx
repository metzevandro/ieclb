"use client";
import {
  Aside,
  AsideContent,
  AsideFooter,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
  Image,
  InputNumber,
  InputSelect,
  Page,
} from "design-system-zeroz";
import { useState } from "react";

export default function Doacoes() {
  const impactos = [
    {
      titulo: "Propagação do Evangelho de Jesus Cristo",
      itens: [
        "Apoio a pastores e missionários",
        "Evangelização e discipulado",
        "Ensino religioso",
      ],
    },
    {
      titulo: "Promoção da paz, justiça e amor",
      itens: [
        "Ação social",
        "Defesa dos direitos humanos",
        "Diálogo inter-religioso",
      ],
    },
    {
      titulo: "Fortalecimento da comunidade",
      itens: [
        "Apoio a congregações",
        "Formação de líderes",
        "Promoção da comunhão",
      ],
    },
  ];

  const impactus = impactos.map((impacto) => {
    return (
      <div>
        <h4>{impacto.titulo}</h4>
        <div>
          {impacto.itens.map((item) => (
            <p>↪{item}</p>
          ))}
        </div>
      </div>
    );
  });

  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <Page
      namePage="Doe para a IECLB"
      description="Ajude a IECLB a continuar transformando vidas"
      buttonContentPrimary="Doar agora"
      withActionPrimary={true}
      onClickActionPrimary={toggleAside}
    >
      <main style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Card>
          <CardImage>
            {" "}
            <img
              style={{ objectFit: "contain" }}
              src="https://1.bp.blogspot.com/-jB___3a6sp4/URRRWVPMh2I/AAAAAAAAALQ/DuxwYFKeXzk/s1600/Horizontal_Cor.jpg"
              alt="Imagem ilustrativa da causa da IECLB"
            />
          </CardImage>
          <CardFooter>
            <p>
              Sua contribuição faz a diferença. Apoie a IECLB em sua missão de
              Propagar o Evangelho de Jesus Cristo, estimulando a sua vivência
              pessoal na família e na comunidade, e promover a paz, a justiça e
              o amor na sociedade brasileira e no mundo.
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader description="" title=""></CardHeader>
          <CardContent>
            <h2>Como sua doação gera impacto:</h2>

            {impactus}
          </CardContent>
          <CardFooter>
            <h3>Doações seguras e transparentes</h3>
            <p>
              Sua doação está protegida. Utilizamos gateways de pagamento
              seguros e divulgamos relatórios de doações para sua tranquilidade.
            </p>
          </CardFooter>
        </Card>
        <Aside
          title="Escolha o valor da sua doação"
          isOpen={isAsideOpen}
          toggleAside={toggleAside}
          content={
            <AsideContent>
              <InputNumber label="Valor (R$):" min={0} />
              <InputSelect
                label="Frequência:"
                value="Doação única"
                onChange={() => {}}
                options={["Doação única", "Mensalmente"]}
              />
            </AsideContent>
          }
          footer={
            <AsideFooter>
              <div
                style={{ display: "flex", gap: "8px", width: "fit-content" }}
              >
                <Button
                  label="Doar"
                  size="md"
                  variant="success"
                  onClick={toggleAside}
                />
                <Button
                  label="Cancelar"
                  size="md"
                  variant="secondary"
                  onClick={toggleAside}
                />
              </div>
            </AsideFooter>
          }
        ></Aside>
      </main>
    </Page>
  );
}
