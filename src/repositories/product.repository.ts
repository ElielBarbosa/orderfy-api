import { IProductDTO } from "../entities/IProduct.js";
import { prisma } from "../prisma.js";

export class ProductRepository {
  async create(data: IProductDTO): Promise<void> {
    return prisma.product.create({ data });
  }
}