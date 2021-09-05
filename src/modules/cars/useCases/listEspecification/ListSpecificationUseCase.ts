import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/implementations/ISpecificationsRepository";

class ListSpecificationCaseUse {
	constructor(private repository: ISpecificationsRepository) {}
	execute(): Specification[] {
		return this.repository.findAll();
	}
}

export { ListSpecificationCaseUse };
