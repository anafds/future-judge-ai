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
  // São Paulo
  { id: "3550308", text: "São Paulo - SP" },
  { id: "3518800", text: "Guarulhos - SP" },
  { id: "3509502", text: "Campinas - SP" },
  { id: "3547809", text: "Santo André - SP" },
  { id: "3548708", text: "São Bernardo do Campo - SP" },
  { id: "3549904", text: "São José dos Campos - SP" },
  { id: "3552205", text: "Sorocaba - SP" },
  { id: "3518701", text: "Guarujá - SP" },
  { id: "3515004", text: "Diadema - SP" },
  { id: "3534401", text: "Osasco - SP" },
  { id: "3544103", text: "Ribeirão Preto - SP" },
  { id: "3503307", text: "Bauru - SP" },
  { id: "3513504", text: "Carapicuíba - SP" },
  { id: "3548205", text: "São Caetano do Sul - SP" },
  { id: "3546801", text: "Santos - SP" },
  { id: "3516309", text: "Cotia - SP" },
  { id: "3522208", text: "Jundiaí - SP" },
  { id: "3557105", text: "Taubaté - SP" },
  { id: "3525904", text: "Limeira - SP" },
  { id: "3541000", text: "Piracicaba - SP" },
  
  // Rio de Janeiro
  { id: "3304557", text: "Rio de Janeiro - RJ" },
  { id: "3304904", text: "São Gonçalo - RJ" },
  { id: "3303302", text: "Nova Iguaçu - RJ" },
  { id: "3301702", text: "Campos dos Goytacazes - RJ" },
  { id: "3302403", text: "Duque de Caxias - RJ" },
  { id: "3303500", text: "Niterói - RJ" },
  { id: "3300704", text: "Belford Roxo - RJ" },
  { id: "3304144", text: "Petrópolis - RJ" },
  { id: "3305109", text: "Volta Redonda - RJ" },
  { id: "3304037", text: "Magé - RJ" },
  { id: "3301009", text: "Cabo Frio - RJ" },
  { id: "3304755", text: "São João de Meriti - RJ" },
  
  // Minas Gerais
  { id: "3106200", text: "Belo Horizonte - MG" },
  { id: "3170206", text: "Uberlândia - MG" },
  { id: "3118601", text: "Contagem - MG" },
  { id: "3136702", text: "Juiz de Fora - MG" },
  { id: "3106705", text: "Betim - MG" },
  { id: "3131307", text: "Governador Valadares - MG" },
  { id: "3127701", text: "Divinópolis - MG" },
  { id: "3147105", text: "Montes Claros - MG" },
  { id: "3164508", text: "Ribeirão das Neves - MG" },
  { id: "3162922", text: "Poços de Caldas - MG" },
  { id: "3171808", text: "Varginha - MG" },
  { id: "3143601", text: "Lavras - MG" },
  
  // Bahia
  { id: "2927408", text: "Salvador - BA" },
  { id: "2910800", text: "Feira de Santana - BA" },
  { id: "2933307", text: "Vitória da Conquista - BA" },
  { id: "2919207", text: "Lauro de Freitas - BA" },
  { id: "2902500", text: "Camaçari - BA" },
  { id: "2920106", text: "Luís Eduardo Magalhães - BA" },
  { id: "2918001", text: "Jequié - BA" },
  { id: "2905701", text: "Eunápolis - BA" },
  { id: "2923605", text: "Olinda - BA" },
  { id: "2930709", text: "Simões Filho - BA" },
  
  // Paraná
  { id: "4106902", text: "Curitiba - PR" },
  { id: "4113700", text: "Londrina - PR" },
  { id: "4119905", text: "Maringá - PR" },
  { id: "4104808", text: "Cascavel - PR" },
  { id: "4125506", text: "São José dos Pinhais - PR" },
  { id: "4106803", text: "Cuiabá - PR" },
  { id: "4108304", text: "Foz do Iguaçu - PR" },
  { id: "4118204", text: "Maringá - PR" },
  { id: "4115200", text: "Machado - PR" },
  { id: "4106001", text: "Colombo - PR" },
  
  // Rio Grande do Sul
  { id: "4314902", text: "Porto Alegre - RS" },
  { id: "4309209", text: "Gravataí - RS" },
  { id: "4314407", text: "Pelotas - RS" },
  { id: "4318702", text: "Santa Maria - RS" },
  { id: "4305108", text: "Canoas - RS" },
  { id: "4314100", text: "Passo Fundo - RS" },
  { id: "4301602", text: "Bagé - RS" },
  { id: "4309209", text: "Gravataí - RS" },
  { id: "4314902", text: "Porto Alegre - RS" },
  
  // Santa Catarina
  { id: "4205407", text: "Florianópolis - SC" },
  { id: "4209102", text: "Joinville - SC" },
  { id: "4202404", text: "Blumenau - SC" },
  { id: "4204202", text: "Criciúma - SC" },
  { id: "4206207", text: "Itajaí - SC" },
  { id: "4208203", text: "Jaraguá do Sul - SC" },
  { id: "4213500", text: "Palhoça - SC" },
  { id: "4216602", text: "São José - SC" },
  
  // Ceará
  { id: "2304400", text: "Fortaleza - CE" },
  { id: "2303709", text: "Caucaia - CE" },
  { id: "2307650", text: "Juazeiro do Norte - CE" },
  { id: "2310308", text: "Sobral - CE" },
  { id: "2307007", text: "Itapipoca - CE" },
  { id: "2306256", text: "Horizonte - CE" },
  { id: "2305233", text: "Eusébio - CE" },
  { id: "2307304", text: "Iguatu - CE" },
  
  // Pernambuco
  { id: "2611606", text: "Recife - PE" },
  { id: "2607901", text: "Jaboatão dos Guararapes - PE" },
  { id: "2605459", text: "Garanhuns - PE" },
  { id: "2613701", text: "Vitória de Santo Antão - PE" },
  { id: "2604106", text: "Caruaru - PE" },
  { id: "2608008", text: "Jaboatão dos Guararapes - PE" },
  { id: "2614600", text: "Vitória de Santo Antão - PE" },
  
  // Goiás
  { id: "5208707", text: "Goiânia - GO" },
  { id: "5200050", text: "Aparecida de Goiânia - GO" },
  { id: "5201405", text: "Anápolis - GO" },
  { id: "5219753", text: "Trindade - GO" },
  { id: "5215900", text: "Senador Canedo - GO" },
  { id: "5203302", text: "Catalão - GO" },
  { id: "5205497", text: "Formosa - GO" },
  
  // Amazonas
  { id: "1302603", text: "Manaus - AM" },
  { id: "1303957", text: "Parintins - AM" },
  { id: "1303809", text: "Itacoatiara - AM" },
  { id: "1301308", text: "Coari - AM" },
  { id: "1305201", text: "Tabatinga - AM" },
  
  // Pará
  { id: "1501402", text: "Belém - PA" },
  { id: "1500800", text: "Ananindeua - PA" },
  { id: "1503606", text: "Marabá - PA" },
  { id: "1506807", text: "Santarém - PA" },
  { id: "1504703", text: "Parauapebas - PA" },
  { id: "1505502", text: "Redenção - PA" },
  
  // Maranhão
  { id: "2111300", text: "São Luís - MA" },
  { id: "2108702", text: "Imperatriz - MA" },
  { id: "2104800", text: "Caxias - MA" },
  { id: "2105500", text: "Codó - MA" },
  { id: "2110104", text: "São José de Ribamar - MA" },
  
  // Alagoas
  { id: "2704302", text: "Maceió - AL" },
  { id: "2700300", text: "Arapiraca - AL" },
  { id: "2701001", text: "Campina Grande - AL" },
  
  // Sergipe
  { id: "2800308", text: "Aracaju - SE" },
  { id: "2804003", text: "Itabaiana - SE" },
  { id: "2807105", text: "São Cristóvão - SE" },
  
  // Paraíba
  { id: "2507507", text: "João Pessoa - PB" },
  { id: "2504009", text: "Campina Grande - PB" },
  { id: "2505501", text: "Guarabira - PB" },
  
  // Rio Grande do Norte
  { id: "2408102", text: "Natal - RN" },
  { id: "2407805", text: "Mossoró - RN" },
  { id: "2403251", text: "Ceará-Mirim - RN" },
  
  // Piauí
  { id: "2211001", text: "Teresina - PI" },
  { id: "2211100", text: "Timon - PI" },
  { id: "2205011", text: "Parnaíba - PI" },
  
  // Mato Grosso
  { id: "5103403", text: "Cuiabá - MT" },
  { id: "5108402", text: "Várzea Grande - MT" },
  { id: "5101803", text: "Cáceres - MT" },
  
  // Mato Grosso do Sul
  { id: "5002704", text: "Campo Grande - MS" },
  { id: "5001102", text: "Aquidauana - MS" },
  { id: "5004809", text: "Dourados - MS" },
  
  // Espírito Santo
  { id: "3205309", text: "Vitória - ES" },
  { id: "3205200", text: "Vila Velha - ES" },
  { id: "3202207", text: "Guarapari - ES" },
  { id: "3203205", text: "Linhares - ES" },
  
  // Acre
  { id: "1200401", text: "Rio Branco - AC" },
  { id: "1200104", text: "Cruzeiro do Sul - AC" },
  
  // Amapá
  { id: "1600303", text: "Macapá - AP" },
  { id: "1600808", text: "Santana - AP" },
  
  // Roraima
  { id: "1400100", text: "Boa Vista - RR" },
  { id: "1400472", text: "Rorainópolis - RR" },
  
  // Rondônia
  { id: "1100205", text: "Porto Velho - RO" },
  { id: "1100122", text: "Ji-Paraná - RO" },
  
  // Tocantins
  { id: "1721000", text: "Palmas - TO" },
  { id: "1707009", text: "Gurupi - TO" }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const searchCities = async (
  query: string = "",
  page: number = 1
): Promise<CitySearchResponse> => {
  // Debug logs
  console.log('🔍 Searching cities with query:', query);
  console.log('📊 Total cities available:', brazilianCitiesData.length);
  
  // Simulate network delay
  await delay(300);

  const pageSize = 20;
  const normalizedQuery = query
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Remove accents

  console.log('🔤 Normalized query:', normalizedQuery);

  // Filter cities based on query
  const filtered = query.trim().length < 2 
    ? brazilianCitiesData // Return all cities if query is too short
    : brazilianCitiesData.filter(city => {
        const normalizedCity = city.text
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
        const matches = normalizedCity.includes(normalizedQuery);
        if (matches) {
          console.log('✅ Match found:', city.text);
        }
        return matches;
      });

  console.log('🎯 Filtered results count:', filtered.length);
  console.log('🏙️ First few matches:', filtered.slice(0, 5).map(c => c.text));

  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);
  const hasMore = start + pageSize < filtered.length;

  return {
    items,
    hasMore
  };
};