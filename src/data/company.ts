/**
 * Dados institucionais da Service Eletrônica.
 * Campos marcados como PLACEHOLDER ainda não foram confirmados
 * e devem ser substituídos pelos dados oficiais antes do lançamento.
 */
export const company = {
  name: "Service Eletrônica",
  tagline: "Assistência Técnica Autorizada",
  address: {
    street: "Rua T39, 13",
    neighborhood: "Setor Bueno",
    city: "Goiânia",
    state: "Go",
    zip: "74210-100",
    mapsUrl: "https://maps.app.goo.gl/BwJ3t5Hy1RGjz5dz5",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=-16.6861867,-49.2852592&z=17&output=embed",
  },
  hours: {
    weekdays: "Seg–Sex: 08:00–18:00",
    weekendsAndHolidays: "Sáb, Dom e Feriados: Fechado",
  },
  contact: {
    whatsappNumber: "(62) 99295-5115",
  },
} as const;
