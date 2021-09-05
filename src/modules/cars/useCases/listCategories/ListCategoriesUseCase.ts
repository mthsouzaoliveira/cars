import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

class ListCategoriesUseCase {
	constructor(private repository: ICategoriesRepository) {}

	execute(): Category[] {
		return this.repository.findAll();
	}
}

export { ListCategoriesUseCase };
