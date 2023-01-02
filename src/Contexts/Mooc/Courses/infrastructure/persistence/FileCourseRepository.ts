import { deserialize, serialize } from "v8";
import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";
import fs from 'fs';

export class FileCourseRepository implements CourseRepository {
    private FILE_PATH = `${__dirname}/courses`

    async save(course: Course): Promise<void> {
        fs.promises.writeFile(this._filePath(course.id), serialize(course))
    }

    async search(courseId: string): Promise<Course> {
        const courseData = await fs.promises.readFile(this._filePath(courseId));
        const { id, name, duration } = deserialize(courseData);
        return new Course({ id, name, duration })
    }

    private _filePath(id: string) {
        return `${this.FILE_PATH}.${id}.repo`
    }

}