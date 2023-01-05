import { CourseDuration } from "./CourseDuration";
import { CourseId } from "../../Shared/domain/Courses/CourseId";
import { CourseName } from "./CourseName";


export class Course {
  readonly id: CourseId;
  readonly name: CourseName;
  readonly duration: CourseDuration;

  constructor({ id, name, duration }: { id: CourseId, name: CourseName; duration: CourseDuration; }) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }

  static fromPrimitives(plainData: {
    id: string;
    name: string;
    duration: number;
  }): Course {
    return new Course({
      id: new CourseId(plainData.id),
      name: new CourseName(plainData.name),
      duration: new CourseDuration(plainData.duration)
    });
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value,
      duration: this.duration.value
    };
  }
}
