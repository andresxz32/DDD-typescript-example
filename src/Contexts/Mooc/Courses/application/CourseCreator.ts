import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';

export class CourseCreator {
  private _repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this._repository = repository;
  }

  async run(id: string, name: string, duration: string): Promise<void> {
    
    const course = new Course({ id, name, duration });

    return await this._repository.save(course);
  }
}
