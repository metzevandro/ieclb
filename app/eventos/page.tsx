import { Card, CardContent, CardHeader, Page } from "design-system-zeroz";

export default function Eventos() {
  const eventosPorMes: any = {
    Janeiro: [
      "Dia 10: Reunião Anual de Planejamento",
      "Dia 20: Feira de Artesanato",
    ],
    Fevereiro: [
      "Dia 5: Carnaval da Comunidade",
      "Dia 18: Palestra sobre Sustentabilidade",
    ],
    Março: ["Dia 12: Workshop de Fotografia", "Dia 25: Caminhada Ecológica"],
    Abril: ["Dia 9: Páscoa na Praça", "Dia 22: Oficina de Culinária Vegana"],
    Maio: ["Dia 7: Festival de Música", "Dia 19: Torneio de Xadrez"],
    Junho: ["Dia 14: Festa Junina", "Dia 27: Sarau Literário"],
    Julho: [
      "Dia 10: Campanha do Agasalho",
      "Dia 24: Festival de Cinema Independente",
    ],
    Agosto: ["Dia 6: Encontro de Jovens", "Dia 20: Exposição de Arte"],
    Setembro: ["Dia 5: Semana da Primavera", "Dia 18: Café Filosófico"],
    Outubro: ["Dia 12: Festa das Crianças", "Dia 24: Feira do Livro"],
    Novembro: ["Dia 11: Mostra de Dança", "Dia 28: Simpósio de Tecnologia"],
    Dezembro: ["Dia 15: Natal Solidário", "Dia 31: Ano Novo na Praça"],
  };

  return (
    <Page
      namePage="Confira nossos próximos eventos!"
      description="Fique por dentro dos próximos eventos da comunidade IECLB de Estância Velha"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {Object.keys(eventosPorMes).map((mes, index) => (
          <div key={index}>
            <Card>
              <CardHeader title={mes} description=""></CardHeader>
              <CardContent>
                <ul>
                  {eventosPorMes[mes].map((evento: any, i: any) => (
                    <p key={i}>{evento}</p>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Page>
  );
}
