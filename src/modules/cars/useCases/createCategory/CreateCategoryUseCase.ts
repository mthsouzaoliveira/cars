import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryUseCase {
	constructor(private repository: ICategoriesRepository) {}

	execute({ name, description }: IRequest): void {
		const categoryAlreadyExists = this.repository.findByName(name);

		if (categoryAlreadyExists) {
			throw new Error("Category already exists!");
		}

		this.repository.create({ name, description });
	}
}

export { CreateCategoryUseCase };
