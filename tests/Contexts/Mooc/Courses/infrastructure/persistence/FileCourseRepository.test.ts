import { Course } from "../../../../../../src/Contexts/Mooc/Courses/domain/Course";
import { FileCourseRepository } from "../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository";
import { Uuid } from "../../../../../../src/Contexts/Shared/domain/value-object/Uuid";

describe('Save Course',() =>{
    it('should save a course',async () =>{
        const repository = new FileCourseRepository();
        
        const course = new Course({"id":new Uuid("56971a7d-60cf-4777-99fc-47c3ca1d7ec8"),"name":"","duration":""});

        await repository.save(course);

    })
})