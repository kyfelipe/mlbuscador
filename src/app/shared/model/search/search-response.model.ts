import { Product } from '../product/product.model';

export interface SearchResponse {
  data: {
    cep: string,
    cidade: string,
    produtosIndicados: Product[],
    termoBusca: string
  };
  errors: string[];
}
