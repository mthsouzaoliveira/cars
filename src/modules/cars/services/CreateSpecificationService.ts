import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
	name: string;
	description: string;
}

class CreateSpecificationService {
	constructor(private repository: ISpecificationsRepository) {}

	execute({ name, description }: IRequest): void {
		const specificationAlreadyExists = this.repository.findByName(name);

		if (specificationAlreadyExists) {
			throw new Error("Specification already exists!");
		}

		this.repository.create({ name, description });
	}
}

export { CreateSpecificationService };
