export interface SearchResponse {
  data: {
    cep: string,
    cidade: string,
    produtosIndicados: {
      codigo: string,
      dataEstimadaEntrega: string,
      link: string,
      nome: string,
      preco: number,
      relevancia: number,
      urlImagem: string,
      valorFrete: number,
      valorTotal: number
    }[],
    termoBusca: string
  };
  errors: string[];
}
