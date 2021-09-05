import { Specification } from "../model/Specification";
import {
	ISpecificationsRepository,
	ICreateSpecificationDTO,
} from "./implementations/ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
	private specifications: Specification[];
	private static INSTANCE: SpecificationRepository;

	private constructor() {
		this.specifications = [];
	}

	public static getInstance(): SpecificationRepository {
		if (!SpecificationRepository.INSTANCE) {
			SpecificationRepository.INSTANCE = new SpecificationRepository();
		}

		return SpecificationRepository.INSTANCE;
	}

	create({ name, description }: ICreateSpecificationDTO): void {
		const specification = new Specification();

		Object.assign(specification, {
			name,
			description,
		});

		this.specifications.push(specification);
	}

	findAll(): Specification[] {
		return this.specifications;
	}

	findByName(name: string): Specification {
		return this.specifications.find(
			(specification) => specification.name === name
		);
	}
}

export { SpecificationRepository };
