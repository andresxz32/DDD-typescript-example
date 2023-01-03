import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { Uuid } from '../../../../../src/Contexts/Shared/domain/value-object/Uuid';


let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new CourseCreator(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {

    const id = new Uuid('56971a7d-60cf-4777-99fc-47c3ca1d7ec8');
    const name = 'some-name';
    const duration = 'some-duration';

    const course = new Course({ id: id, name, duration });

    await creator.run({ id: id.value, name, duration });

    repository.assertLastSavedCourseIs(course);
  });
});
