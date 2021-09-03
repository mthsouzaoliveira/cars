import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryService {
	constructor(private repository: ICategoriesRepository) {
		this.repository = repository;
	}

	execute({ name, description }: IRequest): void {
		const categoryAlreadyExists = this.repository.findByName(name);

		if (categoryAlreadyExists) {
			throw new Error("Category already exists!");
		}

		this.repository.create({ name, description });
	}
}

export { CreateCategoryService };
