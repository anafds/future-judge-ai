import cidadesRaw from './cidades-raw.json';

// Processar dados do JSON para criar uma lista de cidades no formato "Nome - UF"
const createCitiesList = () => {
  const cities: string[] = [];
  
  cidadesRaw.forEach((estado) => {
    const uf = estado.uf;
    estado.cidades.forEach((cidade) => {
      cities.push(`${cidade.nome} - ${uf}`);
    });
  });
  
  // Ordenar alfabeticamente
  return cities.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }));
};

export const brazilianCities = createCitiesList();

// Função para filtrar cidades com limite
export const filterCities = (searchTerm: string, limit: number = 20): string[] => {
  if (!searchTerm.trim()) {
    return brazilianCities.slice(0, limit);
  }
  
  const normalizedSearch = searchTerm
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Remove acentos
    
  const filtered = brazilianCities.filter(city => {
    const normalizedCity = city
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    return normalizedCity.includes(normalizedSearch);
  });
  
  return filtered.slice(0, limit);
};