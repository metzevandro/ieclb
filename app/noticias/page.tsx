"use client";
import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardImage,
  InputSelect,
  Page,
} from "design-system-zeroz";

interface PostProps {
  title: string;
  content: string;
  date: Date; // Change date type to Date
  imageUrl: string;
}

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("pt-BR", options);
}

function Post({ title, content, date, imageUrl }: PostProps) {
  return (
    <Card>
      <CardImage>
        <img src={imageUrl} alt={title} />
      </CardImage>
      <CardHeader title={title} description={content}></CardHeader>
      <CardFooter>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "fit-content" }}>
            <Button size="md" variant="primary" label="Ver mais" />
          </div>
          <small>{formatDate(date)}</small>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function Noticia() {
  const [posts, setPosts] = useState<PostProps[]>([]); // Array de todos os meses do ano
  const allMonths = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const currentMonth = allMonths[new Date().getMonth()];

  const [selectedMonth, setSelectedMonth] = useState<string | undefined>(
    currentMonth,
  );

  useEffect(() => {
    const fetchPosts = async () => {
      const fakePosts: PostProps[] = [
        {
          title: "Evento Comunitário de Verão",
          content:
            "A IECLB de Estância Velha convida todos para o evento comunitário de verão, que contará com atividades recreativas, música ao vivo e muita diversão para toda a família.",
          date: new Date("2024-07-01"),
          imageUrl: "https://placehold.co/1920x1080",
        },
        {
          title: "Campanha de Doação de Alimentos",
          content:
            "Estamos arrecadando alimentos não perecíveis para ajudar as famílias carentes da nossa comunidade. Participe e faça sua doação na sede da IECLB.",
          date: new Date("2024-07-05"),
          imageUrl: "https://placehold.co/1920x1080",
        },
        {
          title: "Culto Especial de Páscoa",
          content:
            "Venha celebrar a Páscoa conosco! Teremos um culto especial com encenação da Paixão de Cristo e uma ceia comunitária. Todos são bem-vindos.",
          date: new Date("2024-07-10"),
          imageUrl: "https://placehold.co/1920x1080",
        },
        {
          title: "Grupo de Oração Online",
          content:
            "Participe do nosso grupo de oração online todas as quartas-feiras às 19h. É uma ótima oportunidade para compartilhar e fortalecer a fé.",
          date: new Date("2024-07-15"),
          imageUrl: "https://placehold.co/1920x1080",
        },
        {
          title: "Oficina de Artesanato",
          content:
            "Inscreva-se na nossa oficina de artesanato! Aprenda novas técnicas e compartilhe momentos de criatividade e confraternização.",
          date: new Date("2024-07-20"),
          imageUrl: "https://placehold.co/1920x1080",
        },
        {
          title: "Encontro de Jovens",
          content:
            "Convidamos todos os jovens para um encontro especial no próximo sábado. Teremos dinâmicas, palestras e um momento de integração.",
          date: new Date("2024-07-25"),
          imageUrl: "https://placehold.co/1920x1080",
        },
        {
          title: "Ação Social no Bairro",
          content:
            "No próximo domingo, realizaremos uma ação social no bairro, com serviços gratuitos de corte de cabelo, consultas médicas e distribuição de roupas.",
          date: new Date("2024-07-30"),
          imageUrl: "https://placehold.co/1920x1080",
        },
      ];

      fakePosts.sort((a, b) => b.date.getTime() - a.date.getTime());

      setPosts(fakePosts);
    };

    fetchPosts();
  }, []);

  // Função para filtrar os posts com base no mês selecionado
  const filteredPosts = selectedMonth
    ? posts.filter(
        (post) => post.date.getMonth() === allMonths.indexOf(selectedMonth),
      )
    : posts;

  return (
    <Page namePage="Notícias">
      <div style={{ maxWidth: "200px" }}>
        <InputSelect
          label="Mês"
          value={selectedMonth}
          onChange={(value: string) => setSelectedMonth(value)}
          options={allMonths}
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
        {filteredPosts.map((post, index) => (
          <div className="col-12" key={index}>
            <Post
              title={post.title}
              content={post.content}
              date={post.date}
              imageUrl={post.imageUrl}
            />
          </div>
        ))}
      </div>
    </Page>
  );
}
