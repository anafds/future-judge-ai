// API for Brazilian cities search
export interface CityResult {
  id: string;
  text: string;
}

export interface CitySearchResponse {
  items: CityResult[];
  hasMore: boolean;
}

// Simulated Brazilian cities data (in production, this would come from a database)
const brazilianCitiesData = [
  { id: "3550308", text: "São Paulo - SP" },
  { id: "3304557", text: "Rio de Janeiro - RJ" },
  { id: "3106200", text: "Belo Horizonte - MG" },
  { id: "4106902", text: "Curitiba - PR" },
  { id: "2304400", text: "Fortaleza - CE" },
  { id: "2927408", text: "Salvador - BA" },
  { id: "5208707", text: "Goiânia - GO" },
  { id: "2611606", text: "Recife - PE" },
  { id: "3518800", text: "Guarulhos - SP" },
  { id: "3509502", text: "Campinas - SP" },
  { id: "4314902", text: "Porto Alegre - RS" },
  { id: "2704302", text: "Maceió - AL" },
  { id: "5103403", text: "Cuiabá - MT" },
  { id: "1302603", text: "Manaus - AM" },
  { id: "2507507", text: "João Pessoa - PB" },
  { id: "2111300", text: "São Luís - MA" },
  { id: "1501402", text: "Belém - PA" },
  { id: "1400100", text: "Boa Vista - RR" },
  { id: "1200401", text: "Rio Branco - AC" },
  { id: "2800308", text: "Aracaju - SE" },
  { id: "1721000", text: "Palmas - TO" },
  { id: "5300108", text: "Brasília - DF" },
  { id: "2408102", text: "Natal - RN" },
  { id: "1600303", text: "Macapá - AP" },
  { id: "2211001", text: "Teresina - PI" },
  // Adding more cities for better search experience
  { id: "3518701", text: "Guarujá - SP" },
  { id: "3515004", text: "Diadema - SP" },
  { id: "3547809", text: "Santo André - SP" },
  { id: "3548708", text: "São Bernardo do Campo - SP" },
  { id: "3549904", text: "São José dos Campos - SP" },
  { id: "3552205", text: "Sorocaba - SP" },
  { id: "3301702", text: "Campos dos Goytacazes - RJ" },
  { id: "3303302", text: "Nova Iguaçu - RJ" },
  { id: "3304904", text: "São Gonçalo - RJ" },
  { id: "3106705", text: "Betim - MG" },
  { id: "3118601", text: "Contagem - MG" },
  { id: "3136702", text: "Juiz de Fora - MG" },
  { id: "3170206", text: "Uberlândia - MG" },
  { id: "4205407", text: "Florianópolis - SC" },
  { id: "4209102", text: "Joinville - SC" },
  { id: "4104808", text: "Cascavel - PR" },
  { id: "4113700", text: "Londrina - PR" },
  { id: "4119905", text: "Maringá - PR" },
  { id: "4318702", text: "Santa Maria - RS" },
  { id: "4314407", text: "Pelotas - RS" },
  { id: "2910800", text: "Feira de Santana - BA" },
  { id: "2919207", text: "Lauro de Freitas - BA" },
  { id: "2933307", text: "Vitória da Conquista - BA" },
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const searchCities = async (
  query: string = "",
  page: number = 1
): Promise<CitySearchResponse> => {
  // Simulate network delay
  await delay(300);

  const pageSize = 20;
  const normalizedQuery = query
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Remove accents

  // Filter cities based on query
  const filtered = query.trim().length < 2 
    ? brazilianCitiesData // Return all cities if query is too short
    : brazilianCitiesData.filter(city => {
        const normalizedCity = city.text
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
        return normalizedCity.includes(normalizedQuery);
      });

  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);
  const hasMore = start + pageSize < filtered.length;

  return {
    items,
    hasMore
  };
};