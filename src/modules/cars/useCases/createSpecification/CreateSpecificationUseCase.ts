import { ISpecificationsRepository } from "../../repositories/implementations/ISpecificationsRepository";

interface IRequest {
	name: string;
	description: string;
}

class CreateSpecificationCaseUse {
	constructor(private repository: ISpecificationsRepository) {}

	execute({ name, description }: IRequest): void {
		const specificationAlreadyExists = this.repository.findByName(name);

		if (specificationAlreadyExists) {
			throw new Error("Specification already exists!");
		}

		this.repository.create({ name, description });
	}
}

export { CreateSpecificationCaseUse };
