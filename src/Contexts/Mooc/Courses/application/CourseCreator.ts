import { Uuid } from '../../../Shared/domain/value-object/Uuid';
import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseCreatorRequest } from './CourseCreatorRequest';

export class CourseCreator {

  constructor(
    private readonly _repository: CourseRepository
  ) {
  }

  async run(request: CourseCreatorRequest): Promise<void> {

    const course = new Course({
      id: new Uuid(request.id),
      name: request.name,
      duration: request.duration
    });

    return await this._repository.save(course);
  }
}
