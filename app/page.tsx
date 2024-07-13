"use client";
import {
  AppShell,
  BreadcrumbRoot,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Header,
  Image,
  Page,
} from "design-system-zeroz";

import React from "react";

export default function Home() {
  return (
    <Page namePage="Bem-vindo à Plataforma da IECLB - Estância Velha">
      <div style={{ display: "flex", gap: "24px" }}>
        <div className="col-12">
          <Card>
            <CardHeader
              title="Devoção diária"
              description="Isaías 43.13 e 1 Coríntios 3.21,23 - 10 de julho | IECLB"
            />
            <CardContent>
              <div style={{ display: "flex", gap: "24px" }}>
                <Image
                  width="500"
                  src="https://www.luterano.org.br/wp-content/uploads/2024/07/Senhas-Diarias-10-07-2024-1024x1024.jpg.avif"
                ></Image>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    justifyContent: "center",
                  }}
                >
                  <h5>
                    Isaías 43.13 - Ainda antes que houvesse dia, eu sou; e não
                    há quem possa livrar alguém das minhas mãos; agindo eu, quem
                    o impedirá?
                  </h5>{" "}
                  <h5>
                    1 Coríntios 3.21, 23 - Ninguém se glorie nos homens; tudo é
                    de vocês, e vocês são de Cristo, e Cristo é de Deus.
                  </h5>
                  <h5>
                    LEMA DA SEMANA (07/07 - 13/07): A semente que caiu na boa
                    terra são os que, tendo ouvido de bom e reto coração, retêm
                    a palavra; estes frutificam com perseverança. (Lucas 8.15)
                  </h5>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        <div className="col-6">
          <Card>
            <CardHeader
              title="Notícias"
              description="Concertos celebram os 200 Anos de Presença Luterana no Brasil"
            />
            <CardContent>
              <Image
                height="500"
                src="https://www.luterano.org.br/wp-content/uploads/2024/07/Concertos-Camerata-Antiqua-200-anos.png.avif"
              ></Image>
            </CardContent>
            <CardFooter>
              <div style={{ width: "fit-content" }}>
                <Button size="md" variant="primary" label="Ver mais" />
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="col-6">
          <Card>
            <CardHeader
              title="Eventos"
              description="Dia Sinodal da Igreja comemora 200 Anos de Presença Luterana no Brasil"
            />
            <CardContent>
              <Image
                height="500"
                src="https://www.luterano.org.br/wp-content/uploads/2024/07/Dia-Sinodal-da-Igreja-pavilhao.jpg.avif"
              ></Image>
            </CardContent>
            <CardFooter>
              <div style={{ width: "fit-content" }}>
                <Button size="md" variant="primary" label="Ver mais" />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        <div className="col-6">
          <Card>
            <CardHeader
              title="Doações"
              description="LELUT desenvolve ação de doações para pessoas atingidas pelas enchentes"
            />
            <CardContent>
              <Image
                height="500"
                src="https://th.bing.com/th/id/R.56d05fbe4116d477998620ea0010749f?rik=NpuBEfKZqnkl4A&riu=http%3a%2f%2flavras.tv%2fsite%2fwp-content%2fuploads%2f2021%2f03%2fdoa-alimentos-1-2048x1365.jpg&ehk=OMhwVx7HLhss6anqbrkqRz5%2fvgrTen7AQoHxzAA%2f%2bGk%3d&risl=&pid=ImgRaw&r=0"
              ></Image>
            </CardContent>
            <CardFooter>
              <div style={{ width: "fit-content" }}>
                <Button size="md" variant="primary" label="Ver mais" />
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="col-6">
          <Card>
            <CardHeader
              title="Voluntários"
              description="Voluntários desenvolvem projeto com crianças"
            />
            <CardContent>
              <Image
                height="500"
                src="https://th.bing.com/th/id/OIP.ai0ecZAo-3wMf6epesMtjAHaE7?rs=1&pid=ImgDetMain"
              ></Image>
            </CardContent>
            <CardFooter>
              <div style={{ width: "fit-content" }}>
                <Button size="md" variant="primary" label="Ver mais" />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Page>
  );
}
